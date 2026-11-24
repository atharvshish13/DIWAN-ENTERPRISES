/**
 * DIWAN ENTERPRISES - NEXT-GEN JAVASCRIPT
 * Features: Infinite Logo Marquee, Live Search & Category Filtering,
 * Enhanced Lightbox with Counter & WhatsApp enquiry, Form Validation & Mobile Nav.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initBackToTop();
  initCounters();
  initMarquee();
  initPortfolioFiltersAndSearch();
  initLightbox();
  initContactForm();
  initSmoothScroll();
});

/* Mobile Navigation */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    const icon = toggleBtn.querySelector('svg');
    if (icon) {
      icon.innerHTML = isOpen
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    }
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('svg');
      if (icon) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('svg');
      if (icon) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    }
  });
}

/* Sticky Glass Navbar */
function initStickyHeader() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* Back to Top */
function initBackToTop() {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btt.classList.add('active');
    } else {
      btt.classList.remove('active');
    }
  });

  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Animated Counters */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseInt(target.getAttribute('data-target') || '0', 10);
        const suffix = target.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = targetVal / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetVal) {
            target.textContent = targetVal + suffix;
            clearInterval(timer);
          } else {
            target.textContent = Math.floor(start) + suffix;
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.25 });

  counters.forEach(counter => observer.observe(counter));
}

/* Infinite Marquee Duplicator */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  // Clone all child nodes once to ensure seamless CSS infinite loop
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone.children[0]);
}

/* Portfolio Filters and Real-time Search */
function initPortfolioFiltersAndSearch() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.querySelector('#portfolioSearch');
  const items = document.querySelectorAll('.portfolio-card');

  if (!items.length) return;

  let activeFilter = 'all';
  let searchQuery = '';

  function applyFilterAndSearch() {
    items.forEach(item => {
      const category = item.getAttribute('data-category') || '';
      const title = (item.getAttribute('data-title') || '').toLowerCase();
      const catLabel = (item.getAttribute('data-category-name') || '').toLowerCase();

      const matchesFilter = (activeFilter === 'all' || category === activeFilter);
      const matchesSearch = !searchQuery || title.includes(searchQuery) || catLabel.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      } else {
        item.style.display = 'none';
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
      }
    });
  }

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-filter') || 'all';
        applyFilterAndSearch();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilterAndSearch();
    });
  }
}

/* Enhanced Lightbox with WhatsApp Enquiry & Counter */
let currentLightboxIndex = 0;
let lightboxItems = [];

function initLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;

  const cards = document.querySelectorAll('[data-lightbox="true"]');
  const imgEl = modal.querySelector('.lightbox-img');
  const captionEl = modal.querySelector('.lightbox-caption');
  const catEl = modal.querySelector('.lightbox-category');
  const counterEl = modal.querySelector('.lightbox-counter');
  const waBtn = modal.querySelector('.lightbox-wa-btn');

  const closeBtn = modal.querySelector('.lightbox-close');
  const prevBtn = modal.querySelector('.lightbox-prev');
  const nextBtn = modal.querySelector('.lightbox-next');

  lightboxItems = Array.from(cards).map(card => ({
    src: card.getAttribute('data-src') || card.querySelector('img')?.getAttribute('src'),
    title: card.getAttribute('data-title') || card.querySelector('.portfolio-title')?.textContent || 'Diwan Enterprises Project',
    category: card.getAttribute('data-category-name') || card.querySelector('.portfolio-cat-label')?.textContent || 'Advertising Campaign'
  }));

  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = lightboxItems[currentLightboxIndex];
    if (!item) return;
    imgEl.src = item.src;
    if (captionEl) captionEl.textContent = item.title;
    if (catEl) catEl.textContent = item.category;
    if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${lightboxItems.length}`;

    if (waBtn) {
      const waText = encodeURIComponent(`Hello Diwan Enterprises! I am interested in a campaign like: "${item.title}" (${item.category}). Please share details and pricing.`);
      waBtn.href = `https://wa.me/919420484823?text=${waText}`;
    }
  }

  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    updateLightboxContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

/* Contact Enquiry Form Validation */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  const alertBox = form.querySelector('.form-alert');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const nameInput = form.querySelector('#name');
    const phoneInput = form.querySelector('#phone');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Please provide your full name');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      showError(phoneInput, 'Please enter a valid 10-digit mobile number');
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 6) {
      showError(messageInput, 'Please share your campaign requirements (min 6 characters)');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Enquiry...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        form.reset();

        if (alertBox) {
          alertBox.className = 'form-alert success';
          alertBox.innerHTML = '<strong>Success!</strong> Thank you for contacting Diwan Enterprises. Our project team will connect with you shortly at <strong>+91 9420484823</strong>.';
          alertBox.style.display = 'block';

          setTimeout(() => {
            alertBox.style.display = 'none';
          }, 8000);
        }
      }, 850);
    }
  });

  function showError(input, msg) {
    input.style.borderColor = '#dc2626';
    let feedback = input.parentElement.querySelector('.form-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'form-feedback error';
      input.parentElement.appendChild(feedback);
    }
    feedback.textContent = msg;
    feedback.style.display = 'block';
  }

  function clearError(input) {
    input.style.borderColor = '';
    const feedback = input.parentElement.querySelector('.form-feedback');
    if (feedback) feedback.style.display = 'none';
  }
}

/* Smooth anchor scrolling */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}
