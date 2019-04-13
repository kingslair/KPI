
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}


var slides1 = document.querySelectorAll('#slides1 .slide1');
var currentSlide1 = 0;
var slideInterval1 = setInterval(nextSlide1,2000);

function nextSlide1(){
	slides1[currentSlide1].className = 'slide1';
	currentSlide1 = (currentSlide1+1)%slides1.length;
	slides1[currentSlide1].className = 'slide1 showing1';
}


var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;
var slideInterval2 = setInterval(nextSlide2,2000);

function nextSlide2(){
	slides2[currentSlide2].className = 'slide2';
	currentSlide2 = (currentSlide2+1)%slides2.length;
	slides2[currentSlide2].className = 'slide2 showing2';
}


var slides3 = document.querySelectorAll('#slides3 .slide3');
var currentSlide3 = 0;
var slideInterval3 = setInterval(nextSlide3,2000);

function nextSlide3(){
	slides3[currentSlide3].className = 'slide3';
	currentSlide3 = (currentSlide3+1)%slides3.length;
	slides3[currentSlide3].className = 'slide3 showing3';
}