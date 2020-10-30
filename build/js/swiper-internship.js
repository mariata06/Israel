var swiper = Swiper;
var swiper2 = Swiper;
var swiperExist = false;

/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)"); // было max-width: 768px
  let tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)"); // было (min-width: 769px) and (max-width: 1024px)
  let desktop = window.matchMedia("(min-width: 1024px)"); // было (min-width: 1025px)

  // Enable (for mobile)
  if(mobile.matches) {
    if (!swiperExist) {
      swiperExist = true;
      swiper = new Swiper(".swiper-container.swiper-container--internship", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
      swiper2 = new Swiper(".swiper-container.swiper-container--programmes", {
        slidesPerView: 1.9,//window.innerWidth*3.1/568 + 5 - 3.1*768/568,//1.9,
        //spaceBetween: 30,
        /*
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },*/
      });
    }
  }
    // Disable (for tablet)
  else if(tablet.matches) {
    if (swiperExist) {
      swiper.destroy();
      swiper2.destroy();
      swiperExist = false;
    }
  }
    // Disable (for desktop)
  else if(desktop.matches) {
    if (swiperExist) {
      swiper.destroy();
      swiper2.destroy();
      swiperExist = false;
    }
  }
}

/* On Load
**************************************************************/
window.addEventListener("load", function() {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener("resize", function() {
  swiperMode();
});

/*
var bullets = document.querySelectorAll(".swiper-pagination-bullet");
console.log(bullets);

var pag = document.querySelectorAll(".internship__pagination");
console.log(pag);
console.log("test");

bullets.forEach.addEventListener("click", function (evt) {
  console.log(evt);
  var bulletActive = document.querySelector(".swiper-pagination-bullet-active");
  if (evt !== bulletActive) {
    bulletActive.classList.remove("swiper-pagination-bullet-active");
    evt.classList.add("swiper-pagination-bullet-active");
  }
})*/
