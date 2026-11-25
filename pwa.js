/* Bidesh English: register service worker + "install" button on the home page.
   Shown only when the browser can really install the app; hidden once installed. */
(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  var isHome = /^\/(index\.html)?$/.test(location.pathname);
  var standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (!isHome || standalone) return;

  var deferred = null;
  var bar = null;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  function show() {
    if (bar || !document.body) return;
    bar = document.createElement('div');
    bar.id = 'pwaBar';
    bar.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 14px;background:#0F5A33;font-family:inherit;';
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = 'ইনস্টল করুন';
    b.style.cssText = 'border:0;border-radius:999px;background:#fff;color:#0F5A33;font:inherit;font-size:16px;font-weight:800;padding:8px 22px;min-height:44px;cursor:pointer;';
    bar.appendChild(b);
    var help = null;
    if (isIOS) {
      help = document.createElement('div');
      help.style.cssText = 'display:none;color:#fff;font-size:14.5px;font-weight:600;line-height:1.45;text-align:center;max-width:420px;';
      help.textContent = 'নিচের শেয়ার বাটনে ট্যাপ করে "Add to Home Screen" দিন।';
      bar.appendChild(help);
    }
    b.onclick = function () {
      if (deferred) {
        var d = deferred; deferred = null;
        d.prompt();
        d.userChoice.then(function (r) { if (r && r.outcome === 'accepted') hide(); else hide(); });
      } else if (help) {
        help.style.display = 'block';
      }
    };
    document.body.insertBefore(bar, document.body.firstChild);
  }
  function hide() { if (bar) { bar.remove(); bar = null; } }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
  });
  window.addEventListener('appinstalled', hide);
  if (isIOS) { document.addEventListener('DOMContentLoaded', show); }
})();
