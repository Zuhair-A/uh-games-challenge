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
  const items = document.querySelectorAll('.text-side');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.3 
    });

    items.forEach(el => io.observe(el));

  // set once on load, then on scroll
  setNavStyle();
  window.addEventListener('scroll', setNavStyle, { passive: true });
});
