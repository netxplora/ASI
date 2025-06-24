// Enhanced Main JavaScript for ASI Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initBackToTop();
    initHeaderScroll();
    initSmoothScrolling();
    initAnimations();
});

// Enhanced Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuToggle?.querySelector('.hamburger-icon');
    
    // Mobile menu toggle
    mobileMenuToggle?.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        hamburgerIcon?.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Mobile menu close
    mobileMenuClose?.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        hamburgerIcon?.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking outside
    mobileMenu?.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            hamburgerIcon?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Mobile dropdown functionality
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    mobileDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
        const content = dropdown.querySelector('.mobile-dropdown-content');
        
        toggle?.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });
    
    // Close mobile menu on link click
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburgerIcon?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Enhanced Animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .industry-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Form Validation (if needed)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Loading State Management
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Utility Functions
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

// Performance optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Handle scroll events here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMobileMenu,
        initBackToTop,
        initHeaderScroll,
        validateForm,
        showLoading,
        hideLoading
    };
}