/******************* MOBILE NAV *****************'*/

// Declaring our variables
const mobileLinks = document.querySelector('.mobile-nav-links');
const mobileLink = document.querySelectorAll('.mobile-nav-link');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

//Using an if statement to check if mobileLinks have the showMenu class
// If it does, removing the showMenu class
//If it doesn't, adding the showMenu class

function toggleMenu() {
	if (mobileLinks.classList.contains('showMenu')) {
		mobileLinks.classList.remove('showMenu');
		closeIcon.style.display = 'none';
		menuIcon.style.display = 'block';
	} else {
		mobileLinks.classList.add('showMenu');
		closeIcon.style.display = 'block';
		menuIcon.style.display = 'none';
	}
}

//Setting closeIcon to display none
closeIcon.style.display = 'none';

//Adding a click event for hamburger
//When clicked, it will run the toggleMenu function
hamburger.addEventListener('click', toggleMenu);

//Looping through all of the menuItems and adding an click event to each of them
mobileLink.forEach((menuItem) => {
	menuItem.addEventListener('click', toggleMenu);
});

/*****************  IMAGE SLIDER ****************/

let slideIndex = 0;
changeSlides();

function changeSlides() {
	//Declaring our variables
	const slides = document.querySelectorAll('.slider-gallery');

	//Hiding all slides using for loop (Looping through all elements in slides)
	slides.forEach(function (slide) {
		slide.style.display = 'none';
	});

	//Add one to slideIndex
	slideIndex++;

	//If slideIndex is greater than the number of slides, resets it to 1
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	//Shows the current slide
	slides[slideIndex - 1].style.display = 'block';

	//Calling the 'showSlides' function every 3 sec
	setTimeout(changeSlides, 3000);

	// console.log(slideIndex);
}

/********************* BOOKING ****************************/

//Declaring variables
const open = document.querySelector('.slider-btn');
const close = document.querySelector('.close');
const booking = document.querySelector('.booking-container');
const body = document.body;

//When 'open' is clicked, sets 'booking' elements style to block
open.onclick = function () {
	booking.style.display = 'block';
};

//When 'close' is clicked, sets 'booking' elements style to none, if it has a style 'block'
close.onclick = function () {
	if (booking.style.display === 'block') {
		booking.style.display = 'none';
	}
};
