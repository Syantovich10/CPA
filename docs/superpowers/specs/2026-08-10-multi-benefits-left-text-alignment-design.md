# Multi-benefits left text alignment

## Goal

Match the desktop multi-benefits layout to the supplied reference by moving the complete left text block (title and description) upward while leaving the snake, benefit cards, ribbon, and section heading unchanged.

## Design

- Apply a desktop-only vertical transform to the left text wrapper in `DesktopBenefitsLayout`.
- Use `lg:-translate-y-[130px]` as the initial offset selected from the Playwright comparison at a 1924 px viewport.
- Preserve the wrapper's current horizontal position, width, typography, and internal spacing.
- Do not change `MobileBenefitsLayout`.

## Verification

- Capture the section with Playwright at 1924×1058 and compare the left block's position with the supplied reference.
- Check a smaller desktop viewport to ensure the raised block does not overlap the section heading or leave the visible section bounds.
- Run the project's lint and build checks.

## Scope

This change affects only the desktop position of the multi-benefits left text block. No content, data flow, responsive breakpoint, or other section layout changes are included.
