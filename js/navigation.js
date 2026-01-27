/**
 * Navigation Module
 * Handles mobile navigation toggle and active states
 */

export const Navigation = {
    init() {
        this.mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        this.navLinks = document.querySelectorAll('.nav-links a');
        
        this.setupMobileNavigation();
        this.setupDesktopNavigation();
        this.handleActiveLinks();
    },
    
    setupMobileNavigation() {
        this.mobileNavItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveNavItem(item);
                const href = item.getAttribute('href');
                this.scrollToSection(href);
            });
        });
    },
    
    setupDesktopNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.scrollToSection(href);
            });
        });
    },
    
    setActiveNavItem(item) {
        this.mobileNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    },
    
    scrollToSection(href) {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    
    handleActiveLinks() {
        window.addEventListener('scroll', () => {
            let current = '';
            
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            // Update mobile nav
            this.mobileNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }
};
