# Cyvidence design system

**Source of truth is this repository.** Tokens live in `src/styles/tokens.css` and `src/styles/globals.css`,
components in `src/components/ui/`. The living reference is `/design.html` (not linked, `noindex`).
The original Figma file ("UI design system") is a frozen snapshot and is not kept in sync.

## Stack
- React + Vite + Tailwind CSS v4, static build (GitHub Pages).
- Components follow shadcn/ui naming and APIs (`variant`, `size`), styled with `class-variance-authority`.
- Icons: `lucide-react`. 16px in controls, 20px in alerts and feature tiles, color follows text.
- Fonts are self-hosted (no Google Fonts requests): Inter Variable (`font-sans`), Geist Mono (`font-mono`).

## Look and feel (Apple-like, monochrome)
1. Generous whitespace. 4px grid; section padding 96px (`py-24`), container max 1280px (`container-page`).
2. Graphite brand. `primary` is near-black in light mode and near-white in dark mode. Color appears only for status.
3. One primary button per view. Everything else secondary, outline or ghost.
4. Hairline borders (`border-border`) and soft shadows (`shadow-xs` to `shadow-xl`). Never heavy shadows.
5. Type weights: Regular for text, Medium for labels and buttons, Semi Bold for headings. Headings carry tight tracking.
6. Sentence case everywhere. No em dashes in copy. No exclamation marks.
7. Motion 150 to 250 ms, ease-out. Respect `prefers-reduced-motion` (handled globally).
8. Sticky navigation uses `material-glass`.
9. Light and dark are both first-class. Dark follows the OS automatically; any section can force dark with `className="dark"`.

## Color tokens (CSS variables, Tailwind utilities)
Use utilities like `bg-primary`, `text-muted-foreground`, `border-border`. Never hardcode hex in components.

| Token | Light | Dark | Use |
|---|---|---|---|
| background / foreground | white / slate-950 | slate-950 / slate-50 | Page and default text |
| card, popover (+ -foreground) | white | slate-900 | Surfaces |
| primary / primary-foreground | slate-900 / white | slate-50 / slate-900 | Brand actions, selection |
| primary-hover | slate-700 | slate-200 | Primary hover |
| secondary, muted, accent (+ -foreground) | slate-100 | slate-800 | Quiet fills, hover for outline and ghost |
| secondary-hover | slate-200 | slate-700 | Secondary hover |
| muted-foreground | slate-500 | slate-400 | Secondary text |
| destructive / -hover / -subtle | red-600 / red-700 / red-50 | red-400 / red-500 / red-950 | Errors, destructive actions |
| success / -subtle | green-600 / green-50 | green-400 / green-950 | Success |
| warning / -strong / -subtle | amber-500 / amber-700 / amber-50 | amber-400 / amber-400 / amber-950 | Warning. Use `warning-strong` for text on `warning-subtle` |
| info / -subtle | blue-600 / blue-50 | blue-400 / blue-950 | Info |
| border, input | slate-200 | white 10% / 15% | Hairlines, form borders, switch track |
| ring | slate-400 | slate-500 | Focus ring (3px, soft) |
| chart-1..5 | slate-800, indigo, green, amber, rose | lighter tints | Data viz, in that order |

## Typography (utilities)
| Class | Size / line | Weight | Use |
|---|---|---|---|
| `text-display-xl` | 72/76 | 600 | Hero (desktop only) |
| `text-heading-xl` | 60/64 | 600 | Marketing H1 |
| `text-heading-lg` | 48/52 | 600 | Section headline (desktop) |
| `text-heading-md` | 36/42 | 600 | Section headline (mobile), app page H1 |
| `text-heading-sm` | 24/30 | 600 | H3, quotes |
| `text-title-lg` | 20/28 | 600 | Card and step titles |
| `text-title-md` | 17/24 | 600 | Small titles, logo |
| `text-body-lg` | 18/28 | 400 | Lead paragraphs |
| `text-body-md` | 16/24 | 400 | Default body |
| `text-body-sm` | 14/20 | 400 | Dense UI |
| `text-label-md` | 14/20 | 500 | Buttons, labels, nav |
| `text-label-sm` | 12/16 | 500 | Badges, small buttons |
| `text-caption` | 12/16 | 400 | Footnotes, helper text |
| `text-code-sm` | 13/20 mono | 400 | Numbers, dates, IDs |

Headlines are responsive: `text-heading-md md:text-heading-lg`, hero `text-heading-md sm:text-heading-lg lg:text-display-xl`.

## Radius and elevation
- Radius: `rounded-sm` 6 (checkbox), `rounded-lg` 10 (buttons, inputs), `rounded-xl` 14 (alerts, tiles), `rounded-2xl` 18 (cards), `rounded-3xl` 22 (product mocks), `rounded-4xl` 26 (large CTA panels), `rounded-full` (badges, pills, switch).
- Shadows: `shadow-xs` inputs, `shadow-sm` buttons and tiles, `shadow-md` cards, `shadow-lg` floating panels, `shadow-xl` hero mock and dialogs.

## Components (`src/components/ui`)
- `Button` / `ButtonLink`: `variant` default | secondary | outline | ghost | destructive | link; `size` sm (32) | default (40) | lg (48).
- `Badge`: default | secondary | outline | success | warning | info | destructive. 22px pill.
- `Card` (+ Header, Title, Description, Content, Footer): radius 2xl, padding 24, shadow-md. Footer actions right-aligned, primary last.
- `Alert`: info | success | warning | destructive, with `title` and optional children.
- `Input` (label, helper, error), `Checkbox` (label), `Switch` (iOS-style, for instant settings).

## Content rules for the public site
- Keep the storyline simple: problem, why now, how it works, one record for every regulation, version history, partners, call to action.
- Do not publish pricing, fundraising, financial projections, market sizing, competitor names or team details unless the owner asks.
- Never claim certification or "CRA compliant". Use evidence, readiness, verified, audit-ready.
- Regulation dates must match the official texts; status (applies now or upcoming) is computed at runtime.
- All copy lives in `src/site/content.ts` and `src/site/sections.tsx`.
