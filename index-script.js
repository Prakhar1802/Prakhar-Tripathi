const toggle = document.querySelector("#toggle");
const menu = document.querySelector("ul");
let nav = document.querySelectorAll(".item-navbar");
const card = document.querySelector(".card");
const flip = document.querySelector(".thecard");
const close = document.querySelector(".close");

toggle.onclick = function () {
    menu.classList.toggle("active");
    toggle.classList.toggle("bi-x")
    toggle.classList.toggle("bi-list")
}
card.onclick = function(){
    flip.classList.toggle("active")
}
close.onclick = function(){
    flip.classList.toggle("active")
}

for (i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.classList.toggle("bi-x")
        toggle.classList.toggle("bi-list")
    })
}
