import Swiper from "swiper";

const mediaFiltre = () => {
  const tags = document.querySelectorAll("[data-filtre]");
  const tagsValue = document.querySelectorAll("[data-filtre-value]");
  const mobileBtnFiltre = document.querySelector(".media__filtre-icon");
  const mobileWrapFiltre = document.querySelector(".media__filtre-wrapper");

  const swiper = new Swiper(".media__swiper", {
    slidesPerView: 1,
    spaceBetween: 6,

    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 9,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 9,
      },
    },
  });

  for (let btn of tags) {
    btn.addEventListener("click", function () {
      for (let btn of tags) {
        btn.classList.remove("media__filtre-tags--active");
      }

      this.classList.add("media__filtre-tags--active");

      for (let value of tagsValue) {
        if (this.dataset.filtre === "lost") {
          value.classList.remove("none");
        } else {
          if (value.dataset.filtreValue === this.dataset.filtre) {
            value.classList.remove("none");
          } else {
            value.classList.add("none");
          }
        }
      }

      swiper.update();
    });
  }

  mobileBtnFiltre.addEventListener("click", () => {
    mobileBtnFiltre.classList.toggle("media__filtre-icon--active");
    mobileWrapFiltre.classList.toggle("media__filtre-wrapper--mobile");
  });
};

export default mediaFiltre;
