const stateCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi", "Solan", "Kullu"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Nainital"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Andaman and Nicobar Islands": ["Port Blair", "Mayabunder", "Diglipur", "Rangat", "Car Nicobar"],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"],
  Ladakh: ["Leh", "Kargil", "Nubra", "Zanskar"],
  Lakshadweep: ["Kavaratti", "Agatti", "Minicoy", "Amini"],
  Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
};

let doctors = [];
let selectedId = null;
let requests = [];
const requestFilters = {
  search: "",
  status: "all",
  priority: "all",
};

const adminDoctorList = document.querySelector("#adminDoctorList");
const doctorForm = document.querySelector("#doctorForm");
const editorTitle = document.querySelector("#editorTitle");
const doctorState = document.querySelector("#doctorState");
const doctorCity = document.querySelector("#doctorCity");
const adminMessage = document.querySelector("#adminMessage");
const deleteDoctor = document.querySelector("#deleteDoctor");
const newDoctor = document.querySelector("#newDoctor");
const saveDoctors = document.querySelector("#saveDoctors");
const saveDoctorsTop = document.querySelector("#saveDoctorsTop");
const logoutAdmin = document.querySelector("#logoutAdmin");
const doctorCount = document.querySelector("#doctorCount");
const specialtyCount = document.querySelector("#specialtyCount");
const stateCount = document.querySelector("#stateCount");
const requestCount = document.querySelector("#requestCount");
const todayRequestCount = document.querySelector("#todayRequestCount");
const topCityCount = document.querySelector("#topCityCount");
const topSpecialtyCount = document.querySelector("#topSpecialtyCount");
const requestList = document.querySelector("#requestList");
const requestSearch = document.querySelector("#requestSearch");
const requestStatusFilter = document.querySelector("#requestStatusFilter");
const requestPriorityFilter = document.querySelector("#requestPriorityFilter");
const newRequestCount = document.querySelector("#newRequestCount");
const followUpRequestCount = document.querySelector("#followUpRequestCount");
const highPriorityRequestCount = document.querySelector("#highPriorityRequestCount");
const doctorImageUpload = document.querySelector("#doctorImageUpload");
const adminImagePreview = document.querySelector("#adminImagePreview");
const doctorPracticeType = document.querySelector("#doctorPracticeType");
const doctorHospitalName = document.querySelector("#doctorHospitalName");
const adminDoctorTable = document.querySelector("#adminDoctorTable");
const adminDoctorSearch = document.querySelector("#adminDoctorSearch");
const adminStatusFilter = document.querySelector("#adminStatusFilter");
const selectAllDoctors = document.querySelector("#selectAllDoctors");
const bulkAction = document.querySelector("#bulkAction");
const applyBulkAction = document.querySelector("#applyBulkAction");
const exportDoctorsCsv = document.querySelector("#exportDoctorsCsv");
const exportRequestsCsv = document.querySelector("#exportRequestsCsv");
const importDoctorsCsv = document.querySelector("#importDoctorsCsv");
const downloadBackup = document.querySelector("#downloadBackup");

function setMessage(message, type = "") {
  adminMessage.textContent = message;
  adminMessage.className = type ? `form-note ${type}` : "form-note";
}

function listFromText(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeRequest(request) {
  return {
    ...request,
    status: request.status || "new",
    priority: request.priority || "normal",
    assignedTo: request.assignedTo || "",
    followUpDate: request.followUpDate || "",
    followUpTime: request.followUpTime || "",
    source: request.source || "Doctor contact form",
    notes: request.notes || "",
  };
}

function fillSelect(select, values) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function updateCityOptions(cityValue = "") {
  const cities = stateCities[doctorState.value] || [];
  fillSelect(doctorCity, cities);
  doctorCity.value = cities.includes(cityValue) ? cityValue : cities[0] || "";
}

function blankDoctor() {
  return {
    id: Date.now(),
    name: "",
    specialty: "",
    specialty_hi: "",
    specialty_gu: "",
    practiceType: "Private Clinic",
    hospitalName: "",
    state: "Gujarat",
    city: "Ahmedabad",
    rating: 4.5,
    reviews: 0,
    availability: "Today",
    timeOfDay: "Morning",
    nextSlot: "",
    experience: 1,
    visits: ["Clinic"],
    languages: ["English", "Hindi"],
    services: [],
    services_hi: [],
    services_gu: [],
    education: "",
    registrationNumber: "",
    yearsVerified: 0,
    verified: true,
    documentsChecked: false,
    address: "",
    mapUrl: "",
    featured: false,
    published: true,
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
    bio: "",
    bio_hi: "",
    bio_gu: "",
  };
}

function doctorFromForm() {
  const formData = new FormData(doctorForm);
  return {
    id: Number(formData.get("id")) || Date.now(),
    name: String(formData.get("name") || "").trim(),
    specialty: String(formData.get("specialty") || "").trim(),
    specialty_hi: String(formData.get("specialty_hi") || "").trim(),
    specialty_gu: String(formData.get("specialty_gu") || "").trim(),
    practiceType: String(formData.get("practiceType") || "Private Clinic"),
    hospitalName: String(formData.get("hospitalName") || "").trim(),
    state: String(formData.get("state") || "").trim(),
    city: String(formData.get("city") || "").trim(),
    rating: Number(formData.get("rating") || 4.5),
    reviews: Number(formData.get("reviews") || 0),
    availability: String(formData.get("availability") || "Today"),
    timeOfDay: String(formData.get("timeOfDay") || "Morning"),
    nextSlot: String(formData.get("nextSlot") || "").trim(),
    experience: Number(formData.get("experience") || 0),
    visits: listFromText(formData.get("visits")),
    languages: listFromText(formData.get("languages")),
    services: listFromText(formData.get("services")),
    services_hi: listFromText(formData.get("services_hi")),
    services_gu: listFromText(formData.get("services_gu")),
    education: String(formData.get("education") || "").trim(),
    registrationNumber: String(formData.get("registrationNumber") || "").trim(),
    yearsVerified: Number(formData.get("yearsVerified") || 0),
    verified: formData.get("verified") === "on",
    documentsChecked: formData.get("documentsChecked") === "on",
    address: String(formData.get("address") || "").trim(),
    mapUrl: String(formData.get("mapUrl") || "").trim(),
    image: String(formData.get("image") || "").trim(),
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    bio: String(formData.get("bio") || "").trim(),
    bio_hi: String(formData.get("bio_hi") || "").trim(),
    bio_gu: String(formData.get("bio_gu") || "").trim(),
  };
}

function fillForm(doctor) {
  selectedId = doctor.id;
  const fields = doctorForm.elements;
  editorTitle.textContent = doctor.name ? `Edit ${doctor.name}` : "Add doctor";
  fields.id.value = doctor.id;
  fields.name.value = doctor.name;
  fields.specialty.value = doctor.specialty;
  fields.specialty_hi.value = doctor.specialty_hi || "";
  fields.specialty_gu.value = doctor.specialty_gu || "";
  fields.practiceType.value = doctor.practiceType || (doctor.hospitalName ? "Hospital Affiliated" : "Private Clinic");
  fields.hospitalName.value = doctor.hospitalName || "";
  updateHospitalField();
  doctorState.value = doctor.state;
  updateCityOptions(doctor.city);
  fields.rating.value = doctor.rating;
  fields.reviews.value = doctor.reviews;
  fields.availability.value = doctor.availability;
  fields.timeOfDay.value = doctor.timeOfDay || "Morning";
  fields.nextSlot.value = doctor.nextSlot;
  fields.experience.value = doctor.experience;
  fields.visits.value = doctor.visits.join(", ");
  fields.languages.value = doctor.languages.join(", ");
  fields.services.value = (doctor.services || []).join(", ");
  fields.services_hi.value = (doctor.services_hi || []).join(", ");
  fields.services_gu.value = (doctor.services_gu || []).join(", ");
  fields.education.value = doctor.education || "";
  fields.registrationNumber.value = doctor.registrationNumber || "";
  fields.yearsVerified.value = doctor.yearsVerified || 0;
  fields.address.value = doctor.address || "";
  fields.mapUrl.value = doctor.mapUrl || "";
  fields.image.value = doctor.image;
  fields.featured.checked = Boolean(doctor.featured);
  fields.published.checked = doctor.published !== false;
  fields.verified.checked = doctor.verified !== false;
  fields.documentsChecked.checked = Boolean(doctor.documentsChecked);
  fields.bio.value = doctor.bio;
  fields.bio_hi.value = doctor.bio_hi || "";
  fields.bio_gu.value = doctor.bio_gu || "";
  doctorImageUpload.value = "";
  adminImagePreview.src = doctor.image || "";
  adminImagePreview.hidden = !doctor.image;
  deleteDoctor.disabled = doctors.length === 0;
}

function updateHospitalField() {
  const isHospitalAffiliated = doctorPracticeType.value === "Hospital Affiliated";
  doctorHospitalName.disabled = !isHospitalAffiliated;
  doctorHospitalName.placeholder = isHospitalAffiliated ? "Apollo Hospital, Fortis, City Hospital" : "Private clinic only";
  if (!isHospitalAffiliated) doctorHospitalName.value = "";
}

function renderDoctorList() {
  adminDoctorList.innerHTML = doctors
    .map(
      (doctor) => `
        <button class="admin-doctor-button ${doctor.id === selectedId ? "active" : ""}" type="button" data-id="${doctor.id}">
          <strong>${doctor.name || "Untitled doctor"}</strong>
          <span>${doctor.specialty || "No specialty"} - ${doctor.city || "No city"}</span>
          <span>${profileCompleteness(doctor)}% complete</span>
        </button>
      `,
    )
    .join("");
}

function filteredAdminDoctors() {
  const term = adminDoctorSearch.value.trim().toLowerCase();
  const status = adminStatusFilter.value;

  return doctors.filter((doctor) => {
    const text = [doctor.name, doctor.specialty, doctor.city, doctor.state, doctor.hospitalName, doctor.practiceType]
      .join(" ")
      .toLowerCase();
    const statusMatch =
      status === "all" ||
      (status === "published" && doctor.published !== false) ||
      (status === "draft" && doctor.published === false) ||
      (status === "featured" && doctor.featured) ||
      (status === "hospital" && doctor.practiceType === "Hospital Affiliated") ||
      (status === "private" && doctor.practiceType === "Private Clinic");

    return (!term || text.includes(term)) && statusMatch;
  });
}

function profileCompleteness(doctor) {
  const checks = [
    doctor.name,
    doctor.specialty,
    doctor.practiceType,
    doctor.state,
    doctor.city,
    doctor.image,
    doctor.bio,
    doctor.education,
    doctor.registrationNumber,
    doctor.address,
    doctor.mapUrl,
    doctor.services?.length,
    doctor.languages?.length,
    doctor.visits?.length,
    doctor.verified,
    doctor.documentsChecked,
  ];
  const complete = checks.filter(Boolean).length;
  return Math.round((complete / checks.length) * 100);
}

function completenessClass(score) {
  if (score >= 85) return "complete-good";
  if (score >= 60) return "complete-ok";
  return "complete-low";
}

function renderDoctorTable() {
  adminDoctorTable.innerHTML = filteredAdminDoctors()
    .map(
      (doctor) => {
        const score = profileCompleteness(doctor);
        return `
        <tr>
          <td><input type="checkbox" data-row-select="${doctor.id}" /></td>
          <td><strong>${doctor.name || "Untitled doctor"}</strong>${doctor.featured ? "<span class=\"table-pill\">Featured</span>" : ""}<span class="table-pill ${completenessClass(score)}">${score}% complete</span></td>
          <td>${doctor.specialty || "-"}</td>
          <td>${doctor.city || "-"}, ${doctor.state || "-"}</td>
          <td>${doctor.practiceType === "Hospital Affiliated" ? doctor.hospitalName || "Hospital missing" : "Private clinic only"}</td>
          <td>${doctor.published === false ? "Draft" : "Published"}</td>
          <td>
            <button type="button" data-table-edit="${doctor.id}">Edit</button>
            <button type="button" data-table-duplicate="${doctor.id}">Duplicate</button>
          </td>
        </tr>
      `;
      },
    )
    .join("");
}

function mostCommon(values) {
  const counts = values.filter(Boolean).reduce((map, value) => {
    map.set(value, (map.get(value) || 0) + 1);
    return map;
  }, new Map());
  const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  return top ? `${top[0]} (${top[1]})` : "-";
}

function filteredRequests() {
  const term = requestFilters.search.trim().toLowerCase();

  return requests.filter((request) => {
    const priority = request.priority || "normal";
    const text = [
      request.patientName,
      request.patientPhone,
      request.patientEmail,
      request.patientCity,
      request.doctorName,
      request.doctorSpecialty,
      request.doctorAffiliation,
      request.patientMessage,
      request.assignedTo,
      request.source,
    ]
      .join(" ")
      .toLowerCase();
    const statusMatch = requestFilters.status === "all" || request.status === requestFilters.status;
    const priorityMatch = requestFilters.priority === "all" || priority === requestFilters.priority;

    return (!term || text.includes(term)) && statusMatch && priorityMatch;
  });
}

function requestActionLinks(request) {
  const digits = String(request.patientPhone || "").replace(/\D/g, "");
  const normalizedPhone =
    digits.startsWith("91") && digits.length === 12
      ? digits
      : digits.startsWith("0") && digits.length === 11
        ? `91${digits.slice(1)}`
        : digits.length === 10
          ? `91${digits}`
          : digits;
  const phone = normalizedPhone ? `+${normalizedPhone}` : "";
  const email = String(request.patientEmail || "");
  const subject = `Freehospitals follow-up for ${request.doctorName || "doctor request"}`;
  const body = [
    `Hello ${request.patientName || ""},`,
    "",
    `We are following up on your Freehospitals request for ${request.doctorName || "a doctor"}.`,
  ].join("\n");

  return `
    <div class="request-actions">
      ${phone ? `<a class="call-button" href="tel:${phone}">Call patient</a>` : ""}
      ${phone ? `<a class="whatsapp-button" href="https://wa.me/${phone.replace(/^\+/, "")}" target="_blank" rel="noreferrer">WhatsApp</a>` : ""}
      ${email ? `<a class="call-button" href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}">Email</a>` : ""}
    </div>
  `;
}

function whatsappTemplates(request) {
  const digits = String(request.patientPhone || "").replace(/\D/g, "");
  const normalizedPhone =
    digits.startsWith("91") && digits.length === 12
      ? digits
      : digits.startsWith("0") && digits.length === 11
        ? `91${digits.slice(1)}`
        : digits.length === 10
          ? `91${digits}`
          : digits;

  if (!normalizedPhone) return "";

  const name = request.patientName || "there";
  const doctor = request.doctorName || "the doctor";
  const specialty = request.doctorSpecialty || "specialist";
  const templates = [
    ["Doctor details shared", `Hello ${name}, this is Freehospitals. We are sharing details for ${doctor}, ${specialty}. Please let us know if you want help with the next step.`],
    ["Need more information", `Hello ${name}, this is Freehospitals. We need a little more information about your health concern so we can help connect you better.`],
    ["Appointment confirmation", `Hello ${name}, this is Freehospitals. Your appointment request for ${doctor} is being confirmed. We will update you shortly.`],
    ["Follow-up reminder", `Hello ${name}, this is Freehospitals following up on your doctor request. Please reply with a convenient time for a call.`],
  ];

  return `
    <div class="template-buttons" aria-label="WhatsApp templates">
      ${templates
        .map(([label, message]) => `<a href="https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`)
        .join("")}
    </div>
  `;
}

function requestAgeLabel(request) {
  if (!request.createdAt) return "New request";
  const created = new Date(request.createdAt).getTime();
  if (Number.isNaN(created)) return "New request";

  const diffMinutes = Math.max(0, Math.floor((Date.now() - created) / 60000));
  if (diffMinutes < 60) return `New for ${diffMinutes || 1} min`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `New for ${diffHours} hr`;

  const diffDays = Math.floor(diffHours / 24);
  return `${request.status === "closed" ? "Closed" : "Open"} for ${diffDays} day${diffDays === 1 ? "" : "s"}`;
}

function followUpLabel(request) {
  if (!request.followUpDate || request.status === "closed") return "";
  const today = new Date().toISOString().slice(0, 10);
  if (request.followUpDate < today) return "Follow-up overdue";
  if (request.followUpDate === today) return "Follow-up today";
  return `Follow-up ${request.followUpDate}${request.followUpTime ? ` at ${request.followUpTime}` : ""}`;
}

function renderRequestStats() {
  const today = new Date().toISOString().slice(0, 10);
  newRequestCount.textContent = requests.filter((request) => request.status === "new").length;
  followUpRequestCount.textContent = requests.filter((request) => request.followUpDate && request.followUpDate <= today && request.status !== "closed").length;
  highPriorityRequestCount.textContent = requests.filter((request) => request.priority === "high").length;
  todayRequestCount.textContent = requests.filter((request) => String(request.createdAt || "").slice(0, 10) === today).length;
  topCityCount.textContent = mostCommon(requests.map((request) => request.patientCity || request.doctorCity));
  topSpecialtyCount.textContent = mostCommon(requests.map((request) => request.doctorSpecialty));
}

function renderRequests() {
  const visibleRequests = filteredRequests();
  renderRequestStats();

  requestList.innerHTML =
    visibleRequests.length > 0
      ? visibleRequests
          .map(
            (request) => `
              <article class="request-item priority-${escapeHtml(request.priority)}" data-request-id="${escapeHtml(request.id)}">
                <div class="request-heading">
                  <div>
                    <strong>${escapeHtml(request.patientName)}</strong>
                    <span>${escapeHtml(request.doctorName)} - ${escapeHtml(request.doctorSpecialty || "Specialty not listed")}</span>
                  </div>
                  <div class="request-pills">
                    <span class="request-pill">${escapeHtml(request.priority || "normal")}</span>
                    <span class="request-pill">${escapeHtml(requestAgeLabel(request))}</span>
                    ${followUpLabel(request) ? `<span class="request-pill overdue-pill">${escapeHtml(followUpLabel(request))}</span>` : ""}
                  </div>
                </div>
                <span>${escapeHtml(request.doctorAffiliation || "Affiliation not provided")}</span>
                <span>${escapeHtml(request.patientPhone)} - ${escapeHtml(request.patientEmail || "Email not provided")}</span>
                <span>${escapeHtml(request.patientCity || "City not provided")} - ${escapeHtml(request.preferredContact || "Phone call")} - ${escapeHtml(request.preferredTime || "Any time")}</span>
                <span>Age: ${escapeHtml(request.patientAge || "Not provided")} - Gender: ${escapeHtml(request.patientGender || "Not provided")}</span>
                <span>Source: ${escapeHtml(request.source || "Doctor contact form")}</span>
                <p>${escapeHtml(request.patientMessage)}</p>
                <div class="request-controls">
                  <label>
                    <span>Status</span>
                    <select data-request-status>
                      <option value="new" ${request.status === "new" ? "selected" : ""}>New</option>
                      <option value="contacted" ${request.status === "contacted" ? "selected" : ""}>Contacted</option>
                      <option value="doctor shared" ${request.status === "doctor shared" ? "selected" : ""}>Doctor shared</option>
                      <option value="appointment fixed" ${request.status === "appointment fixed" ? "selected" : ""}>Appointment booked</option>
                      <option value="follow up" ${request.status === "follow up" ? "selected" : ""}>Follow up</option>
                      <option value="closed" ${request.status === "closed" ? "selected" : ""}>Closed</option>
                    </select>
                  </label>
                  <label>
                    <span>Priority</span>
                    <select data-request-priority>
                      <option value="high" ${request.priority === "high" ? "selected" : ""}>High</option>
                      <option value="normal" ${request.priority === "normal" ? "selected" : ""}>Normal</option>
                      <option value="low" ${request.priority === "low" ? "selected" : ""}>Low</option>
                    </select>
                  </label>
                  <label>
                    <span>Assigned to</span>
                    <input data-request-assigned type="text" value="${escapeHtml(request.assignedTo)}" placeholder="Team member" />
                  </label>
                  <label>
                    <span>Follow-up date</span>
                    <input data-request-followup type="date" value="${escapeHtml(request.followUpDate)}" />
                  </label>
                  <label>
                    <span>Follow-up time</span>
                    <input data-request-followup-time type="time" value="${escapeHtml(request.followUpTime)}" />
                  </label>
                </div>
                <div class="request-timeline" aria-label="Request timeline">
                  ${["new", "contacted", "doctor shared", "appointment fixed", "closed"]
                    .map((step) => `<span class="${request.status === step ? "active" : ""}">${step === "appointment fixed" ? "booked" : escapeHtml(step)}</span>`)
                    .join("")}
                </div>
                <textarea data-request-notes placeholder="Internal notes">${escapeHtml(request.notes)}</textarea>
                <div class="outcome-buttons" aria-label="Quick call outcomes">
                  <button type="button" data-outcome="no answer">No answer</button>
                  <button type="button" data-outcome="wrong number">Wrong number</button>
                  <button type="button" data-outcome="asked to call later">Call later</button>
                  <button type="button" data-outcome="doctor shared">Doctor shared</button>
                  <button type="button" data-outcome="appointment fixed">Appointment booked</button>
                </div>
                ${requestActionLinks(request)}
                ${whatsappTemplates(request)}
              </article>
            `,
          )
          .join("")
      : `<p class="form-note">No requests match these filters.</p>`;
}

function renderDashboard(summary = {}, submissions = []) {
  requests = submissions.map(normalizeRequest);
  doctorCount.textContent = summary.doctors || doctors.length;
  specialtyCount.textContent = summary.specialties || new Set(doctors.map((doctor) => doctor.specialty)).size;
  stateCount.textContent = summary.states || new Set(doctors.map((doctor) => doctor.state)).size;
  requestCount.textContent = summary.requests || requests.length || 0;
  renderRequests();
}

function duplicateDoctorWarning(doctor) {
  const duplicate = doctors.find((item) => {
    if (item.id === doctor.id) return false;
    const sameName = item.name.trim().toLowerCase() === doctor.name.trim().toLowerCase();
    const sameCity = item.city === doctor.city;
    const sameHospital =
      doctor.hospitalName &&
      item.hospitalName &&
      item.hospitalName.trim().toLowerCase() === doctor.hospitalName.trim().toLowerCase();
    return sameName || (sameCity && sameHospital);
  });

  return duplicate ? ` Possible duplicate: ${duplicate.name} in ${duplicate.city}.` : "";
}

function saveRequests() {
  fetch("/api/admin/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requests }),
  }).catch(() => {});
}

function applyFormToList() {
  const doctor = doctorFromForm();
  const index = doctors.findIndex((item) => item.id === doctor.id);
  const warning = duplicateDoctorWarning(doctor);

  if (index >= 0) doctors[index] = doctor;
  else doctors.unshift(doctor);

  selectedId = doctor.id;
  renderDoctorList();
  renderDoctorTable();
  fillForm(doctor);
  setMessage(`Applied to the list. Click Save changes to publish it.${warning}`, warning ? "error" : "success");
}

function saveDoctorList() {
  saveDoctors.disabled = true;
  saveDoctorsTop.disabled = true;
  setMessage("Saving doctor list...");

  fetch("/api/doctors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ doctors }),
  })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Save failed.");
      doctors = result.doctors;
      renderDoctorList();
      renderDoctorTable();
      renderDashboard(
        {
          doctors: doctors.length,
          specialties: new Set(doctors.map((doctor) => doctor.specialty)).size,
          states: new Set(doctors.map((doctor) => doctor.state)).size,
          requests: requests.length,
        },
        requests,
      );
      setMessage("Saved. Refresh the public site to see the latest doctors.", "success");
    })
    .catch((error) => {
      setMessage(`${error.message} Run the site with npm start before saving.`, "error");
    })
    .finally(() => {
      saveDoctors.disabled = false;
      saveDoctorsTop.disabled = false;
    });
}

function loadDashboard() {
  fetch("/api/admin/summary")
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Could not load dashboard.");
      renderDashboard(result.summary, result.submissions);
    })
    .catch(() => {
      renderDashboard();
    });
}

function loadDoctors() {
  fetch("/api/doctors")
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Could not load doctors.");
      doctors = result.doctors;
      selectedId = doctors[0]?.id || null;
      renderDoctorList();
      renderDoctorTable();
      fillForm(doctors[0] || blankDoctor());
      loadDashboard();
    })
    .catch((error) => {
      doctors = [];
      renderDoctorList();
      renderDoctorTable();
      fillForm(blankDoctor());
      setMessage(`${error.message} Open this page through npm start.`, "error");
    });
}

fillSelect(doctorState, Object.keys(stateCities).sort());
updateCityOptions();

doctorState.addEventListener("change", () => updateCityOptions());
doctorPracticeType.addEventListener("change", updateHospitalField);

doctorImageUpload.addEventListener("change", () => {
  const file = doctorImageUpload.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    doctorForm.elements.image.value = reader.result;
    adminImagePreview.src = reader.result;
    adminImagePreview.hidden = false;
    setMessage("Image loaded. Apply to list, then save changes.", "success");
  });
  reader.readAsDataURL(file);
});

adminDoctorList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return;

  const doctor = doctors.find((item) => item.id === Number(button.dataset.id));
  if (doctor) {
    fillForm(doctor);
    renderDoctorList();
  }
});

doctorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyFormToList();
});

newDoctor.addEventListener("click", () => {
  fillForm(blankDoctor());
  setMessage("Fill the profile, then apply it to the list.", "");
});

deleteDoctor.addEventListener("click", () => {
  if (!selectedId) return;

  doctors = doctors.filter((doctor) => doctor.id !== selectedId);
  selectedId = doctors[0]?.id || null;
  renderDoctorList();
  renderDoctorTable();
  fillForm(doctors[0] || blankDoctor());
  setMessage("Removed from the list. Click Save changes to publish it.", "success");
});

adminDoctorSearch.addEventListener("input", renderDoctorTable);
adminStatusFilter.addEventListener("change", renderDoctorTable);
selectAllDoctors.addEventListener("change", () => {
  adminDoctorTable.querySelectorAll("[data-row-select]").forEach((input) => {
    input.checked = selectAllDoctors.checked;
  });
});

adminDoctorTable.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-table-edit]");
  const duplicateButton = event.target.closest("[data-table-duplicate]");

  if (editButton) {
    const doctor = doctors.find((item) => item.id === Number(editButton.dataset.tableEdit));
    if (doctor) {
      fillForm(doctor);
      renderDoctorList();
      document.querySelector("#doctorEditor").scrollIntoView({ behavior: "smooth" });
    }
  }

  if (duplicateButton) {
    const doctor = doctors.find((item) => item.id === Number(duplicateButton.dataset.tableDuplicate));
    if (doctor) {
      const copy = { ...doctor, id: Date.now(), name: `${doctor.name} Copy`, published: false, featured: false };
      doctors.unshift(copy);
      selectedId = copy.id;
      renderDoctorList();
      renderDoctorTable();
      fillForm(copy);
      setMessage("Duplicated as a draft. Review it, then save changes.", "success");
    }
  }
});

applyBulkAction.addEventListener("click", () => {
  const ids = [...adminDoctorTable.querySelectorAll("[data-row-select]:checked")].map((input) => Number(input.dataset.rowSelect));
  if (!ids.length || !bulkAction.value) return;

  doctors = doctors.filter((doctor) => !(bulkAction.value === "delete" && ids.includes(doctor.id)));
  doctors.forEach((doctor) => {
    if (!ids.includes(doctor.id)) return;
    if (bulkAction.value === "publish") doctor.published = true;
    if (bulkAction.value === "unpublish") doctor.published = false;
    if (bulkAction.value === "feature") doctor.featured = true;
    if (bulkAction.value === "unfeature") doctor.featured = false;
  });
  selectedId = doctors[0]?.id || null;
  renderDoctorList();
  renderDoctorTable();
  fillForm(doctors[0] || blankDoctor());
  setMessage("Bulk action applied. Click Save changes to publish it.", "success");
});

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

exportDoctorsCsv.addEventListener("click", () => {
  const columns = ["name", "specialty", "specialty_hi", "specialty_gu", "practiceType", "hospitalName", "state", "city", "availability", "timeOfDay", "nextSlot", "experience", "languages", "visits", "services", "services_hi", "services_gu", "education", "registrationNumber", "yearsVerified", "verified", "documentsChecked", "published", "featured", "bio", "bio_hi", "bio_gu"];
  const rows = doctors.map((doctor) =>
    columns
      .map((column) => csvEscape(Array.isArray(doctor[column]) ? doctor[column].join(", ") : doctor[column]))
      .join(","),
  );
  downloadFile("freehospitals-doctors.csv", `${columns.join(",")}\n${rows.join("\n")}\n`, "text/csv");
});

downloadBackup.addEventListener("click", () => {
  downloadFile("freehospitals-doctors-backup.json", `${JSON.stringify(doctors, null, 2)}\n`, "application/json");
});

exportRequestsCsv.addEventListener("click", () => {
  const columns = [
    "createdAt",
    "status",
    "priority",
    "assignedTo",
    "followUpDate",
    "followUpTime",
    "patientName",
    "patientPhone",
    "patientEmail",
    "patientCity",
    "doctorName",
    "doctorSpecialty",
    "doctorAffiliation",
    "preferredContact",
    "preferredTime",
    "patientMessage",
    "notes",
    "source",
  ];
  const rows = filteredRequests().map((request) => columns.map((column) => csvEscape(request[column])).join(","));
  downloadFile("freehospitals-requests.csv", `${columns.join(",")}\n${rows.join("\n")}\n`, "text/csv");
});

importDoctorsCsv.addEventListener("change", () => {
  const file = importDoctorsCsv.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const lines = String(reader.result).split(/\r?\n/).filter(Boolean);
    const headers = lines.shift().split(",").map((item) => item.replace(/^"|"$/g, ""));
    const imported = lines.map((line) => {
      const values = line.match(/("([^"]|"")*"|[^,]+)/g) || [];
      const row = Object.fromEntries(headers.map((header, index) => [header, (values[index] || "").replace(/^"|"$/g, "").replace(/""/g, '"')]));
      return {
        ...blankDoctor(),
        id: Date.now() + Math.floor(Math.random() * 100000),
        ...row,
        rating: Number(row.rating || 4.5),
        reviews: Number(row.reviews || 0),
        experience: Number(row.experience || 1),
        languages: listFromText(row.languages),
        visits: listFromText(row.visits),
        services: listFromText(row.services),
        services_hi: listFromText(row.services_hi),
        services_gu: listFromText(row.services_gu),
        yearsVerified: Number(row.yearsVerified || 0),
        verified: row.verified !== "false",
        documentsChecked: row.documentsChecked === "true",
        published: row.published !== "false",
        featured: row.featured === "true",
      };
    });
    doctors = [...imported, ...doctors];
    renderDoctorList();
    renderDoctorTable();
    fillForm(doctors[0] || blankDoctor());
    setMessage("Imported doctors as new records. Click Save changes to publish them.", "success");
  });
  reader.readAsText(file);
});

saveDoctors.addEventListener("click", saveDoctorList);
saveDoctorsTop.addEventListener("click", saveDoctorList);
requestSearch.addEventListener("input", (event) => {
  requestFilters.search = event.target.value;
  renderRequests();
});
requestStatusFilter.addEventListener("change", (event) => {
  requestFilters.status = event.target.value;
  renderRequests();
});
requestPriorityFilter.addEventListener("change", (event) => {
  requestFilters.priority = event.target.value;
  renderRequests();
});
requestList.addEventListener("change", (event) => {
  const item = event.target.closest("[data-request-id]");
  if (!item) return;
  const request = requests.find((entry) => entry.id === item.dataset.requestId);
  if (!request) return;
  if (event.target.matches("[data-request-status]")) request.status = event.target.value;
  if (event.target.matches("[data-request-priority]")) request.priority = event.target.value;
  if (event.target.matches("[data-request-assigned]")) request.assignedTo = event.target.value;
  if (event.target.matches("[data-request-followup]")) request.followUpDate = event.target.value;
  if (event.target.matches("[data-request-followup-time]")) request.followUpTime = event.target.value;
  if (event.target.matches("[data-request-notes]")) request.notes = event.target.value;
  renderRequestStats();
  saveRequests();
});
requestList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-outcome]");
  if (!button) return;

  const item = event.target.closest("[data-request-id]");
  const request = requests.find((entry) => entry.id === item?.dataset.requestId);
  if (!request) return;

  const outcome = button.dataset.outcome;
  const now = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  const note = `[${now}] ${outcome}`;
  request.notes = request.notes ? `${request.notes}\n${note}` : note;

  if (outcome === "doctor shared") request.status = "doctor shared";
  if (outcome === "appointment fixed") request.status = "appointment fixed";
  if (outcome === "asked to call later") request.status = "follow up";
  if (outcome === "wrong number") request.priority = "low";

  renderRequests();
  saveRequests();
});
requestList.addEventListener("input", (event) => {
  const item = event.target.closest("[data-request-id]");
  if (!item) return;
  const request = requests.find((entry) => entry.id === item.dataset.requestId);
  if (!request) return;
  if (event.target.matches("[data-request-notes]")) request.notes = event.target.value;
  if (event.target.matches("[data-request-assigned]")) request.assignedTo = event.target.value;
});
logoutAdmin.addEventListener("click", () => {
  fetch("/api/admin/logout", { method: "POST" }).finally(() => {
    window.location.href = "/admin-login.html";
  });
});
loadDoctors();
