const mailingForm = () => {
  const buttons = document.querySelectorAll(".menu-feedback_mailing");
  const form = document.querySelector(".mailing");
  const close = document.querySelector(".mailing__close");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      form.classList.add("mailing_active");
    });
  });

  close.addEventListener("click", () => {
    form.classList.remove("mailing_active");
  });
};

export default mailingForm;
