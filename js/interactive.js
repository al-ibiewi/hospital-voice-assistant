/**
 * Interactive Elements Module
 * Handles hover effects, toggle buttons, and interactive features
 */

export const InteractiveElements = {
    init() {
        this.setupToggleButtons();
        this.setupCardHoverEffects();
        this.setupEmergencyButton();
    },
    
    setupToggleButtons() {
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const group = btn.closest('.toggle-group');
                const buttons = group.querySelectorAll('.toggle-btn');
                
                buttons.forEach(b => {
                    b.classList.remove('toggle-on', 'toggle-off');
                });
                
                btn.classList.add('toggle-on');
                const otherBtn = Array.from(buttons).find(b => b !== btn);
                if (otherBtn) {
                    otherBtn.classList.add('toggle-off');
                }
            });
        });
    },
    
    setupCardHoverEffects() {
        const cards = document.querySelectorAll('.problem-card, .tech-card, .contact-item, .app-feature-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.cursor = 'pointer';
            });
        });
    },
    
    setupEmergencyButton() {
        const emergencyBtn = document.querySelector('.emergency-btn');
        if (emergencyBtn) {
            emergencyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Emergency button clicked');
                // Add emergency alert functionality here
                alert('Emergency alert would be triggered here');
            });
        }
    }
};
