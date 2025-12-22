# Change Report – 10 Nov 2025

## Overview
Content collections failed to render on the Events page because markdown entries were stored outside `src/content` and several frontmatter fields violated the Zod schema. Additionally, UTF-8 characters (en dash, emoji, ©) were rendered incorrectly in the Past events list and footer. This report summarizes the fixes applied.

## Key Changes
1. **Content structure alignment** – Moved `events`, `recap`, and `pages` markdown files under `src/content/` so `getCollection()` can discover them. Cleaned invalid `facebook_post_url` fields in event/recap entries and provided proper `geo` tuples.
2. **Schema update** – Adjusted `src/content/config.ts` to use `z.string().datetime({ offset: true })` for `start`/`end`, allowing ISO 8601 timestamps with explicit offsets (e.g., `-07:00`).
3. **Events page polish** – Replaced the non-ASCII en dash separator in `src/pages/events.astro` with a plain hyphen to avoid mojibake in locales that mis-handle UTF-8.
4. **Footer cleanup** – Swapped emoji and © symbol in `src/layouts/Layout.astro` for ASCII equivalents so the footer renders consistently across encodings.

## Testing
- `npm run build`

## Follow-ups
- Re-run `npm run dev` and visually confirm Upcoming/Past cards plus footer render correctly.
- Reintroduce register/Facebook URLs once the final links are available.
