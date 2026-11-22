# Cyvidence public website

Marketing site for Cyvidence, the system of record for product cybersecurity. The product app will live on a
separate subdomain (app.cyvidence.com) in another repository.

## Before changing anything visual
Read `DESIGN.md`. It is the design system and the content rules. Use existing tokens, text-style utilities and
components from `src/components/ui`; add new tokens or components there rather than one-off styles, and show them
on `/design.html`.

## Commands
- `npm run dev`: local dev server
- `npm run build`: type-check and build to `dist/`
- Deploys automatically to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## Structure
- `src/site/content.ts`: all copy and data (regulations, categories, timeline, contact email)
- `src/site/sections.tsx`: homepage sections
- `src/site/hero-mock.tsx`: illustrative product UI (no real customer data)
- `src/design.tsx`: living design-system reference
- `vite.config.ts` uses `base: "./"` so the build works under the GitHub Pages project path and on a custom domain.

## Rules
- No pricing, fundraising, financials, market sizing, competitor names or team details on the public site unless the owner asks.
- Never claim certification or compliance. No em dashes in copy.
- Before finishing a visual change, build and check desktop (1440) and mobile (390) in light and dark.
