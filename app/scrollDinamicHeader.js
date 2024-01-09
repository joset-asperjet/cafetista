window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  var cornerImages = document.querySelectorAll('.corner-image');
  cornerImages.forEach(function(image) {
    var imageTop = image.offsetTop;
    if (scrollPosition > imageTop) {
      var difference = scrollPosition - imageTop;
      image.style.transform = 'translateY(' + difference * 0.6 + 'px)';
      // Añade un efecto de fundido al final del scroll
      if (scrollPosition > documentHeight * 0.2) {
        image.style.opacity = 1 - ((scrollPosition - (documentHeight * 0.6)) / (documentHeight * 0.1));
      }
    } else {
      image.style.transform = 'translateY(0)';
      image.style.opacity = 1;
    }
  });
});
