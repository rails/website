# Rails World Website — Conventions for AI Agents

## Stack

- **Static site generator**: Jekyll (Ruby)
- **Markdown processor**: Kramdown
- **CSS preprocessor**: SCSS (output: compressed)
- **Plugins**: jekyll-feed, jekyll-paginate, jekyll-sitemap, jemoji
- **Dev server**: `bundle exec jekyll serve --livereload`
- **Output directory**: `_site/` (never edit this directly)

---

## Directory Structure

```
_config.yml                  # Jekyll config — collections, defaults, plugins
_layouts/                    # HTML layout templates
_includes/                   # Reusable HTML components ({% include %})
_sass/                       # SCSS source files
_data/                       # YAML data files (accessed via site.data)
_posts/                      # Blog posts
_pages/                      # Static site pages
_world_speakers/             # Jekyll collection: speaker pages
_world_sessions/             # Jekyll collection: session pages
assets/                      # Compiled CSS, images, fonts, scripts
world/                       # Conference year pages
```

---

## Rails World: Year-Based Architecture

Each Rails World edition is fully self-contained. When adding a new year (e.g. 2026), you must create **all** of these in parallel — they do not inherit from other years.

**Before writing any SCSS for a new year:** extract the Figma variable collection (colors) first and define all color variables in `_sass/world/YYYY/base/_colors.scss`. Each year's palette differs completely from the previous year. Defining wrong or placeholder colors early causes cascading broken builds and incorrect colors across all modules.

### Files to create per year (`YYYY` = year):

| Path | Purpose |
|------|---------|
| `world/YYYY/index.html` | Homepage |
| `world/YYYY/speakers.html` | All speakers listing |
| `world/YYYY/agenda/day-1.html` | Day 1 agenda |
| `world/YYYY/agenda/day-2.html` | Day 2 agenda |
| `world/YYYY/faq/general.html` | FAQ page |
| `_layouts/world/YYYY/default.html` | Base layout for all year pages |
| `_layouts/world/YYYY/speaker.html` | Individual speaker page layout |
| `_layouts/world/YYYY/session.html` | Individual session page layout |
| `_layouts/world/YYYY/legal.html` | Legal/code of conduct layout |
| `_includes/world/YYYY/head.html` | `<head>` meta tags |
| `_includes/world/YYYY/components/navbar.html` | Sticky header (desktop + mobile) |
| `_includes/world/YYYY/components/navbar_links.html` | Nav link list |
| `_includes/world/YYYY/components/footer.html` | Footer |
| `_includes/world/YYYY/components/announcement_banner.html` | Top banner |
| `_includes/world/YYYY/components/speaker_card.html` | Speaker card component |
| `_includes/world/YYYY/components/session_card.html` | Session card component |
| `_includes/world/YYYY/homepage_sections/hero_banner.html` | Hero section |
| `_includes/world/YYYY/homepage_sections/intro.html` | Event description |
| `_includes/world/YYYY/homepage_sections/speaker_carousel.html` | Featured speakers |
| `_includes/world/YYYY/homepage_sections/sponsors.html` | Sponsor grid |
| `_includes/world/YYYY/homepage_sections/social.html` | Social media links |
| `assets/css/world-YYYY.scss` | SCSS entry point for the year |
| `_sass/world/YYYY/base/_colors.scss` | Color palette and gradients |
| `_sass/world/YYYY/base/_media.scss` | Responsive breakpoints mixin |
| `_sass/world/YYYY/base/_typography.scss` | Fonts and type scale |
| `_sass/world/YYYY/base/_layout.scss` | Base layout rules |
| `_sass/world/YYYY/common/` | Shared utilities (buttons, hexagons, etc.) |
| `_sass/world/YYYY/modules/` | Per-section styles (navbar, hero, cards...) |
| `_data/world/YYYY/announcements.yml` | Banner text |
| `_data/world/YYYY/sponsors.yml` | Sponsor list by tier |
| `_data/world/YYYY/faq.yml` | FAQ categories and Q&A |
| `_world_speakers/YYYY/speakers/*.md` | One file per speaker |
| `_world_sessions/YYYY/day-1/*.md` | One file per day-1 session |
| `_world_sessions/YYYY/day-2/*.md` | One file per day-2 session |
| `assets/images/world/YYYY/` | Images, logos, icons for the year |

### Also update `_config.yml`:

Add a `world_YYYY_title` variable and a scope default for `world/YYYY`:

```yaml
world26_title: Rails World 2026 - Austin, TX

defaults:
  - scope:
      path: "world/2026"
    values:
      description: September 23 & 24 - Austin, TX
```

### Also update `world/index.html`:

Add the new year to the "Previous editions" list once the event is past, or update the "Next up" section while it's upcoming.

---

## Frontmatter Conventions

### World year pages (e.g. `world/2025/index.html`)

```yaml
---
title: "Rails World 2025 - Sept 4 & 5 in Amsterdam"
description: "..."
layout: world/2025/default
permalink: /world/2025
redirect_from: /world/2025/
---
```

### Speaker files (`_world_speakers/YYYY/speakers/first-last.md`)

```yaml
---
layout: world/2025/speaker
redirect_from: /world/speakers/first-last     # keep for backwards compat
first_name: Aaron
last_name: Patterson
image_path: /assets/world/2025/images/speakers/a-patterson.jpg
tagline: Rails Core & Senior Staff Engineer
company: Shopify
keynote: true                                 # boolean, omit or false for non-keynotes
github: https://github.com/tenderlove
linkedin: https://www.linkedin.com/in/tenderlove/
twitter: https://twitter.com/tenderlove
specific_order:                               # optional integer for sort order
---

Bio text goes here (plain text, rendered as <p>).
```

- Filename: `kebab-case` of full name, e.g. `aaron-patterson.md`
- Image path convention: `/assets/world/YYYY/images/speakers/INITIAL-LASTNAME.jpg`

### Session files (`_world_sessions/YYYY/day-1/first-last.md`)

```yaml
---
layout: world/2025/session
title: "Session Title"
speaker: david-hansson.md          # must match speaker filename exactly
second_speaker: jane-doe.md        # optional
time: "10:00 - 11:00"
location: Effectenbeurs            # "Effectenbeurs" = Track 1, other = Track 2
running_order: 1                   # integer, used for sorting
---

Session description goes here.
```

- Filename: same `kebab-case` as the primary speaker
- `speaker` value must be the **filename with extension** (`first-last.md`)
- The session layout finds the speaker via: `site.world_speakers | where_exp: 'item', 'item.path contains "YYYY"' | where: 'path', speaker_id`

---

## Layout System

### How layouts chain

```
world/YYYY/default.html        ← base for all year pages
  └── world/YYYY/speaker.html  ← uses default, adds speaker template
  └── world/YYYY/session.html  ← uses default, adds session template
  └── world/YYYY/legal.html    ← uses default, stripped-down content area
```

### `_layouts/world/2025/default.html` pattern

```html
{% assign announcement = site.data.world['2025'].announcements.general %}

<!DOCTYPE html>
<html lang="en" style="scroll-behavior: smooth">
  {% include world/2025/head.html %}
  <body class="purple-gradient-background">
    {% include world/2025/components/announcement_banner.html background_color="red-background" content=announcement %}
    {% include world/2025/components/navbar.html background_color="purple-background" %}

    <main id="main-content" tabindex="-1">
      {{ content }}
    </main>

    {% include world/2025/components/footer.html %}
  </body>
</html>
```

Key points:
- Access data as `site.data.world['YYYY'].file_key` (string key, not dot notation, because the key is numeric)
- Body class is typically the primary background gradient class
- `<main>` must have `id="main-content"` and `tabindex="-1"` for accessibility

---

## SCSS Architecture

### Entry point: `assets/css/world-YYYY.scss`

Must start with an empty frontmatter block so Jekyll processes it:

```scss
---
---

@charset 'utf-8';

@import 'base/reset';
@import 'world/YYYY/base/colors';
@import 'world/YYYY/base/media';
@import 'world/YYYY/base/typography';
@import 'world/YYYY/common/gradient_animation';
@import 'world/YYYY/base/layout';

@import 'world/YYYY/common/back_to_top';
@import 'world/YYYY/common/button';
@import 'world/YYYY/common/logos_grid';
@import 'world/YYYY/common/hexagon_frame';
@import 'world/YYYY/common/social_card';

@import 'world/YYYY/modules/navbar';
@import 'world/YYYY/modules/announcement_banner';
@import 'world/YYYY/modules/hero_banner';
@import 'world/YYYY/modules/homepage';
@import 'world/YYYY/modules/footer';
@import 'world/YYYY/modules/speaker_card';
@import 'world/YYYY/modules/speaker_carousel';
@import 'world/YYYY/modules/speaker_index';
@import 'world/YYYY/modules/speaker_show';
@import 'world/YYYY/modules/session_card';
@import 'world/YYYY/modules/session_page';
@import 'world/YYYY/modules/agenda_page';
@import 'world/YYYY/modules/agenda_tabs';
@import 'world/YYYY/modules/faq';
@import 'world/YYYY/modules/legal';
@import 'world/YYYY/modules/image_carousel';
```

### `_sass/world/YYYY/base/_colors.scss` pattern

```scss
$dark-purple: #3B1D62;
$fushia: #880C51;
$red: #CB0C1C;
$pink: #FF18A2;

$button-gradient: linear-gradient(90deg, $dark-purple 47%, $red 100%);
$purple-gradient: linear-gradient(180deg, $dark-purple, $dark-purple, $fushia, $fushia);
$speaker-card-gradient: linear-gradient(180deg, rgba(59, 29, 98, 0%) 50%, $red 100%);
// ... etc
```

### `_sass/world/YYYY/base/_media.scss` pattern

```scss
@mixin media($query) {
  @if $query == SmallMobileScreens {
    @media (max-width: 375px) { @content; }
  }
  @if $query == MobileScreens {
    @media (max-width: 700px) { @content; }
  }
  @if $query == MobileAndTabletScreens {
    @media (max-width: 1200px) { @content; }
  }
  @if $query == TabletScreens {
    @media (min-width: 700px) and (max-width: 1200px) { @content; }
  }
}
```

Usage in other SCSS files: `@include media(MobileScreens) { ... }`

---

## Data Files

### `_data/world/YYYY/announcements.yml`

```yaml
general: "Banner text shown on all pages."
rails_at_scale: "Text for the Rails at Scale summit page."
```

Accessed in Liquid as: `site.data.world['YYYY'].announcements.general`

### `_data/world/YYYY/sponsors.yml`

```yaml
platinum:
  - name: CompanyName
    logo: /assets/world/YYYY/images/sponsors/RW-logo-company.svg
    url: https://company.com/

gold:
  - name: CompanyName
    logo: /assets/world/YYYY/images/sponsors/RW-logo-company.svg
    url: https://company.com/

silver:
  - ...

members:
  - ...
```

Sponsor tiers in order: `platinum`, `gold`, `silver`, `members`.

### `_data/world/YYYY/faq.yml`

```yaml
- category: General
  slug: general
  questions:
    - question: "Question text?"
      answer: "Answer text."
```

---

## Navbar Component Pattern

### `_includes/world/YYYY/components/navbar.html`

- Accepts `include.background_color` parameter (e.g. `"purple-background"`, `"red-background"`)
- Desktop nav: `id="navbar-desktop"`, class `nav`
- Mobile nav: `id="navbar-mobile"`, with hamburger toggle button
- Mobile menu toggle uses JS to add/remove `menu-open` class on `.mobile-menu`
- Logo links to `/world/YYYY`

### `_includes/world/YYYY/components/navbar_links.html`

Simple list of `<a href="..." class="nav-link">` links. Shared between desktop and mobile.

---

## Asset Naming Conventions

### Images

```
assets/images/world/YYYY/
  logos/           # Event logos (e.g. RW26_logo-white-trademark.png)
  images/
    speakers/      # Headshots: INITIAL-LASTNAME.jpg (e.g. a-patterson.jpg)
    sponsors/      # Sponsor logos: RW-logo-companyname.svg
  icons/           # UI icons (github.png, linkedin.png, x.png)
  hexagons/        # Decorative hexagon images for hero
```

### CSS files

```
assets/css/world-YYYY.scss   # Entry point, must have empty --- frontmatter
```

---

## Accessibility Requirements

- All `<img>` tags must have descriptive `alt` attributes
- Interactive non-`<a>` / non-`<button>` elements (e.g. clickable cards) must have:
  - `role="button"`
  - `tabindex="0"`
  - Keyboard handlers for Enter and Space keys
- `<main>` must have `id="main-content"` and `tabindex="-1"`
- Mobile menu toggle button must have `aria-label="Toggle Menu"`
- Lazy load below-the-fold images: `loading="lazy"`

---

## Liquid Templating Patterns

### Accessing year-keyed data (numeric key — use bracket notation)

```liquid
{% assign data = site.data.world['2025'].sponsors %}
```

### Filtering collections by year

```liquid
{% assign speakers = site.world_speakers | where_exp: 'item', 'item.path contains "2025"' %}
```

### Linking from a session to its speaker

The session frontmatter stores `speaker: first-last.md`. To resolve the speaker object:

```liquid
{% assign speaker_filename = page.speaker %}
{% assign speaker = site.world_speakers | where_exp: 'item', 'item.path contains speaker_filename' | first %}
```

### Back-to-top button (include on all homepage-style pages)

```html
<button id="backToTop" onclick="scrollToTop()">↑</button>

<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('scroll', () => {
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 300);
  });
</script>
```

---

## Common CSS Class Patterns (main site, non-world pages)

These classes come from `_sass/common/` and `_sass/modules/` and are used on main site pages (not world year pages):

| Class | Purpose |
|-------|---------|
| `common-padding--top` / `--bottom` / `--top-small` | Vertical spacing |
| `common-headline` | Section heading wrapper |
| `common-content` | Body text content area |
| `common-button` | Base button style |
| `common-button--size-medium` | Medium button size |
| `common-button--color-red` | Red button variant |
| `common-background--grey` | Grey background section |
| `container` | Max-width centered container |
| `divider` | `<hr>` styled divider |

---

## Jekyll Collections Config

The `world_speakers` and `world_sessions` collections output pages at `/world/:path`, which means:

- `_world_speakers/2025/speakers/aaron-patterson.md` → `/world/2025/speakers/aaron-patterson`
- `_world_sessions/2025/day-1/david-hansson.md` → `/world/2025/day-1/david-hansson`

This path structure is controlled by `_config.yml`:

```yaml
collections:
  world_speakers:
    output: true
    permalink: "/world/:path"
  world_sessions:
    output: true
    permalink: "/world/:path"
```

**Do not change these collection names or permalink patterns** — doing so breaks all speaker and session URL resolution.

---

## What NOT to do

- Never edit files in `_site/` — it is auto-generated
- Never use dot notation for numeric data keys: use `site.data.world['2025']` not `site.data.world.2025`
- Never share layouts or includes between years — each year is isolated
- Never hardcode year strings inside reusable components — pass the year as a parameter if needed
- Never skip the empty `---` frontmatter block in `.scss` files under `assets/css/` — Jekyll won't process them without it
- Do not create a new Jekyll collection for each year — reuse `world_speakers` and `world_sessions`, and use the path (`item.path contains "YYYY"`) to filter by year
