# Rails World 2025 — Implementation Reference

This document exists so agents implementing the 2026 edition can consult the 2025 patterns without reading every file. **Always adapt, never copy blindly** — 2026 has a different design.

---

## File Tree (2025, relevant files only)

```
_layouts/world/2025/
  default.html        ← base layout (navbar + footer wrapper)
  legal.html          ← minimal layout for terms/conduct pages
  speaker.html        ← individual speaker page
  session.html        ← individual session page
  rails_at_scale.html ← standalone page with custom layout

_includes/world/2025/
  head.html
  components/
    announcement_banner.html   ← top pre-header strip
    navbar.html                ← desktop + mobile nav with JS toggle
    navbar_links.html          ← flat list of <a> nav links
    footer.html                ← one-liner credits footer
    speaker_card.html
    session_card.html
    faq_category.html
    faq_tabs.html
  homepage_sections/
    hero_banner.html           ← logo + hexagon photos
    intro.html                 ← motto + description + venue button
    speaker_carousel.html      ← horizontal scroll with arrows
    image_carousel.html        ← photo gallery
    sponsors.html              ← logos grid by tier
    social.html                ← social cards + legal links

_sass/world/2025/
  base/
    _colors.scss               ← all color variables + gradients
    _media.scss                ← @mixin media(query) breakpoints
    _typography.scss           ← fonts and type scale
    _layout.scss               ← base layout rules
  common/
    _button.scss
    _logos_grid.scss
    _hexagon_frame.scss
    _social_card.scss
    _back_to_top.scss
    _gradient_animation.scss
  modules/
    _navbar.scss
    _announcement_banner.scss
    _hero_banner.scss
    _homepage.scss
    _footer.scss
    _speaker_card.scss / _speaker_carousel.scss / _speaker_index.scss / _speaker_show.scss
    _session_card.scss / _session_page.scss
    _agenda_page.scss / _agenda_tabs.scss
    _faq.scss
    _legal.scss
    _image_carousel.scss

_data/world/2025/
  announcements.yml  ← { general: "...", rails_at_scale: "..." }
  sponsors.yml       ← { platinum: [], gold: [], silver: [], members: [] }
  faq.yml            ← [{ category, slug, questions: [{question, answer}] }]

world/2025/
  index.html
  speakers.html
  rails_at_scale.html
  faq/general.html / tickets.html / venues.html / accessibility.html
  agenda/day-0.html / day-1.html / day-2.html
```

---

## 2025 Color Palette

```scss
$dark-purple: #3B1D62;
$fushia:      #880C51;
$red:         #CB0C1C;
$pink:        #FF18A2;

// Key gradients
$button-gradient:          linear-gradient(90deg, #3B1D62 47%, $red 100%);
$purple-gradient:          linear-gradient(180deg, $dark-purple, $dark-purple, $fushia, $fushia);
$red-gradient:             linear-gradient(180deg, $red, $red, $dark-purple, $dark-purple);
$speaker-card-gradient:    linear-gradient(180deg, rgba(59,29,98,0%) 50%, $red 100%);
```

Body background class: `purple-gradient-background`

---

## 2025 Navbar Pattern

```html
<header id="header-2025" class="{{ include.background_color }}">
  <nav id="navbar-desktop" class="nav">
    <a href="/world/2025" class="logo-container">
      <img alt="Rails World Logo 2025" src="/assets/world/2025/logos/RW25_logo-white-trademark.png" />
    </a>
    <div class="nav-links-container">
      {% include world/2025/components/navbar_links.html %}
    </div>
  </nav>

  <nav id="navbar-mobile">
    <div class="nav-content">
      <a href="/world/2025" class="logo-container">...</a>
      <button class="menu-toggle" aria-label="Toggle Menu">☰</button>
    </div>
    <div class="mobile-menu">
      {% include world/2025/components/navbar_links.html %}
    </div>
  </nav>
</header>
<script>
  // toggle .menu-open on .mobile-menu via .menu-toggle click
</script>
```

**2025 nav links:** Speakers · Agenda · FAQs · Rails at Scale Summit

**2026 nav links (Phase 1):** FAQ · Rails at Scale  ← NO speakers/agenda yet

---

## 2025 Homepage Structure

```
world/2025/index.html
  └── layout: world/2025/default
      └── <div class="homepage">
            hero_banner.html       ← logo + hexagon photos (2025 was post-event)
            intro.html             ← motto + description + CTA button
            speaker_carousel.html  ← (Phase 1: not in 2026 yet)
            image_carousel.html    ← (Phase 1: not in 2026 yet)
            sponsors.html          ← logos by tier from _data
            social.html            ← social cards + legal links
          </div>
```

**2026 Phase 1 homepage structure:**

```
hero_banner.html      ← RW2026 logo + dates + location + mailing list CTA
intro.html            ← motto + description paragraph
sponsors.html         ← "Become a sponsor" block + member logos
social.html           ← X / LinkedIn / mailing list / Terms / Conduct / Privacy
```

---

## 2025 Sponsors Section

Reads from `site.data.world['2025'].sponsors` → tiers: `platinum`, `gold`, `silver`, `members`.

```html
<div class="logos-grid platinum">
  {% for sponsor in site.data.world['2025'].sponsors.platinum %}
    <a href="{{ sponsor.url }}" target="_blank">
      <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}" loading="lazy">
    </a>
  {% endfor %}
</div>
```

**2026 Phase 1 difference:** no platinum/gold/silver yet. Only `members` (Rails Foundation members). Add a "Become a sponsor" CTA block above the logos grid.

---

## 2025 Social Section

Six social cards: X · LinkedIn · Mailing list · Terms & Conditions · Code of Conduct · Privacy Policy.

**2026 links:**
- X: `https://x.com/rails?s=21&t=6USUfzLGvXl64_NwNbAghw`
- LinkedIn: `https://www.linkedin.com/company/ruby-on-rails-org/`
- Mailing list: `https://rails-foundation.kit.com/sign-up`
- Terms: `/world/2026/terms`
- Code of Conduct: `https://rubyonrails.org/conduct`
- Privacy Policy: `https://rubyonrails.org/foundation/privacy`

---

## 2025 Footer

```html
<div class="footer">
  <div class="footer-content">
    <p>
      This website was built by <a href="...">Ines Alvergne</a><br>
      and designed by <a href="https://www.linkedin.com/in/jomiroeming">Jomiro Eming.</a>
    </p>
  </div>
</div>
```

**2026 footer:** builder is TBD (placeholder), designer is Jomiro Eming.

---

## 2025 Announcement Banner

Reads from `site.data.world['2025'].announcements.general`.

```html
{% include world/2025/components/announcement_banner.html
   background_color="red-background"
   content=announcement %}
```

**2026 Phase 1 content:** `"Stay tuned: Rails World tickets launching soon"`

---

## 2025 FAQ Structure

YAML: `_data/world/2025/faq.yml`
```yaml
- category: General
  slug: general
  questions:
    - question: "..."
      answer: "..."
```

Multiple HTML pages, one per category: `faq/general.html`, `faq/tickets.html`, `faq/venues.html`, `faq/accessibility.html`.

**2026 Phase 1 FAQ categories:** General · Tickets · Venue & Hotel · Accessibility

---

## 2025 Breakpoints (_media.scss)

```scss
@mixin media($query) {
  @if $query == SmallMobileScreens    { @media (max-width: 375px) { @content; } }
  @if $query == MobileScreens         { @media (max-width: 700px) { @content; } }
  @if $query == MobileAndTabletScreens{ @media (max-width: 1200px){ @content; } }
  @if $query == TabletScreens         { @media (min-width: 700px) and (max-width: 1200px) { @content; } }
}
```

---

## Data Access Pattern

Always use bracket notation for year keys:
```liquid
{% assign sponsors = site.data.world['2026'].sponsors %}
{% assign announcement = site.data.world['2026'].announcements.general %}
```

---

## What 2026 Does NOT Have in Phase 1

- No speaker collection files (`_world_speakers/2026/`)
- No session collection files (`_world_sessions/2026/`)
- No agenda pages
- No speakers listing page
- No image carousel
- No speaker carousel
- No speaker/session SCSS modules
