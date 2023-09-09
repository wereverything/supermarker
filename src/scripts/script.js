const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  carouselItems[index].style.display = 'flex';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
document.getElementById('nextPage').addEventListener('click', nextSlide);
document.getElementById('previousPage').addEventListener('click', previousSlide);
