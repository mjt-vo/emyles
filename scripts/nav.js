function initNav() {
  const nav = document.querySelector('nav'),
    mainSection = document.querySelector('section.main'),
    toggles = document.querySelectorAll('.nav-toggle');

  for (toggle of toggles) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      mainSection.classList.toggle('hide');
    });
  }
}