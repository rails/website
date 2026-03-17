# Rails World 2026 — Homepage (Phase 1)

Figma: https://www.figma.com/design/lrh1RO8MAK44ii93JkaR7q/Rails-World-2026--copia-
Year: 2026
Phase: 1 (pre-launch, no speakers/agenda)

---

## Sections

| # | Name | Figma Node | Status | File |
|---|------|-----------|--------|------|
| 1 | Announcement Banner | 34:532 (navbar area) | needs-update | `_includes/world/2026/components/announcement_banner.html` |
| 2 | Navbar | 34:532 | needs-update | `_includes/world/2026/components/navbar.html` + `navbar_links.html` |
| 3 | Hero (LEADER) | 115:1696 | todo | `_includes/world/2026/homepage_sections/hero_banner.html` |
| 4 | Intro / Motto | — | needs-update | `_includes/world/2026/homepage_sections/intro.html` |
| 5 | NL Banner | 64:821 | todo | `_includes/world/2026/homepage_sections/nl_banner.html` |
| 6 | Sponsor Block (Become a Sponsor) | 64:823 | todo | `_includes/world/2026/homepage_sections/sponsors.html` |
| 7 | Sponsor Logos (members only) | 123:1323 | needs-update | `_includes/world/2026/homepage_sections/sponsors.html` |
| 8 | Stay in Touch | — | needs-update | `_includes/world/2026/homepage_sections/social.html` |
| 9 | Footer | 115:1671 | needs-update | `_includes/world/2026/components/footer.html` |

---

## Issues found per section

### 1 · Announcement Banner
- ❌ `_data/world/2026/announcements.yml` → wrong text
  - Current: "Rails World 2026 is coming to Austin, TX on September 23 & 24!"
  - **Required:** "Stay tuned: Rails World tickets launching soon"

### 2 · Navbar / navbar_links
- ❌ `navbar_links.html` has `Speakers` + `Agenda` links (pages don't exist in Phase 1)
  - **Required:** `FAQ` → `/world/2026/faq/general` and `Rails at Scale` → `/world/2026/rails-at-scale`

### 3 · Hero Banner ← complete rewrite needed
- ❌ Current is a copy of 2025 (hexagon photos layout). Phase 1 has a completely different design per Figma:
  - RW2026 logo (centered)
  - Dates: Sept 23 & 24
  - Location: Palmer Center, Austin, TX
  - Button: "Sign up" → mailing list `https://rails-foundation.kit.com/sign-up`
  - Small text: "Sign up for the mailing list to be informed of ticket launch dates."
  - No hexagon photos (those are for post-announcement)

### 4 · Intro / Motto
- ⚠️ Mostly correct structure but:
  - Description needs: "Join 1200+ Rails developers this year in Austin, TX." at the end
  - "See venue" button → needs real Austin venue link (or remove for Phase 1)
  - Illustration image (`image_with_shape.png`) doesn't exist for 2026 yet → placeholder or remove

### 5 · NL Banner (newsletter) ← new section
- ❌ Doesn't exist yet. Figma node `64:821` shows:
  - Text: "Stay tuned: Rails World tickets launching soon!"
  - Subtext: "Last year, tickets sold out in 2 minutes. Make sure you stay on the pulse this year by signing up for the mailing list. That way, you'll know exactly when ticket launch dates get released."
  - Button: "Sign up" → `https://rails-foundation.kit.com/sign-up`

### 6 + 7 · Sponsors section ← rewrite needed
- ❌ Current says "Thank you sponsors!" with platinum/gold/silver tiers → wrong for Phase 1
- **Required structure:**
  - Block 1: "Become a sponsor" CTA
    - Title: "Become a sponsor"
    - Text: "Sponsoring Rails World means showcasing your brand to a global audience of Rails enthusiasts, developers, and industry leaders. Let's make Rails World an unforgettable experience for all."
    - Button: "View prospectus" → link TBD (placeholder `#`)
  - Block 2: Rails Foundation member logos (members tier only)
- ❌ `_data/world/2026/sponsors.yml` → `members` array is empty, needs to be populated with Rails Foundation members (copy from 2025)

### 8 · Stay in Touch
- ✅ Links are correct
- ❌ `/world/2026/conduct` doesn't exist → should link to `https://rubyonrails.org/conduct`

### 9 · Footer
- ❌ Builder credit says "Ines Alvergne" → should be TBD placeholder
  - **Required:** "This website was made by TBD, and designed by Jomiro Eming."

### world/2026/index.html
- ❌ Still includes `speaker_carousel.html` (file was deleted) → will cause build error

---

## Assets needed

- [ ] `assets/world/2026/logos/RW26_logo-white-trademark.png` — navbar logo
- [ ] `assets/world/2026/logos/RW26_logo-white-square-dated.png` — hero logo (with dates)
- [ ] `assets/world/2026/icons/x.png` — social icon
- [ ] `assets/world/2026/icons/linkedin.png` — social icon
- [ ] `assets/world/2026/icons/letterbox.png` — mailing list icon
- [ ] `assets/world/2026/icons/policy.png` — terms icon
- [ ] `assets/world/2026/icons/rules.png` — CoC icon
- [ ] `assets/world/2026/icons/shield.png` — privacy icon

> **Note:** For now, copy icons from `assets/world/2025/icons/` as placeholders (same icons).
> Logo assets need to be provided by the design team.

---

## Data files

- [ ] `_data/world/2026/announcements.yml` → update `general` text
- [ ] `_data/world/2026/sponsors.yml` → populate `members` from 2025 (Rails Foundation members)

---

## Implementation order (recommended)

1. Fix `index.html` (remove broken `speaker_carousel` include) → build will pass
2. Fix data files (`announcements.yml`, `sponsors.yml`)
3. Fix `navbar_links.html`
4. Fix `footer.html`
5. Rewrite `hero_banner.html` (biggest change, pull Figma node `115:1696`)
6. Update `intro.html`
7. Add `nl_banner.html` (new section, Figma node `64:821`)
8. Rewrite `sponsors.html` (Figma nodes `64:823` + `123:1323`)
9. Fix `social.html` (conduct link)
10. Copy icon assets from 2025 as placeholders

---

## Iteration log

<!-- section-reviewer appends here after each QA cycle -->
