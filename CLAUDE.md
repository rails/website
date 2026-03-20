# Rails World Website — Claude Instructions

## Figma
- **File key:** `kQTYtKl755Uk1RKfjIFPF0`
- **Base URL:** `https://www.figma.com/design/kQTYtKl755Uk1RKfjIFPF0/`

Pass the full Figma URL (with `?node-id=...`) when running `/plan-page`.

## Stack
- Jekyll static site (github-pages gem)
- CSS: Custom SCSS in `_sass/` — no Tailwind, no CSS modules
- JS: Vanilla JS only
- Dev server: `bundle exec jekyll serve --livereload` → http://localhost:4000/

## Key paths
- Components: `_includes/world/2025/components/` and `_includes/world/2025/homepage_sections/`
- SCSS: `_sass/world/2025/`
- Data: `_data/world/2025/` YAML files
- Pages: `world/2025/index.html`, `world/2025/speakers.html`, etc.
- Layout: `_layouts/world/2025/default.html`
