// Whole-page scroll-scrubbed sunrise film: the video is fixed behind
// everything and total page scroll drives video.currentTime. All-intra
// encode makes every seek instant. Gated hard: reduced-motion and
// data-saver visitors never download the video and just see the poster.
(function () {
  'use strict';

  var video = document.querySelector('[data-film]');
  if (!video) return;

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var save = navigator.connection && navigator.connection.saveData;
  if (reduce || save) return; // poster only, no download, no scrub

  var mobile = matchMedia('(max-width: 768px)').matches;
  video.src = video.dataset[mobile ? 'srcMobile' : 'srcDesktop'];
  video.load();

  var duration = 0;
  var ticking = false;

  function progress() {
    var doc = document.documentElement;
    var runway = doc.scrollHeight - window.innerHeight;
    if (runway <= 0) return 0;
    return Math.min(1, Math.max(0, window.scrollY / runway));
  }

  function update() {
    ticking = false;
    if (!duration) return;
    var t = progress() * duration;
    if (Math.abs(video.currentTime - t) > 1 / 60) {
      video.currentTime = t;
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  video.addEventListener('loadedmetadata', function () {
    duration = video.duration;
    video.pause(); // never plays; scroll owns the timeline
    update();
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
})();
