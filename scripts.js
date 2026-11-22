"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const copyrightYear = document.querySelector("#copyright-year");

if (copyrightYear) {
  copyrightYear.textContent = String(new Date().getFullYear());
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });

    if (window.location.hash !== targetId) {
      window.history.pushState(null, "", targetId);
    }
  });
});

const sections = document.querySelectorAll(
  "main section[id]"
);
const navigationLinks = document.querySelectorAll(
  ".hero__links a[href^='#'], .footer__nav a[href^='#']"
);

if ("IntersectionObserver" in window && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      const activeId = visibleEntry.target.id;

      navigationLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.05, 0.25, 0.5],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

const heroVideo = document.querySelector(".hero__video");

if (heroVideo && "IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !reducedMotion.matches) {
        heroVideo.play().catch(() => {});
      } else {
        heroVideo.pause();
      }
    },
    { threshold: 0.15 }
  );

  videoObserver.observe(heroVideo);
}
