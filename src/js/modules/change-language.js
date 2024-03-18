const changeLang = () => {
  const langBtn = document.querySelectorAll(".header__lang-btn");
  const langSelect = document.querySelector(".header__lang-select");

  for (let btn of langBtn) {
    btn.addEventListener("click", () => {
      langSelect.classList.toggle("header__lang-select--active");
    });
  }
};

export default changeLang;
