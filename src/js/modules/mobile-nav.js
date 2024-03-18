function mobileNav() {
  const navBtn = document.querySelectorAll(".nav-icon");
  const navMobileMenu = document.querySelector(".mobile-nav");

  for (let btn of navBtn) {
    btn.addEventListener("click", () => {
      navMobileMenu.classList.toggle("mobile-nav--active");
      document.body.classList.toggle("no-scroll");
    });
  }
}

export default mobileNav;
