document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const setNavStyle = () => {
    if (window.scrollY > 120) {
      navbar.classList.add('navbar-white');
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('navbar-white');
    }
  };

  // set once on load, then on scroll
  setNavStyle();
  window.addEventListener('scroll', setNavStyle, { passive: true });
});
