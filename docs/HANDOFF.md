# Kontrol Auto — Session Handoff

> **Read this first.** Status, project orientation, the critical bug to fix
> immediately, and the prioritized backlog for the next Claude Code session.
> Last updated: 2026-05-03.

---

## 0 — Critical orientation (don't skip)

**Project:** kontrolauto.co.il — Israeli car painting site, "צבע לרכב במחיר סיטונאי" / wholesale-pricing-via-unused-oven-time arbitrage.

**Repo path on disk:** `D:/1STPROH/react-site/`
**Do NOT confuse with:**
- `D:/1STPROH/website-clone/` — generic forged.build clone scaffold, abandoned, NOT deployed
- `D:/kontrol-rebuild/` — different brand entirely (Kontrol Technologies smart locks, homekontrol.net)

**Live URL:** https://kontrolauto.co.il
**GitHub:** https://github.com/Kontrol-IL/kontrol-site (note: redirected from old `kontrol-ship-it` org)
**Vercel project:** `prj_PCdOPKdCgxBTOvXlNesbvgzm7Ehl` in team `team_9rg1vAUUERlqHxgdmtt3nVDP`
**Most recent deploy:** `dpl_8o32iw2qZvEVLCN9qcM4EBoF8mNU` (commit `8490bca`, 2026-05-03)

**Stack:**
- Next.js **16** (App Router, NOT Pages Router) — note `AGENTS.md` warns: "This is NOT the Next.js you know. Read `node_modules/next/dist/docs/` before writing code."
- React 19, TypeScript strict
- Tailwind v4 via `@tailwindcss/postcss`
- shadcn/ui-style primitives (already in repo)
- framer-motion, gsap, lenis (existing — DO NOT remove)
- @vercel/blob, @vercel/kv, @vercel/postgres (lead capture)
- Heebo (Hebrew) + Manrope + Akira Expanded fonts

**What lives where:**
- Homepage uses 3D hero perspective scroll (`useHeroScroll` hook in `src/app/page.tsx`) + custom mouse-flare effects + `Typewriter` + `TypeOnScroll` + `ScrollLine` SVG + `MotionFooter` with magnetic gsap buttons. **DO NOT REMOVE ANY OF THESE.** User has been explicit twice.
- Sub-pages use `SubPageLayout` (in `src/components/ui/sub-page-layout.tsx`) which wraps with `Nav` + `SectionBackground` + `MotionFooter`.
- Service pages use `ServicePageShell` (in `src/components/services/service-page-shell.tsx`).
- Branch pages use `CityPage` (in `src/components/ui/city-page.tsx`) with the dynamic `[slug]` route at `src/app/branches/[slug]/page.tsx`. HQ Ashdod has its own static page at `src/app/branches/ashdod/page.tsx`.
- Insurance pages use `InsurancePageShell` + dynamic `[slug]` route reading from `src/data/insurance.ts`.
- Blog uses `BlogPostShell` + dynamic `[slug]` route reading from `src/data/blog/index.ts` with article bodies in `src/data/blog/articles/*.tsx`.
- Hero images mapped centrally:
  - `HUB_HERO_IMAGES` in `service-page-shell.tsx` (14 entries: 10 service hubs + 4 color-change variants)
  - `BRANCH_HERO_IMAGES` in `city-page.tsx` (6 Wave 1 cities)

**Memory directory** (preferences and policies that override defaults): `C:/Users/dtona/.claude/projects/D--1STPROH/memory/MEMORY.md` — read this if you have access. Highlights:
- Don't apply `kontrol-design` skill to this project (that's for homekontrol.net smart locks)
- Don't propose removing things during a revamp unless explicitly asked
- Israel jurisdiction — no cookie consent banner needed
- Sanity for blog must be a SEPARATE workspace from smart-lock project
- AI image gen requires QA loop; gpt_image_2 defaults are quality "high" + resolution "1k"

---

## 1 — 🔴 CRITICAL BUG TO FIX FIRST: /book quiz isn't working

**Reported:** 2026-05-03 by Kael.

**Where it lives:**
- Page: `src/app/book/page.tsx` → renders `<BookingQuiz />`
- Component: `src/components/ui/booking-quiz.tsx` (~430 lines)
- Submit endpoint: `src/app/api/lead/route.ts` (proven working in earlier tests — POST hit Make.com webhook successfully and wrote to Vercel Blob)

**What it should do:**
1. 6-step quiz: region (10 Israeli regions) + city (text), vehicle type, paint condition, year bucket, first name, phone
2. On submit, POST to `/api/lead` with `event: "lead_submitted"` + answers + UTM params
3. If qualified → open WhatsApp in new tab with prefilled message
4. If disqualified (out of area / commercial vehicle) → show disqualified state but still capture lead

**Possible causes — investigate in this order:**

1. **Phone validation regex too strict.** `/^0?5\d{8}$/` requires Israeli mobile. If user types with formatting (`050-123-4567`) the regex still works since we strip `\D` first, but verify on live: open devtools, fill the form, check what's happening at the submit step. If the "submit" button stays disabled, that's the regex.

2. **Concurrent issue with `<input>` re-render.** The `onChange` handler does `v.replace(/[^\d\s\-+]/g, "")` — if this strips a character the user typed, the cursor jumps to end and they can't type. Test on mobile especially.

3. **`canAdvance` logic case branch.** Each step has a switch — if any branch returns `false` when it should return `true`, the button stays disabled. Step 0 needs `!!a.region && a.city.trim().length >= 2` — if the city input is whitespace, it stays disabled silently.

4. **`window.open` blocked by popup blocker.** On mobile Safari especially, opening a new tab from a click-handler that's wrapped in async `await fetch(...)` can fail because the click context is lost. Fix: open the WhatsApp URL synchronously via `window.location.href = wa` if the open() returns null. Or: pre-build the URL and use a real `<a target="_blank">` form-submit pattern.

5. **CORS / network on /api/lead.** The endpoint has `'Access-Control-Allow-Origin': '*'` so should be fine. Test: in browser devtools Network tab, submit the form on production; verify the POST returns 200 with `ok: true`.

6. **Hebrew RTL form input glitch.** The phone field has `direction: "rtl"` but phone numbers should be LTR. Verify keyboard input direction is sane on the live site.

7. **`getUtm()` reading window before mount.** The function checks `typeof window === "undefined"` so should be SSR-safe. But the `useEffect` that fires `quiz_start` uses `window.dataLayer` — verify it doesn't throw if dataLayer is undefined (it has a check, but worth re-reading).

**How to debug:**
```bash
cd "D:/1STPROH/react-site"
npm run dev      # http://localhost:3001
```
Then visit `http://localhost:3001/book`, open devtools Console + Network, walk through every step. Note exactly which step fails and what the console says.

**Don't break:** the `/api/lead` endpoint is already wired to a working Make.com webhook + Vercel Blob storage. Do not change the payload shape — Make.com is parsing the existing fields. If you add a field, add it; don't rename existing ones.

---

## 2 — What was shipped this session (snapshot)

The full revamp. ~140 pages live:

| Area | Pages | Notes |
|---|---:|---|
| Core | 17 | Homepage + how-it-works, wholesale-pricing, book, gallery, about, contact, faq, warranty, customer-guide, refund-policy, privacy, terms, accessibility, security, sitemap.html, thank-you, not-found |
| Service catalog | 47 | 9 hubs + 36 sub-pages. Hub-and-spoke per brief PART 6.2 |
| Branches | 47 | Ashdod HQ static + 45 cities via dynamic `[slug]` (Wave 1+2+3 from brief PART 6.3-6.5) + branches index |
| Insurance | 11 | Hub + 10 partners via dynamic `[slug]` (Migdal, Phoenix, Harel, Menora, Ayalon, Clal, Shirbit, AIG, Shomera, Government Employees) |
| Blog | 7 | Hub + 6 mechanism articles |
| B2B | 4 | /b2b/fleets, /b2b/insurance, /b2b/dealerships, /partners/body-shops |

**Schema.org coverage:** Organization + WebSite (sitewide), LocalBusiness (homepage + Ashdod HQ + contact), Service (every service page + non-HQ branches), FAQPage (homepage embed + /faq + service pages with FAQ + insurance), Article (blog posts), HowTo (/how-it-works), ContactPage (/contact), BreadcrumbList (every interior page).

**Title pattern enforced sitewide:** `{primary keyword} | KONTROL` via `metadata.title.template`.

**Sitemap:** 131 URLs at `/sitemap.xml` (auto-generated from `src/app/sitemap.ts`).

**llms.txt:** `/llms.txt` for AI search crawlers.

**Redirects (in `next.config.ts`):**
- `/ashdod` → `/branches/ashdod`
- `/rishon-letzion` → `/branches/rishon-letzion`
- `/modiin` → `/branches/modiin`
- `/cities` → `/branches`

**27 hero images** generated via Higgsfield gpt_image_2 (quality high, 1k, 16:9):
- 6 blog covers
- 10 service hubs + 4 color-change variants (14 total via HUB_HERO_IMAGES)
- 6 Wave 1 city heroes (Ashdod, Petach Tikva, Tel Aviv, Haifa, Jerusalem, Beer Sheva)
- 1 about-paint-shop-tour
- 2 reserve homepage heroes (paint-booth-ambient, fleet-of-cars)

Catalog with prompts: `docs/IMAGE_ASSETS.md`.

**Analytics scaffolding** (env-gated; scripts no-op without IDs):
- GA4 + GTM in `src/components/analytics/AnalyticsScripts.tsx`
- Meta Pixel client-side
- Meta CAPI server-side mirror at `src/app/api/capi/route.ts` (PII hashed via SHA-256 before sending to Graph API)
- UTM persistence in `src/lib/utm.ts` (sessionStorage)
- Sticky mobile WhatsApp in `src/components/ui/sticky-whatsapp.tsx`

**No cookie consent banner** — Israel has no GDPR equivalent (per memory `policy_israel_no_gdpr.md`).

---

## 3 — What's still to do, prioritized

### 🔴 P0 — Blocking issues
1. **Fix /book quiz** (see section 1)

### 🟠 P1 — Operator inputs to wire (find via grep `{{`)
The site is fully functional with placeholders, but the following need to be replaced with real data. Use `grep -rn '{{' src/ public/ docs/` to find every occurrence:

- `{{COMPANY_NUMBER}}` — לוחמים בצבע ח.פ. (operator [G.3])
- `{{LEGAL_ADDRESS}}`, `{{STREET_ADDRESS}}`, `{{POSTAL_CODE}}` — operator [G.2]
- `{{BUSINESS_HOURS}}` — operator [F.3.1]
- `{{HQ_GEO}}` lat/lng (currently Ashdod center placeholder in `src/lib/site-config.ts`)
- `{{LEAD_TIME_DAYS}}` — typical next-available-slot in days (operator [F.1.1])
- `{{WARRANTY_TERMS}}` — operator [F.1.2]
- `{{PAYMENT_METHODS}}` — operator [F.2.7]
- `{{KAEL_FULL_NAME}}` — blog author display name
- 44+ city `{{*_MONTHLY_COUNT}}` placeholders (operator [D.11])
- 4 trust-strip metrics in `src/components/home/trust-strip.tsx` (currently realistic placeholder integers — swap with operator [D.1-5])
- Privacy / terms / accessibility / refund / vulnerability disclosure full text (operator [G.4-G.9])
- Social URLs in `site-config.ts`: `{{FACEBOOK_URL}}`, `{{INSTAGRAM_URL}}`, `{{TIKTOK_URL}}`, `{{YOUTUBE_URL}}` (operator [B.2.2-5])
- B2B contact phones: `{{B2B_PHONE_OR_GENERAL}}`, `{{PARTNERSHIPS_PHONE}}`, `{{DEALERS_PHONE}}`, `{{PARTNERS_PHONE}}`
- `{{CUSTOMER_NAME_1..3}}` — testimonials in /gallery (operator [C.3.1])

### 🟠 P1 — Env vars on Vercel (analytics will fire once these are set)
Set these in Vercel project settings → Environment Variables. The site already reads them; setting them turns analytics on without a code change.

```
NEXT_PUBLIC_GA4_ID=G-...
NEXT_PUBLIC_GTM_ID=GTM-...
NEXT_PUBLIC_META_PIXEL_ID=...
META_CAPI_TOKEN=...
META_DATASET_ID=...   (often equal to META_PIXEL_ID)
```
Existing env vars on Vercel that should already be set:
```
BLOB_READ_WRITE_TOKEN=...   (for /api/lead Vercel Blob writes)
ADMIN_TOKEN=...             (for /api/leads admin endpoint)
```

### 🟡 P2 — Operator-supplied photography (replace placeholders / generated images)
- Real customer before/afters for `/gallery` (operator [C.1.1]). Replace generic gallery cards in `src/app/gallery/page.tsx`.
- Founder portrait for `/about` (operator [C.1.3]). Add to about page.
- Real partner-shop interior photos. The current `/about/about-paint-shop-tour.png` is generated — fine for now.
- Insurance partner logos — TRADEMARKED, source from each insurer's brand kit. Or remove logos and keep text-only treatment. Get legal check.

### 🟡 P2 — Sanity blog setup (operator [H.7] confirmed; H.x for API keys)
Currently 6 mechanism articles are hardcoded as React components in `src/data/blog/articles/*.tsx`. The brief calls for Sanity blog. Plan:
1. Create a NEW Sanity project (separate from smart-lock per memory `policy_sanity_separate_workspaces.md`)
2. Schema: title, slug, author (with photo + bio + social), publishedAt, category, tags, body (PortableText), heroImage, faq block, related articles
3. Migrate the 6 hardcoded articles into Sanity
4. Update `src/data/blog/index.ts` to fetch from Sanity instead of static `BLOG_INDEX`
5. Keep the existing `BlogPostShell` interface; just swap data source

Sanity install: `npm install @sanity/client @sanity/image-url next-sanity sanity`. Studio config: `sanity init` with new project.

### 🟡 P2 — SEO post-launch (per brief PART 11)
- **Submit `https://kontrolauto.co.il/sitemap.xml`** to Google Search Console + Bing Webmaster
- **Verify schema** on Google Rich Results Test for at least 5 page types (homepage, /services/full-repaint, /branches/ashdod, /blog/why-car-painting-is-expensive, /faq)
- **GBP (Google Business Profile)** — claim/verify Ashdod HQ. NAP must match site exactly. Add 30+ photos.
- **Directory claims (Day 1-30):** midrag.co.il, d.co.il, b144.co.il, easy.co.il, dapei-zahav.co.il
- **Forum participation:** tapuz.co.il (DR 70), rotter.net (DR 57), carsforum.co.il (DR 31), jeepolog.com (DR 47)
- **Review velocity:** ask every completed customer for a Google Review, target 1-3/week
- **Citation cleanup:** ensure NAP is consistent across midrag, b144, d.co.il, easy.co.il, Yelp Israel, Yandex, Bing, Apple Maps

### 🟡 P2 — Performance + a11y QA (brief PART 7.3-7.4)
Hasn't been run on production yet:
- Lighthouse 90+ on Performance / Accessibility / Best Practices / SEO (target per brief)
- Core Web Vitals (LCP <2.5s, CLS <0.1, INP <200ms) on real iOS + Android devices
- WCAG AA full audit
- Hebrew RTL render check at 320 / 375 / 414 / 768 / 1024 / 1440
- Israeli תקנות הנגישות 5772-2013 compliance
- Consider next/image WebP/AVIF conversion of the 27 PNG images (currently PNG, total 158MB; converting to WebP would cut to ~30-50MB)

### 🟢 P3 — Content gaps
- **30 more blog articles** per brief PART 6.7. Current 6 are mechanism-focused; remaining are cluster (cost-of-painting, types-of-car-paint, paint-code-lookup, plastidip-vs-real-paint, fleet-painting-guide, etc. — 36 total in brief).
- **Wave 2 + 3 city hero images** (39 cities still without hero). Use the same gpt_image_2 pipeline + the prompts in `docs/IMAGE_ASSETS.md`. Or skip — Wave 1 is fine for SEO, Wave 2/3 mostly catch long-tail.
- **City pages have generic blurbs** — could be enriched with real local trust signals (specific neighborhood mentions, partner shop count per city) once operator provides [D.11].
- **Insurance pages reference accurate but generic content** about each carrier. Could be enriched with actual claim-process specifics from each insurer's website.
- **/faq has 8 entries** — brief 6.7 / 13 lists more (lead time, payment methods, hours, prep instructions, original/metallic paint, value impact, installments, periphery). Add to `src/app/faq/page.tsx`.

### 🟢 P3 — Visual / UX polish
- **Homepage v2 dark/white alternation:** brief PART 12 Phase 1 calls for dark→white→dark→white sections. Currently all sections use the existing dark aesthetic (`#1C1C1C` bg, `#252528` cards). User explicitly said don't apply kontrol-design skill — so the brief's alternation rule is INTENTIONALLY not implemented. If user changes their mind, this would be a meaningful refactor.
- **Blog hero images on listing page** show 16/9 thumbs cropped — looks good but may benefit from `4/3` for cards.
- **Homepage trust strip** placeholder numbers might look fake to a discerning visitor (38, 24, 1247, 6500 — too round). Replace with operator's real numbers.
- **Mobile testing on real devices** hasn't happened. Test on at least one iPhone + one Android.

### 🟢 P3 — Pre-existing tech debt (NOT regressions, predates this session)
ESLint shows 6 warnings, all pre-existing in code I didn't author:
- `useMouseFlare` ref-during-render in `src/app/page.tsx` (the user's existing 3D scroll setup — DO NOT TOUCH per memory)
- `motion-footer.tsx` has 4 `any` types in the magnetic-button gsap implementation (existing)
- `type-on-scroll.tsx` has 1 `any` in ref forwarding (existing)

Only fix these if explicitly asked. User has already declined to touch the existing 3D / motion infrastructure.

---

## 4 — File map (where to find things)

```
react-site/
├── docs/
│   ├── HANDOFF.md              ← this file
│   └── IMAGE_ASSETS.md         ← image catalog with all 27 prompts + slugs
├── public/
│   ├── images/
│   │   ├── about/              (1 image)
│   │   ├── blog/               (6 images, all live)
│   │   ├── branches/           (6 Wave 1 city images)
│   │   ├── color-change/       (4 variants)
│   │   ├── hero/               (2 reserve hero images, not yet wired)
│   │   ├── services/           (10 hub heroes)
│   │   └── BETTER/             (legacy MaxColor service-type images, used on homepage)
│   ├── llms.txt                (AI-search crawler manifest)
│   └── prelander-1..4.html     (existing pre-lander HTML — not part of this site, NEVER edit)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── lead/route.ts        (existing — DO NOT change payload shape)
│   │   │   ├── leads/route.ts       (admin read endpoint)
│   │   │   └── capi/route.ts        (NEW — Meta CAPI mirror)
│   │   ├── about/, accessibility/, blog/, book/, branches/, b2b/, contact/,
│   │   │   customer-guide/, faq/, gallery/, how-it-works/, insurance/, partners/,
│   │   │   privacy/, refund-policy/, security/, services/, terms/, thank-you/,
│   │   │   warranty/, wholesale-pricing/   (all new pages)
│   │   ├── branches/[slug]/page.tsx  ← dynamic city route, reads from src/data/cities.ts
│   │   ├── insurance/[slug]/page.tsx ← dynamic insurance route, reads from src/data/insurance.ts
│   │   ├── blog/[slug]/page.tsx      ← dynamic blog route, reads from src/data/blog/index.ts
│   │   ├── layout.tsx                (Heebo font, Hebrew RTL, sitewide schema, analytics, sticky WA)
│   │   ├── page.tsx                  (homepage with 3D scroll — DO NOT REMOVE existing animations)
│   │   ├── robots.ts, sitemap.ts, sitemap.html/page.tsx, not-found.tsx, thank-you/page.tsx
│   ├── components/
│   │   ├── analytics/                (GA4/GTM/Pixel scripts + UtmCapture)
│   │   ├── blog/blog-post-shell.tsx
│   │   ├── home/                     (homepage v2 sections: whats-included, mechanism-steps, trust-strip, objection-handler, homepage-faq, final-cta)
│   │   ├── insurance/insurance-page-shell.tsx
│   │   ├── schema/                   (10 schema.org JSON-LD components — Organization, WebSite, LocalBusiness, Service, FAQPage, Article, BreadcrumbList, HowTo, ContactPage, JsonLd primitive)
│   │   ├── services/service-page-shell.tsx  (HUB_HERO_IMAGES map lives here)
│   │   └── ui/
│   │       ├── nav.tsx, sub-page-layout.tsx, breadcrumb.tsx
│   │       ├── city-page.tsx         (BRANCH_HERO_IMAGES map lives here)
│   │       ├── booking-quiz.tsx      ← THE QUIZ (P0 fix)
│   │       ├── stub-page.tsx         (used by legal stub pages)
│   │       ├── sticky-whatsapp.tsx, placeholder.tsx
│   │       └── (existing: motion-footer.tsx, hero-background.tsx, hero-price.tsx,
│   │             section-background.tsx, scroll-line.tsx, type-on-scroll.tsx,
│   │             typewriter.tsx — DO NOT REMOVE)
│   ├── data/
│   │   ├── cities.ts                 (45 city entries for /branches/[slug])
│   │   ├── insurance.ts              (10 insurance partners)
│   │   └── blog/
│   │       ├── index.ts              (BLOG_INDEX + ARTICLE_BODIES dynamic import map)
│   │       └── articles/             (6 hardcoded React-component articles)
│   └── lib/
│       ├── site-config.ts            (NAP, hours, social, schema constants — single source of truth)
│       ├── analytics.ts              (track helper)
│       ├── utm.ts                    (UTM persistence + buildWhatsappUrl)
│       └── utils.ts                  (cn() shadcn helper)
├── next.config.ts                    (4 redirects + image config)
├── .env.local.example                (env vars to set on Vercel — see P1 above)
└── .env.local                        (local dev vars — gitignored)
```

---

## 5 — Conventions & gotchas

**Quote escaping in JSX:** Hebrew copy with `מע"מ` inside JSX strings will break parsing. Use single quotes for the outer string OR escape with `&quot;`/`&ldquo;`. I hit this 4 times during the build — every fix in commit history. If you write Hebrew copy with `"` inside, mind this.

**`<a>` for internal navigation in blog articles:** Don't use raw `<a href="/...">` for internal links in blog article components. Use `<Link>` from `next/link`. Two articles already converted (`why-car-painting-is-expensive.tsx`, `insurance-vs-private-paint-pricing.tsx`). When adding new articles, import Link.

**Service hero images map:** Adding a new service page that should have a hero image? Add an entry to `HUB_HERO_IMAGES` in `service-page-shell.tsx`. Format: `"/services/<path>": { folder: "services" | "color-change", slug: "<image-slug>", alt: "Hebrew alt" }`.

**Branch hero images map:** Same pattern in `BRANCH_HERO_IMAGES` in `city-page.tsx`. Keyed by slug (not full URL).

**Image generation:** Use Higgsfield gpt_image_2, quality `high`, resolution `1k`, aspect `16:9`. Style baseline preserved in `docs/IMAGE_ASSETS.md`. Always inspect before approving — regenerate on AI tells / warped surfaces / broken text.

**Dev server port:** 3001 (not 3000) per `.claude/launch.json`.

**Build before push:** `npm run build` produces 100+ static routes. If it fails, investigate before committing — Vercel will fail the deploy too.

**Don't commit `.env.local`:** It's gitignored via `.env*.local` rule in `.gitignore`. If you add a new env var, also add it to `.env.local.example` (which IS committed).

---

## 6 — How to deploy

```bash
cd "D:/1STPROH/react-site"

# Make changes
git add -A
git commit -m "..."
git push origin main
```

GitHub auto-deploy to Vercel may not be wired (last session it didn't trigger). Manual deploy:

```bash
vercel --prod --yes
```

The CLI is at `/c/Users/dtona/AppData/Roaming/npm/vercel`. Project is linked via `.vercel/project.json`. Production deploys auto-alias to `kontrolauto.co.il`.

---

## 7 — Verifying after a change

```bash
# TypeScript
npx tsc --noEmit

# Lint (only check authored files; pre-existing warnings in code we don't own are OK)
npx eslint --quiet src/app src/components src/lib src/data

# Build
npm run build

# Live smoke test
curl -sI https://kontrolauto.co.il/ | head -1
curl -s https://kontrolauto.co.il/sitemap.xml | grep -c '<loc>'    # should be ~131
```

---

## 8 — Reading order for the next session

1. Read this file (`docs/HANDOFF.md`)
2. Read `docs/IMAGE_ASSETS.md` if doing image work
3. Skim `package.json` to confirm what's installed
4. Run `npm run dev` and visit `http://localhost:3001/book` to reproduce the quiz bug
5. Open `src/components/ui/booking-quiz.tsx` and walk through the state logic
6. Fix
7. Smoke test on `/book` → submit → verify Network tab shows `POST /api/lead 200`
8. Commit + push + deploy

If user asks for any other task before fixing the quiz, push back: the quiz is the conversion path. Everything else is downstream.
