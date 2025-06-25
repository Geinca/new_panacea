
// Carousel Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto Slide (every 6 seconds)
if (slides.length > 0) {
  showSlide(currentSlide); // Show initial slide
  setInterval(nextSlide, 6000);
}

// Toggle Mobile Menu
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// Include Footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('Footer load error:', error);
  });

// Include Header
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('Header load error:', error);
  });

// Prevent default for <a href="#"> links only
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});
