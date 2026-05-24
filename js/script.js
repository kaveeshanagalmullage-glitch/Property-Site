// Property filter logic (used by property.html)
(function () {
  function initPropertyFilters() {
    const filterButtons = document.querySelectorAll('.property-filter-btn');
    if (!filterButtons.length) return;

    // property.html uses <article class="listing-row" data-category="...">
    const cards = document.querySelectorAll('.listing-row[data-category]');
    if (!cards.length) return;

    const showCategory = (category) => {
      for (const card of cards) {
        const match = category === 'all' || card.getAttribute('data-category') === category;
        if (match) {
          card.style.display = '';
          card.classList.remove('fade-in');
          // re-trigger animation
          void card.offsetWidth;
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('fade-in');
        }
      }
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        showCategory(btn.dataset.category);
      });
    });

    showCategory('all');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPropertyFilters);
  } else {
    initPropertyFilters();
  }
})();

// Mobile navigation toggle (shared header)
(function () {
  function initNavToggle() {
    const navToggleBtn = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (!navToggleBtn || !mainNav) return;

    const toggleNav = () => {
      mainNav.classList.toggle('is-active');
      // optional accessibility attribute
      const expanded = mainNav.classList.contains('is-active');
      navToggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    navToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav();
    });

    // Close menu after clicking a link (mobile UX)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Escape closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mainNav.classList.remove('is-active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavToggle);
  } else {
    initNavToggle();
  }
})();


