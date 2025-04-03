const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
