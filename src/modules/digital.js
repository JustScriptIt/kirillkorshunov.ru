const digital = () => {
  const title = document.querySelector(".digital__title");
  const titleLine = document.querySelector(".digital__title-line");
  const titleText = document.querySelector(".digital__title-text");
  const subtitle = document.querySelector(".digital__subtitle");

  const sectionWelcome = document.querySelector(".welcome");
  const sectionParalax = document.querySelector(".paralax");
  const sectionDigital = document.querySelector(".digital");
  const sectionIdeas = document.querySelector(".ideas");

  document.addEventListener("scroll", () => {
    if (
      scrollY -
        sectionWelcome.scrollHeight -
        sectionParalax.scrollHeight +
        200 >
      0
    ) {
      titleLine.style.marginLeft = "0%";
      titleText.style.transform = "translateY(0)";
    } else {
      titleLine.style.marginLeft = "-100%";
      titleText.style.transform = "translateY(200%)";
    }
  });
};

export default digital;
