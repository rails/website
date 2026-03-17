---
name: visual-qa
description: Takes screenshots of a rendered Rails World page section at multiple viewports, compares them against a Figma reference frame, and produces a structured QA report.
---

# visual-qa agent

## Purpose

Capture the current state of a rendered section in the browser and compare it visually against the Figma design. Output a structured report that `section-reviewer` will consume to decide PASS / ITERATE.

---

## Inputs (passed in the prompt)

- `section` — section name (e.g. `hero_banner`, `sponsors`, `navbar`)
- `year` — conference year (e.g. `2026`)
- `figma_file_key` — Figma file key (e.g. `lrh1RO8MAK44ii93JkaR7q`)
- `figma_node_id` — Figma node ID for the section frame (e.g. `115:1696`)
- `url_path` — local path to screenshot (e.g. `/world/2026`)
- `iteration` — current iteration number (default: 1)

---

## Prerequisites

- Jekyll server running at `http://localhost:4000`
- Playwright + Chromium installed (`npx playwright --version`)
- Figma MCP connected (used to fetch reference screenshot)
- ImageMagick installed (`convert --version`)

---

## Steps

### 1. Fetch Figma reference screenshot

Use `mcp__figma__get_screenshot` with the provided `figma_node_id` and `figma_file_key`.

Save the reference image URL to a variable. Download it:

```bash
mkdir -p /tmp/rw-qa
curl -o /tmp/rw-qa/figma-reference-{section}.png "{url}"
```

### 2. Capture browser screenshots

Use Playwright to capture the section at two viewports. Try CLI first, fall back to Node.js script:

```bash
mkdir -p /tmp/rw-qa

# Desktop (1440px)
npx playwright screenshot \
  --browser chromium \
  --viewport-size "1440,900" \
  --wait-for-selector "body" \
  "http://localhost:4000{url_path}" \
  /tmp/rw-qa/browser-{section}-desktop.png

# Mobile (375px)
npx playwright screenshot \
  --browser chromium \
  --viewport-size "375,812" \
  --wait-for-selector "body" \
  "http://localhost:4000{url_path}" \
  /tmp/rw-qa/browser-{section}-mobile.png
```

Fallback Node.js script:

```bash
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4000{url_path}', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/rw-qa/browser-{section}-desktop.png', fullPage: false });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: '/tmp/rw-qa/browser-{section}-mobile.png', fullPage: false });
  await browser.close();
})();
"
```

### 3. Crop to the section area (optional)

If the Figma node covers only a specific section, crop the browser screenshot using ImageMagick. Skip if full-page.

```bash
convert /tmp/rw-qa/browser-{section}-desktop.png \
  -crop 1440x{height}+0+{y_offset} \
  /tmp/rw-qa/browser-{section}-desktop-cropped.png
```

### 4. Pixel comparison (RMSE)

```bash
convert /tmp/rw-qa/figma-reference-{section}.png \
        /tmp/rw-qa/browser-{section}-desktop-cropped.png \
        -metric RMSE -compare -format "%[distortion]" info: 2>/tmp/rw-qa/rmse.txt
RMSE=$(cat /tmp/rw-qa/rmse.txt)
echo "RMSE: $RMSE"
```

RMSE thresholds:
- `< 0.05` — excellent
- `0.05–0.15` — acceptable
- `0.15–0.30` — notable differences
- `> 0.30` — significant mismatch

### 5. Visual LLM comparison

Read both screenshots with the Read tool and assess:

1. **Layout** — spacing, alignment, proportions
2. **Typography** — font sizes, weights, line heights
3. **Colors** — background, text, buttons, gradients
4. **Components** — shapes, icons, images present/missing
5. **Responsive** — does mobile layout match expectations?
6. **Accessibility** — focus states, contrast, alt text

Classify each issue as:
- `critical` — blocks launch (wrong colors, missing content, broken layout)
- `important` — noticeable deviation from design
- `minor` — small pixel-level difference, acceptable

### 6. Structural checks

```bash
# Missing alt attributes
grep -rn '<img' _includes/world/{year}/ world/{year}/ 2>/dev/null | grep -v 'alt='

# Jekyll build errors
bundle exec jekyll build --trace 2>&1 | grep -i error | head -20
```

### 7. Write QA report

Write to `/tmp/rw-qa/report-{section}-iteration-{iteration}.md`:

```markdown
# QA Report: {section} — Iteration {iteration}
**Date:** {date}
**URL:** http://localhost:4000{url_path}
**Figma node:** {figma_node_id}

## RMSE Score
- Desktop: {rmse_value} ({rating})

## Visual Comparison Summary
{1-3 sentence overall assessment}

## Issues Found

### Critical
- [ ] {description} — {file:line}

### Important
- [ ] {description} — {file:line}

### Minor
- [ ] {description} — {file:line}

## Structural Issues
{any missing alts, build errors}

## Screenshots
- Figma reference: /tmp/rw-qa/figma-reference-{section}.png
- Browser desktop: /tmp/rw-qa/browser-{section}-desktop.png
- Browser mobile:  /tmp/rw-qa/browser-{section}-mobile.png

## Verdict
{PASS | ITERATE | NEEDS_HUMAN_REVIEW}
```

### 8. Return

Output the report path and a one-line verdict. Do NOT make code changes.
