// src/scripts/scrollReveal.ts

const initScrollReveal = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  const animateElements = document.querySelectorAll<HTMLElement>('[data-animate]');
  if (animateElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animClass = entry.target.getAttribute('data-animate');
          if (animClass) {
            entry.target.classList.add('is-revealed', animClass);
          }
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animateElements.forEach((el) => {
    observer.observe(el);
  });
};

initScrollReveal();