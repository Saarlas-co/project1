document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-container');
  const showSectionsBtn = document.querySelector('.show-sections-btn');

  showSectionsBtn.addEventListener('click', () => {
    let delay = 0;
    sections.forEach(section => {
      setTimeout(() => {
        section.classList.add('active');
      }, delay);
      delay += 150;
    });
  });
});