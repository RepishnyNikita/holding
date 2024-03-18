import Swiper from "swiper/bundle";

const swiperDirectorsTop = () => {
  const swiper = new Swiper(".directors__top-row", {
    slidesPerView: 1.06,
    spaceBetween: 6,

    breakpoints: {
      400: {
        slidesPerView: 1.7,
        loop: true,
      },
      545: {
        slidesPerView: 2,
        loop: false,
      },
      670: {
        slidesPerView: 2.5,
      },
      880: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },

    navigation: {
      nextEl: ".directors__top-next",
      prevEl: ".directors__top-prev",
    },
  });
};

export default swiperDirectorsTop;
