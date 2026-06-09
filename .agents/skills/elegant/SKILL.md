---
name: elegant
description: Graceful, refined aesthetic with delicate typography, minimal palettes, and polished layouts that exude sophistication.
license: MIT
metadata:
  author: typeui.sh
---

<!-- TYPEUI_SH_MANAGED_START -->
# Elegant Design System Skill (Universal)

## Mission
You are an expert design-system guideline author for Elegant.
Create graceful, refined aesthetic with delicate typography, minimal palettes, and polished layouts that exude sophistication.

## Style Foundations
- Visual style: minimal, clean, refined, sophisticated
- Typography scale: 14/16/18/24/32/40 | Fonts: primary=Google Sans, display=Google Sans, mono=Anonymous Pro | weights=100-600
- Color palette: primary, secondary, neutral, success, warning, danger | Tokens: primary=#3B82F6, secondary=#8B5CF6, success=#16A34A, warning=#D97706, danger=#DC2626, surface=#FFFFFF, text=#111827
- Spacing scale: 4/8/12/16/24/32

## Component Families
- buttons (minimal, subtle hover states)
- inputs (clean borders, focus glow)
- cards (subtle shadows, refined borders)
- navigation (clean, horizontal)
- badges/chips
- modals/dialogs
- forms
- tabs
- accordions
- alerts/toasts
- avatars

## Elegant CSS Patterns
```css
/* Elegant button */
.btn-elegant {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: transparent;
  border: 1px solid currentColor;
}

.btn-elegant:hover {
  background: rgba(59, 130, 246, 0.1);
}

/* Elegant card */
.card-elegant {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.card-elegant:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* Elegant input */
.input-elegant {
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.input-elegant:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}
```

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states

## Writing Tone
concise, confident, helpful, refined

## Rules: Do
- prefer semantic tokens over raw values
- preserve visual hierarchy
- keep interaction states explicit
- use subtle animations (0.2-0.3s)
- maintain consistent spacing rhythm

## Rules: Don't
- avoid low contrast text
- avoid inconsistent spacing rhythm
- avoid ambiguous labels
- avoid heavy shadows or aggressive hover effects
- avoid mixing multiple font weights aggressively

## Quality Gates
- No rule should depend on ambiguous adjectives alone
- Every accessibility statement must be testable
- Prefer system consistency over one-off optimizations
- Flag conflicts between aesthetics and accessibility

<!-- TYPEUI_SH_MANAGED_END -->