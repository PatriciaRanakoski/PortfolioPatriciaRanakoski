const topNav = document.querySelector(".top-nav");
const arrow = document.querySelector(".arrow");
const hambuger = document.querySelector("#image-hamburger");
const contact = document.querySelector("#contact");
const triangle = document.querySelector(".triangle");
const topNavLi = document.querySelector(".top-nav li");

hambuger.addEventListener("click", function(){
    topNav.classList.toggle("displayBlock");
    topNav.classList.toggle("displayTopNav");
    hambuger.classList.toggle("setOpacity");
    triangle.classList.toggle("displayBlock");
});

