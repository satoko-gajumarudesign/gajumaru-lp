// src/scripts/scrollReveal.ts

const initScrollReveal = () => {
    const animateElements = document.querySelectorAll<HTMLElement>('[data-animate]');
    if (animateElements.length === 0) return;
  
    // アクセシビリティ配慮：OSの設定で「視差効果を減らす」がONの人はアニメーションを即時完了させる
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animClass = entry.target.getAttribute('data-animate');
            if (animClass) {
              entry.target.classList.add(animClass);
            }
            // 1回発火したら監視を終了してメモリを解放
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // 要素が30%見えたら発火
      }
    );
  
    animateElements.forEach((el) => {
      if (prefersReducedMotion) {
        // アニメーションが苦手なユーザーには、最初から表示状態にする
        const animClass = el.getAttribute('data-animate');
        if (animClass) el.classList.add(animClass);
      } else {
        observer.observe(el);
      }
    });
  };
  
  // 実行
  initScrollReveal();