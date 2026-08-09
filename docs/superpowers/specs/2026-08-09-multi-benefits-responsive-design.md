# Multi-benefits responsive section

## Goal

Bring the `multi-benefits` section in line with the supplied mobile and desktop references while preserving the existing API-driven content and shared project styles.

## Responsive behavior

- The mobile layout is visible below Tailwind's `md` breakpoint (`< 768px`).
- The desktop layout is visible from `md` upward (`>= 768px`).
- The two layouts use separate responsive wrappers: `md:hidden` for mobile and `hidden md:block` for desktop.
- API data and small presentational pieces remain shared so the two layouts do not duplicate data-fetching logic.

## Mobile layout

The section follows this vertical order:

1. Main title.
2. Description.
3. Static, clipped `DREAM BIG EARN BIGGER!` ribbon.
4. Three benefit cards.

The snake illustration and the `multi-benefits` eyebrow heading are hidden on mobile. Spacing, typography, borders, colors, and card radii follow the supplied mobile reference and existing `multi-tasks` conventions.

## Desktop layout

The `multi-benefits` eyebrow heading is aligned to the upper-right. The main content uses three visual columns:

- left: main title and description;
- center: the imported snake illustration, overlapping the space between the text and cards;
- right: three vertically stacked benefit cards.

The static ribbon spans the full content width below the three-column composition. It clips overflowing text rather than wrapping and includes the existing snake icon where it matches the reference.

## Data, loading, and accessibility

- Content continues to come from `getBenefits` through `useApiData`.
- Rendering remains guarded until data is available, consistent with the current implementation.
- Benefit list items receive stable React keys based on their content and index.
- The decorative snake image receives descriptive alternative text unless it is marked decorative by the final composition.

## Verification

- Add an automated source-level breakpoint/layout regression check if the existing project test setup permits it without introducing a new test framework solely for this section.
- Run lint, formatting checks, and the production build.
- Use Playwright to inspect the section below `md`, at `767px`, at `768px`, and at a representative desktop width.
- Confirm only one responsive layout is visible at each width and that there is no unintended horizontal page overflow.
