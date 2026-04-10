/* ============================================================
   McKissic School of Christian Studies — Page Preloader
   Renders a deep-purple full-screen overlay with the official
   McKissic seal.  Sequence:
     1. Overlay fills screen (CSS default: opacity 1)
     2. 80ms   → seal + wordmark fade in (.preloader--ready)
     3. Page loads (window.load) OR 2.4s max timeout
     4. 300ms grace → overlay fades out (.preloader--hidden)
     5. After fade (550ms) → overlay removed (.preloader--removed)
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Build the overlay HTML ─────────────────────────── */
  const overlay = document.createElement('div');
  overlay.id = 'page-preloader';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-label', 'Loading McKissic School of Christian Studies');
  overlay.innerHTML = `
    <img
      class="preloader__seal"
      src="images/scs-seal-official.png"
      alt="McKissic School of Christian Studies Seal"
      draggable="false"
    />
    <p class="preloader__wordmark">Where Purpose Is Your Major</p>
    <div class="preloader__bar" aria-hidden="true"></div>
  `;

  /* ── 2. Inject as the very first child of <body> ─────── */
  document.body.insertBefore(overlay, document.body.firstChild);

  /* ── 3. Trigger entrance animation on next frame ──────── */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.classList.add('preloader--ready');
    });
  });

  /* ── 4. Dismiss logic ─────────────────────────────────── */
  var dismissed = false;

  function dismiss() {
    if (dismissed) return;
    dismissed = true;

    // Short grace period so the seal is briefly visible even on
    // fast connections (feels intentional rather than a flash)
    setTimeout(function () {
      overlay.classList.add('preloader--hidden');

      // Remove from DOM after CSS transition completes (0.55s)
      setTimeout(function () {
        overlay.classList.add('preloader--removed');
      }, 600);
    }, 300);
  }

  /* Dismiss when the page is fully loaded */
  if (document.readyState === 'complete') {
    dismiss();
  } else {
    window.addEventListener('load', dismiss);
  }

  /* Hard-cap: never block user for more than 2.4 seconds */
  setTimeout(dismiss, 2400);

}());
