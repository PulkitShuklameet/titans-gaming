const video = document.querySelector('.hero-video');
const circles = document.querySelectorAll('.circle');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const movieList = [
  'video/hero-1.mp4',
  'video/hero-2.mp4',
  'video/hero-3.mp4',
  'video/hero-4.mp4'
];

let currentIndex = 0;

function updateVideo(index) {
  currentIndex = (index + movieList.length) % movieList.length; // handles looping
  video.src = movieList[currentIndex];
  video.load();
  video.play().catch(err => {
    console.warn("Autoplay error:", err);
  });

  // Update circle active state
  circles.forEach(c => c.classList.remove('active'));
  if (circles[currentIndex]) {
    circles[currentIndex].classList.add('active');
  }
}

// Arrow click events
leftArrow.addEventListener('click', () => {
  updateVideo(currentIndex - 1);
});

rightArrow.addEventListener('click', () => {
  updateVideo(currentIndex + 1);
});

// Circle click events
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    const index = parseInt(circle.getAttribute('data-index'));
    updateVideo(index);
  });
});

// Optional: Initialize first circle as active
updateVideo(currentIndex);


// header forceshow
