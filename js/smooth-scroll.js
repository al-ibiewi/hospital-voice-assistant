/**
 * Smooth Scroll Module
 * Enhances scrolling experience
 */

export const SmoothScroll = {
    init() {
        this.setupSmoothScroll();
    },
    
    setupSmoothScroll() {
        // Modern browsers support scroll-behavior: smooth in CSS
        // This module can be extended for additional scroll effects
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }
};
