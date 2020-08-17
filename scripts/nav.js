function initNav() {
  const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    toggle = document.querySelector('.nav-toggle');

  let active = false;

  function closeMenu () {
    toggle.innerHTML = 'menu';
    active = false;
  }

  body.addEventListener('click', () => {
    if (active) {
      nav.classList.remove('active');
      closeMenu();
    }
  });

  nav.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    // closed state
    if (active) {
      closeMenu();
    }
    // open state
    else {
      toggle.innerHTML = 'close';
      active = true;
    }
  });
}