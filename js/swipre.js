import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

let swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  speed: 300,

  autoplay: {
    delay: 4000,

    disableOnInteraction: false,
  },

  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
