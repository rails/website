---
model: claude-sonnet-4-6
---

# Agent: page-planner

## Purpose
Analyze a Figma page, enumerate its sections, cross-reference shared components, and create a work tracking file for the agentic implementation workflow.

## Inputs
- `figma_url`: Full Figma URL (e.g., `https://www.figma.com/design/<FIGMA_FILE_KEY>/...?node-id=...`)

## Steps

### 1. Parse the Figma URL
Extract `fileKey` and `nodeId` from the URL:
- fileKey: segment after `/design/` (e.g., `<FIGMA_FILE_KEY>`)
- nodeId: `node-id` query param, converting `-` to `:` (e.g., `1059-4769` → `1059:4769`)

### 2. Get page metadata
Call `mcp__figma__get_metadata` with the extracted fileKey and nodeId to enumerate all top-level sections/frames on the page.

### 3. Get full-page screenshot
Call `mcp__figma__get_screenshot` on the same node for visual reference. Note the screenshot URL in the work file.

### 4. Get component inventory reference
Call `mcp__figma__get_metadata` on the Components page node for the Rails World 2026 Figma file to list available shared components. Cross-reference each section's child nodes against this inventory to identify which shared components each section uses.

**Note:** Complete with actual Rails World 2026 component node IDs from Figma once the design file is accessible.

### 5. Derive page slug
Convert the page name to a slug (lowercase, hyphens). Example: "Home Desktop" → `home-desktop`.

The page lives at `world/2026/<slug>.html`. For the homepage, the slug is `home` and the page file is `world/2026/index.html`.

### 6. Create work tracking file
Write `.claude/work/<page-slug>.md` with the following format:

```md
# <Page Name>
Figma node: <nodeId>
Figma file: <fileKey>
Screenshot: <screenshot-url>

## Sections
| # | Name | Node ID | Status | Shared Includes | Notes |
|---|------|---------|--------|-----------------|-------|
| 1 | Navigation | <id> | pending | _includes/world/2026/components/nav.html | |
| 2 | Hero | <id> | pending | _includes/world/2026/components/button.html | |
...
```

### 7. Output summary
Print a concise summary of:
- Page name and total section count
- Each section name with its node ID
- Which sections reuse shared includes
- Path of the created work file

## Mobile page planning

When the Figma page is a mobile design (typically 393px wide):

1. **Page slug**: use the `-mobile` suffix (e.g., `home-mobile`). This signals all downstream agents to use mobile conventions.
2. **Shared components**: cross-reference against both the Component Inventory AND existing desktop implementations in `_includes/world/2026/`. Note which desktop includes can be reused at mobile size vs. which need dedicated `mobile_*` variants.
3. **Navigation and Footer**: these have dedicated mobile Figma variants. List them as separate sections, noting that they use mobile-specific includes (`mobile_navigation.html`, `mobile_footer.html`).
4. **Same URL**: note in the work file that mobile sections render on the same URL as desktop, inside the `#section-mobile` wrapper (CSS-controlled via `@include media(MobileScreens)`).
5. **Figma reference width**: note the mobile frame width (typically 393px) in the work file header — downstream QA agents use this for viewport sizing.

## Output
- Work file created at `.claude/work/<page-slug>.md`
- Console summary of sections ready for implementation
