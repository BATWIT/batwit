'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        navbarToggler.classList.remove("active");
    });
}



/**
 * search toggle
 */




/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});



/*navbarnew*/

console.log("Ako vidíme našiel si konzolu. Ak si šikovný a hladáš prácu kontaktuj nás :)")

/*loader*/
let loader = document.querySelector(".loader");
window.onload = () => {
    setTimeout(function () {
        loader.style.opacity = "0";
        loader.style.zIndex = "0";
    }, 600);
}


$(function () {
    $(".loader").show().fadeOut(800);
})
