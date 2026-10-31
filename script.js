const nav = document.querySelector('.site-nav');
const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelectorAll('.nav-links a');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('menu-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('menu-open', open);
});
links.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
    closeMenu();
    menuButton.focus();
  }
});
function updateNav() { nav.classList.toggle('scrolled', window.scrollY > 40); }
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
document.documentElement.classList.add('js');

// Preserve direct links into expanded project and education details.
function revealTarget() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;
  let parent = target.parentElement;
  while (parent) {
    if (parent.tagName === 'DETAILS') parent.open = true;
    parent = parent.parentElement;
  }
  if (location.hash) target.scrollIntoView();
}
window.addEventListener('hashchange', revealTarget);
if (location.hash) revealTarget();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
