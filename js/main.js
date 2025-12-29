/**
 * KADOMARU Codeworks - Main JavaScript
 */

// ==============================================
// Splash Screen Animation
// ==============================================
const splashLogo = document.getElementById('splash-logo');
const splashCurtain = document.getElementById('splash-curtain');
const splashScreen = document.getElementById('splash-screen');
const splashBg = document.getElementById('splash-bg');
const mainHeader = document.getElementById('header');

const runSplashSequence = () => {
    splashLogo.classList.add('animate-logo-in');
    
    setTimeout(() => {
        splashLogo.classList.add('animate-logo-pulse');
    }, 800);
    
    setTimeout(() => {
        splashCurtain.classList.add('animate-curtain-slide');
    }, 1400);
    
    setTimeout(() => {
        splashLogo.style.display = 'none';
        splashBg.style.display = 'none';
        splashCurtain.classList.add('animate-curtain-fade');
    }, 2000);
    
    setTimeout(() => {
        splashScreen.remove();
        mainHeader.classList.remove('opacity-0');
    }, 2100);
};

// ==============================================
// Fade Up Animation (Intersection Observer)
// ==============================================
const observerOptions = {
    threshold: 0.1
};

const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// ==============================================
// Mobile Menu Toggle
// ==============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden');
};

const closeMobileMenu = () => {
    mobileMenu.classList.add('hidden');
};

// ==============================================
// Initialize on DOM Content Loaded
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    // Run splash animation
    runSplashSequence();
    
    // Observe all fade-up elements
    document.querySelectorAll('.fade-up').forEach(el => {
        fadeUpObserver.observe(el);
    });
    
    // Mobile menu button click
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});

