# Learnings

Session retrospectives and accumulated knowledge from Rails World development.

---

## 2026-03-19 | world-2026-home / Multiple Sections | MANUAL

### Summary

First major development session on the Rails World 2026 homepage. Multiple sections implemented and iterated. Six generalizable learnings captured across SCSS patterns, layout conventions, and project setup.

### Learnings captured

- [scss-patterns] Neon border glow effect: use `border: 1px solid rgba(255,255,255,0.75)` + directional `box-shadow` values per side. Do NOT use a blurred pseudo-element approach — it bleeds color into transparent backgrounds. → written to `section-implementer.md` ✓
- [scss-patterns] Conic gradient direction mapping: `conic-gradient(from 90deg, orange 0%, purple 25%, blue 51%, red 76%)` maps right=orange, bottom=purple, left=blue, top=red. Directional box-shadows: `6px 0` = right, `0 6px` = bottom, `-6px 0` = left, `0 -6px` = top. Inset shadows use the OPPOSITE offset direction. → written to `section-implementer.md` ✓
- [scss-patterns] Section max-width alignment: all homepage sections must use `section.padding > div.__inner { max-width: 1262px; margin: 0 auto; }`. Putting `max-width` directly on a card element (no wrapper) causes visual misalignment on wide monitors because box-shadow glow escapes the constraint. → written to `section-implementer.md` ✓
- [project-convention] Always extract the Figma variable collection (colors) at the start of a new year before writing any SCSS. The 2026 palette differs completely from 2025; wrong colors in `_colors.scss` cause cascading broken builds and incorrect colors across all modules. → written to `CLAUDE.md` ✓
- [scss-patterns] Fixed background image pattern: `background-color: #000; background-image: url(...); background-attachment: fixed; background-size: cover; background-position: center;`. The `background-color` serves as fallback and darkens the image when the PNG has transparency. → written to `section-implementer.md` ✓
- [jekyll-framework] Simple image carousel: stack images with `position: absolute; opacity: 0; transition: opacity 0.8s` and `.active { opacity: 1 }`. Use an IIFE in a `<script>` tag at the bottom of the include. Do not create a separate JS file for single-include scripts. → written to `jekyll-validator.md` ✓

### What to watch next time

- Confirm colors from Figma variable collection before any SCSS work begins — do not guess from comp screenshots.
- When implementing sections with glow/neon borders, verify directional box-shadow mappings against the conic gradient before committing.

---
