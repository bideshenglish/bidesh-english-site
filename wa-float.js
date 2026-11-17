/* Floating WhatsApp button — Bidesh English
   নম্বর বা লেখা বদলাতে শুধু নিচের ৩টি লাইন বদলান। */
(function () {
  var NUMBER  = '8801356265826';
  var TIP     = 'এখনই লাইভ ক্লাস শুরু করতে চান?';
  var MESSAGE = 'আমি লাইভ ক্লাস সম্পর্কে জানতে চাই।';

  if (document.getElementById('waFloat')) return;

  var css =
    '#waFloat{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:40;display:flex;align-items:center;gap:10px;flex-direction:row-reverse;font-family:inherit;}' +
    '#waFloat .wa-btn-f{position:relative;flex:none;width:58px;height:58px;border-radius:50%;background:#25D366;display:grid;place-items:center;text-decoration:none;box-shadow:0 10px 22px -6px rgba(7,59,28,.55),0 0 0 0 rgba(37,211,102,.55);animation:waGlow 2.4s ease-out infinite;transition:transform .15s ease;}' +
    '#waFloat .wa-btn-f:hover{transform:scale(1.06);}' +
    '#waFloat .wa-btn-f:active{transform:scale(.96);}' +
    '#waFloat .wa-btn-f:focus-visible{outline:3px solid #0C3A27;outline-offset:3px;}' +
    '#waFloat .wa-btn-f svg{width:32px;height:32px;fill:#fff;display:block;}' +
    '#waFloat .wa-tip{position:relative;max-width:min(230px,calc(100vw - 110px));background:#fff;color:#0C3A27;font-weight:700;font-size:15.5px;line-height:1.45;padding:10px 14px;border-radius:16px;box-shadow:0 12px 26px -10px rgba(12,58,39,.55),0 0 0 1px rgba(12,58,39,.08);opacity:0;visibility:hidden;transform:translateX(10px) scale(.96);transform-origin:right center;transition:opacity .35s ease,transform .35s ease,visibility 0s linear .35s;text-decoration:none;}' +
    '#waFloat .wa-tip::after{content:"";position:absolute;right:-6px;top:50%;width:12px;height:12px;background:#fff;transform:translateY(-50%) rotate(45deg);border-radius:2px;box-shadow:2px -2px 3px -2px rgba(12,58,39,.2);}' +
    '#waFloat.show-tip .wa-tip{opacity:1;visibility:visible;transform:none;transition:opacity .35s ease,transform .35s ease,visibility 0s;}' +
    '@keyframes waGlow{0%{box-shadow:0 10px 22px -6px rgba(7,59,28,.55),0 0 0 0 rgba(37,211,102,.55);}70%{box-shadow:0 10px 22px -6px rgba(7,59,28,.55),0 0 0 16px rgba(37,211,102,0);}100%{box-shadow:0 10px 22px -6px rgba(7,59,28,.55),0 0 0 0 rgba(37,211,102,0);}}' +
    '@media (prefers-reduced-motion:reduce){#waFloat .wa-btn-f{animation:none;}#waFloat .wa-tip{transition:none;}}' +
    '@media print{#waFloat{display:none;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var href = 'https://wa.me/' + NUMBER + '?text=' + encodeURIComponent(MESSAGE);
  var box = document.createElement('div');
  box.id = 'waFloat';
  box.innerHTML =
    '<a class="wa-btn-f" href="' + href + '" target="_blank" rel="noopener" aria-label="WhatsApp-এ মেসেজ করুন">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.17c-.24.68-1.42 1.3-1.96 1.35-.5.05-.97.23-3.27-.68-2.77-1.09-4.55-3.93-4.69-4.11-.13-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.01.96-2.28.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.07.62.47.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.75 1.88.89.27.14.46.21.52.32.07.12.07.66-.17 1.34z"/></svg>' +
    '</a>' +
    '<a class="wa-tip" href="' + href + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' + TIP + '</a>';

  function mount() {
    document.body.appendChild(box);
    setTimeout(function () { box.classList.add('show-tip'); }, 3500);
    setTimeout(function () { box.classList.remove('show-tip'); }, 3500 + 7000);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
