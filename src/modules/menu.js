const menu = () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu-item");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const footerWrapper = document.querySelector(".footer__wrapper");
  const sidebarLeft = document.querySelector(".sidebar__left");
  const sidebarRight = document.querySelector(".sidebar__right");
  const scrollUp = document.querySelector(".scroll-up");
  const scrollDown = document.querySelector(".scroll-down");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {
      menu.style.width = "94vw";
      header.style.height = "12vh";
      header.style.padding = "6vh 7vw 0 17vw";
      footer.style.height = "12vh";
      footerWrapper.style.height = "0%";
      sidebarLeft.style.width = "7vw";
      sidebarRight.style.width = "7vw";
      hamburger.style.left = "10vw";
      scrollUp.style.opacity = "0";
      scrollDown.style.opacity = "0";
      scrollUp.style.top = "10vh";
      scrollDown.style.top = "10vh";
      document.body.style.overflow = "hidden";
    } else {
      menu.style.width = "0";
      header.style.height = "7vh";
      header.style.padding = "2vh 3vw";
      sidebarLeft.style.width = "3vw";
      sidebarRight.style.width = "3vw";
      hamburger.style.left = "3vw";
      scrollUp.style.opacity = "1";
      scrollDown.style.opacity = "1";
      scrollUp.style.top = "-1vh";
      scrollDown.style.top = "-7vh";
      document.body.style.overflow = "auto";
      if (footer.classList.contains("footer_visible")) {
        footer.style.height = "16vh";
        footerWrapper.style.height = "100%";
      } else {
        footer.style.height = "7vh";
        footerWrapper.style.height = "0%";
      }
    }
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.id == "Главная") {
        document.location.href = "index.html";
      } else {
        document.location.href = "404.html";
      }
    });
  });
};

export default menu;
