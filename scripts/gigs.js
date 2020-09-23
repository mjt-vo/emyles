// remove expired gigs

function initGigs() {
  const now = Math.floor(Date.now() / 1000) - 14400,
    gigs = document.querySelectorAll('.gig'),
    // message displayed if all gigs have expired
    noGigs = document.querySelector('.no-gigs');

  let expiredGigs = 0;

  for (gig of gigs) {
    if (gig.dataset.expiration < now) {
      gig.classList.add('expired');
      expiredGigs++;
    }
  }

  // show no gigs message
  if (expiredGigs === gigs.length) noGigs.classList.add('display');
}