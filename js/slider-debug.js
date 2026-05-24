(function(){
  const gallery = document.querySelector('.hero-gallery');
  if(!gallery) return;
  const track = gallery.querySelector('.hero-gallery-track');
  const slides = Array.from(gallery.querySelectorAll('.hero-gallery-slide'));
  console.log('[hero-gallery] slides=', slides.length);
  console.log('[hero-gallery] track children widths=', slides.map(s=>s.getBoundingClientRect().width));
  const parentWidth = track.parentElement?.getBoundingClientRect().width;
  const trackWidth = track.getBoundingClientRect().width;
  console.log('[hero-gallery] parentWidth=', parentWidth, 'trackWidth=', trackWidth);
  slides.forEach((img,i)=>{
    console.log('[hero-gallery] slide', i,'src=', img.currentSrc || img.src);
  });

  // Test: force show slide 2 by transforming 1 slide width
  if(slides.length>=2){
    const w = track.parentElement?.getBoundingClientRect().width || gallery.getBoundingClientRect().width;
    track.style.transform = `translateX(${-1*w}px)`;
    console.log('[hero-gallery] forced translate to show slide 2');
  }
})();

