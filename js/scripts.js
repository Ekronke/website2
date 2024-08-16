// JavaScript to detect scroll and apply fade-in class
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Unobserve once the section has faded in
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is in view

    sections.forEach(section => {
        observer.observe(section);
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the header to offset the scroll position
      const headerHeight = document.querySelector('header').offsetHeight;
      
      // Scroll to the position calculated
      window.scrollTo({
        top: element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2) - headerHeight,
        behavior: 'smooth'
      });
    }
  }
