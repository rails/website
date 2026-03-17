Add a speaker (and optionally their session) to a Rails World year.

**Usage:** `/add-speaker <year>`

**Examples:**
```
/add-speaker 2026
/add-speaker 2026
```

After running, the agent will ask for speaker details interactively, or you can provide them inline:

```
/add-speaker 2026 --name "Jane Doe" --tagline "Senior Engineer" --company "Acme" --keynote false
```

---

## What happens

Invokes the `content-importer` agent which:

1. Verifies the year layout exists (prompts to run `/scaffold-year` if not)
2. Creates `_world_speakers/YEAR/speakers/first-last.md` with correct frontmatter
3. Optionally creates a session file in `_world_sessions/YEAR/day-N/first-last.md`
4. Verifies speaker/session linkage (filename must match exactly)
5. Runs `jekyll-validator`

## Speaker frontmatter created

```yaml
---
layout: world/YEAR/speaker
first_name: Jane
last_name: Doe
image_path: /assets/world/YEAR/images/speakers/j-doe.jpg
tagline: Senior Engineer
company: Acme Corp
keynote: false
github: https://github.com/janedoe
linkedin: https://www.linkedin.com/in/janedoe/
twitter: https://twitter.com/janedoe
specific_order:
---

Bio text here.
```

## After adding a speaker

Add the headshot image to:
```
assets/world/YEAR/images/speakers/INITIAL-LASTNAME.jpg
```
Naming convention: first initial + hyphen + last name, all lowercase.
(e.g. `j-doe.jpg`, `a-patterson.jpg`)

---

Invoke the `content-importer` agent with:
- mode: "speaker"
- year: first word of $ARGUMENTS
- remaining arguments as speaker data

$ARGUMENTS
