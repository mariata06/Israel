var swiper = Swiper;
var swiper2 = Swiper;
var swiperExist = false;

/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
  let desktop = window.matchMedia('(min-width: 1025px)');

  // Enable (for mobile)
  if(mobile.matches) {
    if (!swiperExist) {
      swiperExist = true;
      swiper = new Swiper('.swiper-container.swiper-container--internship', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
      swiper2 = new Swiper('.swiper-container.swiper-container--programmes', {
        slidesPerView: 1.9,//window.innerWidth*3.1/568 + 5 - 3.1*768/568,//1.9,
        //spaceBetween: 30,
        /*
        pagination: {
        el: '.swiper-pagination',
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
window.addEventListener('load', function() {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  swiperMode();
});
