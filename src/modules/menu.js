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
      header.style = "height: 12vh; padding: 6vh 7vw 0 17vw";
      footer.classList.remove("footer_visible");
      footerWrapper.style.height = "0%";
      sidebarLeft.style.width = "7vw";
      sidebarRight.style.width = "7vw";
      hamburger.style.left = "10vw";
      scrollUp.removeAttribute("style");
      scrollDown.removeAttribute("style");
      document.body.style.overflow = "hidden";
    } else {
      menu.removeAttribute("style");
      header.removeAttribute("style");
      sidebarLeft.removeAttribute("style");
      sidebarRight.removeAttribute("style");
      hamburger.removeAttribute("style");
      footer.classList.add("footer_visible");
      footerWrapper.style.height = "100%";
      document.body.style.overflow = "auto";
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
