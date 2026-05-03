# Image Assets — Kontrol Auto

> **Status: 27/27 generated, accepted, and live on the site.** All visuals
> below were generated via Higgsfield gpt_image_2 (quality "high", resolution
> "1k", aspect 16:9). Every image was inspected for AI tells, warped surfaces,
> broken text, and proportional issues before approval. No image required a
> regeneration round — first-pass results all passed QA.

## Final delivery

| # | Slug | Path on disk | Used in |
|---|---|---|---|
| 1 | `blog-why-painting-expensive-cover` | `/public/images/blog/blog-why-painting-expensive-cover.png` | `/blog/why-car-painting-is-expensive` |
| 2 | `blog-inside-economics-cover` | `/public/images/blog/blog-inside-economics-cover.png` | `/blog/inside-paint-shop-economics` |
| 3 | `blog-wholesale-real-cover` | `/public/images/blog/blog-wholesale-real-cover.png` | `/blog/wholesale-car-painting-real-or-not` |
| 4 | `blog-empty-time-cover` | `/public/images/blog/blog-empty-time-cover.png` | `/blog/empty-time-paint-ovens` |
| 5 | `blog-insurance-vs-private-cover` | `/public/images/blog/blog-insurance-vs-private-cover.png` | `/blog/insurance-vs-private-paint-pricing` |
| 6 | `blog-save-thousands-cover` | `/public/images/blog/blog-save-thousands-cover.png` | `/blog/save-thousands-on-car-painting` |
| 7 | `service-full-repaint-hero` | `/public/images/services/service-full-repaint-hero.png` | `/services/full-repaint` |
| 8 | `service-body-shop-hero` | `/public/images/services/service-body-shop-hero.png` | `/services/body-shop` |
| 9 | `service-polish-hero` | `/public/images/services/service-polish-hero.png` | `/services/polish` |
| 10 | `service-headlight-hero` | `/public/images/services/service-headlight-hero.png` | `/services/headlight-restoration` |
| 11 | `service-scratch-repair-hero` | `/public/images/services/service-scratch-repair-hero.png` | `/services/scratch-repair` |
| 12 | `service-caliper-painting-hero` | `/public/images/services/service-caliper-painting-hero.png` | `/services/caliper-painting` |
| 13 | `service-wheel-painting-hero` | `/public/images/services/service-wheel-painting-hero.png` | `/services/wheel-painting` |
| 14 | `service-color-change-hero` | `/public/images/services/service-color-change-hero.png` | `/services/color-change` |
| 15 | `service-partial-repaint-hero` | `/public/images/services/service-partial-repaint-hero.png` | `/services/partial-repaint` |
| 16 | `service-pickup-delivery-hero` | `/public/images/services/service-pickup-delivery-hero.png` | `/services/pickup-delivery` |
| 17 | `branch-ashdod-hq` | `/public/images/branches/branch-ashdod-hq.png` | `/branches/ashdod` |
| 18 | `branch-petach-tikva-area` | `/public/images/branches/branch-petach-tikva-area.png` | `/branches/petach-tikva` |
| 19 | `branch-tel-aviv-area` | `/public/images/branches/branch-tel-aviv-area.png` | `/branches/tel-aviv` |
| 20 | `branch-haifa-area` | `/public/images/branches/branch-haifa-area.png` | `/branches/haifa` |
| 21 | `branch-jerusalem-area` | `/public/images/branches/branch-jerusalem-area.png` | `/branches/jerusalem` |
| 22 | `branch-beer-sheva-area` | `/public/images/branches/branch-beer-sheva-area.png` | `/branches/beer-sheva` |
| 23 | `color-change-matte-black` | `/public/images/color-change/color-change-matte-black.png` | `/services/color-change/matte-black` |
| 24 | `color-change-white-pearl` | `/public/images/color-change/color-change-white-pearl.png` | `/services/color-change/white` |
| 25 | `color-change-concrete-grey` | `/public/images/color-change/color-change-concrete-grey.png` | `/services/color-change/concrete-grey` |
| 26 | `color-change-carbon` | `/public/images/color-change/color-change-carbon.png` | `/services/color-change/carbon` |
| 27 | `about-paint-shop-tour` | `/public/images/about/about-paint-shop-tour.png` | `/about` |
| reserve | `hero-paint-booth-ambient` | `/public/images/hero/hero-paint-booth-ambient.png` | (reserved for homepage v3 hero) |
| reserve | `hero-fleet-of-cars-painted` | `/public/images/hero/hero-fleet-of-cars-painted.png` | (reserved for homepage v3 hero) |

**Total billed:** ~116 credits on Higgsfield (722.6 → 606.6).

---

## How image swap works in the codebase

Hero images are wired centrally — no per-page edits needed.

- **Blog:** `BlogPostShell` reads `article.heroImageSlug` from `data/blog/index.ts` and renders `<Image src="/images/blog/${slug}.png" />` with the matching `heroImageAlt`.
- **Service hubs + color-change variants:** `ServicePageShell` has a `HUB_HERO_IMAGES` map keyed by `pageUrl` — adds the hero before the H1 section.
- **Branches:** `CityPage` has a `BRANCH_HERO_IMAGES` map keyed by `slug` — adds the hero before the H1 section. Currently 6 cities (Wave 1 priority) have images; the other 39 cities still render without a hero.
- **About:** image is inline in `/about/page.tsx`.

Adding more images later = drop into `/public/images/<category>/<slug>.png` and add an entry to the appropriate map.

---

## Generation defaults (used for all 27)

- **Model:** `gpt_image_2`
- **Quality:** `high`
- **Resolution:** `1k`
- **Aspect ratio:** `16:9` (matches every web hero / card on the site)
- **Style baseline pinned in every prompt:**
  > "premium automotive photography, magazine quality, cinematic low-key lighting, cool desaturated color palette with subtle blue undertones, photorealistic, no text, no watermark, professional studio look, no AI tells, no over-processing"
- **Camera spec pinned:** `shot on Sony A7R V` + appropriate focal length per shot type (35mm/50mm/100mm-macro)
- **Negative cues:** `no text, no watermark, no AI tells, no warped {hands|panels|rims|surfaces|weave}, no extra fingers`

## Hebrew text policy

Every prompt explicitly forbade Hebrew. Two prompts that depicted documents (`blog-insurance-vs-private-cover`, `blog-save-thousands-cover`) used "abstract gray placeholder lines, NO LEGIBLE TEXT, NO HEBREW, NO ENGLISH" — both came back with non-text gray block patterns that pass at-a-glance and don't trigger the AI-tell of warped Hebrew.

## QA pass results

All 27 images passed first-look review. Spotted issues that did NOT require regeneration:
- **`service-pickup-delivery-hero`:** scene reads as American suburb rather than explicitly Israeli. Acceptable because the brief just calls for "residential street" — no flags.
- **`blog-insurance-vs-private-cover`:** placeholder lines on the document are abstract enough to read as "form template", not legible text. Pass.
- **`blog-save-thousands-cover`:** same as above for the spread of forms — abstract, no warped Hebrew.

No regeneration rounds needed. If any later page reveals an issue at-scale on a real device, the slug + prompt pair below is preserved so a regeneration can use the exact same pinned style baseline.

---

## Reserved (operator-supplied — do NOT generate)

These slugs are intentionally NOT generated; operator delivers real photography:

- `gallery-mazda3-before-after`, `gallery-corolla-before-after`, `gallery-i30-before-after`, `gallery-octavia-before-after`, `gallery-sportage-before-after`, `gallery-subaru-before-after` — real customer before/afters, operator [C.1.1]
- `about-founders-portrait` — Kael, Yarin, Amit group portrait, operator [C.1.3]
- Insurance partner logos — trademarked, sourced from each insurer's brand kit (or removed if usage rights are unclear), operator [G.x]

---

## Original prompts (preserved for re-generation if needed)

### Blog covers

**`blog-why-painting-expensive-cover`** — Industrial paint booth interior in a professional auto body shop, modern dark gray sedan parked inside, masked with paper covering trim and wheels ready for spray phase, overhead industrial halogen lighting, slight blue color cast on masked plastic, atmospheric paint mist haze, [STYLE BASELINE], shot on Sony A7R V 35mm f/2.8, 16:9.

**`blog-inside-economics-cover`** — Wide-angle interior of a busy professional auto paint body shop, paint booth in background with red status glow indicating active work, open service bay foreground with car on hydraulic lift, wall-mounted spray paint cabinets, industrial concrete floor with subtle blue tint, technician silhouette walking past out of focus background, fluorescent overhead lights, [STYLE BASELINE], shot on Sony A7R V 24mm f/4, 16:9.

**`blog-wholesale-real-cover`** — Premium SUV in foreground inside a paint booth slightly out of focus, sharp focus on active paint booth control panel with abstract digital readouts and gauges (no legible text), red status light glowing, fine paint mist drifting in booth air, sharp depth of field, [STYLE BASELINE], shot on Sony A7R V 50mm f/2.8, 16:9.

**`blog-empty-time-cover`** — Empty modern industrial paint booth in a body shop completely deserted, booth lights dimmed casting cool blue tint across empty space, polished concrete floor, masking paper hanging from a wall, hose coiled in corner, sense of stillness and lost opportunity, melancholy mood, [STYLE BASELINE], shot on Sony A7R V 24mm f/4, 16:9.

**`blog-insurance-vs-private-cover`** — Top-down overhead view of a professional service quote document on a dark wood desk, document has only abstract gray placeholder lines and shapes (NO legible text in any language, NO Hebrew, NO English), fountain pen lying diagonally across document, metal clipboard partially visible at edge of frame, soft natural daylight from above, [STYLE BASELINE], shot on Sony A7R V 35mm f/2.8, 16:9.

**`blog-save-thousands-cover`** — Top-down overhead view of multiple printed price quotes spread across a dark wood desk, abstract numbers and gray placeholder lines (NO legible text), red ballpoint pen with cap off lying on top, soft natural daylight from a side window, [STYLE BASELINE], shot on Sony A7R V 35mm f/2.8, 16:9.

### Service heroes

**`service-full-repaint-hero`** — Sleek modern dark gray sedan parked inside professional auto body shop, industrial paint booth visible in soft background, fresh wet-look paint reflecting overhead workshop lights, technician in white coverall walking past out of focus in background, [STYLE BASELINE], shot on Sony A7R V 50mm f/2.8, 16:9.

**`service-body-shop-hero`** — Interior of a professional automotive body shop, hatchback car raised on a hydraulic lift mid-repair, technician's gloved hands using a paintless dent repair tool on the door panel, fluorescent shop lighting overhead, organized tool cabinets in soft focus background, industrial concrete floor, [STYLE BASELINE], shot on Sony A7R V 35mm f/2.8, 16:9.

**`service-polish-hero`** — Macro close-up of a professional dual-action polishing machine in motion on a dark gray car panel, polishing pad mid-rotation showing slight motion blur on its edge, polish compound spreading in a circular pattern, light reflecting off the freshly polished surface, [STYLE BASELINE], shot on Sony A7R V 100mm macro f/4, 16:9.

**`service-headlight-hero`** — Macro split-frame of a car headlight, left half foggy yellowed oxidized polycarbonate, right half perfectly clear and crisp after professional restoration, clean vertical divider line in the center, [STYLE BASELINE], shot on Sony A7R V 100mm macro f/5.6, 16:9.

**`service-scratch-repair-hero`** — Extreme close-up macro of a deep car scratch being filled with touch-up paint applied by a precision applicator brush, dark gray paint surrounding the scratch, brush tip visible holding silver paint, shallow depth of field, dramatic side-lit lighting, [STYLE BASELINE], shot on Sony A7R V 100mm macro f/4, 16:9.

**`service-caliper-painting-hero`** — Macro close-up of a freshly painted bright red brake caliper visible through the spokes of a dark gray alloy wheel, caliper paint glossy and uniform, brushed metal brake disc behind it, side-lit dramatic shadows, [STYLE BASELINE], shot on Sony A7R V 100mm macro f/4, 16:9.

**`service-wheel-painting-hero`** — Front-facing 45-degree shot of a 19-inch alloy car wheel painted matte anthracite dark gunmetal gray, sport car body partially visible behind out of focus, shallow depth of field, cinematic side lighting, [STYLE BASELINE], shot on Sony A7R V 85mm f/2.8, 16:9.

**`service-color-change-hero`** — Side profile shot of a sport sedan with dramatic split-finish paint, front half matte black newly painted, rear half is original silver factory color, suggesting color change in progress, studio backdrop with soft side-lit shadows, [STYLE BASELINE], shot on Sony A7R V 50mm f/4, 16:9.

**`service-partial-repaint-hero`** — Close-up of a car door section being prepared for partial repaint, masking paper covering surrounding panels, the door itself sanded and primed in matte gray primer, technician's gloved hand holding a tack cloth nearby in soft focus, [STYLE BASELINE], shot on Sony A7R V 50mm f/4, 16:9.

**`service-pickup-delivery-hero`** — Modern sleek flatbed tow truck loaded with a customer's modern silver sedan, parked on a residential street in an upscale neighborhood at golden hour but with cool color grading, the truck driver visible in soft focus checking the load straps, [STYLE BASELINE], shot on Sony A7R V 35mm f/4, 16:9.

### Branches

**`branch-ashdod-hq`** — Wide aerial-low-angle exterior of a modern Israeli auto body shop building in an Ashdod industrial neighborhood, simple concrete-and-steel commercial facade, large overhead door visible, single dark sedan parked in front in foreground, distant Ashdod port cranes visible in soft-focus background skyline, golden Israeli afternoon light graded cool, [STYLE BASELINE], shot on Sony A7R V 24mm f/8, 16:9.

**`branch-petach-tikva-area`** — Wide highway interchange exterior in Petach Tikva, Israeli industrial commercial district, modern silver sedan parked along a side street in foreground, generic mid-rise office buildings and palm trees in soft focus background, late afternoon Mediterranean light graded cool, [STYLE BASELINE], shot on Sony A7R V 35mm f/8, 16:9.

**`branch-tel-aviv-area`** — Quiet residential Tel Aviv street with a modern dark sedan parked at the curb in foreground, recognizable Bauhaus white architecture buildings of central Tel Aviv in soft focus background, ficus trees lining sidewalk, late afternoon light graded cool, [STYLE BASELINE], shot on Sony A7R V 50mm f/4, 16:9.

**`branch-haifa-area`** — Hillside view of Haifa from above, Mount Carmel slopes with terraced buildings stepping down toward the bay, modern silver sedan parked on a quiet street in mid-frame, distant Haifa harbor and Mediterranean visible in soft focus background, late afternoon light graded cool desaturated, [STYLE BASELINE], shot on Sony A7R V 35mm f/8, 16:9.

**`branch-jerusalem-area`** — Quiet street in Jerusalem with the iconic Jerusalem-stone limestone wall of an old building in soft focus background, modern dark sedan parked along the cobbled road in foreground, late afternoon light filtering through a narrow street, the warm tan of the stone tempered with a cool color grade, [STYLE BASELINE], shot on Sony A7R V 35mm f/4, 16:9.

**`branch-beer-sheva-area`** — Wide quiet street in Beer Sheva Israel during late afternoon, light desert dust haze in air, modern silver sedan parked along curb in foreground, low-rise tan sandstone Negev architecture and a single date palm in soft focus background, soft golden hour light graded cool, [STYLE BASELINE], shot on Sony A7R V 35mm f/8, 16:9.

### Color-change variants

**`color-change-matte-black`** — Profile shot of a luxury sport sedan painted in deep matte black finish, parked in a clean studio environment with subtle gradient backdrop transitioning from dark gray to near black, dramatic side rim-light highlighting the matte texture without making it glossy, sharp body lines visible, [STYLE BASELINE], shot on Sony A7R V 50mm f/4, 16:9.

**`color-change-white-pearl`** — Three-quarter front shot of a luxury sedan painted in pearl white multi-coat finish, soft directional studio lighting catching the iridescent gold-pink shimmer of the pearl coat, neutral gray seamless backdrop, fresh wet-look paint reflecting subtle highlights, [STYLE BASELINE], shot on Sony A7R V 85mm f/4, 16:9.

**`color-change-concrete-grey`** — Side-rear three-quarter shot of a modern crossover SUV painted in deep concrete-grey warm gray finish with subtle metallic, urban industrial backdrop with soft concrete textures in deep shadow, dramatic side lighting from left, [STYLE BASELINE], shot on Sony A7R V 50mm f/4, 16:9.

**`color-change-carbon`** — Macro close-up at a 30 degree angle of a sport car hood painted with realistic carbon fiber pattern wrap, fine herringbone-style fiber weave clearly visible with subtle iridescence, sharp focus on the texture, soft directional studio lighting from above, [STYLE BASELINE], shot on Sony A7R V 100mm macro f/5.6, 16:9.

### About + Hero (reserve)

**`about-paint-shop-tour`** — Wide interior tour shot of a professional Israeli auto paint body shop, organized clean workspace, two service bays visible with cars in early prep stages, paint booth doors visible at far end, tool walls organized, polished concrete floor, fluorescent overhead lighting with cool color cast, no people in frame, [STYLE BASELINE], shot on Sony A7R V 24mm f/8, 16:9.

**`hero-paint-booth-ambient`** — Cinematic ambient wide shot inside a modern industrial paint booth, atmospheric paint mist drifting through the air illuminated by overhead halogen lights, polished concrete floor with subtle blue tint, the silhouette of a masked sedan visible through the haze, sense of premium craftsmanship, cool blue desaturated palette, [STYLE BASELINE], shot on Sony A7R V 35mm f/2.8, 16:9.

**`hero-fleet-of-cars-painted`** — Cinematic wide-angle row of 5 freshly painted modern sedans and SUVs lined up in a clean industrial parking lot at dusk, each car a different finish (matte black, pearl white, concrete grey, deep navy, silver), all reflecting the cool blue ambient sky overhead, polished concrete pavement, soft urban industrial backdrop, [STYLE BASELINE], shot on Sony A7R V 50mm f/8, 16:9.

---

## Future regeneration

If a real-device render reveals a problem with any image:
1. Find the slug above
2. Re-run via `mcp__c67ccb05-...__generate_image` with `model: "gpt_image_2"`, `quality: "high"`, `resolution: "1k"`, `aspect_ratio: "16:9"`, the prompt above
3. Inspect (compare against the original)
4. Replace `/public/images/<category>/<slug>.png` with the new render
5. No code changes — the image just reloads

For new images on new pages: pick the category folder, write a prompt using the [STYLE BASELINE] template, generate, drop the file in, add an entry to the appropriate hero map (`HUB_HERO_IMAGES` in `service-page-shell.tsx`, `BRANCH_HERO_IMAGES` in `city-page.tsx`, or inline `<Image>` in the page).
