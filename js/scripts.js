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
