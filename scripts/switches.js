// switches toggle between the display of multiple things; ex: /bio

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

        // set current switch to current state
        let j = 0;
        for (j; j < switches.length; j++) {
          if (j !== idx) {
            switches[j].classList.remove('current');
            switchContainer.children[j].classList.remove('active');
          }
        }
        switchElm.classList.add('current');
        switchContainer.children[idx].classList.add('active');
      });
    }

  }
}