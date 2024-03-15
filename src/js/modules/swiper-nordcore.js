import Swiper from "swiper";

const swiperNordcore = () => {
  const swiper = new Swiper(".nordcore__swiper", {
    slidesPerView: 1.14,
    spaceBetween: 6,

    breakpoints: {
      750: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });
};

export default swiperNordcore;
