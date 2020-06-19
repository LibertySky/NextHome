// Hamburger button animation
const menuBtn = document.querySelector('.hamburger-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('menu-open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('menu-open');
		menuOpen = false;
	}
});

// Hamburger main nav
const navSlide = () => {
	const burger = document.querySelector('.hamburger-menu');
	const nav = document.getElementById('mainNav');
	const navLinks = document.querySelectorAll('.main-nav--items li');
	// toggle navBar
	burger.addEventListener('click', () => {
		nav.classList.toggle('main-nav-active');

		// Animate menu links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
					0.3}s`;
			}
		});
	});
};

navSlide();

// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});
// Smooth scroll animation
var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {
	easing: 'easeOutQuad',
});

// Lightbox gallery
$('#gallery').lightGallery({
	selector: '.gallery__item--link',
	mode: 'lg-slide-circular',
});
