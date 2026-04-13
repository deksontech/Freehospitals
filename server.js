const http = require("node:http");
const fsSync = require("node:fs");
const fs = require("node:fs/promises");
const path = require("node:path");
const { randomBytes, randomUUID, scryptSync, timingSafeEqual } = require("node:crypto");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const submissionsFile = path.join(dataDir, "contact-requests.json");
const doctorsFile = path.join(dataDir, "doctors.json");
const hospitalsFile = path.join(dataDir, "hospitals.json");
const usersFile = path.join(dataDir, "users.json");
const analyticsFile = path.join(dataDir, "analytics-events.json");

loadEnvFile();

const port = Number(process.env.PORT || 3000);
const contactTo = process.env.CONTACT_TO || "vishal@deksontech.com";
const adminPassword = process.env.ADMIN_PASSWORD || "change-this-admin-password";
const adminSessions = new Set();
const userSessions = new Map();
const contactRateLimit = new Map();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function loadEnvFile() {
  const envPath = path.join(rootDir, ".env");

  if (!fsSync.existsSync(envPath)) return;

  const lines = fsSync.readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    const separator = trimmed.indexOf("=");
    if (separator === -1) return;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    if (key && !process.env[key]) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  });
}

function jsonResponse(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((cookie) => cookie.trim())
    .filter(Boolean)
    .reduce((cookies, cookie) => {
      const separator = cookie.indexOf("=");
      if (separator === -1) return cookies;
      cookies[cookie.slice(0, separator)] = decodeURIComponent(cookie.slice(separator + 1));
      return cookies;
    }, {});
}

function isAdmin(req) {
  const sessionId = parseCookies(req).freehospitals_admin || parseCookies(req).carefind_admin;
  return Boolean(sessionId && adminSessions.has(sessionId));
}

function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  const hash = scryptSync(String(password), salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedValue) {
  const [salt, storedHash] = String(storedValue || "").split(":");
  if (!salt || !storedHash) return false;
  const candidateHash = hashPassword(password, salt).split(":")[1];
  return safeCompare(candidateHash, storedHash);
}

function redirect(res, location) {
  res.writeHead(302, { Location: location });
  res.end();
}

function safeCompare(left, right) {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

function requireAdmin(req, res) {
  if (isAdmin(req)) return true;
  jsonResponse(res, 401, { ok: false, message: "Admin login required." });
  return false;
}

function safeStaticPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = path.normalize(path.join(rootDir, requestedPath));
  return filePath.startsWith(rootDir) ? filePath : null;
}

async function readJsonBody(req) {
  let body = "";

  for await (const chunk of req) {
    body += chunk;
    if (body.length > 100_000) {
      throw new Error("Request body is too large.");
    }
  }

  return JSON.parse(body || "{}");
}

function routePath(req) {
  return new URL(req.url, "http://localhost").pathname;
}

function validateContact(payload) {
  const required = ["doctorName", "doctorSpecialty", "patientName", "patientPhone", "patientEmail", "patientCity", "patientMessage"];
  const missing = required.filter((field) => !String(payload[field] || "").trim());

  if (missing.length > 0) {
    return `Missing required fields: ${missing.join(", ")}`;
  }

  if (!String(payload.patientEmail).includes("@")) {
    return "Please provide a valid email address.";
  }

  const phoneDigits = String(payload.patientPhone || "").replace(/\D/g, "");
  const indianMobile =
    phoneDigits.startsWith("91") && phoneDigits.length === 12
      ? phoneDigits.slice(2)
      : phoneDigits.startsWith("0") && phoneDigits.length === 11
        ? phoneDigits.slice(1)
        : phoneDigits;
  if (!/^[6-9]\d{9}$/.test(indianMobile)) {
    return "Please provide a valid 10 digit Indian mobile number.";
  }

  if (String(payload.website || "").trim()) {
    return "The request could not be submitted.";
  }

  return "";
}

function rateLimitContact(req) {
  const ip = req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;
  const bucket = (contactRateLimit.get(ip) || []).filter((timestamp) => now - timestamp < windowMs);

  if (bucket.length >= maxRequests) {
    contactRateLimit.set(ip, bucket);
    return "Too many requests. Please wait a few minutes or call the care desk.";
  }

  bucket.push(now);
  contactRateLimit.set(ip, bucket);
  return "";
}

async function storeSubmission(submission) {
  await fs.mkdir(dataDir, { recursive: true });

  let existing = [];
  try {
    existing = JSON.parse(await fs.readFile(submissionsFile, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  existing.unshift(submission);
  await fs.writeFile(submissionsFile, `${JSON.stringify(existing, null, 2)}\n`);
}

async function readDoctors() {
  try {
    const doctors = JSON.parse(await fs.readFile(doctorsFile, "utf8"));
    return Array.isArray(doctors) ? doctors.map(normalizeDoctor) : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

function normalizeHospital(hospital, index) {
  return {
    id: Number(hospital.id) || Date.now() + index,
    name: String(hospital.name || "").trim(),
    type: String(hospital.type || "Hospital").trim(),
    state: String(hospital.state || "").trim(),
    city: String(hospital.city || "").trim(),
    address: String(hospital.address || "").trim(),
    specialties: normalizeList(hospital.specialties),
    services: normalizeList(hospital.services),
    phone: String(hospital.phone || "").trim(),
    email: String(hospital.email || "").trim(),
    website: String(hospital.website || "").trim(),
    mapUrl: String(hospital.mapUrl || "").trim(),
    description: String(hospital.description || "").trim(),
    verified: Boolean(hospital.verified),
    published: hospital.published !== false,
    image: String(hospital.image || "").trim(),
  };
}

async function readHospitals() {
  try {
    const hospitals = JSON.parse(await fs.readFile(hospitalsFile, "utf8"));
    return Array.isArray(hospitals) ? hospitals.map(normalizeHospital) : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function readSubmissions() {
  try {
    const submissions = JSON.parse(await fs.readFile(submissionsFile, "utf8"));
    return Array.isArray(submissions) ? submissions : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function readAnalyticsEvents() {
  try {
    const events = JSON.parse(await fs.readFile(analyticsFile, "utf8"));
    return Array.isArray(events) ? events : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function storeAnalyticsEvent(event) {
  await fs.mkdir(dataDir, { recursive: true });
  const existing = await readAnalyticsEvents();
  existing.unshift(event);
  await fs.writeFile(analyticsFile, `${JSON.stringify(existing.slice(0, 1000), null, 2)}\n`);
}

function summarizeEvents(events) {
  const counts = events.reduce((summary, event) => {
    summary[event.type] = (summary[event.type] || 0) + 1;
    return summary;
  }, {});
  const feedbackYes = events.filter((event) => event.type === "feedback" && event.details?.value === "yes").length;
  const feedbackNo = events.filter((event) => event.type === "feedback" && event.details?.value === "no").length;
  return {
    total: events.length,
    callClicks: counts.call_click || 0,
    whatsappClicks: counts.whatsapp_click || 0,
    profileViews: counts.view_profile || 0,
    requestClicks: counts.request_click || 0,
    wizardSubmits: counts.wizard_submit || 0,
    feedbackYes,
    feedbackNo,
    recent: events.slice(0, 12),
  };
}

async function readUsers() {
  try {
    const users = JSON.parse(await fs.readFile(usersFile, "utf8"));
    return Array.isArray(users) ? users : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function saveUsers(users) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(usersFile, `${JSON.stringify(users, null, 2)}\n`);
}

function normalizeList(value) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeDoctor(doctor, index) {
  const id = Number(doctor.id) || Date.now() + index;
  const practiceType = String(doctor.practiceType || (doctor.hospitalName ? "Hospital Affiliated" : "Private Clinic")).trim();

  return {
    id,
    name: String(doctor.name || "").trim(),
    specialty: String(doctor.specialty || "").trim(),
    specialty_hi: String(doctor.specialty_hi || "").trim(),
    specialty_gu: String(doctor.specialty_gu || "").trim(),
    practiceType,
    hospitalName: practiceType === "Hospital Affiliated" ? String(doctor.hospitalName || "").trim() : "",
    state: String(doctor.state || "").trim(),
    city: String(doctor.city || "").trim(),
    rating: Math.min(5, Math.max(0, Number(doctor.rating) || 4.5)),
    reviews: Math.max(0, Math.round(Number(doctor.reviews) || 0)),
    availability: String(doctor.availability || "Today").trim(),
    timeOfDay: String(doctor.timeOfDay || "Morning").trim(),
    nextSlot: String(doctor.nextSlot || "").trim(),
    experience: Math.max(0, Math.round(Number(doctor.experience) || 0)),
    visits: normalizeList(doctor.visits),
    languages: normalizeList(doctor.languages),
    services: normalizeList(doctor.services),
    services_hi: normalizeList(doctor.services_hi),
    services_gu: normalizeList(doctor.services_gu),
    education: String(doctor.education || "").trim(),
    registrationNumber: String(doctor.registrationNumber || "").trim(),
    yearsVerified: Math.max(0, Math.round(Number(doctor.yearsVerified) || 0)),
    verified: doctor.verified !== false,
    documentsChecked: Boolean(doctor.documentsChecked),
    address: String(doctor.address || "").trim(),
    mapUrl: String(doctor.mapUrl || "").trim(),
    image: String(doctor.image || "").trim(),
    featured: Boolean(doctor.featured),
    published: doctor.published !== false,
    bio: String(doctor.bio || "").trim(),
    bio_hi: String(doctor.bio_hi || "").trim(),
    bio_gu: String(doctor.bio_gu || "").trim(),
  };
}

function validateDoctor(doctor, index) {
  const required = ["name", "specialty", "practiceType", "state", "city", "availability", "nextSlot", "bio"];
  const missing = required.filter((field) => !String(doctor[field] || "").trim());

  if (missing.length > 0) {
    return `Doctor ${index + 1} is missing: ${missing.join(", ")}`;
  }

  if (doctor.practiceType === "Hospital Affiliated" && !String(doctor.hospitalName || "").trim()) {
    return `Doctor ${index + 1} needs a hospital name or should be set to Private Clinic.`;
  }

  if (normalizeList(doctor.visits).length === 0) {
    return `Doctor ${index + 1} needs at least one visit type.`;
  }

  if (normalizeList(doctor.languages).length === 0) {
    return `Doctor ${index + 1} needs at least one language.`;
  }

  return "";
}

async function handleDoctorsGet(res) {
  try {
    jsonResponse(res, 200, { ok: true, doctors: await readDoctors() });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not load doctors.", detail: error.message });
  }
}

async function handleHospitalsGet(res) {
  try {
    jsonResponse(res, 200, { ok: true, hospitals: await readHospitals() });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not load hospitals.", detail: error.message });
  }
}

function validateHospital(hospital, index) {
  const required = ["name", "type", "state", "city", "description"];
  const missing = required.filter((field) => !String(hospital[field] || "").trim());
  return missing.length ? `Hospital ${index + 1} is missing: ${missing.join(", ")}` : "";
}

async function handleHospitalsSave(req, res) {
  try {
    const payload = await readJsonBody(req);
    const hospitals = Array.isArray(payload.hospitals) ? payload.hospitals : [];
    const validationError = hospitals.map(validateHospital).find(Boolean);
    if (validationError) {
      jsonResponse(res, 400, { ok: false, message: validationError });
      return;
    }
    const normalizedHospitals = hospitals.map(normalizeHospital);
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(hospitalsFile, `${JSON.stringify(normalizedHospitals, null, 2)}\n`);
    jsonResponse(res, 200, { ok: true, hospitals: normalizedHospitals, message: "Hospital list saved." });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not save hospitals.", detail: error.message });
  }
}

async function handleSitemap(res) {
  try {
    const doctors = await readDoctors();
    const hospitals = await readHospitals();
    const urls = [
      "http://localhost:3000/",
      "http://localhost:3000/hospitals.html",
      "http://localhost:3000/privacy.html",
      "http://localhost:3000/terms.html",
      ...["", "/hi", "/gu"].flatMap((prefix) =>
        doctors.map((doctor) => {
          const specialty = String(doctor.specialty || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          const city = String(doctor.city || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          return `http://localhost:3000${prefix}/doctors/${specialty}/${city}`;
        }),
      ),
      ...hospitals.map((hospital) => `http://localhost:3000/hospitals.html#${String(hospital.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`),
    ];
    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((url) => `  <url><loc>${url}</loc></url>`)
      .join("\n")}\n</urlset>\n`;
    res.writeHead(200, { "Content-Type": "application/xml; charset=utf-8" });
    res.end(body);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Could not generate sitemap");
  }
}

async function handleAdminSummary(res) {
  try {
    const doctors = await readDoctors();
    const submissions = await readSubmissions();
    const analyticsEvents = await readAnalyticsEvents();
    jsonResponse(res, 200, {
      ok: true,
      summary: {
        doctors: doctors.length,
        specialties: new Set(doctors.map((doctor) => doctor.specialty)).size,
        states: new Set(doctors.map((doctor) => doctor.state)).size,
        requests: submissions.length,
      },
      submissions,
      analytics: summarizeEvents(analyticsEvents),
    });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not load admin summary.", detail: error.message });
  }
}

async function handleTrack(req, res) {
  try {
    const payload = await readJsonBody(req);
    const allowedTypes = new Set([
      "call_click",
      "whatsapp_click",
      "view_profile",
      "request_click",
      "request_submitted",
      "search_suggestion_click",
      "browse_city_click",
      "browse_specialty_click",
      "filter_drawer_open",
      "wizard_toggle",
      "wizard_submit",
      "feedback",
    ]);
    const type = String(payload.type || "").trim();
    if (!allowedTypes.has(type)) {
      jsonResponse(res, 400, { ok: false, message: "Unknown event type." });
      return;
    }

    await storeAnalyticsEvent({
      id: randomUUID(),
      type,
      details: typeof payload.details === "object" && payload.details ? payload.details : {},
      path: String(payload.path || "").slice(0, 200),
      language: String(payload.language || "").slice(0, 10),
      createdAt: new Date().toISOString(),
    });
    jsonResponse(res, 200, { ok: true });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not track event.", detail: error.message });
  }
}

async function handleAdminLogin(req, res) {
  try {
    const payload = await readJsonBody(req);

    if (!safeCompare(payload.password || "", adminPassword)) {
      jsonResponse(res, 401, { ok: false, message: "Incorrect admin password." });
      return;
    }

    const sessionId = randomBytes(32).toString("hex");
    adminSessions.add(sessionId);
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Set-Cookie": `freehospitals_admin=${sessionId}; HttpOnly; Path=/; SameSite=Lax; Max-Age=28800`,
    });
    res.end(JSON.stringify({ ok: true, message: "Logged in." }));
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not log in.", detail: error.message });
  }
}

function handleAdminLogout(req, res) {
  const sessionId = parseCookies(req).freehospitals_admin || parseCookies(req).carefind_admin;
  if (sessionId) adminSessions.delete(sessionId);
  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Set-Cookie": "freehospitals_admin=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0",
  });
  res.end(JSON.stringify({ ok: true, message: "Logged out." }));
}

async function handleUserLoginOrSignup(req, res) {
  try {
    const payload = await readJsonBody(req);
    const email = String(payload.email || "").trim().toLowerCase();
    const password = String(payload.password || "");
    const name = String(payload.name || "").trim();
    const phone = String(payload.phone || "").trim();

    if (!email.includes("@") || password.length < 6) {
      jsonResponse(res, 400, { ok: false, message: "Enter a valid email and a password with at least 6 characters." });
      return;
    }

    const users = await readUsers();
    let user = users.find((item) => item.email === email);

    if (user && !verifyPassword(password, user.passwordHash)) {
      jsonResponse(res, 401, { ok: false, message: "Incorrect password for this email." });
      return;
    }

    if (!user) {
      user = {
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        name,
        email,
        phone,
        passwordHash: hashPassword(password),
      };
      users.push(user);
      await saveUsers(users);
    } else {
      user.name = name || user.name;
      user.phone = phone || user.phone;
      await saveUsers(users);
    }

    const sessionId = randomBytes(32).toString("hex");
    userSessions.set(sessionId, user.id);
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Set-Cookie": `freehospitals_user=${sessionId}; HttpOnly; Path=/; SameSite=Lax; Max-Age=2592000`,
    });
    res.end(JSON.stringify({ ok: true, user: { name: user.name, email: user.email, phone: user.phone } }));
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not complete login.", detail: error.message });
  }
}

async function handleUserMe(req, res) {
  const sessionId = parseCookies(req).freehospitals_user || parseCookies(req).carefind_user;
  const userId = sessionId && userSessions.get(sessionId);

  if (!userId) {
    jsonResponse(res, 401, { ok: false });
    return;
  }

  const user = (await readUsers()).find((item) => item.id === userId);
  if (!user) {
    jsonResponse(res, 401, { ok: false });
    return;
  }

  jsonResponse(res, 200, { ok: true, user: { name: user.name, email: user.email, phone: user.phone } });
}

async function handleDoctorsSave(req, res) {
  try {
    const payload = await readJsonBody(req);
    const doctors = Array.isArray(payload.doctors) ? payload.doctors : [];

    if (doctors.length === 0) {
      jsonResponse(res, 400, { ok: false, message: "Add at least one doctor before saving." });
      return;
    }

    const validationError = doctors.map(validateDoctor).find(Boolean);
    if (validationError) {
      jsonResponse(res, 400, { ok: false, message: validationError });
      return;
    }

    const normalizedDoctors = doctors.map(normalizeDoctor);
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(doctorsFile, `${JSON.stringify(normalizedDoctors, null, 2)}\n`);
    jsonResponse(res, 200, { ok: true, doctors: normalizedDoctors, message: "Doctor list saved." });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not save doctors.", detail: error.message });
  }
}

function emailBody(submission) {
  return [
    "New doctor contact request",
    "",
    `Doctor: ${submission.doctorName} - ${submission.doctorSpecialty}`,
    `Affiliation: ${submission.doctorAffiliation || "Not provided"}`,
    `Doctor location: ${submission.doctorCity}, ${submission.doctorState}`,
    `Patient name: ${submission.patientName}`,
    `Patient phone: ${submission.patientPhone}`,
    `Patient email: ${submission.patientEmail}`,
    `Patient city: ${submission.patientCity}`,
    `Patient age: ${submission.patientAge || "Not provided"}`,
    `Patient gender: ${submission.patientGender || "Not provided"}`,
    `Preferred contact: ${submission.preferredContact || "Phone call"}`,
    `Preferred time: ${submission.preferredTime || "Not provided"}`,
    `Source: ${submission.source || "Doctor contact form"}`,
    "",
    `Health concern: ${submission.patientMessage}`,
  ].join("\n");
}

async function sendViaResend(submission) {
  if (!process.env.RESEND_API_KEY) {
    return { sent: false, reason: "RESEND_API_KEY is not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Freehospitals <onboarding@resend.dev>",
      to: [contactTo],
      reply_to: submission.patientEmail,
      subject: `Doctor contact request for ${submission.doctorName}`,
      text: emailBody(submission),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Email provider rejected the request: ${details}`);
  }

  return { sent: true };
}

async function handleContact(req, res) {
  try {
    const payload = await readJsonBody(req);
    const rateLimitError = rateLimitContact(req);
    if (rateLimitError) {
      jsonResponse(res, 429, { ok: false, message: rateLimitError });
      return;
    }

    const validationError = validateContact(payload);

    if (validationError) {
      jsonResponse(res, 400, { ok: false, message: validationError });
      return;
    }

    const submission = {
      id: randomUUID(),
      status: "new",
      notes: "",
      createdAt: new Date().toISOString(),
      priority: String(payload.priority || "normal").trim(),
      assignedTo: String(payload.assignedTo || "").trim(),
      followUpDate: String(payload.followUpDate || "").trim(),
      followUpTime: String(payload.followUpTime || "").trim(),
      source: String(payload.source || "Doctor contact form").trim(),
      doctorName: String(payload.doctorName).trim(),
      doctorSpecialty: String(payload.doctorSpecialty).trim(),
      doctorAffiliation: String(payload.doctorAffiliation || "").trim(),
      doctorCity: String(payload.doctorCity || "").trim(),
      doctorState: String(payload.doctorState || "").trim(),
      patientName: String(payload.patientName).trim(),
      patientPhone: String(payload.patientPhone).trim(),
      patientEmail: String(payload.patientEmail).trim(),
      patientCity: String(payload.patientCity).trim(),
      patientAge: String(payload.patientAge || "").trim(),
      patientGender: String(payload.patientGender || "").trim(),
      preferredContact: String(payload.preferredContact || "Phone call").trim(),
      preferredTime: String(payload.preferredTime || "").trim(),
      patientMessage: String(payload.patientMessage).trim(),
    };

    await storeSubmission(submission);
    const email = await sendViaResend(submission);

    jsonResponse(res, 200, {
      ok: true,
      message: email.sent
        ? "Your request was sent successfully."
        : "Your request was saved. Email delivery will start after the backend email key is configured.",
      email,
    });
  } catch (error) {
    jsonResponse(res, 500, {
      ok: false,
      message: "The request could not be processed. Please try again.",
      detail: error.message,
    });
  }
}

async function handleRequestsSave(req, res) {
  try {
    const payload = await readJsonBody(req);
    const requests = Array.isArray(payload.requests) ? payload.requests : [];
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(submissionsFile, `${JSON.stringify(requests, null, 2)}\n`);
    jsonResponse(res, 200, { ok: true, requests, message: "Requests updated." });
  } catch (error) {
    jsonResponse(res, 500, { ok: false, message: "Could not update requests.", detail: error.message });
  }
}

async function serveStatic(req, res) {
  const pathname = routePath(req);
  const filePath = pathname.startsWith("/doctors/") || pathname.startsWith("/hi/doctors/") || pathname.startsWith("/gu/doctors/")
    ? path.join(rootDir, "index.html")
    : safeStaticPath(pathname);

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  const protectedFiles = new Set(["admin.html", "admin.js"]);
  if (protectedFiles.has(path.basename(filePath)) && !isAdmin(req)) {
    redirect(res, "/admin-login.html");
    return;
  }

  try {
    const content = await fs.readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server error");
  }
}

const server = http.createServer((req, res) => {
  const pathname = routePath(req);

  if (req.method === "POST" && pathname === "/api/admin/login") {
    handleAdminLogin(req, res);
    return;
  }

  if (req.method === "GET" && pathname === "/sitemap.xml") {
    handleSitemap(res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/users/login-or-signup") {
    handleUserLoginOrSignup(req, res);
    return;
  }

  if (req.method === "GET" && pathname === "/api/users/me") {
    handleUserMe(req, res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/admin/logout") {
    handleAdminLogout(req, res);
    return;
  }

  if (req.method === "GET" && pathname === "/api/admin/me") {
    jsonResponse(res, isAdmin(req) ? 200 : 401, { ok: isAdmin(req) });
    return;
  }

  if (req.method === "GET" && pathname === "/api/admin/summary") {
    if (!requireAdmin(req, res)) return;
    handleAdminSummary(res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/admin/requests") {
    if (!requireAdmin(req, res)) return;
    handleRequestsSave(req, res);
    return;
  }

  if (req.method === "GET" && pathname === "/api/doctors") {
    handleDoctorsGet(res);
    return;
  }

  if (req.method === "GET" && pathname === "/api/hospitals") {
    handleHospitalsGet(res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/doctors") {
    if (!requireAdmin(req, res)) return;
    handleDoctorsSave(req, res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/hospitals") {
    if (!requireAdmin(req, res)) return;
    handleHospitalsSave(req, res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/contact") {
    handleContact(req, res);
    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    serveStatic(req, res);
    return;
  }

  jsonResponse(res, 405, { ok: false, message: "Method not allowed" });
});

server.listen(port, () => {
  console.log(`Freehospitals is running at http://localhost:${port}`);
});
