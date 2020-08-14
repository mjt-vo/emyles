function initNav() {
  const nav = document.querySelector('nav'),
    toggle = document.querySelector('.nav-toggle');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}