var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i = 0;
  var slides = document.querySelector(".review__item");
  var numberSlide = document.querySelector(".number");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i=0; i< slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < numberSlide.length; i++) {
    numberSlide[i].className = dots[i].className.replace("--active","");
  }
  slides[slideIndex-1].style.display = "block";
  numberSlide[slideIndex-1].className+="--active";
}
