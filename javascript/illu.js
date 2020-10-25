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


/*-----------------------Displays Illustrations at Random--------------------------*/

//Array of Illustration File Names
var illustrations = [
    "0_dp.jpg", 
    "1_bm.jpg", 
    "2_dan-p.jpg", 
    "3_sm.jpg", 
    "4_dbz.jpg", 
    "5_alan.jpg", 
    "6_jill.jpg", 
    "7_gut.jpg", 
    "8_bm.jpg", 
    "9_arby.jpg",  
    "11_w3.jpg", 
    "12_karla.jpg", 
    "13_kk.jpg", 
    "14_oz.jpg", 
    "15_demi.jpg", 
    "16_pat.jpg"
] 

//Randomizer
for (let i = illustrations.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = illustrations[i]
    illustrations[i] = illustrations[j]
    illustrations[j] = temp
}

//Create divs for Illustration Section
illustrations.forEach(function(i, index){
    
    let art = document.createElement('div');
    art.classList.add('art');

    let image = document.createElement('img');
    image.src = "../images/illu/" + i;

    let section = document.querySelector('section');
    section.appendChild(art);
    
    setTimeout(function(){
        art.appendChild(image);
        console.log(art);
    }, 250 * (index + 1));    
    

    //..mouse hover effect
    art.onmouseover = function(){
        image.src = "../images/illu/line/" + i;
    }; 
    art.onmouseout = function(){
        image.src = "../images/illu/" + i;
    }; 
    console.log(i);
});

