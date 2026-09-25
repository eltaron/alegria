---
name: Alegria Haute ERP
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#dbc2b0'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#a38c7c'
  outline-variant: '#554336'
  surface-tint: '#ffb77d'
  primary: '#ffb77d'
  on-primary: '#4d2600'
  primary-container: '#d97707'
  on-primary-container: '#432100'
  inverse-primary: '#904d00'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb2b7'
  on-tertiary: '#67001b'
  tertiary-container: '#ff516a'
  on-tertiary-container: '#5b0017'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1rem
  label-numeric:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-compact:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2.5rem
---

## Brand & Style

This design system embodies the operational precision of an enterprise management suite combined with the hospitality, warmth, and prestige of fine dining. Built for executive management, floor headwaiters, culinary directors, and supply chain operators, the interface balances dense data visualization with an unhurried, luxury aesthetic.

### Visual Style
The aesthetic fuses **Refined Dark Modernism** with subtle **Tactile Precision**:
- **Rich Slate Depth**: Deep navy-tinted charcoal foundations (`#0B1120`, `#0F172A`) replace generic harsh blacks, invoking a late-night, ambient culinary lounge.
- **Champagne & Burnished Gold Accents**: Sourced from the signature golden chef motif, warm ochre and muted champagne provide focused visual interest and status hierarchy without gaudiness.
- **High Information Density**: Compact vertical metrics, clean divider architecture, and tabular alignment facilitate rapid scanning during chaotic peak service hours.
- **Bilingual Elegance (LTR & RTL)**: Universal typographical scale, symmetric component layouts, and strict logical directional properties accommodate Arabic and English with equal visual weight.

## Colors

The color palette is calibrated for dark rooms, low-light POS stations, and executive back-office monitors, preserving visual acuity while prioritizing operational triage.

### Core Color Roles
- **Primary (`#D97706` / Gold Amber)**: The anchor of the brand. Represents selected states, primary revenue metrics, high-tier membership tiers, and executive call-to-actions.
  - *Light Gold Tint (`#FDE68A` / `#F59E0B`)*: Highlights, hover overlays, and active iconography.
- **Secondary (`#10B981` / Emerald)**: Designates profit growth, table availability, settled tabs, fulfilled orders, and healthy inventory metrics.
- **Tertiary (`#F43F5E` / Damask Rose)**: Reserved exclusively for critical interventions: 86'd ingredients, expired health checks, voided transactions, and critical stock depletion.
- **Neutral Base (`#0F172A` / Midnight Slate)**: The fundamental canvas.
  - *Canvas Root (`#0B1120`)*: Deep background base.
  - *Surface Container (`#1E293B`)*: Card containers, flyouts, and modal panels.
  - *Surface Elevated (`#334155`)*: Dropdowns, tooltips, and highlighted table rows.
  - *Border Line (`#334155` at 50% opacity / `#1E293B`)*: Crisp structural delineations.

### Surface Tones & Text Contrast
- **Text High-Emphasis (`#F8FAFC`)**: Vital statistics, guest names, table numbers, and ledger totals.
- **Text Medium-Emphasis (`#94A3B8`)**: Field titles, column headers, meta timestamps, and secondary descriptions.
- **Text Disabled/Muted (`#64748B`)**: Inactive modifiers and empty state hints.

## Typography

The typographic stack serves two distinct needs: expressive, human hospitality hierarchy via **Plus Jakarta Sans**, and technical tabular legibility via **JetBrains Mono**.

### Structural Application
- **Plus Jakarta Sans**: Drives all human-readable touchpoints—section headers, guest order cards, reservation timelines, and dialogue flows. Its humanist geometry creates warmth without sacrificing layout density.
- **JetBrains Mono**: Used strictly for financial reporting, table turns, SKU counts, barcode strings, currency tickers, and POS order IDs. Numbers are rendered with fixed tabular figures to guarantee zero horizontal shifting during live data streams.

### RTL & Arabic Localization
For Arabic viewports, the primary interface maintains an identical dimensional baseline using native system or dynamic Arabic equivalents (e.g., Cairo or Tajawal), retaining line-height accommodations (+10% line-height ceiling) to prevent glyph clipping in dense data tables.

## Layout & Spacing

The layout is built upon an 8pt base grid with a 4pt micro-adjustment scale for high-density tables and compact POS split-views.

### Breakpoints & Spatial Adaptation
- **Mobile (`< 640px`)**: Single-column vertical stack. Gutters and outer margins default to `space-md` (`0.75rem`). Sticky bottom action bars for immediate kitchen ticket actions.
- **Tablet / POS Terminal (`641px - 1024px`)**: Fluid 8-column layout. Margin set to `1.25rem`. Two-pane split: order entry / table floor plan on the primary canvas (6 cols) and active ticket ledger (2 cols).
- **Desktop & Wallboards (`> 1025px`)**: 12-column fluid grid with fixed collapsible navigation (64px mini / 260px expanded). Outer margin is `margin-lg` (`2rem`).

### Density Principles
- Dense analytical views (Inventory matrices, P&L statements, KDS timelines) compress card padding to `space-sm` and row heights to 36px.
- Guest-facing or VIP floor overviews expand padding to `space-lg` to prioritize error-free touch selection.

## Elevation & Depth

This design system avoids loud skeuomorphic drops and heavy black shadows. Depth is achieved through **Tonal Layering** paired with **Micro-Luminescent Borders**.

### Depth Layers
1. **Level 0 (Canvas Base)**: `#0B1120`. Deep slate root representing the base viewport background.
2. **Level 1 (Card / Structural Surface)**: `#0F172A` with a 1px border of `#1E293B`. Base cards, inactive tables, and standard data grids.
3. **Level 2 (Active Panels & Modals)**: `#1E293B` surrounded by a dual outline: a 1px border of `#334155` and a subtle ambient halo (`box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5)`).
4. **Level 3 (Focused & Contextual Overlays)**: `#1E293B` featuring a warm champagne ambient diffusion (`box-shadow: 0 0 20px -2px rgba(217, 119, 6, 0.15)`). Used exclusively for active order sheets, table merge dialogs, and VIP customer profiles.

### Divider Philosophy
Dividers are razor-thin (1px) rendered at `#334155` with 40% opacity. In table rows, dividers alternate using subtle alpha shifts rather than distinct color switches to maintain low cognitive load during prolonged shifts.

## Shapes

The shape system adopts a **Soft Geometric** baseline (`roundedness: 1`). Controlled curvature communicates industrial resilience and executive refinement, preventing the interface from appearing overly casual.

### Corner Radii Guidelines
- **Base Components (Buttons, Input Fields, Badges)**: `0.25rem` (`4px`). Keeps edges crisp and aligns cleanly in high-density tables.
- **Containers (Panels, Cards, Popovers)**: `0.5rem` (`8px`). Softens large surfaces without eating into layout margins.
- **Elevated Modals & Dialog Windows**: `0.75rem` (`12px`).
- **Interactive Badges / Status Pills**: Fully circular/capsule only when representing continuous statuses (e.g., "Live Table", "Cooking", "Settled").

## Components

### Buttons
- **Primary (Gold Accent)**: Background `#D97706`, text `#0F172A` (bold for extreme contrast), 1px solid `#F59E0B`. Hover: `#F59E0B` with subtle warm glow. Focus: 2px ring `#FDE68A`.
- **Secondary (Subdued)**: Background `#1E293B`, text `#F8FAFC`, border 1px solid `#334155`. Hover: Background `#334155`.
- **Destructive / Alert**: Background `rgba(244, 63, 94, 0.12)`, text `#F43F5E`, border 1px solid `rgba(244, 63, 94, 0.3)`.

### Status Badges & Indicators
- Compact, uppercase typography (`label-compact`).
- **Growth / Ready**: Emerald tint (`rgba(16, 185, 129, 0.12)`), text `#10B981`, leading 6px glowing dot.
- **Caution / Running Out**: Amber tint (`rgba(217, 119, 6, 0.12)`), text `#F59E0B`.
- **Critical / Out of Stock (86'd)**: Rose tint (`rgba(244, 63, 94, 0.12)`), text `#F43F5E`.

### Cards & Panels
- Constructed from Surface Level 1 (`#0F172A`).
- Header areas feature a muted gold or slate label paired with an optional action button.
- Clean separation between card header and body via a 1px `#1E293B` stroke.

### Input Fields & Controls
- **Background**: `#0B1120` inset within a `#1E293B` surface.
- **Border**: 1px solid `#334155`. Transitions to `#D97706` on active focus.
- **Text**: `#F8FAFC` with placeholder colored in `#64748B`.
- Checkboxes and radios use `#D97706` fill with slate checks for unmistakable state changes in dim light.

### Domain-Specific Components
- **KDS Kitchen Ticket**: Top header ribbon color-coded by turnaround time (Green < 10m, Amber 10-20m, Rose > 20m). Modifiers indented with gold dash markers.
- **Interactive Table Map**: Vector polygons with subtle inner glow: Emerald for vacant, Slate for reserved, Gold Amber for seated with open check.
- **Stock Ticker Matrix**: Tabular rows showing current mass/volume with an integrated micro-progress bar shifting to Rose when falling below par level.