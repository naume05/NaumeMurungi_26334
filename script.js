const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const pageSections = Array.from(document.querySelectorAll('section[id]'));

function showPage(pageId) {
  pageSections.forEach(section => {
    section.style.display = section.id === pageId ? 'block' : 'none';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    const route = link.getAttribute('href');
    const isActive = route === `#${pageId}`;
    link.classList.toggle('active', isActive);
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const route = link.getAttribute('href');
      const targetId = route ? route.replace('#', '') : '';

      if (targetId && pageSections.some(section => section.id === targetId)) {
        showPage(targetId);
        history.pushState(null, '', `#${targetId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      navLinks.classList.remove('open');
    });
  });
}

showPage('home');

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
