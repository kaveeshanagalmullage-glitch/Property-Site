(() => {
  const gallery = document.querySelector('.hero-gallery');
  if (!gallery) return;
  const track = gallery.querySelector('.hero-gallery-track');
  const slides = Array.from(gallery.querySelectorAll('.hero-gallery-slide'));
  if (!track || slides.length === 0) return;

  const computeWidth = () => {
    // Use the gallery clientWidth to guarantee we match what is actually visible.
    const w = gallery.clientWidth;
    return w || track.getBoundingClientRect().width || gallery.getBoundingClientRect().width;
  };

  const setTo = (i) => {
    const w = computeWidth();
    track.style.transform = `translateX(${-i * w}px)`;

    const dots = Array.from(gallery.querySelectorAll('.hero-gallery-dot'));
    dots.forEach((d, di) => d.classList.toggle('is-active', di === i));
  };

  // Hard reset after layout and after images load.
  const reset = () => {
    // Jump to current slide based on class active (or 0)
    const dots = Array.from(gallery.querySelectorAll('.hero-gallery-dot'));
    const activeIndex = Math.max(0, dots.findIndex(d => d.classList.contains('is-active')));
    setTo(activeIndex >= 0 ? activeIndex : 0);
  };

  window.addEventListener('load', reset);
  window.addEventListener('resize', reset);

  // Ensure immediately.
  reset();
})();

