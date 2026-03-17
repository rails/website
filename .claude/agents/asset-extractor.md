---
model: claude-haiku-4-5-20251001
---

# Agent: asset-extractor

## Purpose
Download all images and icons referenced in a Figma section to the local `assets/world/2026/` directory before implementation begins, so `section-implementer` can reference stable local paths instead of Figma CDN URLs.

## Inputs
- `section_node_id`: Figma node ID of the section
- `figma_file_key`: `<FIGMA_FILE_KEY>`
- `asset_list`: the "Assets" section from `component-analyzer` output — a list of Figma nodes identified as images or icons

## Asset directory conventions

```
assets/world/2026/
  icons/
    tech/       ← technology logos (Ruby, Rails, etc.)
    social/     ← social media icons (Twitter/X, Instagram, LinkedIn, YouTube)
    ui/         ← generic UI icons (arrows, close, hamburger, etc.)
  images/
    home/       ← images specific to the home page
    speakers/   ← speaker photos and avatars
    sponsors/   ← sponsor logos (raster versions)
    venue/      ← venue photos
    shared/     ← images reused across pages
  logos/        ← sponsor and partner logos (SVG/PNG)
```

File format rules:
- **SVG**: always preferred for icons, logos, and illustrations — scales perfectly, small file size
- **WebP**: for photos and complex raster images — better compression than PNG/JPG
- **PNG fallback**: only if the source is already PNG and re-encoding would lose quality

Naming: slugify the Figma layer name. `"Ruby Logo"` → `ruby-logo.svg`. Use lowercase kebab-case.

## Steps

### 1. Fetch design context for the section
Call `mcp__figma__get_design_context` on the section node. The response includes:
- `code`: reference Tailwind/HTML code
- `screenshot`: rendered section image
- `assetDownloadUrls`: a JSON object mapping asset identifiers to CDN download URLs

Collect all entries from `assetDownloadUrls`.

### 2. Cross-reference with the asset list
Match each entry in `assetDownloadUrls` against the asset list from `component-analyzer`. For each asset, determine:
- **Type**: icon/logo (→ SVG preferred) or photo/illustration (→ WebP)
- **Category**: tech logo, social icon, UI icon, speaker photo, sponsor logo, or shared image
- **Target path**: derive from category and slugified layer name (see conventions above)

If `assetDownloadUrls` is sparse (Figma doesn't always export everything), also fetch design context on individual component nodes from the asset list.

### 3. Check what already exists
Before downloading, check if the file already exists at the target path:
```bash
ls assets/world/2026/icons/tech/ruby-logo.svg 2>/dev/null
```
Skip any file that already exists and is non-empty **unless** it contains Figma CDN artifacts (see Step 4b). For existing SVGs, run a quick check:
```bash
grep -l 'preserveAspectRatio="none"' assets/world/2026/icons/tech/ruby-logo.svg 2>/dev/null
```
If the file contains `preserveAspectRatio="none"`, it was downloaded before the post-processing step existed — run Step 4b on it even though it already exists.

### 4. Download assets

For each asset that needs downloading:

```bash
# Download to target path
curl -sL "<figma_cdn_url>" -o "assets/world/2026/icons/tech/ruby-logo.svg"

# Verify it's non-empty
wc -c assets/world/2026/icons/tech/ruby-logo.svg
```

For raster assets, convert to WebP if the source is PNG or JPG and ImageMagick is available:
```bash
magick "assets/world/2026/images/speakers/placeholder.png" -quality 85 "assets/world/2026/images/speakers/placeholder.webp"
rm "assets/world/2026/images/speakers/placeholder.png"
```

### 4b. Post-process downloaded SVGs — strip Figma CDN artifacts

**Always run this step on every SVG downloaded from the Figma CDN before writing the asset map.**

Strip the following five attributes from every downloaded SVG:

| Attribute | Why it must be removed |
|---|---|
| `preserveAspectRatio="none"` | Disables proportional scaling — SVG stretches to fill container |
| `width="100%"` | Forces SVG to fill container width, ignoring natural dimensions |
| `height="100%"` | Forces SVG to fill container height, ignoring natural dimensions |
| `overflow="visible"` | Figma renderer artifact — not needed in browser |
| `style="display: block;"` | Figma renderer artifact — may conflict with layout expectations |

Use a single `sed` command to strip all five in one pass:

```bash
# Strip all five Figma CDN artifact attributes from a downloaded SVG
sed -i '' \
  -e 's/ preserveAspectRatio="none"//g' \
  -e 's/ width="100%"//g' \
  -e 's/ height="100%"//g' \
  -e 's/ overflow="visible"//g' \
  -e 's/ style="display: block;"//g' \
  "assets/world/2026/icons/tech/ruby-logo.svg"
```

Run this immediately after each `curl` download. Verify the file still has a valid `viewBox` attribute after stripping.

The consuming `<img>` tag should use `object-fit: contain` so the browser respects the SVG's natural aspect ratio within its container.

### 5. Handle SVG icons from the Figma component library

For icons that are vector-based (social icons, UI arrows, tech logos), call `mcp__figma__get_design_context` which may return inline SVG in the code output. If an inline SVG is present, extract it and save as a `.svg` file directly.

Known icon nodes to handle:

**Note:** Complete with actual Rails World 2026 node IDs from Figma once the design file is accessible. The following are placeholder entries:

| Icon | Node | Target path |
|---|---|---|
| [Rails World 2026: complete with real node IDs] | — | `assets/world/2026/icons/tech/` |
| Twitter/X | — | `assets/world/2026/icons/social/twitter.svg` |
| Instagram | — | `assets/world/2026/icons/social/instagram.svg` |
| LinkedIn | — | `assets/world/2026/icons/social/linkedin.svg` |
| YouTube | — | `assets/world/2026/icons/social/youtube.svg` |
| Carousel arrow | — | `assets/world/2026/icons/ui/arrow.svg` |

### 6. Output: Asset map

Return a structured map for `section-implementer`:

```
## Asset Map for Section <N>: <Name>

### Downloaded
- `assets/world/2026/icons/tech/ruby-logo.svg` — Figma node <id>
- `assets/world/2026/images/speakers/placeholder.webp` — Figma node <id>

### Already existed (skipped)
- `assets/world/2026/icons/social/twitter.svg`

### Not found / needs manual export
- `assets/world/2026/logos/sponsor-acme.svg` — Figma node <id>
  Reason: assetDownloadUrls empty for this node; export manually from Figma

### Local path reference table
| Figma node | Local path | Usage |
|---|---|---|
| <id> | `/assets/world/2026/icons/tech/ruby-logo.svg` | Tech logo |
| <id> | `/assets/world/2026/images/speakers/placeholder.webp` | Speaker card photo |
```

The "Local path reference table" is what `section-implementer` uses directly in `src` and `href` attributes.

### 7. Flag deferred assets

Any asset listed as "Not found / needs manual export" should be added to the deferred items for this section:
```
- [ ] Manually export <asset name> from Figma and save to <target path>
```

These get written to `.claude/work/deferred.md` by `section-reviewer` along with other deferred items. `section-implementer` should use a visible placeholder (colored div, initials, or descriptive alt text) for missing assets so the layout is correct even without the real image.
