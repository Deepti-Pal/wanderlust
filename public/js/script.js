// Bootstrap form validation
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
})();

// Auto-dismiss flash messages after 4 seconds
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const alerts = document.querySelectorAll(".flash-msg");
    alerts.forEach((alert) => {
      const bsAlert = new bootstrap.Alert(alert);
      bsAlert.close();
    });
  }, 4000);
});