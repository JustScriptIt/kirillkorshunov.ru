(()=>{"use strict";(()=>{const e=document.querySelector(".hamburger"),t=document.querySelector(".menu"),s=document.querySelector("header"),l=(document.querySelector("nav"),document.querySelector("footer")),i=document.querySelector(".sidebar__left"),c=document.querySelector(".sidebar__right");e.addEventListener("click",(()=>{e.classList.toggle("is-active"),e.classList.contains("is-active")?(t.style.width="94vw",s.style.height="12vh",s.style.padding="6vh 7vw 0 17vw",l.style.height="12vh",i.style.width="7vw",c.style.width="7vw",e.style.left="10vw"):(t.style.width="0",s.style.height="7vh",s.style.padding="2vh 3vw",l.style.height="7vh",i.style.width="3vw",c.style.width="3vw",e.style.left="3vw")}))})()})();