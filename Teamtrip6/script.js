/**
 * Teamtrip Website - Interactive Animations
 * High-contrast art book aesthetic with subtle motion
 */

// ===================================
// Intersection Observer for Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Only trigger once
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// ===================================
// Initialize on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitcher();
    initScrollAnimations();
    initSmoothScroll();
    initParallaxEffects();
    initScrollProgress();
    logWelcomeMessage();
});

// ===================================
// Theme Switcher
// ===================================
function initThemeSwitcher() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('teamtrip-theme') || 'artbook';
    setTheme(savedTheme);

    // Add click handlers
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            setTheme(theme);
            localStorage.setItem('teamtrip-theme', theme);
        });
    });

    function setTheme(theme) {
        body.setAttribute('data-theme', theme);

        // Update active button
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Log theme change
        console.log(`Theme switched to: ${theme}`);
    }
}

// ===================================
// Scroll Progress Bar (Film Editorial Theme)
// ===================================
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');

    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    // Observe all destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        fadeInObserver.observe(card);
    });

    // Observe service blocks
    const serviceBlocks = document.querySelectorAll('.service-block');
    serviceBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        fadeInObserver.observe(block);
    });

    // Observe culture items
    const cultureItems = document.querySelectorAll('.culture-item');
    cultureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transitionDelay = `${index * 0.05}s`;
        fadeInObserver.observe(item);
    });

    // Add visible class when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceBlocks.forEach(block => observer.observe(block));
    cultureItems.forEach(item => observer.observe(item));
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// Parallax Effects for Images
// ===================================
function initParallaxEffects() {
    const images = document.querySelectorAll('.destination-image');

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                images.forEach(image => {
                    const rect = image.getBoundingClientRect();
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.3;

                    // Only apply parallax if image is in viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        image.style.transform = `translateY(${rate - rect.top * 0.1}px)`;
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===================================
// Benefits Grid Stagger Animation
// ===================================
const benefitItems = document.querySelectorAll('.benefit-item');
benefitItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';

    setTimeout(() => {
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, 100 * index);
});

// ===================================
// Metric Counter Animation
// ===================================
function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Observe metrics and animate when visible
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricValue = entry.target.querySelector('.metric-value');
            const text = metricValue.textContent;

            if (text.includes('%')) {
                animateValue(metricValue, 0, 100, 2000, '%');
            } else if (text.includes('X')) {
                metricValue.textContent = '0X';
                setTimeout(() => {
                    metricValue.textContent = '2X';
                }, 500);
            }

            metricsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const metricCards = document.querySelectorAll('.metric-card');
metricCards.forEach(card => metricsObserver.observe(card));

// ===================================
// Hover Effects Enhancement
// ===================================
function enhanceHoverEffects() {
    // Add ripple effect to destination cards
    const destinationCards = document.querySelectorAll('.destination-card');

    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

enhanceHoverEffects();

// ===================================
// Page Load Performance
// ===================================
window.addEventListener('load', () => {
    // Hide loading state if any
    document.body.classList.add('loaded');

    // Log performance metrics
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// ===================================
// Utility: Debounce Function
// ===================================
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

// ===================================
// Responsive Image Loading
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
    // Allow ESC to close modals or return to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===================================
// Console Welcome Message
// ===================================
function logWelcomeMessage() {
    const styles = [
        'font-size: 20px',
        'font-weight: bold',
        'color: #FF4400',
        'text-shadow: 2px 2px 0px #000'
    ].join(';');

    console.log('%cTeamtrip', styles);
    console.log('%cSeamless Offsite Planning Made Simple', 'font-size: 12px; color: #333;');
    console.log('%c→ Designed with a high-contrast art book aesthetic', 'font-style: italic; color: #666;');
}

// ===================================
// Accessibility Enhancements
// ===================================
// Add focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add CSS for focus visible
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 3px solid var(--color-accent);
        outline-offset: 2px;
    }

    *:focus:not(:focus-visible) {
        outline: none;
    }

    *:focus-visible {
        outline: 3px solid var(--color-accent);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ===================================
// Form Enhancement (if forms are added)
// ===================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form handling logic here
        console.log('Form submitted');
    });
});

// ===================================
// Print Optimization
// ===================================
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

// ===================================
// Service Worker Registration (Optional)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// Make functions available globally for testing (if needed)
// Uncomment to expose functions:
// window.TeamtripFunctions = {
//     initScrollAnimations,
//     initSmoothScroll,
//     initParallaxEffects,
//     animateValue,
//     debounce
// };
