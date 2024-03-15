import Swiper from "swiper/bundle";

const swiperDirectorsBot = () => {
  const swiperBot = new Swiper(".directors__bot-row", {
    slidesPerView: 1.06,
    spaceBetween: 6,


    breakpoints: {
      390: {
        slidesPerView: 1.5,
      },
      480: {
        slidesPerView: 1.7,
      },
      560: {
        slidesPerView: 2,
      },
      680: {
        slidesPerView: 3,
      },
      892: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
    },

    navigation: {
      nextEl: ".directors__bot-next",
      prevEl: ".directors__bot-prev",
    },
  });
};

export default swiperDirectorsBot;
