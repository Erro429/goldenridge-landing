// Scroll choreography: reveals, ledger stamps, sticky pill.
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----- generic reveals -----
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // ----- ledger rows stamp in, one after another -----
  var stamps = document.querySelectorAll('.stamp');
  if (!reduce && 'IntersectionObserver' in window) {
    var rows = Array.prototype.slice.call(stamps);
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var idx = rows.indexOf(el);
        setTimeout(function () { el.classList.add('is-in'); }, (idx % 6) * 130);
        sio.unobserve(el);
      });
    }, { threshold: 0.4 });
    stamps.forEach(function (el) { sio.observe(el); });
  } else {
    stamps.forEach(function (el) { el.classList.add('is-in'); });
  }

  // ----- liquid-glass pill: visible between hero and finale -----
  var pill = document.querySelector('[data-pill]');
  var hero = document.querySelector('.hero');
  var flood = document.querySelector('.flood');
  if (pill && hero && flood && 'IntersectionObserver' in window) {
    var heroGone = false;
    var floodHere = false;
    var update = function () {
      pill.classList.toggle('is-visible', heroGone && !floodHere);
    };
    new IntersectionObserver(function (en) {
      heroGone = !en[0].isIntersecting;
      update();
    }, { threshold: 0.1 }).observe(hero);
    new IntersectionObserver(function (en) {
      floodHere = en[0].isIntersecting;
      update();
    }, { threshold: 0.1 }).observe(flood);
  }
})();
