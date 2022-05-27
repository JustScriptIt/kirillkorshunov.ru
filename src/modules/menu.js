const menu = () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu-item");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const sidebarLeft = document.querySelector(".sidebar__left");
  const sidebarRight = document.querySelector(".sidebar__right");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {
      menu.style.width = "94vw";
      header.style.height = "12vh";
      header.style.padding = "6vh 7vw 0 17vw";
      footer.style.height = "12vh";
      sidebarLeft.style.width = "7vw";
      sidebarRight.style.width = "7vw";
      hamburger.style.left = "10vw";
    } else {
      menu.style.width = "0";
      header.style.height = "7vh";
      header.style.padding = "2vh 3vw";
      if (footer.classList.contains("footer_visible")) {
        footer.style.height = "16vh";
      } else {
        footer.style.height = "7vh";
      }
      sidebarLeft.style.width = "3vw";
      sidebarRight.style.width = "3vw";
      hamburger.style.left = "3vw";
    }
  });

  // Для приложения. Элемент меню выбранного раздела всегда выделен, а не только при наведении.
  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      menuItem.forEach((item) => {
        item.classList.remove("is-active");
      });
      item.classList.add("is-active");
      document.location.href = "404.html";
    });
  });
};

export default menu;
