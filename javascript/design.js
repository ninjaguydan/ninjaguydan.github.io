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


/*-----------------------Displays Designs at Random--------------------------*/

//Array of Design File Names
var designs = [
    "design-2.gif", 
    "design-3.gif",
    "design-4.gif",
    "design-5.jpg",
    "design-6.jpg",
    "design-7.jpg",
    "design-8.jpg",
    "design-9.jpg",
    "design-10.jpg",
    "design-11.jpg",
    "design-12.jpg",
    "design-13.jpg"
] 

//Randomizer
for (let i = designs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = designs[i]
    designs[i] = designs[j]
    designs[j] = temp
}

//Create divs for Design Section

designs.forEach(function(i, index){
    
    let art = document.createElement('div');
    art.classList.add('art');

    let image = document.createElement('img');
    image.src = "../images/design/" + i;

    let section = document.querySelector('section');
    section.appendChild(art);
    
    setTimeout(function(){
        art.appendChild(image);
        console.log(art);
    }, 200 * (index + 1));    
});
