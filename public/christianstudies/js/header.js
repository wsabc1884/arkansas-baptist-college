/* ============================================================
   Shared header + announcement bar injector — all inner pages
   ============================================================ */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const navItems = [
    { href: 'index.html',      label: 'Home' },
    { href: 'degrees.html',    label: 'Concentrations' },
    { href: 'faculty.html',    label: 'Faculty' },
    { href: 'stories.html',    label: 'Stories' },
    { href: 'contact.html',    label: 'Contact' }
  ];

  const logoImg = `<img src="images/logo-horizontal.png" alt="Arkansas Baptist College — School of Christian Studies" style="height:42px;width:auto;" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';" /><div style="display:none;align-items:center;gap:10px;"><svg width="40" height="40" viewBox="0 0 48 48" fill="none"><path d="M24 3L44 12V28C44 38 34 45 24 47C14 45 4 38 4 28V12L24 3Z" fill="#1B2A4A" stroke="#B8860B" stroke-width="2"/><rect x="21.5" y="12" width="5" height="24" fill="#B8860B" rx="1"/><rect x="13" y="21.5" width="22" height="5" fill="#B8860B" rx="1"/></svg><div><div style="font-family:'Playfair Display',Georgia,serif;font-size:.9rem;font-weight:700;color:#1B2A4A;">Arkansas Baptist College</div><div style="font-size:.62rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#4A235A;">School of Christian Studies</div></div></div>`;

  // Inject announcement banner before the existing .banner element or before <header>
  const existingBanner = document.querySelector('.banner');
  const announceHTML = `<div style="background:#1B2A4A;color:#fff;text-align:center;padding:10px 24px;font-size:.82rem;font-weight:500;">📣 Applications are open for Fall 2026. <a href="admissions.html" style="color:#B8860B;text-decoration:underline;">Apply today →</a></div>`;

  // Build new nav HTML
  const navHTML = navItems.map(item =>
    `<a href="${item.href}"${item.href === page ? ' class="active"' : ''} style="color:#1B2A4A;font-weight:600;font-size:.875rem;padding:8px 12px;border-radius:4px;transition:all .25s;">${item.label}</a>`
  ).join('');

  const mobileNavHTML = navItems.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('');

  const newHeaderHTML = `
    ${announceHTML}
    <header style="position:sticky;top:0;z-index:1000;background:#FEF9EF;border-bottom:2px solid #B8860B;box-shadow:0 2px 12px rgba(27,42,74,.08);height:72px;">
      <div style="display:flex;align-items:center;justify-content:space-between;height:100%;max-width:1180px;margin:0 auto;padding:0 24px;">
        <a href="index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
          ${logoImg}
        </a>
        <nav style="display:flex;align-items:center;gap:2px;" class="inner-site-nav">
          ${navHTML}
        </nav>
        <div style="display:flex;gap:10px;align-items:center;" class="inner-header-ctas">
          <a href="contact.html" style="display:inline-flex;align-items:center;padding:9px 20px;border-radius:4px;font-weight:700;font-size:.85rem;background:#1B2A4A;color:#fff;border:2px solid #1B2A4A;">Request Info</a>
          <a href="admissions.html" style="display:inline-flex;align-items:center;padding:9px 20px;border-radius:4px;font-weight:700;font-size:.85rem;background:#B8860B;color:#1B2A4A;border:2px solid #B8860B;">Apply Now</a>
        </div>
        <button id="innerHamburger" style="display:none;flex-direction:column;gap:5px;padding:8px;background:none;border:none;cursor:pointer;" aria-label="Open menu">
          <span style="width:24px;height:2px;background:#1B2A4A;display:block;"></span>
          <span style="width:24px;height:2px;background:#1B2A4A;display:block;"></span>
          <span style="width:24px;height:2px;background:#1B2A4A;display:block;"></span>
        </button>
      </div>
    </header>
    <nav id="innerMobileNav" style="display:none;position:fixed;top:72px;left:0;right:0;bottom:0;background:#FEF9EF;z-index:999;overflow-y:auto;padding:24px;transform:translateX(100%);transition:transform .3s ease;">
      ${mobileNavHTML.replace(/<a href/g, '<a style="display:block;color:#1B2A4A;font-weight:600;font-size:1.05rem;padding:14px 0;border-bottom:1px solid #e8e4d9;text-decoration:none;" href')}
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:24px;">
        <a href="contact.html" style="display:flex;align-items:center;justify-content:center;padding:12px 24px;background:#1B2A4A;color:#fff;border-radius:4px;font-weight:700;">Request Info</a>
        <a href="admissions.html" style="display:flex;align-items:center;justify-content:center;padding:12px 24px;background:#B8860B;color:#1B2A4A;border-radius:4px;font-weight:700;">Apply Now</a>
      </div>
    </nav>
  `;

  // Replace the old banner + header + mobile nav block
  if (existingBanner) {
    // Find the container and replace everything up to first section/div
    const oldBanner = document.querySelector('.banner');
    const oldHeader = document.querySelector('.site-header');
    const oldMobileNav = document.querySelector('.mobile-nav');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newHeaderHTML;
    if (oldBanner) oldBanner.remove();
    if (oldHeader && oldMobileNav) {
      oldMobileNav.insertAdjacentHTML('afterend', newHeaderHTML);
      oldHeader.remove();
      oldMobileNav.remove();
    }
  }

  // Hide desktop nav + ctas on mobile via CSS injection
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .inner-site-nav, .inner-header-ctas { display: none !important; }
      #innerHamburger { display: flex !important; }
    }
    .inner-site-nav a:hover { color: #B8860B !important; background: rgba(184,134,11,0.08); }
    .inner-site-nav a.active { color: #B8860B !important; }
  `;
  document.head.appendChild(style);

  // Hamburger toggle
  setTimeout(() => {
    const hbg = document.getElementById('innerHamburger');
    const mnav = document.getElementById('innerMobileNav');
    if (hbg && mnav) {
      mnav.style.display = 'block';
      hbg.addEventListener('click', () => {
        const isOpen = mnav.style.transform === 'translateX(0px)' || mnav.style.transform === 'translateX(0)';
        mnav.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0)';
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });
      mnav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mnav.style.transform = 'translateX(100%)';
          document.body.style.overflow = '';
        });
      });
    }
  }, 50);
})();
