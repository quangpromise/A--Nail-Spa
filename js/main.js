if (window.lucide) lucide.createIcons();

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

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

const galleryTrack = document.getElementById('galleryTrack');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const galleryCounter = document.getElementById('galleryCounter');
if (galleryTrack) {
  const slides = galleryTrack.querySelectorAll('.gallery-slide');
  const total = slides.length;
  let current = 0;

  const updateGallery = () => {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    galleryCounter.textContent = `${current + 1} / ${total}`;
    galleryPrev.disabled = current === 0;
    galleryNext.disabled = current === total - 1;
  };

  galleryPrev.addEventListener('click', () => {
    if (current > 0) { current -= 1; updateGallery(); }
  });
  galleryNext.addEventListener('click', () => {
    if (current < total - 1) { current += 1; updateGallery(); }
  });

  updateGallery();
}

const revealTargets = document.querySelectorAll(
  '.reveal, .testimonial-card'
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
