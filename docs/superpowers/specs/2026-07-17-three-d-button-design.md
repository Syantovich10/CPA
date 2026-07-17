# Three-dimensional button design

## Goal

Define reusable Tailwind styling for the existing React button, matching the
supplied 365 x 156 reference: a pale-yellow face, black outline, and narrow
angled top and right faces that create a three-dimensional effect. Button
content is supplied through `children`, and the button width follows that
content instead of using a fixed width.

## Component API

`ThreeDButton` renders a native `<button>`. It accepts `children`, an optional
`className`, and standard button attributes such as `type`, `onClick`, and
`disabled`. The default `type` is `button` so the component does not submit a
form unexpectedly.

## Appearance and interaction

- The resting state has a `#FFE783` main face, black text, and a 3 px black
  border.
- The main face is 92 px high. It uses `inline-flex`, `w-fit`, 20 px horizontal
  padding, centered content, 26 px bold text, a one-line label, and `0.36em`
  letter spacing. The 365 x 156 image is a proportion reference, not a fixed
  component size; label length determines width.
- The button is `relative` and `isolate`. Both decorative faces are absolutely
  positioned at `-z-10` and have `pointer-events-none`, so they paint behind
  the main face and text but do not enlarge or intercept the main rectangular
  hit area. Overflow remains visible. This negative layer is intentional: the
  portion under the main face must be hidden by its background, while the
  portions extending above and to the right must remain visible. Browser
  inspection must confirm that this works inside the isolated stacking context.
- `before` creates the 12 px-high top face. Its box starts at `left: 0` and
  `top: -12px`, and its width is `calc(100% + 12px)`. A static arbitrary
  `clip-path` forms a trapezoid with points `26px 0`, `100% 0`,
  `calc(100% - 12px) 100%`, and `0 100%`.
- `after` creates the 12 px-wide right face. Its box starts at `right: -12px`
  and `top: -12px`, and its height is `calc(100% + 12px)`. Its static arbitrary
  `clip-path` uses points `0 12px`, `100% 0`,
  `100% calc(100% - 12px)`, and `0 100%`.
- Each clipped face is yellow with a crisp black edge produced by the literal
  filter `drop-shadow(-2px 0 0 #000) drop-shadow(2px 0 0 #000)
  drop-shadow(0 -2px 0 #000) drop-shadow(0 2px 0 #000)`. The active equivalent
  uses the same offsets with `#FFE783`. The exact base utility is
  `[filter:drop-shadow(-2px_0_0_#000)_drop-shadow(2px_0_0_#000)_drop-shadow(0_-2px_0_#000)_drop-shadow(0_2px_0_#000)]`,
  prefixed separately with `before:` and `after:`. The active utility uses the
  same complete static string with `#FFE783` and the required
  `enabled:active:before:` or `enabled:active:after:` prefix. The filter follows
  the clipped polygon instead of drawing a rectangular outline.
- While the button matches the native `:active` state during pointer or
  keyboard activation, colors swap through `enabled:active:` variants: the
  main and decorative faces become black, while the text and all edges become
  yellow.
- Releasing the button restores the resting colors. No React state is needed;
  the native CSS `active` state controls the interaction.
- Pressing does not translate the button or change the 12 px face depths. The
  supplied reference provides one geometry, and the requested pressed behavior
  specifies color inversion only.
- The component keeps a visible keyboard focus indicator and exposes the
  native disabled state. A disabled button uses `cursor-not-allowed` and 50%
  opacity, and the `enabled:active:` contract prevents pressed inversion.
- `className` is appended after `BASE_CLASSES`; callers are expected to use it
  for layout and positioning overrides. They can technically supply competing
  visual utilities, whose result follows Tailwind's generated cascade.

## Structure and dependencies

The implementation adds `src/config/button.js`. The file exports the Tailwind
utilities as an array of strings and exports `BASE_CLASSES` as that array joined
with spaces, preserving the existing import contract in
`src/components/Button/ThreeDButton.jsx`. It depends only on the project's
existing Tailwind CSS 4 setup and adds no packages or global styles.

Every Tailwind utility, including arbitrary `clip-path` and filter values, is a
complete static string literal in the array. No utility is assembled from
runtime fragments, so Tailwind's source scanner can discover every class.

## Verification

A focused test will verify that `BUTTON_CLASSES` is an array, contains no empty
items, and that `BASE_CLASSES === BUTTON_CLASSES.join(' ')` with no comma in the
result. It will also assert the content-sized layout, pseudo-element geometry,
stacking and pointer-event contract, resting colors, `enabled:active:` colors,
focus treatment, and disabled treatment. The test must fail before the
configuration is implemented.

After the focused test passes, linting, formatting, and the production build
will run. The production build must confirm that Tailwind 4 generates CSS for
the complex arbitrary `clip-path` and multi-`drop-shadow` filter utilities;
string-level tests alone do not prove this.

Playwright will inspect desktop and narrow viewports. It will confirm that the
negative-z-index decorative faces remain visible, and that a long one-line
label is not clipped inside the button and does not change its height. The
button may exceed a viewport narrower than its intrinsic content width. The
browser checks also cover visible keyboard focus, the held `:active` state
using `Space`, disabled appearance and absence of active inversion, and use
inside a form without submission when the caller omits `type`.
