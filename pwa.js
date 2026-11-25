/* Bidesh English: register service worker + optional "install on phone" bar (home page only). */
(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  var KEY = 'be_pwa_dismiss';
  var isHome = /^\/(index\.html)?$/.test(location.pathname);
  var standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (!isHome || standalone) return;
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}

  var deferred = null;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  function bar(withButton) {
    if (document.getElementById('pwaBar')) return;
    var d = document.createElement('div');
    d.id = 'pwaBar';
    d.setAttribute('role', 'region');
    d.setAttribute('aria-label', 'ফোনে ইনস্টল');
    d.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0F5A33;color:#fff;font-family:inherit;font-size:15px;font-weight:600;line-height:1.4;';
    var t = document.createElement('span');
    t.style.cssText = 'flex:1;min-width:0;';
    t.textContent = withButton ? 'ফোনে অ্যাপের মতো রাখুন, এক ট্যাপে খুলবে।' : 'ব্রাউজারের মেনু (⋮ বা শেয়ার) থেকে "Add to Home Screen" দিন।';
    d.appendChild(t);
    if (withButton) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = 'ইনস্টল করুন';
      b.style.cssText = 'border:0;border-radius:999px;background:#fff;color:#0F5A33;font:inherit;font-weight:800;padding:8px 14px;min-height:40px;cursor:pointer;';
      b.onclick = function () {
        if (!deferred) return;
        deferred.prompt();
        deferred.userChoice.finally(function () { deferred = null; d.remove(); });
      };
      d.appendChild(b);
    }
    var x = document.createElement('button');
    x.type = 'button';
    x.setAttribute('aria-label', 'বন্ধ করুন');
    x.textContent = '✕';
    x.style.cssText = 'border:0;background:transparent;color:#fff;font:inherit;font-size:18px;min-width:40px;min-height:40px;cursor:pointer;';
    x.onclick = function () { try { localStorage.setItem(KEY, '1'); } catch (e) {} d.remove(); };
    d.appendChild(x);
    document.body.insertBefore(d, document.body.firstChild);
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    bar(true);
  });
  window.addEventListener('appinstalled', function () {
    var d = document.getElementById('pwaBar'); if (d) d.remove();
  });
  if (isIOS) { window.addEventListener('load', function () { setTimeout(function () { bar(false); }, 1500); }); }
})();
