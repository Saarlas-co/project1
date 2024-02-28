document.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('.parallax');
  const scrollTop = window.pageYOffset;

  parallaxElements.forEach(function(elem) {
    var speed = elem.getAttribute('data-speed');
    var elemY = scrollTop * speed;
    elem.style.transform = 'translateY(' + elemY + 'px)';
  });
});