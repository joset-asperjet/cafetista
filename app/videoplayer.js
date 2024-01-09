let video1 = document.getElementById('myVideo1');
let video2 = document.getElementById('myVideo2');
let video3 = document.getElementById('myVideo3');

video1.onended = function() {
  video1.style.display = 'none';
  video2.style.display = 'block';
  video2.play();
};

video2.onended = function() {
  video2.style.display = 'none';
  video3.style.display = 'block';
  video3.play();
};

video3.onended = function() {
  video3.style.display = 'none';
  video1.style.display = 'block';
  video1.play();
};