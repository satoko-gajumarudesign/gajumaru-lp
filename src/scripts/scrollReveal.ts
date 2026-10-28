// src/scripts/scrollReveal.ts

const initScrollReveal = () => {
    const animateElements = document.querySelectorAll<HTMLElement>('[data-animate]');
    if (animateElements.length === 0) return;
  
    // 「視差効果を減らす」がONの人はアニメーションを即時完了させる
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animClass = entry.target.getAttribute('data-animate');
            if (animClass) {
              entry.target.classList.add(animClass);
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
      if (prefersReducedMotion) {
       
        const animClass = el.getAttribute('data-animate');
        if (animClass) el.classList.add(animClass);
      } else {
        observer.observe(el);
      }
    });
  };
  
  initScrollReveal();