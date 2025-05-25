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

    // Hero Text Typing Animation with Rotating Phrases and Blinking Cursor
    const heroTextElement = document.getElementById('hero-text');
    const taglines = [
        "Secure your digital world with a mind forged in fire.",
        "Resilience isn't a feature. It's a foundation.",
        "Code. Defend. Rebuild. Repeat.",
        "Trust the signal. Disarm the noise."
    ];
    let phraseIndex = 0;
    let i = 0;
    const typingSpeed = 50;
    const pauseBetweenPhrases = 3000;

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    cursorSpan.textContent = '|';
    heroTextElement.appendChild(cursorSpan);

    function typeWriter() {
        if (i < taglines[phraseIndex].length) {
            heroTextElement.insertBefore(document.createTextNode(taglines[phraseIndex].charAt(i)), cursorSpan);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(() => {
                heroTextElement.innerHTML = '';
                heroTextElement.appendChild(cursorSpan);
                i = 0;
                phraseIndex = (phraseIndex + 1) % taglines.length;
                typeWriter();
            }, pauseBetweenPhrases);
        }
    }

    // Start typing animation after hero section fades in
    const heroSection = document.getElementById('home');
    const heroObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Intersection Observer for .cyber-animate elements (fade-in on scroll)
    const animatedElements = document.querySelectorAll('.cyber-animate');
    const animateOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, animateOptions);

    animatedElements.forEach(el => {
        animateObserver.observe(el);
    });

    // Button Hover Glow Effect
    document.querySelectorAll('button, .glow-on-hover').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('cyber-glow');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('cyber-glow');
        });
    });

    // AI Boot Logs
    const bootLog = [
        "Initializing CyberFrith Protocols...",
        "→ Establishing encrypted comms link...",
        "→ Syncing threat intel feeds...",
        "→ Parsing global telemetry...",
        "→ Activating anomaly detection grid...",
        "Threat Vector Analysis: Online",
        "Resilience Quotient: Optimal",
        "Sophia AI: Passive Mode Activated"
    ];
    let logDelay = 500;
    bootLog.forEach((line, index) => {
        setTimeout(() => {
            console.log(line);
        }, index * logDelay);
    });
});