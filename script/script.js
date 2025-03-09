"use strict";



const openmenu = document.querySelector(".header__body .open");
const krestik = document.querySelector(".kr");
const nav = document.querySelector(".header__nav");
const contactmenu = document.querySelector(".contactmenu");
const korzinamenu = document.querySelector(".korzinamenu");




openmenu.addEventListener("click", () => {
	nav.style.top = "0vh";
	document.body.style.overflow = 'hidden';
})

krestik.addEventListener("click", () => {
	nav.style.top = "-100vh";
	document.body.style.overflow = 'auto';
})


contactmenu.addEventListener("click", () => {
	
	if (nav.style.top = "0vh") {
		nav.style.top = "-100vh";
		document.body.style.overflow = 'auto';
	}
})

korzinamenu.addEventListener("click", () => {

	if (nav.style.top = "0vh") {
		nav.style.top = "-100vh";
		document.body.style.overflow = 'auto';
	}
})