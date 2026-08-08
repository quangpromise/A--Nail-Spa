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

const revealTargets = document.querySelectorAll(
  '.reveal, .feature-card, .price-card, .gallery-item, .testimonial-card'
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
