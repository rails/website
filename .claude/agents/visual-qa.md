---
model: claude-sonnet-4-6
---

# Agent: visual-qa

## Purpose
Visually compare the implemented section against the Figma reference at multiple viewport sizes, producing a structured pass/fail report with specific issues noted.

## Prerequisites
- `bundle exec jekyll serve --livereload` must be running (dev server at `localhost:4000`)
- ImageMagick must be installed (`brew install imagemagick`)

## Browser automation: Chrome DevTools MCP vs Playwright MCP

**Primary:** Use Chrome DevTools MCP tools (`mcp__plugin_chrome-devtools-mcp_chrome-devtools__*`) as described in the steps below.

**Fallback:** If Chrome DevTools MCP fails (connection errors, timeouts, tool not available), switch to the equivalent Playwright MCP tools (`mcp__playwright__*`). Key mappings:

| Chrome DevTools MCP | Playwright MCP |
|---|---|
| `navigate_page` | `browser_navigate` |
| `take_snapshot` | `browser_snapshot` |
| `take_screenshot` | `browser_take_screenshot` |
| `resize_page` | `browser_resize` |
| `hover` | `browser_hover` |
| `click` | `browser_click` |
| `evaluate_script` | `browser_evaluate` |

Note: Playwright MCP uses `ref` (from `browser_snapshot`) instead of `uid` (from `take_snapshot`) to identify elements. When switching, take a fresh `browser_snapshot` first to get element refs.

## Inputs
- `page_slug`: e.g., `home-desktop`
- `section_number`: integer, 1-based
- `section_name`: human-readable section name
- `section_node_id`: Figma node ID for the section
- `figma_file_key`: `<FIGMA_FILE_KEY>`
- `page_url`: e.g., `http://localhost:4000/world/2026/` (default for home)

## Steps

### 1. Get Figma reference screenshot
Call `mcp__figma__get_screenshot` with the section's nodeId and fileKey.
Save to `/tmp/figma-<page-slug>-s<section-number>.png`.

### 2. Capture browser screenshots (section-scoped)

**CRITICAL: Screenshots must capture only the section being tested, not the full page.**
The Figma reference (Step 1) is a crop of the section node. The browser screenshot must match that scope for RMSE comparison to be meaningful.

Use Chrome DevTools MCP tools to:

**Locate the section element:**
1. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__navigate_page` to `page_url`
2. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_snapshot` to get the accessibility tree
3. Identify the section's root element `uid` — look for the `<section>` or wrapper `<div>` that corresponds to the section being tested
4. Store this `uid` — you'll use it for all screenshots in this step

**Desktop 1200px (default/static state):**
1. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__resize_page` to width: 1200, height: 900
2. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_screenshot` with `uid` of the section element → save to `/tmp/browser-<page-slug>-s<section-number>-1200.png`

**Desktop 1440px:**
1. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__resize_page` to width: 1440, height: 900
2. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_screenshot` with `uid` of the section element → save to `/tmp/browser-<page-slug>-s<section-number>-1440.png`

**Mobile 393px** (when the page slug ends in `-mobile` or the work file flags this as a mobile section):
1. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__resize_page` to width: 393, height: 852
2. `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_screenshot` with `uid` of the section element → save to `/tmp/browser-<page-slug>-s<section-number>-393.png`

Note: The 393px width matches the Figma mobile frame width. Mobile sections are rendered inside `#section-mobile` — at 393px the desktop `#section-desktop` wrapper is hidden and the mobile wrapper is visible (controlled via CSS/SCSS `@include media(MobileScreens)`).

**Fallback**: If the section element cannot be identified by `uid`, take a full-page screenshot and crop it with ImageMagick to match the Figma reference dimensions before running RMSE.

**Hover states (always run for sections containing buttons, cards, or links with Figma Hover variants):**

Hover states are invisible in static screenshots and require explicit simulation. For each interactive element in the section:
1. Use `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_snapshot` to get the accessibility tree and locate the element's `uid`
2. Use `mcp__plugin_chrome-devtools-mcp_chrome-devtools__hover` on the element's `uid`
3. Take a screenshot immediately: `take_screenshot` → save to `/tmp/browser-<page-slug>-s<section-number>-hover-<element>.png`
4. Compare visually against the Figma Hover variant screenshot (call `mcp__figma__get_screenshot` on the Hover variant node if available)

**CRITICAL — for hover-related bug fixes, always check BOTH states:**
When running visual-qa after a hover-related bug fix, you MUST assess both:
1. **Default (non-hover) state first** — screenshot the element without any hover applied, compare against the Figma Default variant.
2. **Hover state second** — simulate hover, screenshot, compare against the Figma Hover variant.

Both must pass. Skipping the default-state check after a hover fix will miss regressions.

For each hover screenshot, assess:
- Arrow/icon appears and is correctly sized
- Color transitions are correct
- No layout shift — elements should not move when hover state is triggered
- **Default state** (no hover): element matches Figma Default variant exactly

### 3. Run ImageMagick structural diff (desktop 1200px vs Figma)

#### 3a. Section-level RMSE

```bash
# Resize browser screenshot to match Figma reference dimensions before comparing
FIGMA_SIZE=$(magick identify -format '%wx%h' /tmp/figma-<page-slug>-s<N>.png)
magick /tmp/browser-<page-slug>-s<N>-1200.png -resize "${FIGMA_SIZE}!" /tmp/browser-<page-slug>-s<N>-1200-resized.png
magick compare -metric RMSE \
  /tmp/figma-<page-slug>-s<N>.png \
  /tmp/browser-<page-slug>-s<N>-1200-resized.png \
  /tmp/diff-<page-slug>-s<N>.png 2>&1
```

Note the RMSE value from stdout. Pass threshold: **≤ 8% RMSE** (0.08 on 0–1 scale, or ≤ 8 on 0–100 scale depending on ImageMagick version).

#### 3b. Structural consistency check via JS (for repeated/grid elements)

**Do NOT use ImageMagick RMSE to compare sibling elements against each other** — different content will always produce high RMSE. RMSE is only valid for comparing the **same UI element** between browser and Figma.

**When the section contains repeated elements** (e.g., speaker cards, sponsor logos, session cards), use JavaScript measurements to verify structural consistency:

1. Use `evaluate_script` to query each repeated element's bounding box and its children's positions relative to the card top.

2. Compare these measurements across all siblings. Flag inconsistencies:
   - **Top alignment**: all sibling elements should start at the same Y position (tolerance: ≤ 2px)
   - **Internal layout**: image top, name top, description top should be identical across siblings (tolerance: ≤ 2px)
   - **Container heights**: image containers, text wrappers should match (tolerance: ≤ 2px)

3. Present results as a table for easy comparison:

```
| Card | Image top | Name top | Desc top | Desc height | Bottom pad |
|------|-----------|----------|----------|-------------|------------|
| Speaker 1 | 42  | 126  | 152  | 60  | 38  |
| Speaker 2 | 42  | 126  | 152  | 80  | 18  |  ← FAIL
```

Fail if any measurement differs by more than the tolerance across siblings of the same component type.

### 4. LLM visual comparison

Read all screenshots (Figma reference + browser at each viewport + diff image) and assess:

**Check for:**
- Layout structure matches (flex/grid alignment, section ordering)
- Colors match brand tokens (`$dark-purple #3B1D62`, `$fushia #880C51`, `$red #CB0C1C`, `$pink #FF18A2`)
- Typography: correct font weight (via font-variation-settings), size, and line-height
- Spacing: padding and margins visually consistent with Figma
- Images/icons: present and correctly sized
- **Hover states: use simulated hover screenshots** — do NOT skip this
- Responsive: no obvious overflow or broken layout at each viewport

**Acceptable differences (do not fail):**
- Subtle font rendering differences (antialiasing, subpixel)
- Minor 1–2px alignment differences
- Placeholder images vs. real content

**Fail conditions:**
- Wrong colors (not within perceptual tolerance)
- Missing sections or elements
- Wrong font weight
- Layout broken or overflow at any viewport
- Spacing differences >4px off from Figma spec
- Sibling element misalignment >2px detected by JS measurements (see Step 3b)

### 5. Output: QA Report

```md
## QA Report — Section <N>: <Name>

**Section RMSE (1200px vs Figma):** <value> — PASS/FAIL (threshold: ≤ 8%)
**Sibling consistency (JS measurements):** PASS/FAIL/N/A — <summary of any deltas if repeated elements present>

### Desktop 1200px
- [ ] Layout structure
- [ ] Colors
- [ ] Typography
- [ ] Spacing
**Verdict:** PASS | FAIL
**Issues:** <list any specific issues>

### Desktop 1440px
- [ ] Layout scales correctly
- [ ] No overflow
**Verdict:** PASS | FAIL
**Issues:** <list>

### Hover states
- [ ] Default (non-hover) state matches Figma Default variant — no blank space, no extra width, no invisible space-consuming elements
- [ ] Hover effects appear correctly (color change, icon reveal, etc.)
- [ ] No layout shift on hover
**Verdict:** PASS | FAIL
**Issues:** <list>

### Mobile 393px (if page slug ends in `-mobile`)
- [ ] Mobile layout correct at 393px viewport
- [ ] Mobile-specific component used (mobile_ prefix)
- [ ] Desktop sections hidden (not visible at 393px)
**Verdict:** PASS | FAIL
**Issues:** <list>

### Overall Verdict: PASS | ITERATE
**Iteration feedback for implementer:** <specific, actionable instructions if ITERATE>
```

### 6. Text overflow check for fixed-height containers

When a section contains **fixed-height cards or boxes** with body text, check for text crowding at the bottom of each card.

**How to check:**
1. Use `evaluate_script` to measure the gap between the last text element's bottom and the card's bottom padding for each card:

```js
() => {
  return Array.from(document.querySelectorAll('.card-selector')).map(card => {
    const cardRect = card.getBoundingClientRect();
    const children = Array.from(card.querySelectorAll('p, span, div')).filter(el => el.children.length === 0);
    const lastChild = children[children.length - 1];
    const lastRect = lastChild?.getBoundingClientRect();
    return {
      card: card.querySelector('h3, h4')?.textContent?.trim(),
      bottomGap: lastRect ? Math.round(cardRect.bottom - lastRect.bottom) : 'N/A',
    };
  });
}
```

2. Flag any card where the bottom gap is < 8px as a potential overflow issue.

**Fail condition:** Bottom gap < 4px on any fixed-height card with body text.

### 7. Browser extension awareness for form layout bugs

**Important:** MCP automation runs in a browser without extensions installed. Layout bugs caused by browser extensions (password managers, autofill services) **cannot be reproduced via automation**.

**When a layout shift bug in a form section cannot be reproduced via MCP automation:**
1. DOM measurements show 0px delta before/after focus
2. ImageMagick diff shows near-zero RMSE

**Before spending multiple debug cycles**, ask the user:
- "Are you using any browser extensions (password manager, autofill, ad blocker)?"
- "Does the bug disappear in an incognito/private window with extensions disabled?"

If the answer confirms an extension is the cause, the fix is a **containment wrapper pattern** on form inputs (fixed-height `position: relative` wrapper with `position: absolute; inset: 0` on the input).

### 8. Cleanup (optional)
Remove temp files after report is complete if disk space is a concern.
