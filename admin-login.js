const adminLoginForm = document.querySelector("#adminLoginForm");
const loginMessage = document.querySelector("#loginMessage");

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(adminLoginForm);
  const identifier = String(formData.get("identifier") || "").trim().toLowerCase();
  const password = formData.get("password");

  loginMessage.textContent = "Checking password...";
  loginMessage.className = "form-note";

  fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Login failed.");
      window.location.href = "/admin.html";
    })
    .catch((error) => {
      loginMessage.textContent = error.message;
      loginMessage.className = "form-note error";
    });
});
