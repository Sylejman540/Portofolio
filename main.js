function toggleMenu() {
  const nav  = document.getElementById('navLinks');
  const icon = document.getElementById('menuIcon');
  const isOpen = nav.style.display === 'block';

  // show/hide nav
  nav.style.display = isOpen ? 'none' : 'block';

  // swap icon glyph
  icon.innerHTML = isOpen ? '&#9776;' : '&#10005;';

  // optional: add a class for spinning or styling
  icon.classList.toggle('open', !isOpen);
}

// initial state
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navLinks').style.display = 'none';
  document.getElementById('menuIcon').innerHTML = '&#9776;';
});
