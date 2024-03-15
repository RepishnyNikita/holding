import Swiper from "swiper";

const swiperSwift = () => {
  const swiper = new Swiper(".swift__swiper", {
    slidesPerView: 1.2,
    spaceBetween: 6,

    breakpoints: {
      750: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });
};

export default swiperSwift;
