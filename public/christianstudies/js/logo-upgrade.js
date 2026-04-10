/* ============================================================
   Inner page logo upgrade — replaces SVG with image logo
   and updates nav to condensed 5-item version
   Loads on all inner pages after css/style.css
   ============================================================ */
(function () {
  /* ---- Update logo to use the image version ---- */
  document.querySelectorAll('.site-logo').forEach(logoEl => {
    // Skip if already has an img logo
    if (logoEl.querySelector('img[src*="logo-horizontal"]')) return;
    const svgIcon = logoEl.querySelector('.site-logo__icon');
    const textEl  = logoEl.querySelector('.site-logo__text');
    if (!svgIcon) return;

    const img = document.createElement('img');
    img.src = 'images/logo-horizontal.png';
    img.alt = 'Arkansas Baptist College — School of Christian Studies';
    img.style.cssText = 'height:42px;width:auto;max-width:260px;display:block;';
    img.onerror = function () {
      this.style.display = 'none';
      if (svgIcon) svgIcon.style.display = 'block';
      if (textEl)  { textEl.style.display = 'flex'; textEl.style.flexDirection = 'column'; }
    };
    // Hide SVG + text, prepend image
    if (svgIcon) svgIcon.style.display = 'none';
    if (textEl)  textEl.style.display  = 'none';
    logoEl.prepend(img);
  });

  /* ---- Update desktop nav to condensed 5-item ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const condensedNav = [
    { href: 'index.html',      label: 'Home' },
    { href: 'degrees.html',    label: 'Concentrations' },
    { href: 'faculty.html',    label: 'Faculty' },
    { href: 'stories.html',    label: 'Stories' },
    { href: 'contact.html',    label: 'Contact' }
  ];

  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    siteNav.innerHTML = condensedNav
      .map(item => `<a href="${item.href}"${item.href === currentPage ? ' class="active"' : ''}>${item.label}</a>`)
      .join('');
  }

  /* ---- Switch Apply Now button to gold ---- */
  document.querySelectorAll('.header-ctas a').forEach(btn => {
    if (btn.textContent.trim().includes('Apply Now')) {
      btn.classList.remove('btn--primary', 'btn--outline-navy');
      btn.classList.add('btn--primary');
      btn.style.background = '#B8860B';
      btn.style.color = '#1B2A4A';
      btn.style.borderColor = '#B8860B';
    }
  });
})();
