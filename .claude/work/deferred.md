# Deferred Items

## Section 1 — NAVBAR_DESKTOP (node 34:532)

### Ticket URL
- File: `_includes/world/2026/components/nav.html` line 25
- Comment: `<!-- DEFERRED: replace span with <a href="..."> once ticket URL is available -->`
- Currently: `<span class="nav-cta-text">Tickets coming soon!</span>` (non-interactive)
- Action: Replace `<span>` with `<a href="TICKET_URL">` when ticket purchase URL is ready

### Logo PNG background
- File: `assets/world/2026/logos/rw26-logo.png`
- Issue: PNG has white background (Figma exports with canvas fill). CSS `mix-blend-mode: screen` applied as workaround.
- Action: Re-export logo SVG or PNG with transparent background when possible. Consider using the SVG directly if performance allows (currently 520KB due to embedded bitmaps).

### Font fallback
- File: `_includes/world/2026/head.html`
- Current: Clash Grotesk loaded via Bunny Fonts CDN (open source)
- Action: Confirm font licensing for production. If Clash Grotesk must be licensed, update to the licensed CDN URL (similar to Acumin Variable via Adobe Fonts in 2025).

### Visual verification
- Layout QA passed based on static Figma data comparison (no browser DevTools MCP available)
- Visual QA passed based on Figma screenshot LLM comparison (no browser screenshot MCP available)
- Action: Confirm visually in browser once dev server is accessed manually at http://localhost:4000/world/2026
