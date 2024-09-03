// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Toggle Theme
  const toggleThemeButton = document.getElementById("toggle-theme");
  toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

  // Testimonial Carousel (Manual)
  let currentIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 3000); // Change every 3 seconds

  // Initialize the first testimonial
  showTestimonial(currentIndex);