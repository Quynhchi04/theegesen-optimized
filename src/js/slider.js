new Swiper(".swiper-banner", {
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".banner-next",
    prevEl: ".banner-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
});
new Swiper(".our-swiper-mobile", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 32,
  pagination: {
    el: ".our-pagination-mobile",
    clickable: true,
  },
});
new Swiper(".our-swiper-desktop", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".our-pagination-desktop",
    clickable: true,
  },
});
new Swiper(".news-swiper", {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  speed: 500,
  spaceBetween: 20,
  pagination: {
    el: ".news-pagination",
    clickable: true,
  },
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 26,
      centeredSlides: false,
    },
    1380: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
const tickerS = new Swiper(".ticker-swipe", {
  direction: "vertical",
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
});
const tickerSwipe = document.querySelector(".ticker-swipe");
tickerSwipe.onmouseenter = function () {
  tickerS.autoplay.stop();
};
tickerSwipe.onmouseleave = function () {
  tickerS.autoplay.start();
};
