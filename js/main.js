if (window.lucide) lucide.createIcons();

const navToggle = document.getElementById('navToggle');
const header = document.getElementById('header');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('menu-open');
  });
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('menu-open'));
  });
}

const menuTabs = document.querySelectorAll('.menu-tab');
menuTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    menuTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document.querySelectorAll('.menu-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `panel-${target}`);
    });
  });
});

const revealTargets = document.querySelectorAll(
  '.reveal, .gallery-item, .testimonial-card'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);

revealTargets.forEach((el) => observer.observe(el));
