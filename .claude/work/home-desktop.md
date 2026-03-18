# Home Desktop
Figma node: 1:2
Figma file: kQTYtKl755Uk1RKfjIFPF0
Screenshot: https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be8d420a-eea4-416e-8e2d-490826a8bc59
Reference node (from URL): 34:532 (NAVBAR_DESKTOP)
Frame size: 1440x3091px

## Notes
- The Figma URL pointed to node 34:532 (NAVBAR_DESKTOP), which is a child of the DESKTOP frame (1:2).
- Page slug is `home-desktop`; the rendered page will live at `world/2026/index.html`.
- CACTUS and LIGHTBOX/SPONSOR_BLOCK are decorative/overlay elements that share y-positions with neighboring sections.
- RW26_BG2 is a full-page background rectangle, not a discrete section.
- Shared Figma components available: FOOTER (115:1670), NAV (42:1078), NAVBAR_LINK (8:74), BUTTON_HOVER (10:1407), BUTTON_SECONDARY (115:1615), BUTTON_TERTIARY (115:1637), X/Twitter icon (115:1651), LinkedIn icon (115:1659), SLIDER_RIGHT (126:1398), SLIDER_LEFT (126:1438), SPEAKER card (129:1483).

## Sections
| # | Name | Node ID | y-pos | Type | Status | Shared Includes | Notes |
|---|------|---------|-------|------|--------|-----------------|-------|
| 0 | RW26_BG2 (background) | 68:842 | 0 | RECTANGLE | pending | — | Full-page background rectangle; implement as CSS background on page wrapper, not a separate section include |
| 1 | NAVBAR_DESKTOP | 34:532 | 0 | FRAME | done | _includes/world/2026/components/nav.html | Glass-effect navbar; uses NAV (42:1078) and NAVBAR_LINK (8:74) shared components |
| 2 | LEADER | 115:1696 | 250 | FRAME | pending | _includes/world/2026/homepage_sections/hero.html | Hero section with full logo (LOGO_FULL) and text content |
| 3 | CACTUS | 83:1218 | 250 | FRAME | pending | _includes/world/2026/components/cactus.html | Decorative cactus SVG illustration overlapping the LEADER section |
| 4 | NL_BANNER | 64:821 | 849 | GROUP | pending | _includes/world/2026/homepage_sections/newsletter_banner.html | Newsletter / email signup banner strip |
| 5 | SPEAKERS | 129:1574 | 1058 | GROUP | pending | _includes/world/2026/homepage_sections/speakers.html | "Meet the Speakers" heading + speaker slider carousel; uses SPEAKER (129:1483), SLIDER_RIGHT (126:1398), SLIDER_LEFT (126:1438) |
| 6 | LIGHTBOX | 68:856 | 1584 | GROUP | pending | _includes/world/2026/homepage_sections/photo_gallery.html | Photo lightbox/gallery; uses PHOTOS (68:845) component set |
| 7 | SPONSOR_BLOCK | 64:823 | 1584 | GROUP | pending | _includes/world/2026/homepage_sections/sponsor_block.html | Sponsor callout block overlapping the gallery row; uses BUTTON_SECONDARY (115:1615) |
| 8 | HAT | 75:884 | 1922 | FRAME | pending | _includes/world/2026/components/hat.html | Decorative cowboy-hat SVG illustration (vector paths) |
| 9 | SPONSORS | 123:1323 | 2347 | FRAME | pending | _includes/world/2026/homepage_sections/sponsors.html | Full sponsors section: "Thank you to our sponsors" heading + logo grid |
| 10 | FOOTER | 115:1671 | 2805 | INSTANCE | pending | _includes/world/2026/components/footer.html | Footer; instance of shared FOOTER component (115:1670); contains BORDER, LINKS, credits text |
