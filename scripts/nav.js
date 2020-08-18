// nav.js controls opened/closed states of mobile navigation

function initNav() {
  const nav = document.querySelector('nav'),
    body = document.querySelector('body'),
    toggle = document.querySelector('.nav-toggle'),
    bgToggle = document.querySelector('.nav-bg-toggle');

  let active = false;

  function closeMenu () {
    // unfreeze body
    const scrollY = body.style.top;
    body.classList.remove('freeze');
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    nav.classList.remove('active');
    bgToggle.classList.remove('active');
    toggle.innerHTML = 'menu';
    active = false;
  }

  toggle.addEventListener('click', () => {
    // closed state
    if (active) {
      closeMenu();
    }
    // open state
    else {
      toggle.innerHTML = 'close';
      nav.classList.add('active');
      bgToggle.classList.add('active');
      // freeze body
      body.style.top = `-${window.scrollY}px`;
      body.classList.add('freeze');
      active = true;
    }
  });

  // nav-bg-toggle prevents other features from being activated when bg is used to close menu
  bgToggle.addEventListener('click', () => {
    if (active) closeMenu();
  });
}