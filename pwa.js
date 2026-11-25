/* Bidesh English: register service worker + permanent "install" button (home page only, hidden once installed). */
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
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var bar, help;

  function build() {
    if (bar) return;
    bar = document.createElement('div');
    bar.id = 'pwaBar';
    bar.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 14px;background:#0F5A33;font-family:inherit;';
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = 'ইনস্টল করুন';
    b.style.cssText = 'border:0;border-radius:999px;background:#fff;color:#0F5A33;font:inherit;font-size:16px;font-weight:800;padding:8px 22px;min-height:44px;cursor:pointer;';
    help = document.createElement('div');
    help.style.cssText = 'display:none;color:#fff;font-size:14.5px;font-weight:600;line-height:1.45;text-align:center;max-width:420px;';
    b.onclick = function () {
      if (deferred) {
        deferred.prompt();
        deferred.userChoice.finally(function () { deferred = null; });
        return;
      }
      help.textContent = isIOS
        ? 'নিচের শেয়ার বাটনে ট্যাপ করে "Add to Home Screen" দিন।'
        : 'ব্রাউজারের তিন-ডট (⋮) মেনুতে ট্যাপ করে "Install app" বা "Add to Home screen" দিন।';
      help.style.display = 'block';
    };
    bar.appendChild(b);
    bar.appendChild(help);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  function ready(fn) { if (document.body) fn(); else document.addEventListener('DOMContentLoaded', fn); }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
  });
  window.addEventListener('appinstalled', function () { if (bar) bar.remove(); bar = null; });
  ready(build);
})();
