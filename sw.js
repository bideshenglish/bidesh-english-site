/* Bidesh English service worker.
   Policy: network-first (so new lessons always appear), cache only as offline fallback.
   Bump VERSION only if you change this file. */
var VERSION = 'be-v1';
var CORE = ['/', '/index.html', '/lesson.html', '/favicon-192.png', '/logo.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !isFont) return;

  e.respondWith(
    fetch(req).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: false }).then(function (hit) {
        if (hit) return hit;
        if (req.mode === 'navigate') {
          return caches.match(url.pathname.indexOf('lesson') > -1 ? '/lesson.html' : '/index.html').then(function (p) {
            return p || caches.match('/');
          });
        }
        return Response.error();
      });
    })
  );
});
