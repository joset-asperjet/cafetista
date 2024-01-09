window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const loadingImage = document.getElementById('loading-image');
    
    loadingImage.addEventListener('animationend', function() {
      loading.style.display = 'none';
    });
  });