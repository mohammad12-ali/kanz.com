document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
      form.addEventListener("submit", e => {
        alert("اطلاعات ثبت شد (نمونه اولیه)");
        e.preventDefault();
      });
    });
  });