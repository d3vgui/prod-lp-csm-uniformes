var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      centeredSlides: true,
    },
    575: {
      centeredSlides: false,
      spaceBetween: 30,
    },
    426: {
      spaceBetween: 20,
    },
    376: {
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});
