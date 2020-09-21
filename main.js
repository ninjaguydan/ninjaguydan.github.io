
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} 

	else {
		menuBtn.classList.remove('open');
		menuOpen = false; 
	}
});




function myFunction() {
  let menu = document.getElementById("overlay");

  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
}