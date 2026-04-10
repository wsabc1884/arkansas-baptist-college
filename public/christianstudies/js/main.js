/* ============================================================
   ABC Christian Studies — Shared Site JavaScript
   ============================================================ */

// ---- Mobile Navigation ----
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
})();

// ---- Accordion ----
(function () {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = body.classList.contains('open');

      // Close all in same parent
      const parent = btn.closest('[data-accordion-group]');
      if (parent) {
        parent.querySelectorAll('.accordion-body.open').forEach(b => {
          b.classList.remove('open');
          b.previousElementSibling.classList.remove('active');
        });
      }

      if (!isOpen) {
        body.classList.add('open');
        btn.classList.add('active');
      }
    });
  });
})();

// ---- Tabs (Concentration explorer) ----
(function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(target);
      if (pane) pane.classList.add('active');
    });
  });
})();

// ---- Active nav link highlighting ----
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ---- Lead capture form (Formspree — delivers to christianstudies@arkansasbaptist.edu) ----
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqoglje';

(function () {
  const forms = document.querySelectorAll('[data-lead-form]');
  forms.forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Submitting…';
      btn.disabled = true;

      const formData = new FormData(form);
      formData.append('_subject', 'New Inquiry — McKissic School of Christian Studies');
      formData.append('page_source', window.location.pathname);
      formData.append('submitted_at', new Date().toISOString());

      const firstName = formData.get('first_name') || 'friend';

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.innerHTML = `
            <div style="text-align:center;padding:40px 20px;">
              <div style="font-size:3rem;margin-bottom:16px;">✅</div>
              <h3 style="color:var(--navy);margin-bottom:8px;">Thank you, ${firstName}!</h3>
              <p>We'll be in touch within 1–2 business days.<br>
              You can also call us at <a href="tel:5014201200" style="color:var(--gold);font-weight:600;">(501) 420-1200</a>.</p>
            </div>`;
        } else {
          throw new Error('Formspree error');
        }
      } catch {
        btn.textContent = originalText;
        btn.disabled = false;
        const err = form.querySelector('.form-error') || document.createElement('p');
        err.className = 'form-error';
        err.style.cssText = 'color:red;font-size:.875rem;margin-top:12px;';
        err.textContent = 'Something went wrong. Please try again or call (501) 420-1200.';
        form.appendChild(err);
      }
    });
  });
})();

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
