Analyze a Figma page for a Rails World year and create a work tracking file that maps sections to implementation tasks.

**Usage:** `/plan-page <figma_url> <year>`

**Examples:**
```
/plan-page https://www.figma.com/file/xxx/RailsWorld2026?node-id=0%3A1 2026
/plan-page https://www.figma.com/file/xxx/RailsWorld2026?node-id=home 2026
```

**Prerequisites:**
- Figma MCP or Figma API access configured
- The year must already be scaffolded (run `/scaffold-year` first if not)

---

## What happens

1. Fetches the Figma page specified by the URL
2. Enumerates all top-level sections/frames in the design
3. For each section, captures:
   - Section name and frame ID
   - Approximate layout complexity
   - Asset requirements (images, icons)
   - Data source (static, data file, Jekyll collection)
4. Cross-references existing includes under `_includes/world/YEAR/` to identify what's already done
5. Creates a work tracking file at `.claude/work/world-YEAR-<page>.md` with a checklist

## Output file format

`.claude/work/world-YEAR-<page>.md`:

```md
# Rails World YEAR — <Page Name>

Figma: <url>
Year: YEAR

## Sections

| # | Name | Figma Node | Status | Include Path |
|---|------|-----------|--------|--------------|
| 1 | Announcement Banner | 1234:567 | done | _includes/world/YEAR/components/announcement_banner.html |
| 2 | Navbar | 1234:890 | done | _includes/world/YEAR/components/navbar.html |
| 3 | Hero Banner | 1234:123 | todo | _includes/world/YEAR/homepage_sections/hero_banner.html |
| 4 | Intro | 1234:456 | todo | _includes/world/YEAR/homepage_sections/intro.html |
| 5 | Speaker Carousel | 1234:789 | todo | _includes/world/YEAR/homepage_sections/speaker_carousel.html |
| 6 | Sponsors | 1234:012 | todo | _includes/world/YEAR/homepage_sections/sponsors.html |
| 7 | Footer | 1234:345 | done | _includes/world/YEAR/components/footer.html |

## Assets needed

- [ ] assets/world/YEAR/logos/RW26_logo-white-trademark.png
- [ ] assets/world/YEAR/hexagons/hex-1.png
- [ ] assets/world/YEAR/hexagons/hex-2.png

## Data files needed

- [ ] _data/world/YEAR/sponsors.yml  (populate with actual sponsors)
- [ ] _data/world/YEAR/announcements.yml  (confirm banner text)
```

## Next step

After reviewing the plan, implement sections one at a time:
```
/implement-section <section_name> <year>
```

---

$ARGUMENTS
