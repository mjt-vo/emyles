// slides are organized into "collections" so that mult. collections can live on the same page

function initSlides() {
  const container = document.querySelector('.slide-container')
    body = document.querySelector('body'),
    slides = {};

  // state
  let isActive = false,
    currentNextIdx = 0,
    currentPrevIdx = 0,
    currentCollection = 'A';

  // collect all collections
  const collections = document.querySelectorAll('.slide-collection');
  for (const collectionElm of collections) {    
    const { collection } = collectionElm.dataset;

    // store collection
    slides[collection] = {};
    const collectionObj = slides[collection];

    // collect all slides of a collection
    const toggles = document.querySelectorAll(`.slide-toggle-${collection}`);
    let i = 0;
    for (i; i < toggles.length; i++) {
      const toggle = toggles[i],
      { src, caption } = toggle.dataset;

      // store slide
      collectionObj[i] = {
        src,
        caption,
        nextIdx: i === (toggles.length - 1) ? 0 : i + 1,
        prevIdx: i === 0 ? toggles.length - 1 : i - 1
      };
      const slide = collectionObj[i];

      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        // add slide
        appendSlide(slide, collection);
        // freeze body
        body.style.top = `-${window.scrollY}px`;
        body.classList.add('freeze');
        // show container
        container.classList.add('active');
      });
    }
  }  

  function appendSlide(slide, collection) {
    const {
      src,
      caption,
      nextIdx,
      prevIdx
    } = slide;

    // set state
    isActive = true;
    currentCollection = collection;
    currentNextIdx = nextIdx;
    currentPrevIdx = prevIdx;

    // append slide
    container.innerHTML = `<a href="#" class="slide">
        <img class="slide-image" src="${src}" alt="${caption}"/>
      </a>
      <p class="slide-caption">${caption}</p>`;

    const slide = document.querySelector('.slide')

    // use slide to advance to next slide
    slide.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      appendSlide(slides[collection][nextIdx], collection);
    });

    handleSwipe(slide);
  }

  function closeSlides() {
    // unfreeze body
    const scrollY = body.style.top;
    body.classList.remove('freeze');
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // hide container
    container.classList.remove('active');
    // remove slide
    container.innerHTML = '';
    // disable
    isActive = false;
  }

  function handleSwipe(slide) {
    let touchstartX = 0,
      touchendX = 0;

    slide.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
    }, false);

    slide.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      handleGesture();
    }, false); 

    function handleGesture() {
      // swipe left
      if (touchendX <= touchstartX) {
        appendSlide(slides[currentCollection][currentNextIdx], currentCollection);
      }
      // swipe right
      if (touchendX >= touchstartX) {
        appendSlide(slides[currentCollection][currentPrevIdx], currentCollection);
      }
      // tap
      if (touchendY === touchstartY) {
        appendSlide(slides[currentCollection][currentNextIdx], currentCollection);
      }
    }
  }

  // make container a toggle to close slides
  container.addEventListener('click', () => {
    closeSlides();
  });

  // keypress
  document.addEventListener('keydown', (e) => {
    if (isActive) {
      switch(e.key) {
        case 'Escape':
          closeSlides();
          break;
        case 'ArrowRight':
          appendSlide(slides[currentCollection][currentNextIdx], currentCollection);
          break;
        case 'ArrowLeft':
          appendSlide(slides[currentCollection][currentPrevIdx], currentCollection);
          break;
      }
    }
  });
}