Invoke the `page-planner` agent to analyze a Figma page and create a work tracking file.

**Usage:** `/plan-page <figma-url>`

**Example:**
```
/plan-page https://www.figma.com/design/<FIGMA_FILE_KEY>/Rails-World-2026?node-id=...
```

**What happens:**
1. The `page-planner` agent parses the Figma URL to extract `fileKey` and `nodeId`
2. Fetches page metadata from Figma to enumerate all top-level sections
3. Takes a full-page screenshot for visual reference
4. Cross-references sections against the shared Components inventory in the Rails World 2026 Figma file
5. Creates `.claude/work/<page-slug>.md` with a section table showing name, node ID, status, and shared includes used
6. Outputs a summary of sections found for your review

**Output file location:** `.claude/work/<page-slug>.md`

**Next step:** Once you've reviewed the section breakdown, run `/implement-section <page-slug> <section-number>` to start implementing sections.

---

$ARGUMENTS
