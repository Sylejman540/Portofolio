document.addEventListener('DOMContentLoaded', () => {
  // only hide on mobile if you really need to:
  if (window.innerWidth <= 768) {
    document.getElementById('navLinks').style.display = 'none';
  }
  // ensure icon starts unrotated
  document.getElementById('menuIcon').classList.remove('rotate');
});

function toggleMenu() {
  const nav  = document.getElementById('navLinks');
  const icon = document.getElementById('menuIcon');
  const isOpen = nav.style.display === 'block';

  // show/hide menu
  nav.style.display = isOpen ? 'none' : 'block';

  // swap the glyph
  icon.innerHTML = isOpen ? '&#9776;' : '&#10005;';

  // 3) toggle the rotation class
  icon.classList.toggle('rotate', !isOpen);
}
