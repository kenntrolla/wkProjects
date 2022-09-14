const navMenu = document.getElementbyId('nav-menu');
const toggleMenu = document.getElementbyId('toggle-menu');
const closeMenu = document.getElementbyId('close-menu');



// $("#toggleMenu").click(function() {
//     document.getElementById('navMenu').classList.toggle("show");
//  });





toggleMenu.addEventListener('click', () => {
	navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
	navMenu.classList.remove('show')
})