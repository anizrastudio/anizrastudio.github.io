// Menu HP: buka/tutup saat tombol ☰ diklik
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return; // berhenti jika elemen tidak ditemukan

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  // 1. Klik tombol → balik keadaan (buka ↔ tutup)
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  // 2. Klik salah satu link menu → tutup menu
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  // 3. Tekan Escape → tutup menu
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

initMobileMenu();

// Animasi muncul saat di-scroll (ke bawah maupun ke atas)
function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return; // tanpa animasi: semua langsung terlihat

  const items = document.querySelectorAll(
    '.section-head, .problem-card, .problems-note, .service-card, .segment-card, .segments-note, ' +
    '.work-card, .works-note, .step, .steps-cta, .principles li, .faq__item, .contact-card'
  );

  items.forEach((item) => {
    // Kartu dalam satu baris muncul bergantian
    const index = Array.from(item.parentElement.children).indexOf(item);
    item.style.setProperty('--delay', `${(index % 4) * 0.08}s`);
    item.classList.add('reveal');
    if (item.matches('.work-card')) item.classList.add('reveal-zoom');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        // Keluar layar: sembunyikan lagi, dan catat dari arah mana ia akan masuk kembali
        entry.target.classList.remove('is-visible');
        entry.target.dataset.from = entry.boundingClientRect.top < 0 ? 'top' : 'bottom';
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

initReveal();
