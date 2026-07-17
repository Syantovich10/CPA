# Three-Dimensional Button Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reusable React button that matches the supplied yellow-and-black 3D reference and swaps its face, text, and border colors only while held active.

**Architecture:** Keep the public API in one native-button React component and create both angled faces with Tailwind pseudo-element utilities. Use Node's built-in test runner plus Vite's existing SSR transformer to render the JSX in tests without adding test dependencies.

**Tech Stack:** React 19, Tailwind CSS 4, Vite 8, Node.js test runner, Playwright MCP

## Global Constraints

- Button content is supplied through `children`.
- The component accepts standard native button attributes and an optional `className`.
- The default `type` is `button`.
- Resting colors are a yellow face with black text and black borders.
- While active, the face is black and the text and all borders are yellow.
- Use Tailwind classes only; do not add a component CSS file, global styles, or packages.
- Preserve visible keyboard focus and the native disabled state.
- Do not modify the user's existing changes in `src/App.jsx` or `docs/codestyle.md`.

---

## File Structure

- Modify `src/components/Button/ThreeDButton.jsx`: native button API and all Tailwind styling.
- Create `src/components/Button/ThreeDButton.test.mjs`: behavioral and styling-contract tests using the existing Vite installation.
- Create `output/playwright/three-d-button-preview.html` only as a temporary visual-verification artifact; do not commit it.

### Task 1: Implement and verify `ThreeDButton`

**Files:**
- Modify: `src/components/Button/ThreeDButton.jsx`
- Create: `src/components/Button/ThreeDButton.test.mjs`
- Temporary verification artifact: `output/playwright/three-d-button-preview.html`

**Interfaces:**
- Consumes: React `children`, optional `className`, and native `<button>` attributes.
- Produces: default export `ThreeDButton({ children, className, type, ...props })`, rendering one native `<button>`.

- [ ] **Step 1: Write the failing native-button API test**

```js
import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

let vite
let ThreeDButton

before(async () => {
  vite = await createServer({
    appType: 'custom',
    server: { middlewareMode: true },
  })

  const module = await vite.ssrLoadModule('./ThreeDButton.jsx')
  ThreeDButton = module.default
})

after(async () => {
  await vite.close()
})

test('renders children and forwards native button attributes', () => {
  const html = renderToStaticMarkup(
    React.createElement(
      ThreeDButton,
      { 'aria-label': 'Contact us', disabled: true },
      'Get in touch',
    ),
  )

  assert.match(html, /^<button/)
  assert.match(html, /type="button"/)
  assert.match(html, /aria-label="Contact us"/)
  assert.match(html, /disabled=""/)
  assert.match(html, />Get in touch<\/button>$/)
})
```

- [ ] **Step 2: Run the API test and verify RED**

Run from `src/components/Button`:

```powershell
node --test ThreeDButton.test.mjs
```

Expected: FAIL because the current placeholder has no default export and does not render a button.

- [ ] **Step 3: Add the minimal native-button implementation**

```jsx
const ThreeDButton = ({
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}

export default ThreeDButton
```

- [ ] **Step 4: Run the API test and verify GREEN**

Run: `node --test ThreeDButton.test.mjs`

Expected: PASS with `1` passing test and `0` failures.

- [ ] **Step 5: Add a failing styling-contract test**

Append to `ThreeDButton.test.mjs`:

```js
test('uses Tailwind classes for 3D faces and held color inversion', () => {
  const html = renderToStaticMarkup(
    React.createElement(ThreeDButton, { className: 'w-full' }, 'Contact'),
  )

  assert.match(html, /w-full/)
  assert.match(html, /bg-\[#ffe76a\]/)
  assert.match(html, /border-black/)
  assert.match(html, /before:content-\[''\]/)
  assert.match(html, /after:content-\[''\]/)
  assert.match(html, /active:bg-black/)
  assert.match(html, /active:text-\[#ffe76a\]/)
  assert.match(html, /active:border-\[#ffe76a\]/)
  assert.match(html, /active:before:border-\[#ffe76a\]/)
  assert.match(html, /active:after:border-\[#ffe76a\]/)
  assert.match(html, /focus-visible:outline/)
  assert.match(html, /disabled:opacity-50/)
})
```

- [ ] **Step 6: Run the styling test and verify RED**

Run: `node --test ThreeDButton.test.mjs`

Expected: the API test passes and the styling-contract test fails because the Tailwind classes are absent.

- [ ] **Step 7: Add the complete Tailwind styling**

Replace `ThreeDButton.jsx` with:

```jsx
const BASE_CLASSES = [
  'relative isolate inline-flex min-h-14 items-center justify-center',
  'border-[3px] border-black bg-[#ffe76a] px-7 py-3',
  'font-semibold uppercase tracking-[0.24em] text-black',
  'transition-colors duration-75',
  "before:absolute before:bottom-full before:left-[-3px] before:h-3 before:w-[calc(100%+6px)] before:content-['']",
  'before:border-[3px] before:border-black before:bg-[#ffe76a]',
  'before:[clip-path:polygon(8%_0,100%_0,94%_100%,0_100%)]',
  "after:absolute after:bottom-[-3px] after:left-full after:h-[calc(100%+15px)] after:w-3 after:content-['']",
  'after:border-[3px] after:border-black after:bg-[#ffe76a]',
  'after:[clip-path:polygon(0_12px,100%_0,100%_calc(100%_-_12px),0_100%)]',
  'active:border-[#ffe76a] active:bg-black active:text-[#ffe76a]',
  'active:before:border-[#ffe76a] active:before:bg-black',
  'active:after:border-[#ffe76a] active:after:bg-black',
  'focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-black',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

const ThreeDButton = ({
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${BASE_CLASSES} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default ThreeDButton
```

- [ ] **Step 8: Run tests and verify GREEN**

Run: `node --test ThreeDButton.test.mjs`

Expected: PASS with `2` passing tests and `0` failures.

- [ ] **Step 9: Run focused static verification**

Run from the repository root:

```powershell
& .\node_modules\.bin\oxlint.exe src\components\Button\ThreeDButton.jsx src\components\Button\ThreeDButton.test.mjs
& .\node_modules\.bin\prettier.cmd --check src\components\Button\ThreeDButton.jsx src\components\Button\ThreeDButton.test.mjs
```

Expected: oxlint exits `0`; Prettier reports both files use the configured style. Run Prettier with `--write` and repeat the checks if formatting differs.

- [ ] **Step 10: Perform Playwright visual verification**

Create a temporary Vite HTML entry under `output/playwright/` that imports React, `src/index.css`, and `ThreeDButton.jsx`, renders `Get in touch`, and centers it on a neutral background. Start Vite on `127.0.0.1`, open the page through Playwright MCP, and capture screenshots at `1280x720` and `390x844`.

Hold the button with Playwright `mouse.down()` and verify from the active-state screenshot that the face is black while the text and all visible borders are yellow. Release with `mouse.up()` and confirm the resting colors return. Also focus with Tab and confirm a visible focus outline. Expected: no horizontal overflow at either viewport.

- [ ] **Step 11: Check the repository build without changing unrelated files**

Run:

```powershell
npm run build
```

Expected for the button implementation: no error originating from `ThreeDButton.jsx`. The current working tree already contains a user-owned `src/App.jsx` import of missing `src/components/Typography/Text.jsx`; if that unchanged baseline still blocks the full build, record it rather than modifying or reverting the user's file.

- [ ] **Step 12: Commit only the component and its test**

```powershell
git add -- src/components/Button/ThreeDButton.jsx src/components/Button/ThreeDButton.test.mjs
git commit -m "feat: add 3D button component"
```

Before committing, inspect `git diff --cached --name-only` and confirm it lists only those two paths.

