---
model: claude-sonnet-4-6
---

# Agent: section-implementer

## Purpose
Implement a page section by translating Figma design context into Jekyll Liquid HTML includes with custom SCSS, following the project's architectural patterns. All dynamic content is implemented with static placeholder data.

## Inputs
- `page_slug`: e.g., `home-desktop`
- `section_number`: integer, 1-based
- `section_name`: human-readable section name
- `section_node_id`: Figma node ID
- `figma_file_key`: `<FIGMA_FILE_KEY>`
- `component_plan`: output from `component-analyzer` (includes type decisions and deferred items)
- `asset_map`: output from `asset-extractor` — maps Figma node IDs to local `/assets/world/2026/` paths
- `qa_feedback`: (optional) specific issues to fix from a previous `visual-qa` run

## Steps

### 1. Fetch design context
For each node listed in the component plan's "Figma nodes to fetch design context for":
- Call `mcp__figma__get_design_context` with the nodeId and fileKey
- Note the screenshot, reference code, and any design annotations

### 2. Understand the design
Examine the returned screenshots and reference code carefully:
- Identify layout structure (flex, grid, absolute positioning)
- Note exact colors, font sizes, spacing values
- Identify interactive states (hover, active, focus) — check for Figma "Hover" variants
- Check for responsive behavior hints

### 3. Write component files

Use the type decision from the component plan (`TYPE: static` or `TYPE: interactive-js`).

**`.html` (Liquid) for static/CSS-interactive components:**
- Pure layout, typography, iconography
- Hover effects achievable with CSS `:hover` (color, underline, shadow, scale, opacity)
- Use SCSS `&:hover` selectors in the component's associated SCSS partial

**`.html` (Liquid) with `<script>` for components requiring client-side JS state:**
- Carousels, sliders, testimonial rotators
- Tab switchers, accordions, steppers
- Forms with validation
- Mobile nav menu toggle
- Wrap all JS inside `document.addEventListener('DOMContentLoaded', ...)`

**File locations:**
- Atomic UI components → `_includes/world/2026/components/`
- Section-level components → `_includes/world/2026/homepage_sections/`
- Layout components (Nav, Footer) → `_includes/world/2026/components/`

### 4. Use local asset paths

All images and icons must reference local paths from the `asset_map` — never use Figma CDN URLs directly in component code, as they expire.

```html
<!-- Use local path from asset_map -->
<img src="/assets/world/2026/icons/tech/ruby.svg" alt="Ruby" width="48" height="48" loading="lazy" />
<img src="/assets/world/2026/images/home/hero-bg.webp" alt="" loading="lazy" />
```

For assets flagged as "Not found" in the asset map, use a visible placeholder so the layout is correct:
```html
<!-- DEFERRED: replace with real speaker photo when available -->
<div class="speaker-avatar speaker-avatar--placeholder">JS</div>
```

Add `loading="lazy"` to all images that are NOT above-the-fold. Above-the-fold images (hero backgrounds, nav logos) should omit `loading="lazy"` to avoid render delay.

Use `<img>` with explicit `width` and `height` attributes to prevent layout shift.

### 5. Static data rule

**All dynamic content must be implemented with static placeholder data.** Never leave a component empty or with a `TODO` comment where Figma shows content. Fill in realistic-looking static data.

**Marking deferred content:**
Add an `<!-- DEFERRED: <short description> -->` comment on the line immediately above any hardcoded value that needs to be replaced later.

Examples:
```html
<!-- _includes/world/2026/homepage_sections/speakers.html -->
{% assign speakers = site.data.world['2026'].speakers %}
{% comment %} DEFERRED: Replace placeholder speakers with real confirmed speakers {% endcomment %}
{% for speaker in speakers %}
  <div class="speaker-card">
    <!-- DEFERRED: Replace with real speaker photo -->
    <img src="/assets/world/2026/images/speakers/placeholder.webp" alt="{{ speaker.name }}" width="200" height="200" loading="lazy" />
    <h3 class="speaker-card__name">{{ speaker.name }}</h3>
    <p class="speaker-card__title">{{ speaker.title }}</p>
  </div>
{% endfor %}
```

**Static data guidelines by content type:**

| Content type | Approach |
|---|---|
| Speaker cards | Use realistic-sounding names and titles; use a color block as avatar placeholder |
| Session cards | Write realistic-sounding session titles and descriptions |
| Sponsor logos | Use brand color + company name as text if no image available |
| External URLs | Use `href="#"` with a `<!-- DEFERRED: real URL -->` comment |
| Form action | `action="#"` with `<!-- DEFERRED: connect to backend -->` |
| Pagination dots/numbers | Wire to the JS state; static count matches number of placeholder items |

### 6. Implementing hover states from Figma

Figma components often have explicit "Hover" variants. Implement them in SCSS using the `::after` pseudo-element pattern for background transitions:

**SCSS hover pattern (background color change):**
```scss
.speaker-card {
  position: relative;
  background: $dark-purple;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: $fushia;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
  }
}
```

**Simple CSS hover (color, underline, shadow):**
```scss
.nav-link {
  color: $white;
  transition: color 0.2s ease;

  &:hover {
    color: $pink;
  }
}
```

**Parent/group hover (hovering parent affects child):**
```scss
.card {
  &:hover .card__arrow {
    opacity: 1;
  }
}

.card__arrow {
  opacity: 0;
  transition: opacity 0.2s ease;
}
```

### 7. Implementing paginated / stepped components (Vanilla JS)

For carousels, testimonial sliders, tab switchers, and steppers:

```html
<!-- _includes/world/2026/components/speaker_carousel.html -->
<div class="speaker-carousel" id="speaker-carousel">
  <div class="speaker-carousel__track">
    <!-- DEFERRED: Replace with real speaker data from _data/world/2026/speakers.yml -->
    {% assign speakers = site.data.world['2026'].speakers %}
    {% for speaker in speakers %}
      <div class="speaker-carousel__item {% if forloop.first %}is-active{% endif %}">
        <img src="{{ speaker.photo | default: '/assets/world/2026/images/speakers/placeholder.webp' }}" alt="{{ speaker.name }}" width="200" height="200" loading="lazy" />
        <h3>{{ speaker.name }}</h3>
      </div>
    {% endfor %}
  </div>
  <button type="button" class="speaker-carousel__prev" aria-label="Previous speaker">←</button>
  <button type="button" class="speaker-carousel__next" aria-label="Next speaker">→</button>
  <div class="speaker-carousel__dots">
    {% for speaker in speakers %}
      <button type="button" class="speaker-carousel__dot {% if forloop.first %}is-active{% endif %}" aria-label="Speaker {{ forloop.index }}"></button>
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('speaker-carousel');
  if (!carousel) return;

  var items = carousel.querySelectorAll('.speaker-carousel__item');
  var dots = carousel.querySelectorAll('.speaker-carousel__dot');
  var currentIndex = 0;

  function goTo(index) {
    items[currentIndex].classList.remove('is-active');
    dots[currentIndex].classList.remove('is-active');
    currentIndex = (index + items.length) % items.length;
    items[currentIndex].classList.add('is-active');
    dots[currentIndex].classList.add('is-active');
  }

  carousel.querySelector('.speaker-carousel__prev').addEventListener('click', function() {
    goTo(currentIndex - 1);
  });
  carousel.querySelector('.speaker-carousel__next').addEventListener('click', function() {
    goTo(currentIndex + 1);
  });
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { goTo(i); });
  });
});
</script>
```

### 8. SCSS token translation rules

The Figma MCP outputs Tailwind classes, but the project uses custom SCSS variables. Translate all color and typography values:

| Figma MCP output | Translate to SCSS |
|---|---|
| `text-[#3B1D62]` | `color: $dark-purple` |
| `text-[#880C51]` | `color: $fushia` |
| `text-[#CB0C1C]` | `color: $red` |
| `text-[#FF18A2]` | `color: $pink` |
| `bg-[#3B1D62]` | `background: $dark-purple` |
| Linear gradient (purple) | `background: $purple-gradient` |
| Button gradient | `background: $button-gradient` |
| Speaker card gradient | `background: $speaker-card-gradient` |
| `font-['Acumin_Variable:wght@900']` | `font-variation-settings: $font-weight-900` |
| `font-['Acumin_Variable:wght@400']` | `font-variation-settings: $font-weight-400` |
| `text-[48px]` | `font-size: $xxxx-large` (or match variable) |
| Raw hex not in tokens | Keep as literal hex — add variable if recurring |

**Typography:** Acumin Variable Concept is the project font. Use `font-variation-settings` for weights:
- Heavy/Bold: `font-variation-settings: $font-weight-900`
- Regular: `font-variation-settings: $font-weight-400`
- Font size variables from `$xxxx-large` down to `$small` — check existing SCSS for the variable definitions

## Known Patterns

### Viewport-scoped implementation rule
Each `/implement-section` run targets one viewport — either desktop **or** mobile, never both. Desktop page slugs end in `-desktop` (e.g. `home-desktop`); mobile in `-mobile`. **Never add responsive breakpoint styles or mobile-specific components to a desktop implementation**, and vice versa.

Desktop and mobile share the **same URL** (e.g., `/` for home). The page file (`world/2026/index.html`) renders both DOM trees using CSS show/hide:
```html
<div id="section-desktop"><!-- desktop sections --></div>
<div id="section-mobile"><!-- mobile sections --></div>
```
With SCSS:
```scss
#section-mobile { display: none; }
@include media(MobileScreens) {
  #section-desktop { display: none; }
  #section-mobile { display: block; }
}
```
**Never create a separate page route** (e.g., `/mobile`) for mobile — there is only one page file per URL.

### Mobile implementation conventions

When the page slug ends in `-mobile`:

1. **File naming**: use a `mobile_` prefix for mobile-specific includes — e.g., `mobile_hero.html`, `mobile_navigation.html`, `mobile_speaker_card.html`. This makes viewport ownership immediately clear.

2. **File locations**: same directories as desktop — `homepage_sections/`, `components/`. The `mobile_` prefix is the differentiator, not a subdirectory.

3. **Reuse shared atomic components**: components like button, pagination dots work at any size — reuse them directly. Only create a `mobile_*` variant when the component structure is fundamentally different from desktop.

4. **Page wiring**: add mobile sections inside the `#section-mobile` wrapper in the page file. Never create a separate page for mobile.

5. **Figma reference width**: mobile Figma frames are typically 393px wide. Use this as the reference for all spacing and sizing values.

### Section content centering
Section components must wrap their content in a `max-width: 1200px; margin: 0 auto;` container to center the layout on viewports wider than 1200px. Apply this to every section component's root wrapper or a dedicated content container inside it.

### Page layout wrapper margin
The standard horizontal padding for this project is set at the section wrapper level. Do NOT apply `max-width` on full-width background elements directly — apply it to an inner content container.

### Responsive breakpoints
Use the project's SCSS mixins, not hardcoded pixel values:
```scss
@include media(MobileScreens) { /* ≤ 700px */ }
@include media(TabletScreens) { /* 700–1200px */ }
```

### Include syntax
```liquid
{% include world/2026/components/speaker_card.html name=speaker.name title=speaker.title %}
```
- No commas between parameters
- No parentheses
- Inside the partial, always use `{{ include.name }}`, never `{{ name }}`
- Access site data: `site.data.world['2026'].speakers` (note the quotes around `'2026'`)

### Static data in Jekyll
Prefer YAML data files in `_data/world/2026/` for lists of speakers, sponsors, sessions, etc. Reference with `site.data.world['2026'].key`.

### Accessibility checklist (mandatory before output)

Before declaring implementation complete, verify each of these:

- **Form inputs**: every `<input>` and `<textarea>` must have a corresponding `<label>` with `for`/`id` association AND the HTML `required` attribute if the field is required
- **Multiple `<nav>` landmarks**: if the page has more than one `<nav>`, each must have a unique `aria-label`
- **Scrollable containers**: any element with `overflow-y: auto` or `overflow-x: auto` must have `tabindex="0"` and an `aria-label`
- **CSS animations**: any `@keyframes` animation must include `@media (prefers-reduced-motion: reduce) { ... { animation: none; } }`
- **Decorative images**: use `alt=""` and `aria-hidden="true"` on purely decorative images
- **Button type attribute**: all `<button>` elements that are NOT form submit buttons must have `type="button"`
- **Grid layouts over hard-coded slices**: use Liquid loops over full arrays; never hardcode a slice of items
- **Logo/icon images**: use `object-fit: contain` for logos and icons to prevent cropping

### 9. Implementing Figma "Smart animate" transitions as CSS @keyframes

Figma's **Smart animate** transition type interpolates matching elements between variants. The direct CSS equivalent is `@keyframes` animating only the properties that change between variants.

| Figma spec | CSS equivalent |
|---|---|
| Smart animate + Ease in and out + Xms duration | `animation-timing-function: ease-in-out; animation-duration: Xms` |
| After delay Yms (hold at current variant) | Duplicate the starting keyframe stop to cover `(Y / total_cycle_ms * 100)%` |

**Do not use `setInterval` + image `src` swapping** to cycle through variant frames — use CSS `@keyframes` for property-interpolated animations.

### 10. Update the page file
Add the new section include to the appropriate page file in `world/2026/`. Maintain correct include order and section sequence.

### 11. Output
- List of files created/modified with their paths
- Component types used (static / interactive-js) and reasons for JS choices
- Any SCSS variables added (if new recurring colors were found)
- Confirmation that all dynamic content uses static placeholder data with `DEFERRED` comments
- Note if `bundle exec jekyll serve --livereload` should be running for visual-qa to proceed

---

## Reference documentation

Fetch these URLs with `WebFetch` when implementation details are uncertain:

| Topic | URL |
|---|---|
| Jekyll includes | https://jekyllrb.com/docs/includes/ |
| Liquid template language | https://shopify.github.io/liquid/ |
| Jekyll variables | https://jekyllrb.com/docs/variables/ |
| Jekyll data files | https://jekyllrb.com/docs/datafiles/ |
| Jekyll front matter | https://jekyllrb.com/docs/front-matter/ |
