import Swiper from "swiper/bundle";


const swiperCaseTop = () => {
  const swiper = new Swiper(".case__top-swiper", {
    // spaceBetween: 0,
    effect: "cards",
    grabCursor: true,
  });
};

export default swiperCaseTop;
