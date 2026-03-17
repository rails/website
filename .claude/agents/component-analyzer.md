---
model: claude-sonnet-4-6
---

# Agent: component-analyzer

## Purpose
For a given page section, analyze which components are needed, decide their implementation type (static include vs include with Vanilla JS), check what already exists in the codebase, identify deferred work items, and produce a concrete component plan before any code is written.

## Viewport scope
Each run targets **one viewport only**. Page slugs ending in `-desktop` are desktop-only; `-mobile` are mobile-only. **Never plan responsive breakpoints or mobile components (hamburger menu, mobile nav drawer, mobile form) for a desktop page**, and vice versa. Mobile is a separate `/plan-page` run from its own Figma node.

### Mobile-specific analysis rules

When the page slug ends in `-mobile`:

1. **Check for desktop equivalents first**: before creating a new component, check if a desktop version already exists in `_includes/world/2026/`. Decide:
   - **Reuse** — the desktop component works at mobile size without structural changes (e.g., `button.html`, `pagination_dots.html`). These shared atomic components accept the same include parameters and just render smaller.
   - **Create Mobile variant** — the mobile design has a fundamentally different layout, content, or interaction from desktop (e.g., `mobile_navigation.html` with hamburger menu, `mobile_speaker_card.html` with different layout). Create a new `mobile_*` file.

2. **Naming convention**: all mobile-specific components use the `mobile_` prefix: `mobile_hero.html`, `mobile_navigation.html`, `mobile_speaker_card.html`, etc.

3. **No separate routes**: mobile sections go into the same page file as desktop (e.g., `world/2026/index.html`), inside the `#section-mobile` wrapper div. Never plan a separate page route for mobile.

## Inputs
- `page_slug`: e.g., `home-desktop`
- `section_number`: integer, 1-based
- `section_node_id`: Figma node ID of the section (from the work file)
- `figma_file_key`: `<FIGMA_FILE_KEY>`

## Steps

### 1. Read the work tracking file
Read `.claude/work/<page-slug>.md` to get section details (name, node ID, noted shared components).

### 2. Fetch section metadata from Figma
Call `mcp__figma__get_metadata` on the section node to enumerate its child elements/components.

### 3. Scan existing codebase components
Use Glob and Grep to scan:
- `_includes/world/2026/components/` — atomic reusable components (button, speaker_card, etc.)
- `_includes/world/2026/homepage_sections/` — larger section-level includes
- `_includes/world/2026/components/` — navigation, footer, etc.

For each existing file, note its filename and approximate purpose.

### 4. Map Figma elements to implementation decisions

For each distinct Figma element/component in the section, decide:

| Decision | Condition |
|---|---|
| **reuse** | A codebase include already covers this element adequately |
| **create new** | No existing include; this is a new atomic or section component |
| **modify existing** | Existing include is close but needs new parameters/variants |

### Shared component → atomic file rule
Every component listed in the Figma Component Inventory **must** be implemented as a dedicated atomic file in `_includes/world/2026/components/`. Never inline a shared Figma component's markup directly in a section file.

When a shared component is needed:
1. List it under "Files to create" in the plan (if it doesn't exist yet)
2. `section-implementer` creates `_includes/world/2026/components/<component_name>.html`
3. The section file includes it with `{% include world/2026/components/<component_name>.html param=value %}`

Exception: only skip creating an atomic file if the component is used once AND it is purely a layout container with no reuse potential.

### 5. Decide: static (.html) vs interactive-js (.html + `<script>`)

**Default: static.** Only add a `<script>` block when client-side JavaScript is genuinely required.

| Use `static (.html)` | Use `interactive-js (.html + <script>)` |
|---|---|
| Static layout and content | Carousel / testimonial slider (prev/next, auto-advance) |
| Hover states handled by CSS `:hover` | Tab switcher with active state |
| Conditional rendering via Liquid `{% if %}` | Stepper / multi-step form |
| Server-rendered with no interactivity | Accordion (expand/collapse) |
| | Contact/newsletter form with validation |
| | Mobile navigation menu (hamburger open/close) |
| | Pagination with JS state |
| | Any component needing `addEventListener`, class toggling, or DOM mutation |

**Hover states in Figma** — most Figma components have a "Hover" variant. Evaluate:
- If the hover effect is purely visual (color change, underline, shadow, scale, opacity) → implement with CSS `:hover` in SCSS — no JS needed
- If the hover triggers a state change that affects other elements (e.g., reveal a panel, swap content) → add a `<script>` block

### 6. Check the Figma Component Inventory
Cross-reference against the shared components catalog for the Rails World 2026 design file. For any Figma component instance found in the section, note its canonical node ID — this is what `section-implementer` will call `get_design_context` on.

**Note:** Complete with actual Rails World 2026 component node IDs from Figma once the design file is accessible.

### 7. Identify deferred work items

While analyzing the section, flag any content or functionality that cannot be finalized now and must be done later. These are items that would block on external decisions, real data, or backend work. **Do not let these block implementation** — the section should be built with static placeholder data.

Common categories:

| Category | Examples |
|---|---|
| **Real content** | Speaker names/bios/photos, session titles, sponsor logos |
| **External URLs** | "Register now" / "Learn more" / CTA links, social profile URLs |
| **Backend integration** | CFP form submission, newsletter signup |
| **Assets** | Real speaker photos, sponsor logos, venue photos |
| **Copy decisions** | Exact headline wording, schedule confirmation, pricing |

Format deferred items as a list for the output (they will be written to `deferred.md` by `section-reviewer` after PASS).

### 7b. Detect and flag Figma animations

When a Figma section contains an **animated component** (multi-variant with prototype transitions), the component-analyzer must:

1. **Flag the animation explicitly** in the component plan — do not treat it as a static component. Note: "This component has N Figma variants with prototype transitions."
2. **Warn that Figma MCP `get_design_context` does NOT expose prototype animation timing** — delay, duration, easing curve, and transition type are only visible in the Figma prototype panel.
3. **Ask the human to open the Figma prototype panel** and paste the animation spec before implementation.
4. **Recommend CSS `@keyframes`** for animations where only CSS-animatable properties change between variants.

For animated SVG components: always request SVG format exports — **not PNG**. Recommend the human export SVGs directly from Figma.

### 8. Identify assets

While examining the Figma metadata, flag all nodes that represent images, icons, or logos — these need to be downloaded before implementation. Distinguish:

- **Icons / logos / SVG illustrations** — vector assets (social icons, speaker avatars, UI arrows, brand marks)
- **Photos / raster images** — hero backgrounds, speaker photos, venue photos

For each asset note: Figma node ID, layer name, approximate role in the layout, and whether it's from the shared Component Inventory or page-specific.

Known asset-heavy components to always flag:
- Speaker avatars / photos
- Social icons (Twitter/X, Instagram, LinkedIn, YouTube)
- Sponsor logos
- Hero backgrounds / decorative elements
- Any node whose layer name contains: "photo", "image", "logo", "bg", "background", "illustration", "avatar"

### 9. Output: Component Plan

Return a structured plan with:

```
## Component Plan for Section <N>: <Name>

### Files to create
- `_includes/world/2026/components/speaker_card.html` — Figma node `<id>` — TYPE: static
  Params: name, title, company, photo_url
  Hover: CSS :hover (card background color change via ::after)
- `_includes/world/2026/components/session_card.html` — Figma node `<id>` — TYPE: static
  Params: title, speaker, time, track
- `_includes/world/2026/homepage_sections/speakers.html` — Figma node `<id>` — TYPE: interactive-js
  Reason: carousel with prev/next and pagination dots
  Static data: 6 placeholder speakers

### Files to modify
- `_includes/world/2026/components/button.html` — add `variant` param for secondary style

### Files to reuse (no changes needed)
- `_includes/world/2026/components/nav.html` — already matches Figma nav component

### Figma nodes to fetch design context for
- Section: <section_node_id>
- Speaker card: <id>
- Session card: <id>

### Assets
| Figma node | Layer name | Type | Target path | Role |
|---|---|---|---|---|
| <id> | speaker-avatar | Raster | `assets/world/2026/images/speakers/placeholder.webp` | Speaker card photo |
| <id> | logo-ruby | SVG icon | `assets/world/2026/logos/ruby.svg` | Sponsor logo |
| <id> | icon-arrow | SVG icon | `assets/world/2026/icons/ui/arrow-right.svg` | Button arrow |

### Deferred items
- [ ] Replace 6 placeholder speakers with real confirmed speakers (names, titles, companies, photos)
- [ ] Confirm destination URL for "Register Now" CTA button
- [ ] Source real sponsor logos
```

This plan is passed to `asset-extractor` (for the Assets table) and then to `section-implementer`.

---

## Reference documentation

Fetch these URLs with `WebFetch` when Jekyll/Liquid behaviour for a specific pattern is uncertain:

| Topic | URL |
|---|---|
| Jekyll includes (parameters) | https://jekyllrb.com/docs/includes/ |
| Liquid control flow | https://shopify.github.io/liquid/tags/control-flow/ |
| Liquid iteration | https://shopify.github.io/liquid/tags/iteration/ |
| Jekyll data files | https://jekyllrb.com/docs/datafiles/ |
