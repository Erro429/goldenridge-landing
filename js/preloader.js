// Sunrise preloader: the sun climbs over the horizon line, the wordmark
// fades in with the light, then the whole loader lifts away like dawn.
(function () {
  'use strict';

  var loader = document.querySelector('[data-loader]');
  if (!loader || !loader.classList.contains('is-active')) return;

  var RISE_MS = 1600;
  var HOLD_MS = 400;
  var HARD_TIMEOUT_MS = 4000; // nobody gets trapped, ever

  document.documentElement.style.overflow = 'hidden';

  var start = null;
  function rise(ts) {
    if (start === null) start = ts;
    var t = Math.min((ts - start) / RISE_MS, 1);
    var eased = 1 - Math.pow(1 - t, 3);
    // sun climbs from below the horizon to fully crested
    loader.style.setProperty('--sun-rise', (eased * 46).toFixed(2));
    loader.style.setProperty('--word-in', Math.max(0, (t - 0.35) / 0.65).toFixed(2));
    if (t < 1) {
      requestAnimationFrame(rise);
    } else {
      setTimeout(lift, HOLD_MS);
    }
  }

  var done = false;
  function lift() {
    if (done) return;
    done = true;
    loader.classList.add('is-lift');
    setTimeout(function () {
      loader.remove();
      document.documentElement.style.overflow = '';
    }, 950);
  }

  requestAnimationFrame(rise);
  setTimeout(lift, HARD_TIMEOUT_MS);
})();
