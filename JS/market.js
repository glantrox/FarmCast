document.addEventListener('DOMContentLoaded', function () {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const dots = document.querySelectorAll('.nav-dot');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      sliderWrapper.style.transform = `translateX(-${index * 50}%)`;
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      currentIndex = index; // Update currentIndex for autoplay
    });
  });

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 50}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }, 5000);
});