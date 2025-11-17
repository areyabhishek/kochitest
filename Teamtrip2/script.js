// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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

// FAQ Category Tabs
const faqCategories = document.querySelectorAll('.faq-category');
if (faqCategories.length > 0) {
    faqCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            faqCategories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            category.classList.add('active');
            
            // Here you could filter FAQ items based on category
            // For now, we'll just update the UI
        });
    });
}

// Form Submission Handler
const calculatorForm = document.querySelector('.calculator-form');
if (calculatorForm) {
    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(calculatorForm);
        const data = {};
        
        // Collect all form inputs
        const inputs = calculatorForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (input.checked) {
                    if (!data[input.name]) {
                        data[input.name] = [];
                    }
                    data[input.name].push(input.value);
                }
            } else {
                data[input.name || input.type] = input.value;
            }
        });
        
        // In a real application, you would send this data to a server
        console.log('Form submitted with data:', data);
        
        // Show success message
        alert('Thank you for your inquiry! We will get back to you with estimates soon.');
        
        // Reset form
        calculatorForm.reset();
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.benefit-card, .destination-card, .service-card, .culture-card, .client-logo');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Button hover effects
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Destination card interactions
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
    const buttons = card.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const destinationName = card.querySelector('h3').textContent;
            console.log(`Clicked ${button.textContent} for ${destinationName}`);
            // In a real application, this would navigate to a detail page or open a modal
        });
    });
});

// Service card interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('h3').textContent;
        console.log(`Selected service: ${serviceName}`);
        // In a real application, this would filter or navigate to service details
    });
});

// Add loading state to form submission
if (calculatorForm) {
    const submitButton = calculatorForm.querySelector('button[type="submit"]');
    if (submitButton) {
        calculatorForm.addEventListener('submit', function() {
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('TeamTrip website loaded successfully!');
    
    // Add fade-in animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// Add CSS animation via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

