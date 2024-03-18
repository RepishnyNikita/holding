import Swiper from "swiper/bundle";

const swiperCaseTop = () => {
  const swiper = new Swiper(".case__top-swiper", {
    effect: "cards",
    grabCursor: true,
  });
};

export default swiperCaseTop;
