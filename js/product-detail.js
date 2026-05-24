(() => {
  // Gallery
  const gallery = document.querySelector('.product-gallery');
  if (!gallery) return;

  const mainImg = gallery.querySelector('.product-gallery-main-img');
  const thumbs = Array.from(gallery.querySelectorAll('.product-thumb'));
  const prevBtn = gallery.querySelector('[data-gallery-prev]');
  const nextBtn = gallery.querySelector('[data-gallery-next]');
  const counter = gallery.querySelector('#productImageCounter');

  const images = thumbs.map((t) => ({
    src: t.querySelector('img')?.getAttribute('src') || t.querySelector('img')?.currentSrc || '',
    alt: t.querySelector('img')?.getAttribute('alt') || ''
  }));

  let index = 0;

  const setActive = (i) => {
    index = (i + images.length) % images.length;

    thumbs.forEach((t, ti) => t.classList.toggle('is-active', ti === index));

    if (mainImg) {
      mainImg.src = images[index].src;
      if (images[index].alt) mainImg.alt = images[index].alt;
    }

    if (counter) counter.textContent = `Image ${index + 1}/${images.length}`;
  };

  thumbs.forEach((t, i) => {
    t.addEventListener('click', () => setActive(i));
  });

  if (prevBtn) prevBtn.addEventListener('click', () => setActive(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => setActive(index + 1));

  // Contact phone reveal
  const phoneRevealBtn = document.getElementById('phoneRevealBtn');
  const phoneRevealBox = document.getElementById('phoneRevealBox');
  if (phoneRevealBtn && phoneRevealBox) {
    const actualPhone = '+94770000000';
    const show = () => {
      phoneRevealBox.innerHTML = `<a href="tel:${actualPhone}">${actualPhone}</a>`;
    };
    const hide = () => {
      phoneRevealBox.innerHTML = `<span class="product-phone-placeholder">(hidden)</span>`;
    };

    // initial hidden
    hide();

    phoneRevealBtn.addEventListener('click', () => {
      const isShown = phoneRevealBox.querySelector('a') !== null;
      if (isShown) {
        hide();
      } else {
        show();
      }
    });
  }

  // Accordion

  const accToggle = document.querySelector('[data-accordion-toggle]');
  const accPanel = document.querySelector('[data-accordion-panel]');
  const accChevron = document.querySelector('.product-accordion-chevron');

  if (accToggle && accPanel) {
    const setOpen = (open) => {
      accToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      accPanel.style.maxHeight = open ? `${accPanel.scrollHeight}px` : '0px';
      accPanel.style.opacity = open ? '1' : '0';
      accChevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    };

    // init
    accPanel.style.overflow = 'hidden';
    accPanel.style.maxHeight = '0px';
    accToggle.setAttribute('aria-expanded', 'false');
    if (accChevron) accChevron.style.transform = 'rotate(0deg)';

    accToggle.addEventListener('click', () => {
      const isOpen = accToggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    // keep sizing correct on resize if open
    window.addEventListener('resize', () => {
      const isOpen = accToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) setOpen(true);
    });
  }

  // init gallery
  if (images.length > 0) setActive(0);
})();

