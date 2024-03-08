document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const burgerMenu = document.querySelector('.burger-menu');
  const cross = document.querySelector('.cross');
  const screenWidthThreshold = 730;

  window.addEventListener('resize', function () {
    if (window.innerWidth > screenWidthThreshold) {
      burgerMenu.classList.add('hidden');
    } else {
      burgerMenu.classList.remove('hidden');
    }
  });

  function toggleNav() {
    nav.classList.toggle('invisibleNav');
    burgerMenu.classList.toggle('hidden');
    cross.classList.toggle('hidden');
  }

  burgerMenu.addEventListener('click', function () {
    toggleNav();
  });

  cross.addEventListener('click', function () {
    toggleNav();
  });
});
