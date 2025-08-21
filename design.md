# iris Design System

## Overview
This design system is built for modern, professional B2B and B2C applications with a focus on automation and AI. The design emphasizes dark themes, smooth animations, and clear hierarchy to convey trust and technological sophistication.

## Color Palette

### Primary Colors
```css
--brand-orange: #FF8A00  /* Primary accent color */
--brand-dark: #0D0D0D    /* Primary background */
```

### Gray Scale
```css
--brand-gray-100: #CCCCCC  /* Light text/borders */
--brand-gray-200: #A3A3A3  /* Secondary text color */
--brand-gray-300: #444444  /* Borders, dividers */
--brand-gray-400: #1A1A1A  /* Card backgrounds */
--brand-gray-500: #111111  /* Darker backgrounds */
```

### Usage
- **Background**: `brand-dark` for main background
- **Cards/Containers**: `brand-gray-400` with 50% opacity (`brand-gray-400/50`)
- **Primary Text**: `white`
- **Secondary Text**: `brand-gray-200`
- **Accent/CTA**: `brand-orange`
- **Borders**: `brand-gray-300` or `brand-orange` on hover

## Typography

### Font Family
- **Primary**: Manrope (Google Fonts)
- **Fallback**: sans-serif
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Scale
```css
/* Headings */
.heading-xl    { font-size: 5rem; }      /* 80px - Hero titles */
.heading-lg    { font-size: 4rem; }      /* 64px - Section titles */
.heading-md    { font-size: 3rem; }      /* 48px - Card titles */
.heading-sm    { font-size: 2rem; }      /* 32px - Component titles */
.heading-xs    { font-size: 1.5rem; }    /* 24px - Subtitle */

/* Body */
.body-lg       { font-size: 1.125rem; }  /* 18px - Main descriptions */
.body-base     { font-size: 1rem; }      /* 16px - Default text */
.body-sm       { font-size: 0.875rem; }  /* 14px - Small text */
```

### Typography Classes
- **Hero Text**: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter`
- **Section Titles**: `text-4xl md:text-5xl font-bold tracking-tight`
- **Card Titles**: `text-3xl font-bold`
- **Body Text**: `text-lg text-brand-gray-200`
- **Small Text**: `text-sm text-brand-gray-200`

## Spacing System

### Container
- **Max Width**: `container mx-auto` (responsive)
- **Padding**: `px-6` (24px horizontal)

### Section Spacing
- **Standard Section**: `py-24` (96px vertical)
- **Hero Section**: `py-24 sm:py-32 md:py-40` (responsive)

### Component Spacing
```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-24: 6rem     /* 96px */
```

## Component Patterns

### Buttons

#### Primary Button (CTA)
```css
.btn-primary {
  background: var(--brand-orange);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
}
.btn-primary:hover {
  background: rgba(255, 138, 0, 0.9);
}
```

#### Animated Border Button
```css
.btn-animated-border {
  position: relative;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  /* Animated conic gradient border */
  /* Hover effects with glow */
}
```

### Cards
```css
.card {
  background: rgba(26, 26, 26, 0.5); /* brand-gray-400/50 */
  border: 1px solid transparent;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all 0.3s;
}
.card:hover {
  border-color: rgba(255, 138, 0, 0.7);
}
```

### Status Indicators
```css
.status-online {
  background: rgba(21, 128, 61, 0.5); /* green-900/50 */
  color: rgb(134, 239, 172); /* green-300 */
  border: 1px solid rgb(21, 128, 61); /* green-700 */
  border-radius: 9999px;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
}
```

## Layout Patterns

### Grid Systems
- **Two Column**: `grid grid-cols-1 md:grid-cols-2 gap-8`
- **Responsive Cards**: `max-w-5xl mx-auto` for content containers
- **Video Container**: `max-w-4xl mx-auto aspect-video`

### Flexbox Patterns
- **Header Layout**: `flex justify-between items-center`
- **Button Groups**: `flex flex-col sm:flex-row gap-4 justify-center items-center`
- **Icon + Text**: `flex items-center gap-2`

## Animations

### Keyframes
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes carousel {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Animation Classes
- **Fade In Up**: `animate-fadeInUp` (0.7s ease-out)
- **Fade In Down**: `animate-fadeInDown` (0.5s ease-out)
- **Carousel**: `animate-carousel` (20s linear infinite)
- **Delays**: `animation-delay-100` through `animation-delay-600`

### Hover Effects
- **Scale**: `hover:scale-110 transition-transform duration-300`
- **Color**: `hover:text-brand-orange transition-colors duration-300`
- **Background**: `hover:bg-brand-orange/90 transition-all duration-300`

## Iconography

### Icon Sizing
- **Small Icons**: `h-6 w-6` (24px)
- **Medium Icons**: `h-8 w-8` (32px)
- **Large Icons**: `h-12 w-12` (48px)
- **Logo Wall**: `w-16 h-16 sm:w-18 sm:h-18` (responsive)

### Icon Colors
- **Default**: `text-brand-gray-200`
- **Hover**: `hover:text-white`
- **Accent**: `text-brand-orange`

### Icon Libraries
- **React Icons**: FA (FontAwesome), SI (Simple Icons)
- **Custom SVGs**: For specific branding needs

## Background Patterns

### Dot Grid Background
```css
.dot-grid {
  background: radial-gradient(#2d2d2d 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Layered Backgrounds
```html
<div class="bg-brand-dark min-h-screen">
  <div class="absolute inset-0 bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
  <div class="relative z-10">
    <!-- Content -->
  </div>
</div>
```

## Content Patterns

### Hero Section
- Large typography with gradient text effects
- Status indicators with animated dots
- Dual CTA buttons (primary + secondary)
- Staggered animations with delays

### Social Proof
- Logo carousel with continuous scroll
- Grayscale with hover color effects
- Consistent sizing and spacing

### Feature Cards
- Icon + title + description layout
- Hover border animations
- Consistent internal spacing
- Action buttons with icons

## Responsive Design

### Breakpoints
- **Mobile**: Default (< 640px)
- **Small**: `sm:` (≥ 640px)
- **Medium**: `md:` (≥ 768px)
- **Large**: `lg:` (≥ 1024px)

### Responsive Patterns
- Typography scales: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- Grid layouts: `grid-cols-1 md:grid-cols-2`
- Spacing adjustments: `py-24 sm:py-32 md:py-40`
- Icon sizing: `h-6 sm:h-8`

## Accessibility

### Focus States
- Visible focus rings on interactive elements
- Keyboard navigation support
- Screen reader friendly alt texts

### Color Contrast
- Maintain WCAG AA compliance
- Test with color blindness simulators
- Ensure sufficient contrast ratios

## Implementation Notes

### CSS Framework
- **TailwindCSS**: Primary utility framework
- **Custom CSS**: For complex animations and effects
- **CDN Setup**: Via tailwind.config in HTML

### Performance
- Use opacity for overlays instead of solid colors
- Implement animation delays for staggered effects
- Optimize images and icons
- Consider reduced motion preferences

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS Custom Properties support

This design system ensures consistency across all iris applications while maintaining flexibility for future enhancements and customizations.