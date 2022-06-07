const scroll = () => {
  const background = document.querySelector(".welcome-background");
  const title = document.querySelector(".title-wrapper");
  const titleSmall = document.querySelector(".welcome-title__small");
  const titleSmallWhite = document.querySelector(".welcome-title__small-white");
  const titleSmallHead = document.querySelector(".welcome-title__small-head");
  const scrollUp = document.querySelector(".scroll-up");
  const scrollDown = document.querySelector(".scroll-down");
  const scrollDownCenter = document.querySelector(".scroll-down_center");
  const sectionWelcome = document.querySelector(".welcome");
  const sectionParalax = document.querySelector(".paralax");
  const sectionDigital = document.querySelector(".digital");
  const sectionIdeas = document.querySelector(".ideas");

  document.addEventListener("scroll", () => {
    if (scrollY == 0) {
      background.removeAttribute("style");
      title.removeAttribute("style");
      titleSmall.removeAttribute("style");
      titleSmallWhite.removeAttribute("style");
      titleSmallHead.removeAttribute("style");
      titleSmall.style.transitionDelay = "0s";
      titleSmallWhite.style.transitionDelay = "0s";
      titleSmallHead.style.transitionDelay = "0s";
      scrollUp.removeAttribute("style");
      scrollDown.removeAttribute("style");
      scrollDownCenter.removeAttribute("style");
    }
    if (scrollY > 0) {
      background.style.width = "97vw";
      title.style.left = "97vw";
      title.style.width = "0";
      titleSmall.style.transform = "translateY(0)";
      titleSmallWhite.style.transform = "translateY(0)";
      titleSmallHead.style.transform = "translateX(0%)";
      titleSmall.style.transitionDelay = "0.3s";
      titleSmallWhite.style.transitionDelay = ".4s";
      titleSmallHead.style.transitionDelay = ".4s";
      scrollUp.style.opacity = "1";
      scrollUp.style.top = "-10vh";
      scrollDown.style.opacity = "1";
      scrollDown.style.top = "-10vh";
      scrollDownCenter.style.opacity = "0";
      scrollDownCenter.style.top = "10vh";
      if (
        scrollY >
        sectionWelcome.scrollHeight +
          sectionParalax.scrollHeight +
          sectionDigital.scrollHeight
      ) {
        scrollDown.style.transition = ".1s";
        scrollDown.style.opacity = "0";
      } else {
        scrollDown.style.transition = ".8s";
        scrollDown.style.opacity = "1";
      }
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".scroll-up")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
};

export default scroll;
