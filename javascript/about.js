//Project: Portfolio Site
//Author: Daniel Thompson

/*----------------------Hamburger ---------------------------*/
const menuBtn = document.querySelector('.menu-btn');

// ..hamburger to "x" animation
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
});


// ..hamburger Function
function openMenu() {
    let nav = document.querySelector('nav');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}