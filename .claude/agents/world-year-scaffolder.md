---
model: claude-sonnet-4-6
---

# World Year Scaffolder Agent

Creates the complete file structure for a new Rails World conference year, following the conventions in `CLAUDE.md`.

## Inputs

- **year** — e.g. `2026`
- **location** — e.g. `Austin, TX`
- **dates** — e.g. `September 23 & 24`
- **source_year** — year to copy structure from (default: `2025`)

## Rules

- Every path, string, class name, and data key that contains the source year must be updated to the new year.
- **Never** share layouts, includes, or SCSS between years. Each year is fully isolated.
- Use bracket notation for year keys in Liquid: `site.data.world['2026']` not `site.data.world.2026`.
- Do NOT copy speaker or session content from the source year — scaffolded data files start empty or with placeholder structure.
- After creating all files, always run the `jekyll-validator` agent.

## Steps

### Step 1: Read CLAUDE.md

Read `CLAUDE.md` in full. This is the authoritative reference for all file paths and conventions.

### Step 2: Read source year files

Read the following source year files to use as templates:
- `_layouts/world/SOURCE_YEAR/default.html`
- `_layouts/world/SOURCE_YEAR/speaker.html`
- `_layouts/world/SOURCE_YEAR/session.html`
- `_layouts/world/SOURCE_YEAR/legal.html`
- `_includes/world/SOURCE_YEAR/head.html`
- `_includes/world/SOURCE_YEAR/components/navbar.html`
- `_includes/world/SOURCE_YEAR/components/navbar_links.html`
- `_includes/world/SOURCE_YEAR/components/footer.html`
- `_includes/world/SOURCE_YEAR/components/announcement_banner.html`
- `_includes/world/SOURCE_YEAR/components/speaker_card.html`
- `_includes/world/SOURCE_YEAR/components/session_card.html`
- `_includes/world/SOURCE_YEAR/homepage_sections/hero_banner.html`
- `_includes/world/SOURCE_YEAR/homepage_sections/intro.html`
- `_includes/world/SOURCE_YEAR/homepage_sections/speaker_carousel.html`
- `_includes/world/SOURCE_YEAR/homepage_sections/sponsors.html`
- `_includes/world/SOURCE_YEAR/homepage_sections/social.html`
- `assets/css/world-SOURCE_YEAR.scss`
- `_sass/world/SOURCE_YEAR/base/_colors.scss`
- `_sass/world/SOURCE_YEAR/base/_media.scss`
- `_sass/world/SOURCE_YEAR/base/_typography.scss`
- `_sass/world/SOURCE_YEAR/base/_layout.scss`
- `world/SOURCE_YEAR/index.html`
- `world/SOURCE_YEAR/speakers.html`

Also glob and read all files under:
- `_sass/world/SOURCE_YEAR/common/`
- `_sass/world/SOURCE_YEAR/modules/`

### Step 3: Create directory structure

Create directories (they will be implicitly created when writing files, but confirm the paths exist):

```
world/YEAR/
world/YEAR/agenda/
world/YEAR/faq/
_layouts/world/YEAR/
_includes/world/YEAR/
_includes/world/YEAR/components/
_includes/world/YEAR/homepage_sections/
_sass/world/YEAR/
_sass/world/YEAR/base/
_sass/world/YEAR/common/
_sass/world/YEAR/modules/
_data/world/YEAR/
_world_speakers/YEAR/speakers/
_world_sessions/YEAR/day-1/
_world_sessions/YEAR/day-2/
assets/images/world/YEAR/
assets/images/world/YEAR/logos/
assets/images/world/YEAR/images/speakers/
assets/images/world/YEAR/images/sponsors/
assets/images/world/YEAR/icons/
assets/images/world/YEAR/hexagons/
```

### Step 4: Create layout files

Create `_layouts/world/YEAR/default.html`, `speaker.html`, `session.html`, `legal.html` by copying from source year and replacing all occurrences of SOURCE_YEAR with YEAR (both in paths and in content).

### Step 5: Create include files

Create all files under `_includes/world/YEAR/` by copying from source year and replacing:
- All path references: `/world/SOURCE_YEAR/` → `/world/YEAR/`
- All asset paths: `/assets/world/SOURCE_YEAR/` → `/assets/world/YEAR/`
- All data references: `site.data.world['SOURCE_YEAR']` → `site.data.world['YEAR']`
- All include paths: `world/SOURCE_YEAR/` → `world/YEAR/`
- IDs and classes containing the year: `header-SOURCE_YEAR` → `header-YEAR`
- Logo alt text: `Rails World Logo SOURCE_YEAR` → `Rails World Logo YEAR`

Update `navbar_links.html` to reflect the actual pages available for the new year (initially: Speakers, FAQ — defer Agenda until sessions exist).

### Step 6: Create SCSS files

Copy all SCSS files from `_sass/world/SOURCE_YEAR/` to `_sass/world/YEAR/` replacing year references in paths and any hardcoded strings.

Create `assets/css/world-YEAR.scss` with:
- Empty frontmatter block (`---\n---`)
- `@charset 'utf-8';`
- All imports updated to `world/YEAR/...`

### Step 7: Create data files

Create `_data/world/YEAR/announcements.yml`:
```yaml
general: "Rails World YEAR is coming to LOCATION on DATES. Stay tuned!"
```

Create `_data/world/YEAR/sponsors.yml`:
```yaml
platinum: []
gold: []
silver: []
members: []
```

Create `_data/world/YEAR/faq.yml`:
```yaml
- category: General
  slug: general
  questions:
    - question: "When and where is Rails World YEAR?"
      answer: "Rails World YEAR will take place DATES in LOCATION."
```

### Step 8: Create world pages

Create `world/YEAR/index.html`:
```yaml
---
title: "Rails World YEAR - DATES in LOCATION"
description: "Rails World YEAR in LOCATION. DATES."
layout: world/YEAR/default
permalink: /world/YEAR
redirect_from: /world/YEAR/
---
```

Body: copy structure from source year's `index.html`, updating all include paths to `world/YEAR/`.

Create `world/YEAR/speakers.html`, `world/YEAR/agenda/day-1.html`, `world/YEAR/agenda/day-2.html`, `world/YEAR/faq/general.html` following the same pattern.

### Step 9: Update `_config.yml`

Add to `_config.yml`:

```yaml
# In top-level variables:
world26_title: Rails World YEAR - LOCATION

# In defaults:
  - scope:
      path: "world/YEAR"
    values:
      description: DATES - LOCATION
```

### Step 10: Update `world/index.html`

Update the "Next up" section to reference the new year:
```html
<b>Rails World YEAR</b> will take place in <b>LOCATION</b> DATES.
```

If the previous year is now complete, move it to the "Previous editions" list.

### Step 11: Run jekyll-validator

Invoke the `jekyll-validator` agent. Do not proceed if it returns FAIL.

### Step 12: Report

```
SCAFFOLDED: Rails World YEAR

Files created:
  Layouts:  4
  Includes: N
  SCSS:     N
  Data:     3
  Pages:    N

Updated:
  _config.yml
  world/index.html

Jekyll build: PASS / FAIL

Next steps:
  - Add assets to assets/images/world/YEAR/
  - Run /add-speaker YEAR to add speakers
  - Run /add-session YEAR to add sessions
```
