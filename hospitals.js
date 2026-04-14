const stateCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
};

let hospitals = [];
let doctors = [];
let activeHospital = null;
let searchTrackTimer = null;
let currentLanguage = localStorage.getItem("freehospitalsLanguage") || "en";
if (!["en", "hi"].includes(currentLanguage)) currentLanguage = "en";

const translations = {
  en: {
    language: "Language",
    navDoctors: "Doctors",
    navHospitals: "Affiliated Hospitals",
    navSymptoms: "Symptoms",
    navFaq: "FAQ",
    urgentCare: "Need urgent care?",
    affiliatedHospitals: "Affiliated hospitals",
    hospitalHeroTitle: "Find hospitals connected with care support.",
    hospitalHeroText: "Search by hospital name, city, state, specialty, or service. The Freehospitals care desk can help you connect.",
    searchHospitals: "Search hospitals",
    findDoctors: "Find doctors",
    hospitalSearchLabel: "Hospital, specialty, service, or city",
    hospitalType: "Hospital type",
    state: "State",
    city: "City",
    specialtyOrService: "Specialty or service",
    searchCriteria: "Search criteria",
    reset: "Reset",
    quickFilters: "Use quick filters to refine the hospital list.",
    hospitalTypes: "Hospital types",
    servicesSpecialties: "Services and specialties",
    trust: "Trust",
    verifiedHospitalsOnly: "Verified hospitals only",
    loadingHospitals: "Loading hospitals",
    showingHospitals: "Showing {shown} of {total} hospitals",
    hospitalMatches: "Affiliated hospital matches",
    verified: "Verified",
    addressSoon: "Address will be updated soon.",
    defaultHospitalBio: "Affiliated hospital listed with Freehospitals care desk support.",
    callCareDesk: "Call Care Desk",
    whatsapp: "WhatsApp",
    viewHospital: "View hospital",
    requestHelp: "Request help",
    map: "Map",
    hospitalProfile: "Hospital profile",
    backToHospitals: "Back to hospitals",
    inLocation: "{type} in {city}, {state}",
    timings: "Timings: {value}",
    careDeskSupport: "Care desk support",
    freeOfCost: "Free of Cost",
    availableDoctors: "Available doctors",
    noLinkedDoctors: "No doctors are linked to this hospital yet. The care desk can still help you.",
    requestHospitalHelp: "Request hospital help",
    sendRequestWhatsapp: "Send request on WhatsApp",
    openMap: "Open map",
    noHospitals: "No hospitals match these filters.",
    tryAnother: "Try another city, service, or call the care desk.",
    hospitalRequest: "Hospital request",
    requestHelpFor: "Request help for {name}",
    emergencyDisclaimer: "For medical emergencies, call local emergency services or visit the nearest hospital immediately. Freehospitals helps with discovery and coordination only.",
    patientName: "Patient name",
    mobileNumber: "Mobile number",
    email: "Email",
    helpWith: "What do you need help with?",
    hospitalConsent: "I agree that Freehospitals may contact me about this hospital request.",
    submitRequest: "Submit request",
    requestHint: "Submit once, then call or WhatsApp the care desk.",
    savingRequest: "Saving request...",
    requestSaved: "Request saved. The care desk can now follow up.",
    stillCall: "You can still call or WhatsApp the care desk.",
    allHospitalTypes: "All hospital types",
    allStates: "All states",
    allCities: "All cities",
    allServices: "All services",
    footerText: "Freehospitals helps patients discover doctors and request contact support.",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
  hi: {
    language: "\u092d\u093e\u0937\u093e",
    navDoctors: "\u0921\u0949\u0915\u094d\u091f\u0930",
    navHospitals: "\u0938\u0902\u092c\u0926\u094d\u0927 \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    navSymptoms: "\u0932\u0915\u094d\u0937\u0923",
    navFaq: "\u0938\u0935\u093e\u0932",
    urgentCare: "\u0924\u0941\u0930\u0902\u0924 \u0926\u0947\u0916\u092d\u093e\u0932 \u091a\u093e\u0939\u093f\u090f?",
    affiliatedHospitals: "\u0938\u0902\u092c\u0926\u094d\u0927 \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    hospitalHeroTitle: "\u0915\u0947\u092f\u0930 \u0938\u092a\u094b\u0930\u094d\u091f \u0938\u0947 \u091c\u0941\u0921\u093c\u0947 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0922\u0942\u0902\u0922\u0947\u0902\u0964",
    hospitalHeroText: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0928\u093e\u092e, \u0936\u0939\u0930, \u0930\u093e\u091c\u094d\u092f, \u0935\u093f\u0936\u0947\u0937\u0924\u093e \u092f\u093e \u0938\u0947\u0935\u093e \u0938\u0947 \u0916\u094b\u091c\u0947\u0902\u0964 Freehospitals \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0915\u0928\u0947\u0915\u094d\u091f \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u092e\u0926\u0926 \u0915\u0930\u0947\u0917\u093e\u0964",
    searchHospitals: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0916\u094b\u091c\u0947\u0902",
    findDoctors: "\u0921\u0949\u0915\u094d\u091f\u0930 \u0922\u0942\u0902\u0922\u0947\u0902",
    hospitalSearchLabel: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932, \u0935\u093f\u0936\u0947\u0937\u0924\u093e, \u0938\u0947\u0935\u093e \u092f\u093e \u0936\u0939\u0930",
    hospitalType: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u092a\u094d\u0930\u0915\u093e\u0930",
    state: "\u0930\u093e\u091c\u094d\u092f",
    city: "\u0936\u0939\u0930",
    specialtyOrService: "\u0935\u093f\u0936\u0947\u0937\u0924\u093e \u092f\u093e \u0938\u0947\u0935\u093e",
    searchCriteria: "\u0916\u094b\u091c \u092e\u093e\u092a\u0926\u0902\u0921",
    reset: "\u0930\u0940\u0938\u0947\u091f",
    quickFilters: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0938\u0942\u091a\u0940 \u0915\u094b \u091b\u093e\u0902\u091f\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0924\u094d\u0935\u0930\u093f\u0924 \u092b\u093f\u0932\u094d\u091f\u0930 \u0915\u0930\u0947\u0902\u0964",
    hospitalTypes: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u092a\u094d\u0930\u0915\u093e\u0930",
    servicesSpecialties: "\u0938\u0947\u0935\u093e\u090f\u0902 \u0914\u0930 \u0935\u093f\u0936\u0947\u0937\u0924\u093e\u090f\u0902",
    trust: "\u092d\u0930\u094b\u0938\u093e",
    verifiedHospitalsOnly: "\u0938\u093f\u0930\u094d\u092b \u0935\u0947\u0930\u093f\u092b\u093e\u0907\u0921 \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    loadingHospitals: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u0947 \u0939\u0948\u0902",
    showingHospitals: "{total} \u092e\u0947\u0902 \u0938\u0947 {shown} \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    hospitalMatches: "\u092e\u0947\u0932 \u0916\u093e\u0924\u0947 \u0938\u0902\u092c\u0926\u094d\u0927 \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    verified: "\u0935\u0947\u0930\u093f\u092b\u093e\u0907\u0921",
    addressSoon: "\u092a\u0924\u093e \u091c\u0932\u094d\u0926 \u0905\u092a\u0921\u0947\u091f \u0939\u094b\u0917\u093e\u0964",
    defaultHospitalBio: "Freehospitals \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0938\u092a\u094b\u0930\u094d\u091f \u0915\u0947 \u0938\u093e\u0925 \u0938\u0942\u091a\u0940\u092c\u0926\u094d\u0927 \u0905\u0938\u094d\u092a\u0924\u093e\u0932\u0964",
    callCareDesk: "\u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0915\u0949\u0932 \u0915\u0930\u0947\u0902",
    whatsapp: "\u0935\u094d\u0939\u093e\u091f\u094d\u0938\u0910\u092a",
    viewHospital: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0926\u0947\u0916\u0947\u0902",
    requestHelp: "\u092e\u0926\u0926 \u092e\u093e\u0902\u0917\u0947\u0902",
    map: "\u092e\u0948\u092a",
    hospitalProfile: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",
    backToHospitals: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932\u094b\u0902 \u092a\u0930 \u0935\u093e\u092a\u0938",
    inLocation: "{type} - {city}, {state}",
    timings: "\u0938\u092e\u092f: {value}",
    careDeskSupport: "\u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0938\u092a\u094b\u0930\u094d\u091f",
    freeOfCost: "\u092e\u0941\u092b\u094d\u0924",
    availableDoctors: "\u0909\u092a\u0932\u092c\u094d\u0927 \u0921\u0949\u0915\u094d\u091f\u0930",
    noLinkedDoctors: "\u0907\u0938 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0938\u0947 \u0905\u092d\u0940 \u0915\u094b\u0908 \u0921\u0949\u0915\u094d\u091f\u0930 \u0932\u093f\u0902\u0915 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u092e\u0926\u0926 \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    requestHospitalHelp: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u092e\u0926\u0926 \u092e\u093e\u0902\u0917\u0947\u0902",
    sendRequestWhatsapp: "\u0935\u094d\u0939\u093e\u091f\u094d\u0938\u0910\u092a \u092a\u0930 \u092d\u0947\u091c\u0947\u0902",
    openMap: "\u092e\u0948\u092a \u0916\u094b\u0932\u0947\u0902",
    noHospitals: "\u0907\u0928 \u092b\u093f\u0932\u094d\u091f\u0930\u094d\u0938 \u0938\u0947 \u0915\u094b\u0908 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e\u0964",
    tryAnother: "\u0926\u0942\u0938\u0930\u093e \u0936\u0939\u0930, \u0938\u0947\u0935\u093e \u091a\u0941\u0928\u0947\u0902 \u092f\u093e \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0915\u094b \u0915\u0949\u0932 \u0915\u0930\u0947\u0902\u0964",
    hospitalRequest: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f",
    requestHelpFor: "{name} \u0915\u0947 \u0932\u093f\u090f \u092e\u0926\u0926",
    emergencyDisclaimer: "\u092e\u0947\u0921\u093f\u0915\u0932 \u0907\u092e\u0930\u091c\u0947\u0902\u0938\u0940 \u092e\u0947\u0902 \u0938\u094d\u0925\u093e\u0928\u0940\u092f \u0907\u092e\u0930\u091c\u0947\u0902\u0938\u0940 \u0938\u0947\u0935\u093e \u0915\u094b \u0915\u0949\u0932 \u0915\u0930\u0947\u0902 \u092f\u093e \u0928\u091c\u0926\u0940\u0915\u0940 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u091c\u093e\u090f\u0902\u0964 Freehospitals \u0938\u093f\u0930\u094d\u092b \u0916\u094b\u091c \u0914\u0930 \u0938\u092e\u0928\u094d\u0935\u092f \u092e\u0947\u0902 \u092e\u0926\u0926 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
    patientName: "\u092e\u0930\u0940\u091c \u0915\u093e \u0928\u093e\u092e",
    mobileNumber: "\u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930",
    email: "\u0908\u092e\u0947\u0932",
    helpWith: "\u0906\u092a\u0915\u094b \u0915\u093f\u0938 \u092e\u0926\u0926 \u0915\u0940 \u091c\u0930\u0942\u0930\u0924 \u0939\u0948?",
    hospitalConsent: "\u092e\u0948\u0902 \u0938\u0939\u092e\u0924 \u0939\u0942\u0902 \u0915\u093f Freehospitals \u0907\u0938 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u092e\u0941\u091d\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    submitRequest: "\u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f \u092d\u0947\u091c\u0947\u0902",
    requestHint: "\u090f\u0915 \u092c\u093e\u0930 \u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902, \u092b\u093f\u0930 \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0915\u094b \u0915\u0949\u0932 \u092f\u093e \u0935\u094d\u0939\u093e\u091f\u094d\u0938\u0910\u092a \u0915\u0930\u0947\u0902\u0964",
    savingRequest: "\u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f \u0938\u0947\u0935 \u0939\u094b \u0930\u0939\u0940 \u0939\u0948...",
    requestSaved: "\u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f \u0938\u0947\u0935 \u0939\u094b \u0917\u0908\u0964 \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u092b\u0949\u0932\u094b \u0905\u092a \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
    stillCall: "\u0906\u092a \u0905\u092d\u0940 \u092d\u0940 \u0915\u0947\u092f\u0930 \u0921\u0947\u0938\u094d\u0915 \u0915\u094b \u0915\u0949\u0932 \u092f\u093e \u0935\u094d\u0939\u093e\u091f\u094d\u0938\u0910\u092a \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
    allHospitalTypes: "\u0938\u092d\u0940 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u092a\u094d\u0930\u0915\u093e\u0930",
    allStates: "\u0938\u092d\u0940 \u0930\u093e\u091c\u094d\u092f",
    allCities: "\u0938\u092d\u0940 \u0936\u0939\u0930",
    allServices: "\u0938\u092d\u0940 \u0938\u0947\u0935\u093e\u090f\u0902",
    footerText: "Freehospitals \u092e\u0930\u0940\u091c\u094b\u0902 \u0915\u094b \u0921\u0949\u0915\u094d\u091f\u0930 \u0916\u094b\u091c\u0928\u0947 \u0914\u0930 \u0938\u0902\u092a\u0930\u094d\u0915 \u0938\u092a\u094b\u0930\u094d\u091f \u092e\u0947\u0902 \u092e\u0926\u0926 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
    privacy: "\u092a\u094d\u0930\u093e\u0907\u0935\u0947\u0938\u0940 \u092a\u0949\u0932\u093f\u0938\u0940",
    terms: "\u0936\u0930\u094d\u0924\u0947\u0902",
  },
};

const termTranslations = {
  hi: {
    Hospital: "\u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    "Multi-specialty Hospital": "\u092e\u0932\u094d\u091f\u0940-\u0938\u094d\u092a\u0947\u0936\u0932\u093f\u091f\u0940 \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    "Children's Hospital": "\u092c\u091a\u094d\u091a\u094b\u0902 \u0915\u093e \u0905\u0938\u094d\u092a\u0924\u093e\u0932",
    Cardiology: "\u0939\u0943\u0926\u092f \u0930\u094b\u0917",
    Pediatrics: "\u092c\u093e\u0932 \u0930\u094b\u0917",
    Orthopedics: "\u0939\u0921\u094d\u0921\u0940 \u0930\u094b\u0917",
    "General Medicine": "\u091c\u0928\u0930\u0932 \u092e\u0947\u0921\u093f\u0938\u093f\u0928",
    Diagnostics: "\u0921\u093e\u092f\u0917\u094d\u0928\u094b\u0938\u094d\u091f\u093f\u0915\u094d\u0938",
    Emergency: "\u0907\u092e\u0930\u091c\u0947\u0902\u0938\u0940",
    OPD: "\u0913\u092a\u0940\u0921\u0940",
    Vaccination: "\u091f\u0940\u0915\u093e\u0915\u0930\u0923",
    Neurology: "\u0928\u094d\u092f\u0942\u0930\u094b\u0932\u0949\u091c\u0940",
    Dermatology: "\u0924\u094d\u0935\u091a\u093e \u0930\u094b\u0917",
    Gynecology: "\u0938\u094d\u0924\u094d\u0930\u0940 \u0930\u094b\u0917",
  },
};

function t(key, replacements = {}) {
  const template = translations[currentLanguage]?.[key] || translations.en[key] || key;
  return Object.entries(replacements).reduce((text, [name, value]) => text.replace(`{${name}}`, value), template);
}

function translateTerm(value) {
  return termTranslations[currentLanguage]?.[value] || value;
}

const hospitalStateFilters = {
  types: new Set(),
  services: new Set(),
  verifiedOnly: false,
};
const hospitalSearch = document.querySelector("#hospitalSearch");
const hospitalType = document.querySelector("#hospitalType");
const hospitalState = document.querySelector("#hospitalState");
const hospitalCity = document.querySelector("#hospitalCity");
const hospitalService = document.querySelector("#hospitalService");
const hospitalList = document.querySelector("#hospitalList");
const hospitalCount = document.querySelector("#hospitalCount");
const resetHospitalFilters = document.querySelector("#resetHospitalFilters");
const hospitalTypeFilters = document.querySelector("#hospitalTypeFilters");
const hospitalServiceFilters = document.querySelector("#hospitalServiceFilters");
const verifiedHospitalsOnly = document.querySelector("#verifiedHospitalsOnly");
const hospitalDetail = document.querySelector("#hospitalDetail");
const hospitalRequestModal = document.querySelector("#hospitalRequestModal");
const hospitalRequestForm = document.querySelector("#hospitalRequestForm");
const hospitalRequestMessage = document.querySelector("#hospitalRequestMessage");
const hospitalLanguageSelect = document.querySelector("#hospitalLanguageSelect");

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort();
}

function fillSelect(select, values, label) {
  select.innerHTML = `<option value="All">${label}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = translateTerm(value);
    select.append(option);
  });
}

function updateHospitalCities() {
  const cities = hospitalState.value === "All" ? unique(hospitals.map((hospital) => hospital.city)) : unique(hospitals.filter((hospital) => hospital.state === hospitalState.value).map((hospital) => hospital.city));
  const current = hospitalCity.value;
  fillSelect(hospitalCity, cities, t("allCities"));
  hospitalCity.value = cities.includes(current) ? current : "All";
}

function filteredHospitals() {
  const term = hospitalSearch.value.trim().toLowerCase();
  return hospitals
    .filter((hospital) => hospital.published !== false)
    .filter((hospital) => {
      const searchable = [hospital.name, hospital.type, hospital.state, hospital.city, hospital.address, hospital.description, ...(hospital.specialties || []), ...(hospital.services || [])]
        .join(" ")
        .toLowerCase();
      return (
        (!term || searchable.includes(term)) &&
        (hospitalType.value === "All" || hospital.type === hospitalType.value) &&
        (hospitalStateFilters.types.size === 0 || hospitalStateFilters.types.has(hospital.type)) &&
        (hospitalState.value === "All" || hospital.state === hospitalState.value) &&
        (hospitalCity.value === "All" || hospital.city === hospitalCity.value) &&
        (hospitalService.value === "All" || (hospital.services || []).includes(hospitalService.value) || (hospital.specialties || []).includes(hospitalService.value)) &&
        (hospitalStateFilters.services.size === 0 || [...hospitalStateFilters.services].some((item) => (hospital.services || []).includes(item) || (hospital.specialties || []).includes(item))) &&
        (!hospitalStateFilters.verifiedOnly || hospital.verified)
      );
    });
}

function hospitalCard(hospital) {
  return `
    <article class="hospital-card" id="${slugify(hospital.name)}">
      <img src="${hospital.image}" alt="${hospital.name}" />
      <div>
        <h3>${hospital.name}${hospital.verified ? `<span class="verified-badge">${t("verified")}</span>` : ""}</h3>
        <p class="affiliation-line">${t("inLocation", { type: translateTerm(hospital.type), city: hospital.city, state: hospital.state })}</p>
        <p class="meta-line">${hospital.address || t("addressSoon")}</p>
        <p class="bio">${hospital.description || t("defaultHospitalBio")}</p>
        <div class="chips">${[...(hospital.specialties || []), ...(hospital.services || [])].slice(0, 8).map((item) => `<span class="chip">${translateTerm(item)}</span>`).join("")}</div>
      </div>
      <div class="doctor-action">
        <a class="call-button" data-hospital-call="${hospital.id}" href="tel:+918586930497">${t("callCareDesk")}</a>
        <a class="whatsapp-button" data-hospital-whatsapp="${hospital.id}" href="https://wa.me/918586930497?text=${encodeURIComponent(`Hello, I want help with ${hospital.name}.`)}" target="_blank" rel="noreferrer">${t("whatsapp")}</a>
        <a class="detail-button" href="/hospitals/${slugify(hospital.name)}" data-hospital-detail="${hospital.id}">${t("viewHospital")}</a>
        <button class="book-button" type="button" data-hospital-request="${hospital.id}">${t("requestHelp")}</button>
        ${hospital.mapUrl ? `<a class="detail-button" href="${hospital.mapUrl}" target="_blank" rel="noreferrer">${t("map")}</a>` : ""}
      </div>
    </article>
  `;
}

function slugify(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function doctorsForHospital(hospital) {
  return doctors.filter((doctor) => Number(doctor.hospitalId) === Number(hospital.id) || String(doctor.hospitalName || "").toLowerCase() === hospital.name.toLowerCase());
}

function renderHospitalDetail(hospital) {
  if (!hospitalDetail) return;
  activeHospital = hospital;
  const linkedDoctors = doctorsForHospital(hospital);
  document.querySelector("#hospitalSchema")?.remove();
  hospitalDetail.hidden = false;
  hospitalDetail.innerHTML = `
    <section class="admin-section hospital-detail-page">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">${t("hospitalProfile")}</p>
          <h2>${hospital.name}</h2>
        </div>
        <a class="detail-button" href="/hospitals.html#hospitals">${t("backToHospitals")}</a>
      </div>
      <div class="doctor-detail-grid">
        <img class="doctor-detail-photo" src="${hospital.image}" alt="${hospital.name}" />
        <div>
          <p class="affiliation-line">${t("inLocation", { type: translateTerm(hospital.type), city: hospital.city, state: hospital.state })}</p>
          <p class="meta-line">${hospital.address || t("addressSoon")}</p>
          <p class="meta-line">${t("timings", { value: hospital.timings || "Call to confirm" })}</p>
          <div class="trust-badges">${hospital.verified ? `<span>${t("verified")}</span>` : ""}<span>${t("careDeskSupport")}</span><span>${t("freeOfCost")}</span></div>
        </div>
      </div>
      <p class="bio">${hospital.description || t("defaultHospitalBio")}</p>
      <div class="detail-facts">
        ${(hospital.departments || hospital.specialties || []).map((department) => `<span>${translateTerm(department)}</span>`).join("")}
        ${(hospital.services || []).map((service) => `<span>${translateTerm(service)}</span>`).join("")}
      </div>
      <h3>${t("availableDoctors")}</h3>
      <div class="doctor-list">
        ${
          linkedDoctors.length
            ? linkedDoctors.map((doctor) => `<article class="request-item"><strong>${doctor.name}</strong><span>${translateTerm(doctor.specialty)} - ${doctor.experience || 0} years experience</span><span>${doctor.availability || "Call to confirm"} - ${doctor.nextSlot || ""}</span></article>`).join("")
            : `<p class="form-note">${t("noLinkedDoctors")}</p>`
        }
      </div>
      <div class="contact-actions">
        <button class="primary-button" type="button" data-hospital-request="${hospital.id}">${t("requestHospitalHelp")}</button>
        <a class="call-button" data-hospital-call="${hospital.id}" href="tel:+918586930497">${t("callCareDesk")}</a>
        <a class="whatsapp-button" data-hospital-whatsapp="${hospital.id}" href="https://wa.me/918586930497?text=${encodeURIComponent(`Hello, I want help with ${hospital.name}.`)}" target="_blank" rel="noreferrer">${t("sendRequestWhatsapp")}</a>
        ${hospital.mapUrl ? `<a class="detail-button" href="${hospital.mapUrl}" target="_blank" rel="noreferrer">${t("openMap")}</a>` : ""}
      </div>
    </section>
  `;
  const schema = document.createElement("script");
  schema.id = "hospitalSchema";
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    address: hospital.address,
    telephone: hospital.phone || "+91 8586930497",
    medicalSpecialty: hospital.specialties || [],
    availableService: hospital.services || [],
    url: window.location.href,
  });
  document.head.append(schema);
  fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "hospital_view", details: { hospital: hospital.name }, path: window.location.pathname }) }).catch(() => {});
}

function renderHospitals() {
  const results = filteredHospitals();
  hospitalCount.textContent = t("showingHospitals", { shown: results.length, total: hospitals.length });
  const sameState = hospitalState.value !== "All" ? hospitals.filter((hospital) => hospital.state === hospitalState.value && hospital.city !== hospitalCity.value).slice(0, 4) : [];
  hospitalList.innerHTML = results.length
    ? results.map(hospitalCard).join("")
    : `<div class="empty-state"><h2>${t("noHospitals")}</h2><p>${t("tryAnother")}</p>${sameState.length ? `<div class="nearby-suggestions">${sameState.map((hospital) => `<button type="button" data-nearby-hospital-city="${hospital.city}">${hospital.city}</button>`).join("")}</div>` : ""}<div class="empty-actions"><a class="call-button" href="tel:+918586930497">${t("callCareDesk")}</a></div></div>`;
}

function trackHospitalSearch() {
  clearTimeout(searchTrackTimer);
  searchTrackTimer = setTimeout(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "hospital_search",
        details: {
          query: hospitalSearch.value,
          type: hospitalType.value,
          state: hospitalState.value,
          city: hospitalCity.value,
          service: hospitalService.value,
        },
        path: window.location.pathname,
      }),
    }).catch(() => {});
  }, 600);
}

function initializeFilters() {
  fillSelect(hospitalType, unique(hospitals.map((hospital) => hospital.type)), t("allHospitalTypes"));
  fillSelect(hospitalState, unique(hospitals.map((hospital) => hospital.state)), t("allStates"));
  fillSelect(hospitalService, unique(hospitals.flatMap((hospital) => [...(hospital.specialties || []), ...(hospital.services || [])])), t("allServices"));
  renderRefineFilters();
  updateHospitalCities();
}

function renderRefineFilters() {
  const types = unique(hospitals.map((hospital) => hospital.type));
  const services = unique(hospitals.flatMap((hospital) => [...(hospital.specialties || []), ...(hospital.services || [])])).slice(0, 14);

  hospitalTypeFilters.innerHTML = `<h3>${t("hospitalTypes")}</h3>${types
    .map((type) => `<label><input type="checkbox" name="hospitalTypeCheck" value="${type}" ${hospitalStateFilters.types.has(type) ? "checked" : ""} /> ${translateTerm(type)}</label>`)
    .join("")}`;
  hospitalServiceFilters.innerHTML = `<h3>${t("servicesSpecialties")}</h3>${services
    .map((service) => `<label><input type="checkbox" name="hospitalServiceCheck" value="${service}" ${hospitalStateFilters.services.has(service) ? "checked" : ""} /> ${translateTerm(service)}</label>`)
    .join("")}`;
}

function titleCaseSlug(value) {
  return String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function applyHospitalLandingRoute() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (parts[0] !== "hospitals" || !parts[1]) return;

  const hospital = hospitals.find((item) => slugify(item.name) === parts[1]);
  if (hospital) {
    renderHospitalDetail(hospital);
    return;
  }

  const maybeCity = titleCaseSlug(parts.at(-1));
  const maybeService = parts.length > 2 ? titleCaseSlug(parts[1]) : "";
  const cityMatch = unique(hospitals.map((item) => item.city)).find((city) => slugify(city) === slugify(maybeCity));
  const serviceMatch = unique(hospitals.flatMap((item) => [...(item.specialties || []), ...(item.services || [])])).find((service) => slugify(service) === slugify(maybeService));

  if (cityMatch) {
    hospitalCity.value = cityMatch;
    if (hospitalState.value === "All") {
      const cityHospital = hospitals.find((item) => item.city === cityMatch);
      if (cityHospital) {
        hospitalState.value = cityHospital.state;
        updateHospitalCities();
        hospitalCity.value = cityMatch;
      }
    }
  }
  if (serviceMatch) hospitalService.value = serviceMatch;
  if (cityMatch || serviceMatch) renderHospitals();
}

function applyHospitalTranslations() {
  document.documentElement.lang = currentLanguage;
  if (hospitalLanguageSelect) hospitalLanguageSelect.value = currentLanguage;
  document.title = currentLanguage === "en" ? "Affiliated Hospitals | Freehospitals" : "\u0938\u0902\u092c\u0926\u094d\u0927 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 | Freehospitals";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  hospitalSearch.placeholder =
    currentLanguage === "hi"
      ? "\u0915\u093e\u0930\u094d\u0921\u093f\u092f\u094b\u0932\u0949\u091c\u0940, \u0907\u092e\u0930\u091c\u0947\u0902\u0938\u0940, \u0905\u0939\u092e\u0926\u093e\u092c\u093e\u0926"
      : "Try cardiology, emergency, Ahmedabad";
  if (!hospitalCount.textContent || hospitalCount.textContent === "Loading hospitals") {
    hospitalCount.textContent = t("loadingHospitals");
  }
}

function rerenderHospitalLanguage() {
  const selected = {
    type: hospitalType.value,
    state: hospitalState.value,
    city: hospitalCity.value,
    service: hospitalService.value,
  };
  initializeFilters();
  hospitalType.value = [...hospitalType.options].some((option) => option.value === selected.type) ? selected.type : "All";
  hospitalState.value = [...hospitalState.options].some((option) => option.value === selected.state) ? selected.state : "All";
  updateHospitalCities();
  hospitalCity.value = [...hospitalCity.options].some((option) => option.value === selected.city) ? selected.city : "All";
  hospitalService.value = [...hospitalService.options].some((option) => option.value === selected.service) ? selected.service : "All";
  applyHospitalTranslations();
  renderHospitals();
  if (activeHospital) renderHospitalDetail(activeHospital);
}

hospitalLanguageSelect?.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  localStorage.setItem("freehospitalsLanguage", currentLanguage);
  rerenderHospitalLanguage();
});

applyHospitalTranslations();

[hospitalSearch, hospitalType, hospitalState, hospitalCity, hospitalService].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === hospitalState) updateHospitalCities();
    renderHospitals();
    trackHospitalSearch();
  });
  input.addEventListener("change", () => {
    if (input === hospitalState) updateHospitalCities();
    renderHospitals();
    trackHospitalSearch();
  });
});

resetHospitalFilters.addEventListener("click", () => {
  hospitalSearch.value = "";
  hospitalType.value = "All";
  hospitalState.value = "All";
  hospitalStateFilters.types.clear();
  hospitalStateFilters.services.clear();
  hospitalStateFilters.verifiedOnly = false;
  verifiedHospitalsOnly.checked = false;
  updateHospitalCities();
  hospitalCity.value = "All";
  hospitalService.value = "All";
  renderRefineFilters();
  renderHospitals();
});

hospitalTypeFilters.addEventListener("change", (event) => {
  const input = event.target.closest('input[name="hospitalTypeCheck"]');
  if (!input) return;
  if (input.checked) hospitalStateFilters.types.add(input.value);
  else hospitalStateFilters.types.delete(input.value);
  renderHospitals();
});

hospitalServiceFilters.addEventListener("change", (event) => {
  const input = event.target.closest('input[name="hospitalServiceCheck"]');
  if (!input) return;
  if (input.checked) hospitalStateFilters.services.add(input.value);
  else hospitalStateFilters.services.delete(input.value);
  renderHospitals();
});

verifiedHospitalsOnly.addEventListener("change", () => {
  hospitalStateFilters.verifiedOnly = verifiedHospitalsOnly.checked;
  renderHospitals();
});

document.body.addEventListener("click", (event) => {
  const detailLink = event.target.closest("[data-hospital-detail]");
  const requestButton = event.target.closest("[data-hospital-request]");
  const whatsappLink = event.target.closest("[data-hospital-whatsapp]");
  const callLink = event.target.closest("[data-hospital-call]");
  const nearbyCity = event.target.closest("[data-nearby-hospital-city]");

  if (detailLink) {
    const hospital = hospitals.find((item) => item.id === Number(detailLink.dataset.hospitalDetail));
    if (hospital) renderHospitalDetail(hospital);
  }

  if (requestButton) {
    const hospital = hospitals.find((item) => item.id === Number(requestButton.dataset.hospitalRequest));
    if (!hospital) return;
    activeHospital = hospital;
    hospitalRequestForm.hospitalId.value = hospital.id;
    document.querySelector("#hospitalRequestTitle").textContent = t("requestHelpFor", { name: hospital.name });
    hospitalRequestMessage.textContent = t("requestHint");
    hospitalRequestMessage.className = "form-note";
    hospitalRequestModal.showModal();
    fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "hospital_request_click", details: { hospital: hospital.name }, path: window.location.pathname }) }).catch(() => {});
  }

  if (whatsappLink) {
    const hospital = hospitals.find((item) => item.id === Number(whatsappLink.dataset.hospitalWhatsapp));
    fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "hospital_whatsapp_click", details: { hospital: hospital?.name || "" }, path: window.location.pathname }) }).catch(() => {});
  }

  if (callLink) {
    const hospital = hospitals.find((item) => item.id === Number(callLink.dataset.hospitalCall));
    fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "hospital_call_click", details: { hospital: hospital?.name || "" }, path: window.location.pathname }) }).catch(() => {});
  }

  if (nearbyCity) {
    hospitalCity.value = nearbyCity.dataset.nearbyHospitalCity;
    renderHospitals();
  }
});

document.querySelector("[data-close-hospital-request]").addEventListener("click", () => hospitalRequestModal.close());

hospitalRequestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(hospitalRequestForm);
  const hospital = activeHospital || hospitals.find((item) => item.id === Number(formData.get("hospitalId")));
  const payload = {
    requestType: "hospital",
    hospitalId: hospital?.id || "",
    hospitalName: hospital?.name || "",
    doctorName: hospital?.name || "Hospital care desk",
    doctorSpecialty: "Hospital request",
    doctorAffiliation: hospital?.type || "Hospital",
    doctorCity: hospital?.city || "",
    doctorState: hospital?.state || "",
    patientName: formData.get("patientName"),
    patientPhone: formData.get("patientPhone"),
    patientEmail: formData.get("patientEmail"),
    patientCity: formData.get("patientCity"),
    patientMessage: formData.get("patientMessage"),
    preferredContact: "Phone call",
    preferredTime: "Call to confirm",
    source: `Hospital request: ${hospital?.name || "general"}`,
    consentText: "Freehospitals may contact me about this hospital request.",
    consentAt: new Date().toISOString(),
    consentVersion: "2026-04-14",
  };

  hospitalRequestMessage.textContent = t("savingRequest");
  try {
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || "Could not submit request.");
    hospitalRequestMessage.textContent = t("requestSaved");
    hospitalRequestMessage.className = "form-note success";
  } catch (error) {
    hospitalRequestMessage.textContent = `${error.message} ${t("stillCall")}`;
    hospitalRequestMessage.className = "form-note error";
  }
});

fetch("/api/hospitals")
  .then(async (response) => {
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || "Could not load hospitals.");
    hospitals = result.hospitals;
    initializeFilters();
    applyHospitalTranslations();
    renderHospitals();
    return fetch("/api/doctors");
  })
  .then((response) => response?.ok ? response.json() : { doctors: [] })
  .then((result) => {
    doctors = result?.doctors || [];
    applyHospitalLandingRoute();
  })
  .catch(() => {
    hospitalList.innerHTML = '<div class="empty-state"><h2>Hospitals could not be loaded.</h2><p>Please run the local server and refresh.</p></div>';
  });
