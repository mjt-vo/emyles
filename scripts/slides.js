function initSlides() {
  const toggles = document.querySelectorAll('.slide-toggle'),
    container = document.querySelector('.slide-container'),
    slides = {};

  let isActive = false,
    currentNextIdx = 0,
    currentPrevIdx = 0;

  function handleSwipe() {
    let touchstartX = 0,
      touchendX = 0;

    container.addEventListener('touchstart', (e) => {
      touchstartX = e.changedTouches[0].screenX;
    }, false);

    container.addEventListener('touchend', (e) => {
      touchendX = e.changedTouches[0].screenX;
      handleTouch();
    }, false); 

    function handleTouch() {
      if (touchendX < touchstartX) {
        appendSlide(slides[currentNextIdx]);
      }
      if (touchendX > touchstartX) {
        appendSlide(slides[currentPrevIdx]);
      }
    }
  }

  function appendSlide(slide) {
    const {
      src,
      caption,
      nextIdx,
      prevIdx
    } = slide;

    // set state
    isActive = true;
    currentNextIdx = nextIdx;
    currentPrevIdx = prevIdx;

    // append slide
    container.innerHTML = `<a href="#" class="slide">
      <div>
        <img class="slide-image" src="${src}" alt="${caption}"/>
        <p class="slide-caption">${caption}</p>
      </div>
    </a>`;

    // use slide to advance to next slide
    document.querySelector('.slide-image').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      appendSlide(slides[nextIdx]);
    });

    handleSwipe();
  }

  function closeSlides() {
    // hide container
    container.classList.remove('active');
    // remove slide
    container.innerHTML = '';
    // disable
    isActive = false;
  }

  // keypress
  document.addEventListener('keydown', (e) => {
    if (isActive) {
      switch(e.key) {
        case 'Escape':
          closeSlides();
          break;
        case 'ArrowRight':
          appendSlide(slides[currentNextIdx]);
          break;
        case 'ArrowLeft':
          appendSlide(slides[currentPrevIdx]);
          break;
      }
    }
  })

  // container
  container.addEventListener('click', () => {
    closeSlides();
  });

  // toggles
  let i = 0;
  for (i; i < toggles.length; i++) {
    const toggle = toggles[i],
      { src, caption } = toggle.dataset;

    // define slide
    slides[i] = {
      src,
      caption,
      nextIdx: i === (toggles.length - 1) ? 0 : i + 1,
      prevIdx: i === 0 ? toggles.length - 1 : i - 1
    };
    const slide = slides[i];

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      // add slide
      appendSlide(slide);
      // show container
      container.classList.add('active');
    });
  }
}