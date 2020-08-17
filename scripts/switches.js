// switches toggle between the display of two things; ex: /bio

function initSwitches() {
  // collect all switch containers
  const switchContainers = document.querySelectorAll('.switch-container');
  for (const switchContainer of switchContainers) {
    const { target } = switchContainer.dataset;

    // collect all switches of a switch container
    const switches = document.querySelectorAll(`.switch-${target}`);
    let i = 0;
    for (i; i < switches.length; i++) {
      const switchElm = switches[i],
        idx = i;

      switchElm.addEventListener('click', (e) => {
        e.preventDefault();

        if (idx > 0) {
          switchContainer.classList.add('active');
          switches[0].classList.remove('current');
        }
        else {
          switchContainer.classList.remove('active');
          switches[1].classList.remove('current');
        }

        switchElm.classList.add('current');
      });
    }

  }
}