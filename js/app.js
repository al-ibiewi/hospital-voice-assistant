/**
 * Main App Module
 * Initializes all app modules on document ready
 */

import { Navigation } from './navigation.js';
import { SmoothScroll } from './smooth-scroll.js';
import { InteractiveElements } from './interactive.js';
import { Theme } from './theme.js';

export const App = {
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            Theme.init();
            Navigation.init();
            SmoothScroll.init();
            InteractiveElements.init();
            console.log('Hospital Voice Assistant App initialized');
        });
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}
