const footer = () => {
  const footer = document.querySelector("footer");
  const footerWrapper = document.querySelector(".footer__wrapper");
  const sectionWelcome = document.querySelector(".welcome");
  const sectionParalax = document.querySelector(".paralax");
  const sectionDigital = document.querySelector(".digital");
  const sectionIdeas = document.querySelector(".ideas");

  document.addEventListener("scroll", () => {
    if (
      scrollY >
      sectionWelcome.scrollHeight +
        sectionParalax.scrollHeight +
        sectionDigital.scrollHeight +
        5
    ) {
      footer.classList.add("footer_visible");
      footerWrapper.style.height = "100%";
    } else {
      footer.classList.remove("footer_visible");
      footerWrapper.style.height = "0%";
    }
  });
};

export default footer;
