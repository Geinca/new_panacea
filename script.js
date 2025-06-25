
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
  const navLinks = document.getElementById("nav-links");
  const menuIcon = document.getElementById("menu-icon");

  navLinks.classList.toggle("show");

  // Toggle icon between bars and cross
  if (navLinks.classList.contains("show")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
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
