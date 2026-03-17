---
model: claude-haiku-4-5-20251001
---

# Asset Extractor Agent

Downloads images and icons from a Figma design file to the correct local directories under `assets/world/YEAR/` before section implementation.

## Inputs

- **figma_url** — URL to the Figma file or frame
- **year** — e.g. `2026`
- **section** — name of the section being implemented (for scoping)

## Asset Directory Conventions

All assets for a year live under `assets/world/YEAR/`:

```
assets/world/YEAR/
  logos/          ← event logos (e.g. RW26_logo-white-trademark.png)
  images/
    speakers/     ← headshots (INITIAL-LASTNAME.jpg convention)
    sponsors/     ← sponsor logos (RW-logo-companyname.svg)
    images/       ← general section images, photos
  icons/          ← UI icons (github.png, linkedin.png, x.png)
  hexagons/       ← decorative hexagon images for hero
```

## Steps

### Step 1: Identify assets in the Figma frame

Using the Figma API, fetch the node tree for the provided URL. Identify all image fills, icons, and exported assets used in the target section.

Categorize each asset:
- **Logo** → `logos/`
- **Speaker headshot** → `images/speakers/`
- **Sponsor logo** → `images/sponsors/`
- **Decorative image / photo** → `images/images/`
- **Icon** → `icons/`
- **Hexagon / shape** → `hexagons/`

### Step 2: Check for existing assets

Before downloading, check if each asset already exists locally. Skip downloads for files that already exist and match the expected filename.

### Step 3: Download assets

Export assets from Figma at the appropriate format and scale:
- **Photos / raster images** → PNG or JPG, 2x resolution
- **Logos / sponsor logos** → SVG preferred, PNG fallback
- **Icons** → PNG at 60×60px minimum

### Step 4: Post-process SVGs

For every downloaded SVG:
1. Remove Figma-specific attributes (`data-figma-*`, CDN `href` references, inline `<style>` with Figma node IDs)
2. Ensure `viewBox` is set and `width`/`height` are removed (let CSS control sizing)
3. Preserve fill colors as-is unless they are Figma placeholder colors (replace with `currentColor` if the icon is meant to be color-inheriting)

### Step 5: Apply naming conventions

Rename downloaded files to follow repo conventions:
- Speaker headshots: `INITIAL-LASTNAME.jpg` (e.g. `a-patterson.jpg`, `j-doe.jpg`)
- Sponsor logos: `RW-logo-companyname.svg` (e.g. `RW-logo-shopify.svg`)
- Event logo: `RWYY_logo-white-trademark.png` (e.g. `RW26_logo-white-trademark.png`)
- Icons: use existing naming from 2025 as reference (`github.png`, `linkedin.png`, `x.png`)

### Step 6: Output asset map

Report a map of Figma asset → local path:

```
ASSETS EXTRACTED for section: hero_banner (year: 2026)

Downloaded:
  logos/RW26_logo-white-trademark.png
  hexagons/hex-speaker-1.png
  hexagons/hex-speaker-2.png
  hexagons/hex-speaker-3.png
  hexagons/hex-speaker-4.png

Skipped (already exist):
  icons/github.png
  icons/linkedin.png

Deferred (manual download needed):
  images/speakers/d-hansson.jpg  ← no Figma export, must be sourced separately
```

## Deferred assets

If an asset cannot be downloaded from Figma (e.g., a real photo that doesn't exist in the design file), log it as DEFERRED and use a placeholder path in the implementation. Add a comment in the HTML:

```html
<!-- DEFERRED: replace with actual asset → assets/world/2026/images/speakers/d-hansson.jpg -->
```
