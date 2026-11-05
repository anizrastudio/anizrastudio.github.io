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