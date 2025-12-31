# Styling System - Grand Line Archives

## Overview

The Grand Line Archives uses a comprehensive, One Piece-themed design system built on **Tailwind CSS v4** with custom Shadcn/UI-inspired components.

## Design System

### Color Palette

#### Light Mode
- **Primary (Ocean Blue)**: `hsl(217 91% 60%)` - Inspired by the Grand Line's vast ocean
- **Secondary (Pirate Purple)**: `hsl(270 50% 60%)` - The adventure and mystery
- **Accent (Gold)**: `hsl(45 93% 47%)` - Representing treasure and bounty
- **Destructive (Red)**: `hsl(0 84.2% 60.2%)` - Danger and spoiler warnings

#### Dark Mode
Automatically adjusts with `prefers-color-scheme: dark`:
- Lighter primary and secondary colors for better contrast
- Darker backgrounds with refined muted tones
- Enhanced gold accent for visibility

### Typography

- **Sans Font**: Geist Sans (Vercel's modern font family)
- **Mono Font**: Geist Mono
- **Headings**: Bold weights with gradient text support
- **Body**: Clean, readable text with proper line height

## Components

### UI Components

#### Button
- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: default, sm, lg, icon
- **Features**: Full keyboard navigation, focus states, disabled states

#### Card
- **Parts**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Styling**: Rounded corners, subtle shadows, responsive padding
- **Use**: Theory cards, feature displays, CTAs

#### Badge
- **Variants**: default, secondary, destructive, outline
- **Custom**: chapter, sbs, cover (for evidence tags)
- **Colors**: Blue for chapters, purple for SBS, green for cover stories

#### Input
- **Features**: Ring focus, placeholder styling, disabled states
- **Integration**: Works seamlessly with forms and search

#### Tabs
- **Client Component**: Interactive tab switching
- **Parts**: Tabs, TabsList, TabsTrigger, TabsContent
- **Styling**: Smooth transitions, active state indicators

#### Avatar
- **Parts**: Avatar, AvatarImage, AvatarFallback
- **Features**: Lazy loading images, initials fallback
- **Use**: User profiles, author attribution

#### Separator
- **Orientations**: Horizontal, vertical
- **Styling**: Subtle border color, semantic HTML

### Custom Components

#### TheoryCard
- **Enhanced Design**:
  - Gradient header overlay
  - Hover effects with scale and shadow
  - Stats grid (Rating, Bounty, Views)
  - Author avatar with initials
  - Verified badge indicator
  - Smooth hover animation with arrow
- **Responsive**: Adapts to mobile, tablet, and desktop
- **Accessibility**: Proper semantic HTML, keyboard navigation

#### SpoilerGuard
- **Three Levels**: Anime Only, Manga Current, Latest Leaks
- **Color Coded**: Blue, Purple, Red badges
- **Context API**: Global state management
- **Icons**: Eye, BookOpen, Zap for visual distinction

#### EvidenceChain
- **Color System**:
  - **Blue**: Chapter references
  - **Purple**: SBS references
  - **Green**: Cover story references
- **Interactive**: Clickable tags (ready for modal previews)

#### Navigation
- **Features**:
  - Gradient logo text
  - Anchor icon branding
  - Hover effects on links
  - Backdrop blur effect
  - Sticky positioning ready

## Animations

### Keyframes

```css
@keyframes fadeIn - Smooth fade in effect
@keyframes slideInFromBottom - Slide up with fade
@keyframes pulse-glow - Pulsing glow effect for emphasis
```

### Usage Classes

- `.animate-fade-in` - 0.5s fade in
- `.animate-slide-in-bottom` - 0.6s slide from bottom
- `.animate-pulse-glow` - 2s infinite pulse

### Page Animations

- **Landing Page**: Gradient title with slide-in animation
- **Theory Cards**: Hover scale and shadow transition
- **Buttons**: Color and transform transitions
- **Tabs**: Smooth content switching

## Special Features

### Custom Scrollbar (Ocean Theme)
- Themed scrollbar colors matching primary palette
- Hover effects on thumb
- Consistent across the application

### Focus States
- 2px ring with primary color
- 2px offset for accessibility
- Applied to all interactive elements

### Selection Colors
- Primary color at 30% opacity background
- Foreground text color maintained
- Branded selection experience

### Smooth Transitions
- All elements have 200ms color transitions
- Prevents jarring color changes
- Smooth dark mode switching

## Responsive Design

### Breakpoints (Tailwind Defaults)
- **sm**: 640px - Phone landscape
- **md**: 768px - Tablet
- **lg**: 1024px - Desktop
- **xl**: 1280px - Large desktop

### Mobile-First Approach
- All designs start mobile
- Progressive enhancement for larger screens
- Grid systems: 1 col mobile → 2 cols tablet → 3-4 cols desktop

## Gradient Usage

### Primary Gradients
```tsx
// Hero title
bg-linear-to-r from-blue-600 via-purple-600 to-pink-600

// Section headers
bg-linear-to-r from-primary to-secondary

// Cards
bg-linear-to-r from-purple-600/10 to-blue-600/10
```

### Backgrounds
```tsx
// Page gradients
bg-linear-to-b from-background to-muted/20

// Card overlays
bg-linear-to-b from-primary/5 to-transparent
```

## Dark Mode Support

### Auto-Detection
- Uses `prefers-color-scheme: dark` media query
- Automatic color scheme switching
- No JavaScript required

### Color Adjustments
- Lighter primary/secondary colors
- Darker backgrounds
- Adjusted muted tones
- Enhanced contrast ratios

## Accessibility

### WCAG Compliance
- Sufficient color contrast ratios
- Focus indicators on all interactive elements
- Semantic HTML structure
- ARIA labels where needed

### Keyboard Navigation
- Tab order follows visual hierarchy
- Focus visible styles
- Skip links ready
- No keyboard traps

## Best Practices

### Using Components
```tsx
// Import from ui folder
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

// Use with variants
<Button variant="outline" size="lg">Click Me</Button>

// Combine with Tailwind classes
<Button className="mt-4 w-full">Submit</Button>
```

### Custom Styling
```tsx
// Use cn() utility to merge classes
import { cn } from '@/lib/utils'

<div className={cn("base-classes", conditional && "conditional-class", className)} />
```

### Color Usage
```tsx
// Use semantic tokens
text-primary, text-secondary, text-muted-foreground
bg-card, bg-muted, bg-accent
border-border, ring-ring

// Avoid hard-coded colors unless theme-specific
```

## File Structure

```
app/
├── globals.css          # Design system, CSS variables, animations
components/
├── ui/                  # Base UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── input.tsx
│   ├── tabs.tsx
│   ├── avatar.tsx
│   └── separator.tsx
├── theory-card.tsx      # Custom theory card
├── spoiler-guard.tsx    # Spoiler protection system
├── evidence-tag.tsx     # Evidence chain components
└── navigation.tsx       # Main navigation
lib/
└── utils.ts             # cn() utility function
```

## Future Enhancements

- [ ] Add skeleton loading states
- [ ] Implement toast notifications
- [ ] Create modal/dialog component
- [ ] Add dropdown menu component
- [ ] Implement tooltip component
- [ ] Create progress indicators
- [ ] Add badge animations
- [ ] Enhanced micro-interactions
- [ ] Theme customizer

## Performance

### Optimizations
- Tailwind CSS v4 JIT compiler
- Minimal custom CSS
- CSS variables for theming
- No runtime JavaScript for styling
- Efficient class generation

### Best Practices
- Use semantic color tokens
- Leverage Tailwind utilities
- Minimize custom CSS
- Use CVA for component variants
- Tree-shake unused styles

---

**Built with love for One Piece fans worldwide** 🏴‍☠️
