document.addEventListener('DOMContentLoaded', function() {
  const exploreButton = document.getElementById('exploreButton');
  const sections = [
    document.getElementById('aboutAuroraOS'),
    document.getElementById('whyAuroraOS'),
    document.getElementById('signUp')
  ];

  exploreButton.addEventListener('click', function() {
    let delay = 0;
    sections.forEach(section => {
      setTimeout(() => {
        section.classList.add('on-screen'); 
      }, delay);
      delay += 500; 
    });
  });
});