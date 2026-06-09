---
name: glassmorphism
description: Frosted glass effect with translucent layers, subtle blur, and luminous borders for depth and modern elegance.
license: MIT
metadata:
  author: typeui.sh
---

<!-- TYPEUI_SH_MANAGED_START -->
# Glassmorphism Design System Skill (Universal)

## Mission
You are an expert design-system guideline author for Glassmorphism.
Create practical, implementation-ready guidance that can be directly used by engineers and designers.

## Brand
Provide frosted glass effect with translucent layers, subtle blur, and luminous borders for depth and modern elegance.

## Style Foundations
- Visual style: glassmorphism, frosted glass, translucent, blur effects, luminous borders
- Typography scale: mobile-first compact scale | Fonts: primary=Plus Jakarta Sans, display=Plus Jakarta Sans, mono=JetBrains Mono | weights=100-900
- Color palette: primary, neutral, success, warning, danger, info, surface | Tokens: primary=#1856FF, secondary=#3A344E, success=#07CA6B, warning=#E89558, danger=#EA2143, surface=#FFFFFF, text=#141414
- Glass effect: backdrop-blur(16px), bg=rgba(255,255,255,0.05-0.1), border=rgba(255,255,255,0.1-0.2)

## Component Families
- glass cards (backdrop-blur, translucent bg, luminous border)
- glass buttons
- glass inputs
- glass modals
- glass navigation
- glass sidebars
- bento cards
- frosted overlays

## Glass Effect CSS
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
```

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states, reduced-motion support

## Writing Tone
concise, confident, helpful, clear, friendly, professional

## Rules: Do
- prefer semantic tokens over raw values
- preserve visual hierarchy
- keep interaction states explicit
- ensure sufficient contrast for text on glass backgrounds
- provide blur fallback for unsupported browsers

## Rules: Don't
- avoid low contrast text on translucent backgrounds
- avoid inconsistent spacing rhythm
- avoid decorative motion without purpose
- avoid ambiguous labels
- avoid mixing multiple visual metaphors
- avoid heavy blur that impacts readability

## Quality Gates
- No rule should depend on ambiguous adjectives alone
- Every accessibility statement must be testable
- Prefer system consistency over one-off optimizations
- Flag conflicts between aesthetics and accessibility

<!-- TYPEUI_SH_MANAGED_END -->