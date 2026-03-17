Create the complete file structure for a new Rails World conference year, following the conventions in `CLAUDE.md`.

**Usage:** `/scaffold-year <year> "<location>" "<dates>"`

**Examples:**
```
/scaffold-year 2026 "Austin, TX" "September 23 & 24"
/scaffold-year 2027 "Barcelona, ES" "October 1 & 2"
```

---

## What happens

Invokes the `world-year-scaffolder` agent which:

1. Reads `CLAUDE.md` for the authoritative file list
2. Copies and adapts all layouts, includes, SCSS, and data files from the 2025 edition (replacing year references throughout)
3. Creates empty data files (`sponsors.yml`, `announcements.yml`, `faq.yml`) with placeholder structure
4. Creates world pages (`index.html`, `speakers.html`, `agenda/day-1.html`, `agenda/day-2.html`, `faq/general.html`)
5. Updates `_config.yml` with the new year title and scope default
6. Updates `world/index.html` "Next up" section
7. Runs `jekyll-validator` to confirm a clean build

## After scaffolding

```
# Add speakers
/add-speaker YEAR

# Add sessions
/add-session YEAR

# Plan the Figma design implementation
/plan-page <figma_url> YEAR

# Implement sections one by one
/implement-section hero_banner YEAR
/implement-section sponsors YEAR
# ... etc
```

---

Invoke the `world-year-scaffolder` agent with:
- year: first word of $ARGUMENTS
- remaining arguments parsed as location and dates

$ARGUMENTS
