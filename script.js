document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero Text Typing Animation
    const heroTextElement = document.getElementById('hero-text');
    const heroTagline = "Secure your digital world with a mind forged in fire.";
    let i = 0;
    const typingSpeed = 50; // milliseconds per character

    function typeWriter() {
        if (i < heroTagline.length) {
            heroTextElement.innerHTML += heroTagline.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start typing animation after hero section fades in
    const heroSection = document.getElementById('home');
    const heroObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target); // Stop observing once typing starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of hero is visible

    if (heroSection) {
        heroObserver.observe(heroSection);
    }


    // Intersection Observer for .cyber-animate elements (fade-in on scroll)
    const animatedElements = document.querySelectorAll('.cyber-animate');
    const animateOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, animateOptions);

    animatedElements.forEach(el => {
        animateObserver.observe(el);
    });

    // Simple console log for flavor
    console.log("Initializing CyberFrith Protocols...");
    console.log("Threat Vector Analysis: Online");
    console.log("Resilience Quotient: Optimal");
});