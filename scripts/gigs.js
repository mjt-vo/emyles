// remove expired gigs

function initGigs() {
  const now = Math.floor(Date.now() / 1000) - 14400,
    gigs = document.querySelectorAll('.gig');

  for (gig of gigs) {
    if (gig.dataset.expiration < now) gig.classList.add('expired');
  }
}