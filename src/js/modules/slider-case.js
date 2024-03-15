import Swiper from "swiper";

const swiperCase = () => {
  const swiper = new Swiper(".case__swiper", {
    slidesPerView: 1.05,
    spaceBetween: 6,

    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 7,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 9,
      },
    },
  });
};

export default swiperCase;
