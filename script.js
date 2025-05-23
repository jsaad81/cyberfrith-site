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

    // Intersection Observer for fade-in animations on strategy cards
    const strategyCards = document.querySelectorAll('.card-animate');
    const options = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-card', 'is-visible');
                // You can add different animation classes here based on index if desired
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    strategyCards.forEach(card => {
        observer.observe(card);
    });

    // Intersection Observer for War Game items
    const wargamePurpose = document.querySelector('.animate-slide-in-left');
    const wargameElements = document.querySelector('.animate-slide-in-right');

    const wargameObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animate-slide-in-left')) {
                    entry.target.classList.add('is-visible');
                }
                if (entry.target.classList.contains('animate-slide-in-right')) {
                    entry.target.classList.add('is-visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (wargamePurpose) wargameObserver.observe(wargamePurpose);
    if (wargameElements) wargameObserver.observe(wargameElements);

    // Add click effect to War Game CTA button
    const wargameCtaBtn = document.getElementById('wargame-cta');
    if (wargameCtaBtn) {
        wargameCtaBtn.addEventListener('click', () => {
            alert('Great! Contact us to set up your Cyber War Game simulation!');
            // You could replace this with a form submission, modal, or redirect
        });
    }

    // Optional: Add a scroll-to-top button functionality (if you add the button in HTML)
    // const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    // window.onscroll = function() { scrollFunction() };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         scrollToTopBtn.style.display = "block";
    //     } else {
    //         scrollToTopBtn.style.display = "none";
    //     }
    // }
    // scrollToTopBtn.addEventListener('click', () => {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // });
});