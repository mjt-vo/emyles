function initSlides() {
  const toggles = document.querySelectorAll('.slide-toggle'),
    container = document.querySelector('.slide-container'),
    slides = {};

  container.addEventListener('click', () => {
    // hide container
    container.classList.remove('active');
    // remove slide
    container.innerHTML = '';
  });

  let i = 0;
  for (i; i < toggles.length; i++) {
    const toggle = toggles[i],
      { src, caption } = toggle.dataset;

    slides[i] = {
      src,
      caption
    };

    toggle.addEventListener('click', () => {
      // add slide
      container.innerHTML += `<div class="slide">
        <img class="slide-image" src="${src}" alt="${caption}"/>
        <p class="slide-caption">${caption}</p>
      </div>`;

      document.querySelector('.slide').addEventListener('click', (e) => {
        e.stopPropagation();
        // TO DO: move to prev/next slides
      });

      // show container
      container.classList.add('active');
    });
  }

  console.log(slides)
}