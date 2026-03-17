# Rails World 2026 — Homepage

Figma: https://www.figma.com/design/lrh1RO8MAK44ii93JkaR7q/Rails-World-2026--copia-?node-id=0-1
File key: lrh1RO8MAK44ii93JkaR7q
Year: 2026

## Sections

| # | Name | Figma Node | Y pos | Status | Include Path |
|---|------|------------|-------|--------|--------------|
| 1 | Announcement Banner | — | — | todo | _includes/world/2026/components/announcement_banner.html |
| 2 | Navbar | 34:532 | 0 | todo | _includes/world/2026/components/navbar.html |
| 3 | Hero (LEADER) | 115:1696 | 250 | todo | _includes/world/2026/homepage_sections/hero_banner.html |
| 4 | Newsletter Banner (NL_BANNER) | 64:821 | 849 | todo | _includes/world/2026/homepage_sections/intro.html |
| 5 | Speaker Carousel (SPEAKERS) | 129:1574 | 1058 | todo | _includes/world/2026/homepage_sections/speaker_carousel.html |
| 6 | Photo Lightbox + Sponsor Block | 68:856 / 64:823 | 1584 | todo | _includes/world/2026/homepage_sections/social.html |
| 7 | Sponsors Grid (SPONSORS) | 123:1323 | 2347 | todo | _includes/world/2026/homepage_sections/sponsors.html |
| 8 | Footer | 115:1671 | 2805 | todo | _includes/world/2026/components/footer.html |

## Figma frame structure (DESKTOP 1440×3091)

Top-level frames inside the DESKTOP frame (ordered by Y position):
- `34:532` NAVBAR_DESKTOP — full-width navbar, 1440×229
- `115:1696` LEADER — hero section, 1440×541
- `64:821` NL_BANNER — newsletter/mailing list CTA, 1260×182
- `129:1574` SPEAKERS — speaker carousel with left/right sliders, 1260×478
- `68:856` LIGHTBOX — photo gallery / lightbox, 630×655 (right half)
- `64:823` SPONSOR_BLOCK — featured sponsor block, 570×303 (left half, same Y as lightbox)
- `75:884` HAT — decorative element (cowboy hat/cactus SVG), not a full section
- `123:1323` SPONSORS — sponsors logo grid, 1263×350
- `115:1671` FOOTER — footer instance, 1441×187

## Component definitions (outside DESKTOP frame, for reference)

- `129:1483` SPEAKER card component — 290×798
- `115:1615` BUTTON_SECONDARY — 229×174
- `115:1637` BUTTON_TERTIARY — 195×158
- `126:1398` SLIDER_RIGHT / `126:1438` SLIDER_LEFT
- `115:1651` X (social icon) / `115:1659` LinkedIn (social icon)
- `68:845` PHOTOS — photo strip component
- `54:507` LOGO_SIMPLE — event logo

## Assets needed

- [ ] assets/world/2026/logos/RW26_logo-white-trademark.png (or SVG)
- [ ] assets/world/2026/images/sponsors/ (sponsor logos per _data/world/2026/sponsors.yml)
- [ ] assets/world/2026/images/speakers/ (headshots as speakers are added)
- [ ] assets/world/2026/icons/x.png
- [ ] assets/world/2026/icons/linkedin.png
- [ ] assets/world/2026/icons/github.png
- [ ] assets/world/2026/hexagons/ (decorative hexagon images for hero — check if 2026 design uses them)
- [ ] Decorative cowboy hat / cactus SVG (from HAT frame — unique to Austin theme)

## Data files needed

- [ ] _data/world/2026/announcements.yml — update with real banner text
- [ ] _data/world/2026/sponsors.yml — populate with confirmed sponsors
- [ ] _data/world/2026/faq.yml — populate with actual FAQ content

## Color palette (to extract from Figma)

Color variables in `_sass/world/2026/base/_colors.scss` are currently placeholders from 2025.
Extract actual 2026 colors from Figma before implementing sections.

Use: `mcp__figma__get_variable_defs` on file key `lrh1RO8MAK44ii93JkaR7q`, node `0:1`

## Implementation order (recommended)

1. Extract color palette from Figma → update `_sass/world/2026/base/_colors.scss`
2. Navbar (section 2)
3. Hero / LEADER (section 3)
4. Newsletter Banner (section 4)
5. Speaker Carousel (section 5)
6. Photo Lightbox + Sponsor Block (section 6)
7. Sponsors Grid (section 7)
8. Footer (section 8)
9. Announcement Banner (section 1)

## Notes

- The LIGHTBOX (photos) and SPONSOR_BLOCK sit side-by-side at Y=1584 — implement as a single two-column section
- The HAT frame (cowboy hat/cactus decorative element) is unique to the Austin 2026 theme — likely overlaps the sponsor area
- No separate MOBILE frame found — responsive styles need to be designed from the DESKTOP frame
- Figma plan: Starter/View (6 calls/month) — use calls sparingly, prioritize `get_design_context` per section
