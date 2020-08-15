function initNav() {
  const nav = document.querySelector('nav'),
    mainSection = document.querySelector('section.main'),
    toggle = document.querySelector('.nav-toggle');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}