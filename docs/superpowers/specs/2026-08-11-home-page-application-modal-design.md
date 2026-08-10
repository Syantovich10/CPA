# Home page application modal

## Goal

Open the existing application form modal when a user presses the CTA button in any `MultiplyWithUs` tab.

## Design

- `HomePage` owns a single `isFormOpen` boolean state.
- `HomePage` passes an open callback to the existing `MultiplyWithUs` `onApply` prop.
- `HomePage` renders the existing `Modal` with the existing `ApplicationForm` inside it.
- Both components receive the same close callback.
- `Modal.jsx` and `ApplicationForm.jsx` remain unchanged.

The existing modal behavior continues to handle closing from the backdrop and Escape key. The existing form handles its close button and successful completion.

## Verification

- Run lint and the production build.
- Confirm the CTA opens the form and all existing close paths reset the state in `HomePage`.
