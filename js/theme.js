/**
 * Theme Module
 * Handles dark/light mode toggle with localStorage persistence
 */

export const Theme = {
    STORAGE_KEY: 'hospital-assistant-theme',
    
    init() {
        this.loadTheme();
        this.setupToggleButton();
        this.setupSystemPreference();
    },
    
    loadTheme() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        
        // If saved theme exists, use it
        if (saved === 'dark') {
            this.enableDarkMode();
        } else if (saved === 'light') {
            this.disableDarkMode();
        } else {
            // Otherwise check system preference
            this.checkSystemPreference();
        }
    },
    
    checkSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.enableDarkMode();
        } else {
            this.disableDarkMode();
        }
    },
    
    setupToggleButton() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },
    
    setupSystemPreference() {
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            darkModeQuery.addEventListener('change', (e) => {
                // Only apply system preference if no saved preference
                if (!localStorage.getItem(this.STORAGE_KEY)) {
                    if (e.matches) {
                        this.enableDarkMode();
                    } else {
                        this.disableDarkMode();
                    }
                }
            });
        }
    },
    
    toggle() {
        const html = document.documentElement;
        if (html.classList.contains('dark-mode')) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    },
    
    enableDarkMode() {
        document.documentElement.classList.add('dark-mode');
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.classList.add('dark-mode');
        }
        localStorage.setItem(this.STORAGE_KEY, 'dark');
    },
    
    disableDarkMode() {
        document.documentElement.classList.remove('dark-mode');
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.classList.remove('dark-mode');
        }
        localStorage.setItem(this.STORAGE_KEY, 'light');
    }
};
