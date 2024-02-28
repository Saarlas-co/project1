document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach((elem) => {
      const speed = elem.getAttribute('data-speed');
      const yOffset = window.pageYOffset * speed;
      elem.style.transform = `translateY(${yOffset}px)`;
    });
  });
});