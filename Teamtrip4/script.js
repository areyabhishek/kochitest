// Intersection Observer for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // Only animate elements on first load
    const animatedElements = document.querySelectorAll('.fade-in, .rise-in');
    
    // Check if page was just loaded (not refreshed)
    const isFirstLoad = !sessionStorage.getItem('pageLoaded');
    
    if (isFirstLoad) {
        sessionStorage.setItem('pageLoaded', 'true');
        
        // Trigger animations for elements in viewport
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            // Pause animation initially
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    } else {
        // On refresh, show elements immediately
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

