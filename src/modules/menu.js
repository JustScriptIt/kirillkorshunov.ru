const menu = () => {
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
  });
};

export default menu;
