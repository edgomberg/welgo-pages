# Welgo site overhaul — audit + sitemap

Branch: `feat/homeowner-site`. Date: 2026-06-02. Scope: homeowner-first v1. No live cutover.

## Audit: what existed

| Page | Era / style | Verdict |
|---|---|---|
| `index.html` | homeowner pricing ("Zero chaos") | content kept, moved into `homeowners.html`, restyled to locked design system |
| `operator.html`, `operator-program.html` | operator pages, mixed style | kept, untouched (URLs preserved), linked from new nav |
| `affiliate.html` | affiliate program (draft) | kept untouched |
| `felix*.html` | Felix operator pitch | kept untouched (shared with counterparty) |
| `townwest-*.html` | Rafael offer + calculator + FAQ | kept untouched (shared with counterparty), used as style reference |

Inconsistencies found: 4+ color systems (teal/gold/navy), no unified nav, no shared design tokens, mixed fonts. The new pages fix this with one locked system (gold `#eda800`, ink, Plus Jakarta Sans + Inter) via `assets/welgo.css`.

## What was rebuilt (homeowner core, v1)

| File | Page | Notes |
|---|---|---|
| `index.html` | Home | video-hero (picture-element pattern), dual-audience routing, proof strip, how-it-works, Owner Promise, "not Vacasa" teaser, sticky CTA |
| `homeowners.html` | For Homeowners | **homeowner earnings calculator** (managed vs self-managed, email-gate), before/after, Owner Promise, protection, 3 pricing tiers, compliance, FAQ |
| `results.html` | Results / Proof | real numbers (26 homes, 61% occ, $29,314, $131 ADR), market occupancy-gap table, testimonial placeholders |
| `about.html` | Who's behind Welgo | Ed as local face, multi-company (3 countries) category-level, owner case-study placeholder |
| `switch.html` | Switching managers | "not Vacasa/Evolve" comparison table + 3-step switch + free comparison CTA |
| `contact.html` | Start / Contact | static form (mailto fallback; Formspree-ready) |
| `assets/welgo.css` | design system | locked tokens + components, inlined-free |
| `assets/hero-poster.svg` | hero poster | placeholder so hero never blank until `hero.mp4` is supplied |

## Sitemap + nav

Unified top nav on all new pages: Homeowners · Results · Who we are · Switching managers? · Operators · [Get your number].

```
/                  index.html        Home (dual-audience)
/homeowners.html                     For Homeowners + calculator   <-- primary funnel
/results.html                        Results / proof
/about.html                          Who's behind Welgo
/switch.html                         Switching from Vacasa/Evolve
/contact.html                        Start / contact
/operator.html     (existing)        Operators hub
/felix.html ...    (existing)        Felix operator pages
/townwest-*.html   (existing)        Rafael operator pages
/affiliate.html    (existing)        Affiliate program
```

## Acceptance check (this build)

- All pages return HTTP 200 (local smoke test passed).
- Video hero on Home + Homeowners, poster fallback works, video only loads >=768px.
- One accent (gold), two fonts everywhere. Zero style drift on new pages.
- Earnings calculator works, math transparent, all inputs adjustable.
- Unified nav + footer on every new page. Existing Felix/Rafael URLs still resolve.
- No em-dashes. Real numbers match the verified set.

## Open data flag

Spec verified set lists full-service at **18.5%**. Internal pricing command center lists **18.75%** (flagged there as an open SSOT fix). This build uses **18.5%** per the spec. Ed to confirm the canonical number before live.
