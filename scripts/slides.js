// slides are organized into "collections" so that mult. collections can live on the same page

function initSlides(windowObj) {
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

    // use slide to advance to next slide
    document.querySelector('.slide').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      appendSlide(slides[collection][nextIdx], collection);
    });
  }

  function closeSlides() {
    // unfreeze body
    body.classList.remove('freeze');
    // hide container
    container.classList.remove('active');
    // remove slide
    container.innerHTML = '';
    // disable
    isActive = false;
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