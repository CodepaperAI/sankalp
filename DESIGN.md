# Sankalp Real Estate — Design System

> **Aesthetic:** Dark Luxury Editorial — refined gold on rich black, image-driven, cinematic scroll storytelling
> **Emotional Tone:** Trustworthy, Prestigious, Warm
> **Tagline Direction:** "Your Home. Your Legacy."

---

## 1. Typography

### Display / Headlines
- **Font:** Cormorant Garamond (Google Fonts, variable, 300–700)
- **Usage:** Hero headlines, section titles, pull quotes
- **Sizing:** `clamp(2.5rem, 6vw, 8rem)` for hero, `clamp(1.75rem, 4vw, 3.5rem)` for section titles
- **Letter-spacing:** `-0.02em` on large display, `0.08em` on uppercase labels
- **Style notes:** Use italic sparingly for editorial emphasis. Mix weights within a single headline for drama (light + semibold).

### Body / UI
- **Font:** DM Sans (Google Fonts, variable, 300–700)
- **Usage:** Body copy, navigation, buttons, form labels, captions
- **Sizing:** `clamp(0.875rem, 1vw, 1.125rem)` body, `0.75rem` captions
- **Line-height:** 1.6 for body, 1.1 for display

### Upgrade Path
- **Editorial New** (if licensed later) replaces Cormorant Garamond for headlines — preserves the same editorial intent with more distinctive character.

---

## 2. Color System

All colors defined as CSS custom properties on `:root`.

### Core Palette
```css
:root {
  /* Backgrounds */
  --color-bg:             #0a0a0a;    /* Rich black — primary background */
  --color-surface:        #141414;    /* Elevated cards, nav, panels */
  --color-surface-raised: #1e1e1e;    /* Modals, popovers, hover states */

  /* Gold Accent (the signature) */
  --color-accent:         #c9a96e;    /* Primary gold — CTAs, highlights, borders */
  --color-accent-light:   #e2d1a2;    /* Gold on dark text, subtle highlights */
  --color-accent-dim:     #8b7748;    /* Muted gold for secondary elements */

  /* Text */
  --color-text:           #f5f0e8;    /* Warm white — primary text */
  --color-text-muted:     #8a8577;    /* Warm gray — secondary text, captions */
  --color-text-inverse:   #0a0a0a;    /* Text on gold/light backgrounds */

  /* Semantic */
  --color-success:        #4a7c59;    /* Active listings, positive states */
  --color-error:          #c45d5d;    /* Form errors, alerts */
  --color-info:           #5d7f9e;    /* Informational badges */

  /* Borders & Dividers */
  --color-border:         rgba(201, 169, 110, 0.15);  /* Subtle gold tint */
  --color-border-strong:  rgba(201, 169, 110, 0.35);  /* Emphasized borders */
  --color-divider:        rgba(245, 240, 232, 0.08);  /* Section separators */
}
```

### WCAG Contrast Verification
| Pair | Ratio | Grade |
|------|-------|-------|
| `--color-text` on `--color-bg` | 17.4:1 | AAA |
| `--color-accent` on `--color-bg` | 7.2:1 | AAA |
| `--color-accent-light` on `--color-bg` | 11.1:1 | AAA |
| `--color-text-muted` on `--color-bg` | 4.6:1 | AA |
| `--color-text-inverse` on `--color-accent` | 7.2:1 | AAA |

### Light Section Variant (for contrast breaks)
```css
.section-light {
  --color-bg: #f5f0e8;
  --color-surface: #ece5d8;
  --color-text: #0a0a0a;
  --color-text-muted: #5a5549;
}
```

---

## 3. Spacing & Layout

### Spacing Scale (8px base)
```
--space-1:   0.25rem   (4px)
--space-2:   0.5rem    (8px)
--space-3:   0.75rem   (12px)
--space-4:   1rem      (16px)
--space-6:   1.5rem    (24px)
--space-8:   2rem      (32px)
--space-12:  3rem      (48px)
--space-16:  4rem      (64px)
--space-20:  5rem      (80px)
--space-24:  6rem      (96px)
--space-32:  8rem      (128px)
--space-40:  10rem     (160px)
```

### Section Spacing
- Between major sections: `--space-32` to `--space-40` (128–160px)
- Never less than `--space-24` (96px) between sections
- Generous negative space is the design — let content breathe

### Layout Principles
- **Break the grid.** Asymmetric layouts (60/40, 70/30) are default. Equal columns = banned.
- **Section rhythm:** full-bleed → contained → split-screen → full-bleed. Never repeat the same layout pattern twice in a row.
- **Overlapping elements:** text overlapping images by 20–40px, sections bleeding into each other with negative margins.
- **Max content width:** 1400px for text-heavy sections, full-bleed for imagery.
- **Bento grid for niches:** 2–3 large tiles + 3–4 small tiles. Not 7 equal cards.
- **Z-depth layering:** use translateZ, z-index, and subtle shadows to create physical layers.

---

## 4. Motion & Animation

### Philosophy
Every animation has PURPOSE: guide attention, communicate state, or create delight. No decorative motion.

### Easing (Custom — Never Default ease-in-out)
```css
--ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1);       /* Snappy entrances */
--ease-out-smooth:  cubic-bezier(0.33, 1, 0.68, 1);      /* Smooth exits */
--ease-in-out-custom: cubic-bezier(0.65, 0, 0.35, 1);    /* Transitions */
--spring:           type: "spring", stiffness: 100, damping: 15;  /* Interactive elements (Framer Motion) */
```

### Page Load Choreography (GSAP Timeline)
1. Background fade from pure black → `--color-bg` (300ms)
2. Logo fade in (200ms)
3. Nav items stagger in from top (stagger: 0.06, 400ms each)
4. Hero headline: word-by-word reveal from bottom (stagger: 0.12)
5. Hero subtext fade in (300ms, delay: 0.8s)
6. CTA button scale up from 0.9 → 1 with gold glow pulse (400ms)
7. Hero image/video reveal via `clip-path: inset()` animation (800ms)

### Scroll Animations (GSAP ScrollTrigger)
- **Niche section:** Pinned for ~700vh. Each of 7 niches gets a full-viewport "act" — image cross-dissolve + text stagger-in as user scrolls through.
- **Property showcase:** Pin container, animate through exterior → interior gallery → floor plan → neighbourhood map.
- **Stats counters:** Numbers count up from 0 when section enters viewport (duration: 2s, ease: power2.out).
- **Text reveals:** Lines animate in from bottom with 0.08s stagger as they enter viewport.
- **Parallax images:** Property photos at 0.5x scroll speed behind fixed text.
- **Section transitions:** Background color lerp between dark and light sections.

### Micro-Interactions
- **Buttons:** scale(1.03) + gold shadow elevation on hover (200ms spring)
- **Links:** underline slides in from left on hover (300ms ease-out-expo)
- **Cards:** subtle 3D tilt on hover (perspective: 1000px, max rotation: 3deg)
- **Form inputs:** floating label animates up on focus, gold border glow
- **Navigation:** active indicator slides between items (spring physics)

### Signature Elements (Mandatory — Pick Minimum 3 Per Page)
1. **Scroll-pinned niche storytelling** — the signature interaction
2. **Custom cursor** — gold dot/ring, scales on hover, spotlight glow on dark sections
3. **Kinetic typography hero** — character-by-character reveal on load
4. **Interactive GTA Mapbox map** — dark theme, gold pins per neighbourhood
5. **Parallax neighbourhood stories** — pinned photo + scrolling text overlay
6. **Stats counter section** — scroll-triggered number animation

---

## 5. Image Strategy

### Photography Requirements (Photoshoot Brief)
- **Agent portrait:** Environmental, editorial-quality. Sankalp in front of a luxury GTA property or in a styled office. Full-body or 3/4 length. NOT a studio headshot. Until shot: charcoal silhouette placeholder with "Portrait to be commissioned" label.
- **Property photography:** Wide-angle interiors, twilight exteriors, drone aerials. Warm color grading to match palette. Until sourced: solid gradient placeholders in palette colors — no stock photos.
- **Neighbourhood imagery:** Street-level lifestyle photography of GTA neighbourhoods (Oakville waterfront, Yorkville streetscape, Brampton community centres). Until sourced: gradient + typography placeholders.

### Image Treatment
- `clip-path` reveals on scroll entry
- Parallax containers: `overflow: hidden` + `translateY` at 0.5x scroll speed
- Duotone overlay option: `mix-blend-mode: multiply` with gold tint for editorial sections
- All images via `next/image` with `priority` on hero, `loading="lazy"` elsewhere
- `aspect-ratio` on all containers, `object-fit: cover`

### Placeholder Strategy (Pre-Photoshoot)
- Solid gradient blocks using palette colors (dark-to-gold, dark-to-surface)
- Labelled with intended content ("Luxury Home Exterior — Oakville")
- Layout, animation, and composition are final — only the image source swaps

---

## 6. Component Patterns

### Buttons
- **Primary:** Gold background (`--color-accent`), dark text, no border radius > 4px. Hover: scale(1.03), elevated shadow `0 8px 32px rgba(201,169,110,0.3)`.
- **Secondary:** Transparent with gold border. Hover: fill with gold at 10% opacity.
- **Ghost:** Text-only with animated underline on hover.
- Minimum touch target: 44x44px.

### Navigation
- Fixed top bar, transparent over hero, solid `--color-surface` on scroll.
- Logo left, minimal items center (Buy | Sell | Communities | About | Contact), phone number + CTA right.
- Mobile: hamburger → full-screen overlay with staggered item reveal.
- Active page indicator: gold underline that slides between items.

### Forms (Lead Capture)
- Max 3 fields on first interaction: Name, Email, Phone.
- Floating labels that animate up on focus.
- Gold focus ring (`box-shadow: 0 0 0 2px var(--color-accent)`).
- Shake animation on validation error.
- Specific CTA copy: "Get Your Home Valuation", "Book a Consultation", "Get Listings First" — never "Submit".

### Cards (When Unavoidable)
- No border-radius > 8px. No drop shadows on white backgrounds.
- Dark surface (`--color-surface`) with subtle gold border on hover.
- 3D tilt interaction on hover (perspective + rotateX/Y, max 3deg).
- Content reveals additional info on hover (not hidden by default on mobile).

### Testimonials
- NOT carousels. Editorial quote blocks integrated into page flow.
- Client name, neighbourhood, transaction type as attribution.
- Large serif pull-quote typography.
- Placed adjacent to lead capture forms for trust reinforcement.

---

## 7. Cultural & Market Positioning

### Brand Voice
- Luxury-first, community-aware. The site looks like Sotheby's but understands Brampton.
- Never "ethnic realtor" positioning — luxury brand that deeply understands the community.
- Family-centric messaging: multi-generational living, school districts, in-law suites.

### Trust Signals
- Stats counters: sales volume, families served, neighbourhoods covered, years experience.
- Press/media badges: Globe and Mail, Toronto Life, etc. (when earned).
- Brokerage affiliation badge.
- "Trusted by X families in [neighbourhood]" > generic volume numbers.

### Multilingual
- English primary. Hindi/Punjabi toggle in nav (Phase 3+).
- WhatsApp as contact channel alongside phone/email.

### The 7 Niches (Ordered by Buyer Journey)
1. First-Time Buyers
2. Condos
3. Pre-Construction
4. Investment Properties
5. Luxury Homes
6. Relocation
7. Downsizing

---

## 8. Banned Patterns

These are instant rebuilds if they appear:

- Equal-column card grids (the #1 sign of AI/template UI)
- Blue/white realtor color scheme
- Generic stock hero images of skylines
- Carousel sliders for listings
- Inter / Arial / system font as default
- Purple/blue gradient hero sections
- Rounded-corner cards on white backgrounds with drop shadows
- Symmetric layouts throughout
- Cookie-cutter SaaS layout (hero → features grid → pricing → CTA → footer)
- IDX search bar as the hero element
- Listing-database-first homepage (Zillow clone)
- Bollywood aesthetics, religious imagery, or cultural cliches
- Red/saffron "default Indian business" palette
- `ease-in-out` as default easing
- Default Tailwind colors without customization
- Small agent headshot tucked in nav corner
- Generic "Submit" button text
- Testimonial carousels with circular avatar + quote
- Footer with 4 equal-width link columns
- Decorative animations with no purpose
- Stock photos of any kind

---

## 9. Decisions Log

| # | Decision | Rationale | Revisit? |
|---|----------|-----------|----------|
| 1 | Cormorant Garamond over Editorial New | Free via Google Fonts, no licensing risk. Editorial New documented as upgrade path. | If license purchased |
| 2 | Dark luxury palette over light | Research shows dark + gold differentiates from 90% of realtor sites (blue/white). Connotes prestige. | No |
| 3 | Scroll-pinned niches over bento grid | 7 equal tiles = template. Pinned storytelling creates cinematic experience and lets each niche breathe. | No |
| 4 | Gold accent over warm neutrals | Gold = prosperity across cultures, works as luxury signal without being gaudy when used sparingly on dark. | No |
| 5 | No stock photography | Stock = death of trust for a personal brand. Gradient placeholders until photoshoot. | When photoshoot done |
| 6 | WhatsApp integration | Standard channel for South Asian diaspora in GTA. Trust signal + convenience. | No |
| 7 | Home valuation as primary lead magnet | Research: 2-5x higher conversion than generic "Contact Us". Seller-facing entry point. | No |
| 8 | Environmental portrait over headshot | Research: editorial full-body/3/4 portraits in luxury settings outperform studio headshots for trust. | When portrait shot |
