var slideIndex = 1;
var slideElapsedTime = 0;

showSlides(slideIndex);
setInterval(nextSlide, 1000);

function nextSlide() {
    if (slideElapsedTime >= 5000) {
        changeSlide(1);
    }

    slideElapsedTime += 1000;
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

    slideElapsedTime = 0;
}
