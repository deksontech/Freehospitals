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

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort();
}

function fillSelect(select, values, label) {
  select.innerHTML = `<option value="All">${label}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function updateHospitalCities() {
  const cities = hospitalState.value === "All" ? unique(hospitals.map((hospital) => hospital.city)) : unique(hospitals.filter((hospital) => hospital.state === hospitalState.value).map((hospital) => hospital.city));
  const current = hospitalCity.value;
  fillSelect(hospitalCity, cities, "All cities");
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
    <article class="hospital-card">
      <img src="${hospital.image}" alt="${hospital.name}" />
      <div>
        <h3>${hospital.name}${hospital.verified ? '<span class="verified-badge">Verified</span>' : ""}</h3>
        <p class="affiliation-line">${hospital.type} in ${hospital.city}, ${hospital.state}</p>
        <p class="meta-line">${hospital.address || "Address will be updated soon."}</p>
        <p class="bio">${hospital.description || "Affiliated hospital listed with Freehospitals care desk support."}</p>
        <div class="chips">${[...(hospital.specialties || []), ...(hospital.services || [])].slice(0, 8).map((item) => `<span class="chip">${item}</span>`).join("")}</div>
      </div>
      <div class="doctor-action">
        <a class="call-button" href="tel:+918586930497">Call Care Desk</a>
        <a class="whatsapp-button" href="https://wa.me/918586930497?text=${encodeURIComponent(`Hello, I want help with ${hospital.name}.`)}" target="_blank" rel="noreferrer">WhatsApp</a>
        ${hospital.mapUrl ? `<a class="detail-button" href="${hospital.mapUrl}" target="_blank" rel="noreferrer">Map</a>` : ""}
      </div>
    </article>
  `;
}

function renderHospitals() {
  const results = filteredHospitals();
  hospitalCount.textContent = `Showing ${results.length} of ${hospitals.length} hospitals`;
  hospitalList.innerHTML = results.length ? results.map(hospitalCard).join("") : '<div class="empty-state"><h2>No hospitals match these filters.</h2><p>Try another city, service, or call the care desk.</p></div>';
}

function initializeFilters() {
  fillSelect(hospitalType, unique(hospitals.map((hospital) => hospital.type)), "All hospital types");
  fillSelect(hospitalState, unique(hospitals.map((hospital) => hospital.state)), "All states");
  fillSelect(hospitalService, unique(hospitals.flatMap((hospital) => [...(hospital.specialties || []), ...(hospital.services || [])])), "All services");
  renderRefineFilters();
  updateHospitalCities();
}

function renderRefineFilters() {
  const types = unique(hospitals.map((hospital) => hospital.type));
  const services = unique(hospitals.flatMap((hospital) => [...(hospital.specialties || []), ...(hospital.services || [])])).slice(0, 14);

  hospitalTypeFilters.innerHTML = `<h3>Hospital types</h3>${types
    .map((type) => `<label><input type="checkbox" name="hospitalTypeCheck" value="${type}" ${hospitalStateFilters.types.has(type) ? "checked" : ""} /> ${type}</label>`)
    .join("")}`;
  hospitalServiceFilters.innerHTML = `<h3>Services and specialties</h3>${services
    .map((service) => `<label><input type="checkbox" name="hospitalServiceCheck" value="${service}" ${hospitalStateFilters.services.has(service) ? "checked" : ""} /> ${service}</label>`)
    .join("")}`;
}

[hospitalSearch, hospitalType, hospitalState, hospitalCity, hospitalService].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === hospitalState) updateHospitalCities();
    renderHospitals();
  });
  input.addEventListener("change", () => {
    if (input === hospitalState) updateHospitalCities();
    renderHospitals();
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

fetch("/api/hospitals")
  .then(async (response) => {
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || "Could not load hospitals.");
    hospitals = result.hospitals;
    initializeFilters();
    renderHospitals();
  })
  .catch(() => {
    hospitalList.innerHTML = '<div class="empty-state"><h2>Hospitals could not be loaded.</h2><p>Please run the local server and refresh.</p></div>';
  });
