/* nav.js — Injects the homepage-style navbar (top contact bar + sticky navbar +
   mobile drawer) into every interior page of the ABC McKissic School microsite.

   Each page simply needs:
     <header class="site-header" id="siteHeader"></header>
   (or any legacy .site-header / glass-navbar / about-navbar / legacy-navbar)
   and this script will replace it with the standard navbar. */

(function () {
  'use strict';

  /* ---- Detect current page for active nav link ---- */
  const page = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: '/christianstudies',                  label: 'Home' },
    { href: '/christianstudies/about',            label: 'About' },
    { href: '/christianstudies/degrees',          label: 'Degrees' },
    { href: '/christianstudies#certificate-programs', label: 'Certificates' },
    { href: '/christianstudies/faculty',          label: 'Faculty' },
    { href: '/christianstudies/stories',          label: 'Stories' },
  ];

  const navItems = links.map(l =>
    `<li><a href="${l.href}" class="nav-link${page === l.href ? ' active' : ''}">${l.label}</a></li>`
  ).join('');

  const mobileLinks = links.map(l =>
    `<a href="${l.href}"${page === l.href ? ' class="active"' : ''}>${l.label}</a>`
  ).join('\n    ');

  /* ---- Top contact bar ---- */
  const topBar = `
  <div class="top-contact-bar">
    <div class="container">
      <div class="contact-info-top">
        <div class="contact-item-top">
          <i class="fas fa-map-marker-alt"></i>
          <span>1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202</span>
        </div>
        <div class="contact-item-top">
          <i class="fas fa-phone"></i>
          <a href="tel:5014201200">(501) 420-1200</a>
        </div>
        <div class="contact-item-top">
          <i class="fas fa-envelope"></i>
          <a href="mailto:christianstudies@arkansasbaptist.edu">christianstudies@arkansasbaptist.edu</a>
        </div>
      </div>
    </div>
  </div>`;

  /* ---- Main navbar (matches homepage exactly) ---- */
  const navbar = `
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="nav-wrapper">

        <!-- Logo -->
        <div class="nav-logo">
          <a href="/christianstudies" aria-label="McKissic School of Christian Studies — Home">
            <img src="/christianstudies-assets/images/mckissic-seal-new.png"
                 alt="McKissic School of Christian Studies seal"
                 class="nav-logo__icon nav-logo__seal" />
          </a>
          <a href="/christianstudies" class="nav-logo__text-link">
            <div class="nav-logo__text">
              <span class="nav-logo__name">Arkansas Baptist College</span>
              <span class="nav-logo__sub">McKissic School of Christian Studies</span>
            </div>
          </a>
        </div>

        <!-- Desktop Menu -->
        <ul class="nav-menu" id="navMenu">
          ${navItems}
        </ul>

        <!-- CTA Buttons -->
        <div class="nav-ctas">
          <a href="mailto:christianstudies@arkansasbaptist.edu"
             class="btn btn--outline-navy btn--sm">Request Info</a>
          <a href="https://www.arkansasbaptist.edu/enrollment/apply"
             target="_blank" rel="noopener"
             class="btn btn--gold btn--sm">Apply Now</a>
        </div>

        <!-- Mobile Toggle -->
        <button class="mobile-menu-toggle" id="mobileMenuToggle"
                aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;

  /* ---- Mobile drawer ---- */
  const mobileNav = `
  <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
    ${mobileLinks}
    <div class="mobile-ctas">
      <a href="mailto:christianstudies@arkansasbaptist.edu"
         class="btn btn--outline-navy">Request Info</a>
      <a href="https://www.arkansasbaptist.edu/enrollment/apply"
         target="_blank" rel="noopener"
         class="btn btn--gold">Apply Now</a>
    </div>
  </nav>`;

  /* ---- Inject: replace any old header variant ---- */
  function injectNav() {
    // Remove announcement banner if present
    document.querySelectorAll('.banner').forEach(el => el.remove());

    // Remove any old header variant
    const oldHeader = document.querySelector(
      'header.site-header, header#siteHeader, ' +
      'header.glass-navbar, header#glassNavbar, ' +
      'header.about-navbar, header#aboutNavbar, ' +
      'header.legacy-navbar, header#legacyNavbar'
    );

    if (oldHeader) {
      oldHeader.insertAdjacentHTML('beforebegin', topBar + navbar + mobileNav);
      oldHeader.remove();
    } else {
      // Fallback: prepend after <body>
      document.body.insertAdjacentHTML('afterbegin', topBar + navbar + mobileNav);
    }

    // Remove any leftover old mobile nav variants
    document.querySelectorAll(
      'nav.glass-mobile-nav, nav.about-mobile-nav, nav.legacy-mobile-nav'
    ).forEach(el => el.remove());
  }

  injectNav();

  /* ---- Measure & set CSS variables for header offsets ----
     Desktop: both bars are position:fixed → --nav-total-h drives body padding-top
     Mobile:  contact bar is relative (scrolls away), navbar is sticky →
              --navbar-h drives .mobile-nav top so the drawer opens right below the bar ---- */
  function setNavTotalH() {
    const topBar = document.querySelector('.top-contact-bar');
    const navBar = document.getElementById('navbar');
    const root   = document.documentElement;
    const isMobile = window.innerWidth <= 768;

    if (navBar) {
      const navH   = navBar.getBoundingClientRect().height;
      const barH   = topBar ? topBar.getBoundingClientRect().height : 0;
      const total  = navH + (isMobile ? 0 : barH); // on mobile bar is in normal flow

      root.style.setProperty('--nav-total-h',  total + 'px');
      root.style.setProperty('--navbar-h',     navH  + 'px');   // navbar alone
      root.style.setProperty('--mobile-nav-top', (isMobile ? navH : total) + 'px'); // legacy alias
    }
  }
  window.addEventListener('DOMContentLoaded', setNavTotalH);
  window.addEventListener('load',   setNavTotalH);
  window.addEventListener('resize', setNavTotalH, { passive: true });
  setNavTotalH(); // run immediately — nav is already in the DOM

  /* ---- Navbar scroll shadow ---- */
  const nb = document.getElementById('navbar');
  if (nb) {
    window.addEventListener('scroll', () =>
      nb.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  }

  /* ---- Mobile menu toggle ---- */
  const toggle   = document.getElementById('mobileMenuToggle');
  const mobileNv = document.getElementById('mobileNav');
  if (toggle && mobileNv) {
    toggle.addEventListener('click', () => {
      const open = mobileNv.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNv.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNv.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('click', (e) => {
      if (mobileNv.classList.contains('open') &&
          !mobileNv.contains(e.target) &&
          !toggle.contains(e.target)) {
        mobileNv.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Fade-in on scroll ---- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => io.observe(el));
  }

  /* ---- Accordion ---- */
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');
      document.querySelectorAll('.accordion-btn.active').forEach(b => {
        b.classList.remove('active');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) { btn.classList.add('active'); body.classList.add('open'); }
    });
  });

  /* ---- Tab component (degrees page) ---- */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      btn.closest('section, div').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      const pane = document.getElementById(target);
      if (pane) pane.classList.add('active');
    });
  });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Lead capture form ---- */
  const form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      try {
        const res = await fetch('tables/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          form.innerHTML = '<div style="text-align:center;padding:40px 0;"><i class="fas fa-check-circle" style="font-size:3rem;color:var(--gold);margin-bottom:16px;display:block;"></i><h3 style="color:var(--navy);">Thank You!</h3><p>We\'ll be in touch soon.</p></div>';
        } else { throw new Error('Server error'); }
      } catch {
        form.insertAdjacentHTML('beforeend', '<p style="color:red;margin-top:12px;">Something went wrong. Please try again or call us directly.</p>');
      }
    });
  }

})();
