---
model: claude-sonnet-4-6
---

# Content Importer Agent

Creates speaker and/or session markdown files for a given Rails World year, following the conventions in `CLAUDE.md`.

## Inputs

When invoked for a **speaker**:
- `year` — e.g. `2026`
- `first_name`, `last_name`
- `tagline` — role/title
- `company`
- `bio` — plain text paragraph
- `image_path` — e.g. `/assets/world/2026/images/speakers/a-lastname.jpg`
- `keynote` — `true` or `false`
- `github`, `linkedin`, `twitter` — full URLs (all optional)

When invoked for a **session**:
- `year`, `day` — `1` or `2`
- `title`
- `speaker` — filename of primary speaker (e.g. `jane-doe.md`)
- `second_speaker`, `third_speaker`, `fourth_speaker` — optional, same format
- `time` — e.g. `"10:00 - 11:00"`
- `location` — `Effectenbeurs` for Track 1, any other string for Track 2
- `running_order` — integer for sort order
- `description` — plain text paragraph

## Rules

- Speaker filename: `kebab-case` of full name — `first-last.md` (e.g. `jane-doe.md`)
- Session filename: same `kebab-case` as primary speaker (e.g. `jane-doe.md`)
- The `speaker:` value in a session file must be the **exact filename with extension** of the speaker file (e.g. `jane-doe.md`)
- Image path convention: `/assets/world/YEAR/images/speakers/INITIAL-LASTNAME.jpg`
- Speakers go in `_world_speakers/YEAR/speakers/`
- Sessions go in `_world_sessions/YEAR/day-N/` where N is the day number
- After writing files, always run the `jekyll-validator` agent

## Step 1: Verify year exists

Check that `_layouts/world/YEAR/default.html` exists. If not, stop and ask the user to run `/scaffold-year YEAR` first.

## Step 2: Check for existing file

Check whether the target file already exists. If it does, read it and ask the user whether to overwrite or merge.

## Step 3: Write speaker file (if applicable)

Write `_world_speakers/YEAR/speakers/first-last.md`:

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

Bio text here as plain text.
```

Omit social link fields entirely if not provided (do not leave empty values).
Set `specific_order:` with no value unless a specific sort position is given.

## Step 4: Write session file (if applicable)

Write `_world_sessions/YEAR/day-N/first-last.md`:

```yaml
---
layout: world/YEAR/session
title: "Session Title"
speaker: jane-doe.md
time: "10:00 - 11:00"
location: Effectenbeurs
running_order: 5
---

Session description here as plain text.
```

For multi-speaker sessions, add `second_speaker:`, `third_speaker:`, `fourth_speaker:` fields as needed.

## Step 5: Verify speaker/session linkage

If both a speaker and session were created in this invocation, or if an existing speaker is referenced, verify that the `speaker:` value in the session file exactly matches the filename (with `.md`) of a file in `_world_speakers/YEAR/speakers/`.

## Step 6: Run jekyll-validator

Invoke the `jekyll-validator` agent. Report its result.

## Step 7: Report

```
CREATED:
  Speaker: _world_speakers/YEAR/speakers/jane-doe.md
  Session: _world_sessions/YEAR/day-1/jane-doe.md

Jekyll build: PASS / FAIL

Next steps:
  - Add headshot image to /assets/world/YEAR/images/speakers/j-doe.jpg
```
