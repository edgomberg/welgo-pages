# welgo.space cutover plan (PROPOSED, not executed)

## SHIPPED 2026-06-02 (live, tested)

The full unified site is LIVE and working at **https://edgomberg.github.io/welgo-pages/** (GitHub Pages, `main`). Every page returns HTTP 200, CSS + images load, calculator works, guest booking links resolve to the live HostAI engine.

- Guest booking: the "Book a stay" / destination links go to the existing live HostAI booking engine (`welgo.space/welgo/theme/welgo?cities=...`). Real bookings work. We did not rebuild the reservation system (HostAI owns it).
- This does NOT touch the live `welgo.space` domain. `welgo.space` is still the old HostAI guest site on Cloudflare. The cutover below is the only remaining step, and it needs Ed's explicit approval (DNS = irreversible external action).

---



Current live `welgo.space` is the legacy guest direct-booking site (Cloudflare-hosted, built by Edward Cruz). This v1 rebuild is the homeowner-acquisition site on the `feat/homeowner-site` branch of `welgo-pages` (GitHub Pages). Nothing here touches the live domain until Ed approves.

## Preview first (no DNS change)

1. Review locally: `cd welgo-pages && python3 -m http.server 8080` then open `http://localhost:8080`.
2. Or enable GitHub Pages preview on the branch (Settings > Pages > Branch: `feat/homeowner-site`), review at the github.io URL.
3. Ed reviews. Iterate on the branch.

## Cutover options (pick when ready, Ed approves)

- **Option A (lowest risk):** keep the legacy guest funnel live on `welgo.space`. Point the new homeowner site at a subpath or subdomain (`welgo.space/owners` or `owners.welgo.space`). Run paid traffic to that. Zero risk to existing guest SEO.
- **Option B:** merge `feat/homeowner-site` to `main`, the new Home becomes `edgomberg.github.io/welgo-pages`, then point `welgo.space` DNS (Cloudflare) at GitHub Pages. Replaces the legacy guest homepage. Migrate / preserve the guest book-direct funnel first (v2) so guest SEO is not lost.

## Do-not-break list

- Existing Felix URLs (`felix.html`, `felix-*.html`) and Rafael URLs (`townwest-*.html`) are already shared with counterparties. They remain untouched and resolve.

## When Ed approves Option B

- Confirm guest book-direct pages are preserved or rebuilt (v2 scope).
- Update Cloudflare DNS to GitHub Pages.
- Add a CNAME file for `welgo.space`.
- Verify HTTPS + all redirects.
