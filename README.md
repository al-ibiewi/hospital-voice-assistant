# Hospital Voice Assistant - Modular Project Structure

**Current Version**: 2.0 (Modular Architecture)  
**Last Updated**: January 2026

## 📁 Project Structure

```
hospital-voice-assistant/
├── index.html                 # Main entry point
├── README.md                  # This file
├── LICENSE
├── assets/
│   ├── icons/                # SVG icons (organized)
│   └── images/
│       └── hero-bg.jpg       # Hero background (local, optimized)
├── css/                       # Modular CSS
│   ├── variables.css         # Design tokens & CSS variables
│   ├── base.css              # Reset, typography, animations
│   ├── navbar.css            # Navigation styles
│   ├── hero.css              # Hero section
│   ├── cards.css             # Card components
│   ├── sections.css          # Section styles
│   ├── components.css        # Component styles
│   └── responsive.css        # Responsive design
├── js/                        # JavaScript modules
│   ├── app.js                # Main app initialization
│   ├── navigation.js         # Navigation module
│   ├── smooth-scroll.js      # Smooth scroll module
│   └── interactive.js        # Interactive features
└── components/               # Reserved for future use
```

## 🎨 CSS Architecture

### Modular CSS Organization

- **variables.css** - Centralized design system (colors, spacing, fonts, shadows, transitions)
- **base.css** - Global styles, typography, animations
- **navbar.css** - Navigation and mobile nav styles
- **hero.css** - Hero section with floating animations
- **cards.css** - Reusable card components and grids
- **sections.css** - Problem, solution, and impact sections
- **components.css** - Mobile app mockup, footer, complex components
- **responsive.css** - Mobile breakpoints and responsive adjustments

### Design System (variables.css)

```css
Colors: Primary (#0066ff), Secondary (#00d4ff), Dark theme
Spacing: 8px scale (xs to 4xl)
Typography: Eczar serif, weights 400-900
Shadows: 3 depth levels (sm, md, lg)
Transitions: Fast, normal, slow timings
Z-index: Organized stacking scale
```

## 🛠️ JavaScript Modules

### Module Structure

- **app.js** - Central initialization point
- **navigation.js** - Mobile/desktop navigation, smooth scrolling
- **smooth-scroll.js** - Enhanced scroll functionality
- **interactive.js** - Button interactions, emergency features

### Features

- ✅ Single responsibility per module
- ✅ Easy to test and maintain
- ✅ Reusable code patterns
- ✅ Clear imports/exports

## 📱 Responsive Design

### Breakpoints

- Desktop: 1200px+ (default)
- Tablet: 768px - 1199px
- Mobile: 640px - 767px

### Mobile Features

- Floating bottom navigation
- Single-column layouts
- Adjusted typography
- Touch-friendly buttons

## 🖼️ Assets

### Images

- `assets/images/hero-bg.jpg` - Locally hosted (not CDN)
- Optimized for web (1600px width)
- Faster loading, no network dependency

### Icons

- All icons inline SVG in HTML
- Sized via CSS classes (small, medium, large)
- Colored using `currentColor` CSS property

## 🚀 Performance Optimizations

1. **Modular CSS** - Load only necessary styles
2. **Local Assets** - No external CDN dependencies
3. **SVG Icons** - Scalable, no extra requests
4. **CSS Variables** - Reduced code duplication
5. **Semantic HTML** - Better accessibility

## 📚 Development Guide

### Adding New Styles

1. Create new CSS file: `css/feature-name.css`
2. Import in index.html: `<link rel="stylesheet" href="css/feature-name.css">`
3. Use CSS variables from `variables.css`
4. Follow BEM-like naming: `.feature-name`, `.card-item`

### Adding New Features

1. Create new JS module: `js/feature-name.js`
2. Export with init method: `export const FeatureName = { init() {...} }`
3. Import in app.js: `import { FeatureName } from './feature-name.js'`
4. Call initialization: `FeatureName.init()`

### Using CSS Variables

```css
/* Colors */
color: var(--primary-color);
background: var(--bg-light);

/* Spacing */
padding: var(--spacing-md);
margin: var(--spacing-lg);

/* Typography */
font-weight: var(--font-weight-bold);
line-height: var(--line-height-relaxed);
```

## 🔄 Deployment

### Development

- Open index.html in browser
- Use Live Server for hot reload

### Production Ready

- ✅ Semantic HTML structure
- ✅ Mobile-first responsive design
- ✅ Modular CSS and JavaScript
- ✅ Optimized images
- ✅ Dark mode support
- ✅ Accessibility features

### Future Enhancements

- [ ] Minify CSS/JS
- [ ] WebP image variants
- [ ] Lazy loading
- [ ] Service worker
- [ ] Build automation

## 🎯 Key Statistics

- **CSS**: 8 modular files (well-organized, maintainable)
- **JavaScript**: 4 modules (~200 lines)
- **HTML**: Single entry point (~520 lines)
- **Components**: 15+ reusable types
- **Responsive**: 2 mobile breakpoints
- **Performance**: Local assets, no external CDN

## 📝 Naming Conventions

### CSS

- Kebab-case: `.mobile-navbar`, `.card-illustration`
- Component-based: `.problem-card`, `.tech-card`
- State modifiers: `.toggle-on`, `.is-active`

### JavaScript

- PascalCase for modules: `Navigation`, `InteractiveElements`
- camelCase for methods: `setupNavigation()`, `handleClick()`
- Descriptive names: `setActiveNavItem()`, `scrollToSection()`

## 🔗 Resources

- [Eczar Font](https://fonts.google.com/specimen/Eczar) - Google Fonts
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - MDN Docs
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) - MDN Docs

## 📄 License

See LICENSE file.

---

**Hospital Voice Assistant**  
Offline Voice-Controlled Assistive System for Nigerian Hospitals
