/* Shared header/footer builder for all inner pages */
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'degrees.html', label: 'Degrees &amp; Courses' },
    { href: 'faculty.html', label: 'Faculty' },
    { href: 'stories.html', label: 'Student Stories' },
    { href: 'faith.html', label: 'Faith &amp; Community' },
    { href: 'admissions.html', label: 'Admissions &amp; Aid' },
    { href: 'contact.html', label: 'Contact' }
  ];

  const logoSVG = `<svg class="site-logo__icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M24 3L44 12V28C44 38 34 45 24 47C14 45 4 38 4 28V12L24 3Z" fill="#1B2A4A" stroke="#B8860B" stroke-width="2"/>
    <rect x="21.5" y="12" width="5" height="24" fill="#B8860B" rx="1"/>
    <rect x="13" y="21.5" width="22" height="5" fill="#B8860B" rx="1"/>
  </svg>`;

  const logoMark = `<a href="index.html" class="site-logo" aria-label="ABC Christian Studies Home">
    ${logoSVG}
    <div class="site-logo__text">
      <span class="site-logo__name">Arkansas Baptist College</span>
      <span class="site-logo__sub">McKissic School of Christian Studies</span>
    </div>
  </a>`;

  // Build header
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="banner">
        📣 Applications are open now for Fall 2026. <a href="admissions.html">Apply today →</a>
      </div>
      <header class="site-header">
        <div class="header-inner">
          ${logoMark}
          <nav class="site-nav" aria-label="Main navigation">
            ${navLinks.map(l => `<a href="${l.href}"${l.href === currentPage ? ' class="active"' : ''}>${l.label}</a>`).join('')}
          </nav>
          <div class="header-ctas">
            <a href="contact.html" class="btn btn--outline-navy btn--sm">Request Info</a>
            <a href="admissions.html" class="btn btn--primary btn--sm">Apply Now</a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
        ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        <div class="mobile-ctas">
          <a href="contact.html" class="btn btn--outline-navy">Request Info</a>
          <a href="admissions.html" class="btn btn--primary">Apply Now</a>
        </div>
      </nav>`;
  }

  // Build footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-inner">
            <div class="footer-brand">
              ${logoMark.replace('site-logo__name">', 'site-logo__name" style="color:var(--white)">')}
              <p>Educating, equipping, and preparing students for effective and faithful ministry in the church, community, and globally.</p>
              <div class="social-icons" style="margin-top:20px;">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div class="footer-col">
              <h5>Program</h5>
              <a href="about.html">About</a>
              <a href="degrees.html">Degrees &amp; Courses</a>
              <a href="degrees.html#christian-education">Christian Education</a>
              <a href="degrees.html#church-admin">Church Administration</a>
              <a href="degrees.html#worship-arts">Worship Arts</a>
              <a href="degrees.html#homiletics">Homiletics &amp; Pastoral</a>
            </div>
            <div class="footer-col">
              <h5>Discover</h5>
              <a href="faculty.html">Meet the Faculty</a>
              <a href="stories.html">Student Stories</a>
              <a href="faith.html">Faith &amp; Community</a>
              <a href="admissions.html">Admissions &amp; Aid</a>
              <a href="contact.html">Contact Us</a>
            </div>
            <div class="footer-col">
              <h5>Contact</h5>
              <a href="https://www.arkansasbaptist.edu" target="_blank" rel="noopener">arkansasbaptist.edu</a>
              <a href="tel:5014201200">(501) 420-1200</a>
              <a href="mailto:admissions@arkansasbaptist.edu">admissions@arkansasbaptist.edu</a>
              <p style="color:rgba(255,255,255,0.55);font-size:0.8rem;margin-top:12px;">1600 Dr. Martin Luther King, Jr. Drive<br>Little Rock, AR 72202</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2026 Arkansas Baptist College — James &amp; Rosa McKissic School of Christian Studies. All rights reserved.</p>
            <p style="font-style:italic;color:rgba(184,134,11,0.7);">"Where Purpose Is Your Major"</p>
          </div>
        </div>
      </footer>`;
  }
})();
