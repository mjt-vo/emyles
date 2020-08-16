function initNav() {
  const nav = document.querySelector('nav'),
    toggle = document.querySelector('.nav-toggle');

  let active = false;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    // closed state
    if (active) {
      toggle.innerHTML = 'menu';
      active = false;
    }
    // open state
    else {
      toggle.innerHTML = 'close';
      active = true;
    }
  });
}