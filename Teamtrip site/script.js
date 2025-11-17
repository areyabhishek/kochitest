// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');

        // Toggle mobile menu visibility
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            navActions.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navActions.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navActions.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navActions.style.position = 'absolute';
            navLinks.style.top = '70px';
            navActions.style.top = '220px';
            navLinks.style.left = '0';
            navActions.style.left = '0';
            navLinks.style.right = '0';
            navActions.style.right = '0';
            navLinks.style.background = 'white';
            navActions.style.background = 'white';
            navLinks.style.padding = '20px';
            navActions.style.padding = '20px';
            navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            navActions.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                navActions.style.display = 'none';
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, event cards, and testimonials
const animateElements = document.querySelectorAll('.feature-card, .event-card, .testimonial-card, .service-card, .step');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Button click handlers with visual feedback
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (number) {
                    stat.textContent = '0';
                    setTimeout(() => {
                        animateCounter(stat, number, 2000);
                        // Add back any suffix (like +, %, etc.)
                        setTimeout(() => {
                            stat.textContent = text;
                        }, 2000);
                    }, 200);
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Parallax effect for hero orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form validation (placeholder for future forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add hover effect to cards
document.querySelectorAll('.feature-card, .event-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Handle CTA button clicks
document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
    button.addEventListener('click', function(e) {
        const text = this.textContent.trim();

        // Log button clicks (in production, this would send analytics)
        console.log(`Button clicked: ${text}`);

        // Placeholder actions
        if (text.includes('Start Planning') || text.includes('Get Started')) {
            console.log('Opening sign-up flow...');
            // In production: window.location.href = '/signup';
            alert('Sign-up flow would open here. This is a demo site.');
        } else if (text.includes('Watch Demo')) {
            console.log('Opening demo video...');
            // In production: open video modal
            alert('Demo video would play here. This is a demo site.');
        } else if (text.includes('Get Custom Quote')) {
            console.log('Opening quote form...');
            // In production: window.location.href = '/quote';
            alert('Quote form would open here. This is a demo site.');
        } else if (text.includes('Talk to an Expert')) {
            console.log('Opening contact form...');
            // In production: open chat or contact form
            alert('Contact form would open here. This is a demo site.');
        }
    });
});

// Lazy loading for images (if images were added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading state to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            const originalText = this.textContent;
            this.classList.add('loading');

            // Simulate loading
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        }
    });
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset mobile menu on desktop
        if (window.innerWidth > 768) {
            navLinks.style.display = '';
            navActions.style.display = '';
            navLinks.style.position = '';
            navActions.style.position = '';
            navLinks.style.flexDirection = '';
            navActions.style.flexDirection = '';
            mobileMenuToggle.classList.remove('active');
        }
    }, 250);
});

console.log('TeamTrip website loaded successfully!');
