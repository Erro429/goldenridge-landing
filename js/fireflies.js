// Hero fireflies: a handful of soft gold orbs drifting and pulsing over
// the pre-dawn film. Pure CSS animation; JS only spawns them with random
// positions, drift vectors, and rhythms.
(function () {
  'use strict';

  var host = document.querySelector('[data-fireflies]');
  if (!host) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var COUNT = 14;
  for (var i = 0; i < COUNT; i++) {
    var fly = document.createElement('span');
    fly.className = 'firefly';
    fly.style.left = (4 + Math.random() * 92).toFixed(1) + '%';
    fly.style.top = (8 + Math.random() * 84).toFixed(1) + '%';
    fly.style.setProperty('--fly-x', ((Math.random() - 0.5) * 120).toFixed(0) + 'px');
    fly.style.setProperty('--fly-y', ((Math.random() - 0.5) * 160).toFixed(0) + 'px');
    fly.style.setProperty('--fly-dur', (10 + Math.random() * 12).toFixed(1) + 's');
    fly.style.setProperty('--pulse-dur', (2.2 + Math.random() * 3.5).toFixed(1) + 's');
    fly.style.setProperty('--fly-delay', (-Math.random() * 12).toFixed(1) + 's');
    host.appendChild(fly);
  }
})();
