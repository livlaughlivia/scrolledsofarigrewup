document.addEventListener('DOMContentLoaded', () => {
  const floater = document.querySelector('.floater');
  if (!floater) return;

  const speed = 2.5;
  let ticking = false;

  function onScroll() {
    const offset = window.scrollY * (speed - 1);
    floater.style.transform = `translate3d(-50%, ${-offset}px, 0)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
});
