# Ed: supply these assets to finish the site

The v1 site is built and works with placeholders. Drop these in and it goes from good to converting.

## High impact (do these first)

1. **Hero video** `assets/hero.mp4` (+ `assets/hero.webm` for size). B-roll: real Tucson homes you manage, clean turnovers, happy guests, the owner dashboard. 10 to 20 seconds, muted-loop friendly. Drops in with zero code change. Until then the gold poster shows.
2. **One named owner case study** with real before/after numbers + consent. Goes on `about.html` and `results.html`. This is the single highest-trust element on the site. Shape: "Maria's Oro Valley home went from $X to $Y in year one." Replace the placeholder blocks.
3. **2 to 3 owner testimonials** (named, with a dollar number, with consent) for `results.html`.

## Medium impact

4. **Your headshot** `assets/ed.jpg` for `about.html` (uncomment the `<img>`).
5. **Confirm the verified numbers** before they go public: 26 homes, $762K/yr, 61.1% occupancy, $29,314 avg/home, $131 ADR. And resolve full-service fee: **18.5% (spec) vs 18.75% (pricing command center)**. Pick one.
6. **Microsoft Clarity project ID** (free, one line). Paste into the commented snippet in `index.html` head to turn on heatmaps + session replays so we see where homeowners drop off.
7. **Form backend** (optional): a Formspree (or similar) endpoint URL for `contact.html` so the form captures without a backend. Until then it falls back to a mailto.

## Lower impact

8. Real photography of managed homes for proof sections (beats stock).
9. A short founder video for `about.html` if you want one.
