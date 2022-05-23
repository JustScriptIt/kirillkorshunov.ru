const scroll = () => {
  const background = document.querySelector(".welcome-background");
  const title = document.querySelector(".title-wrapper");
  const titleSmall = document.querySelector(".welcome-title__small");
  const titleSmallWhite = document.querySelector(".welcome-title__small-white");
  const titleSmallHead = document.querySelector(".welcome-title__small-head");

  document.addEventListener("scroll", () => {
    if (scrollY == 0) {
      background.style.width = "50vw";
      // background.style.transitionDelay = "0s";
      title.style.left = "50vw";
      title.style.width = "68vh";
      // title.style.transitionDelay = "0s";
      titleSmall.style.transform = "translateY(150%)";
      titleSmallWhite.style.transform = "translateY(200%)";
      titleSmallHead.style.transform = "translateX(-150%)";
      titleSmall.style.transitionDelay = "0s";
      titleSmallWhite.style.transitionDelay = "0s";
      titleSmallHead.style.transitionDelay = "0s";
    }
    if (scrollY > 0) {
      background.style.width = "97vw";
      // background.style.transitionDelay = ".3s";
      title.style.left = "97vw";
      title.style.width = "0";
      // title.style.transitionDelay = ".3s";
      titleSmall.style.transform = "translateY(0)";
      titleSmallWhite.style.transform = "translateY(0)";
      titleSmallHead.style.transform = "translateX(0%)";
      titleSmall.style.transitionDelay = "0.3s";
      titleSmallWhite.style.transitionDelay = ".4s";
      titleSmallHead.style.transitionDelay = ".4s";
    }
  });
};

export default scroll;
