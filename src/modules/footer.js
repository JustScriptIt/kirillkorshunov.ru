const footer = () => {
  const footer = document.querySelector("footer");
  const footerWrapper = document.querySelector(".footer__wrapper");
  const sectionWelcome = document.querySelector(".welcome");
  const sectionParalax = document.querySelector(".paralax");
  const sectionDigital = document.querySelector(".digital");
  const sectionIdeas = document.querySelector(".ideas");

  document.addEventListener("keydown", () => {
    window.scrollTo({
      top:
        sectionWelcome.scrollHeight +
        sectionParalax.scrollHeight +
        sectionDigital.scrollHeight,
      behavior: "smooth",
    });
  });

  document.addEventListener("scroll", () => {
    if (
      scrollY >
      sectionWelcome.scrollHeight +
        sectionParalax.scrollHeight +
        sectionDigital.scrollHeight +
        10
    ) {
      footer.classList.add("footer_visible");
      //   footerWrapper.style.transform = "translateY(-50%)";
      footerWrapper.style.height = "100%";
    } else {
      footer.classList.remove("footer_visible");
      //   footerWrapper.style.transform = "translateY(200%)";
      footerWrapper.style.height = "0%";
    }
  });
};

export default footer;
