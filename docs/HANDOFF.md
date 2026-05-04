# Kontrol Auto — Session Handoff

> **Read this first.** Status, project orientation, what just shipped, what's
> in flight (especially the domain migration), and the prioritized backlog
> for the next Claude Code session.
> Last updated: 2026-05-04.

---

## 0 — Critical orientation (don't skip)

**Project:** Kontrol Auto — Israeli car painting site, "צבע לרכב במחיר סיטונאי" / wholesale-pricing-via-unused-oven-time arbitrage.

**Repo path on disk:** `D:/1STPROH/react-site/`
**Do NOT confuse with:**
- `D:/1STPROH/website-clone/` — generic forged.build clone scaffold, abandoned, NOT deployed
- `D:/kontrol-rebuild/` — different brand entirely (Kontrol Technologies smart locks, homekontrol.net)

**Live URL (canonical, primary):** `https://kontrolauto.co.il`
**Live URL (legacy, still serving):** `https://kontrolauto.net` — DNS for `.co.il` is mid-propagation; once Vercel issues the SSL cert and the site is reachable on `.co.il` from all resolvers, `.net` will be flipped to a permanent 301 redirect to `.co.il`. See **Section 0.5** below for full status.

**GitHub:** https://github.com/Kontrol-IL/kontrol-site (note: redirected from old `kontrol-ship-it` org — pushes still work, but cloning fresh should use the new URL)
**Vercel project:** `prj_PCdOPKdCgxBTOvXlNesbvgzm7Ehl` in team `team_9rg1vAUUERlqHxgdmtt3nVDP` (`kontrol-ship-its-projects`)
**Most recent deploy:** commit `f10cc0c` ("Switch primary domain to kontrolauto.co.il", 2026-05-04). Previous notable: `4501794` (gallery cleanup + quiz mobile fix + internal linking, 2026-05-04).

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
- Blog uses `BlogPostShell` + dynamic `[slug]` route reading from `src/data/blog/index.ts` with article bodies in `src/data/blog/articles/*.tsx`. As of 2026-05-04 the shell now also renders a "related articles" cards row (3 cards) at the bottom of every post — auto-populated from `BLOG_INDEX` excluding the current slug.
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

## 0.5 — 🔄 DOMAIN MIGRATION IN PROGRESS: kontrolauto.net → kontrolauto.co.il

**Why:** `.co.il` is the correct ccTLD for an Israeli-only business; better local SEO signal, more trust to Israeli consumers. Decided 2026-05-04.

**Current status (as of last commit, `f10cc0c`):**

| Layer | State | Notes |
|---|---|---|
| `.co.il` purchased | ✅ done | Operator registered the domain |
| Nameservers pointed at Vercel | ⏳ propagating | User set ns1.vercel-dns.com / ns2.vercel-dns.com at the registrar; Israeli `.co.il` propagation can be slow (up to 24 hr) |
| Domain added to Vercel project `react-site` | ✅ done | `vercel domains add kontrolauto.co.il` succeeded; visible in `vercel domains ls` |
| Vercel sees nameserver delegation | ❌ not yet | `vercel domains inspect kontrolauto.co.il` still shows "Current Nameservers: -" |
| Public A-record reachable | ⚠️ inconsistent | `1.1.1.1` returns parking IPs `216.150.1.65/193`; `8.8.8.8` returns NXDOMAIN. Caches still hold pre-delegation records. |
| SSL cert provisioned for `.co.il` | ❌ pending | Vercel auto-issues Let's Encrypt cert ~30 sec after it sees its own NS delegation — i.e. blocked on the row above. **This is why Chrome currently shows "Not Secure" on `.co.il`.** |
| `SITE_URL` / `metadataBase` / `og:url` / CAPI fallback / llms.txt | ✅ updated | All point to `kontrolauto.co.il`. Sitemap auto-generates from `SITE_URL` so `https://kontrolauto.net/sitemap.xml` already lists `.co.il` URLs. Canonical tags on every page point to `.co.il`. |
| Internal nav / slugs / Link hrefs | ✅ no change needed | Already use relative paths (`/blog`, `/services/...`) so they work on whichever host is serving |
| `.net → .co.il` 301 redirect | ❌ DEFERRED | **Do not enable until `.co.il` is fully reachable + has SSL cert.** Otherwise `.net` traffic gets bounced to a broken/unreachable destination. Two implementation paths (pick one when it's time):<br>**A. Vercel dashboard** (preferred): Project → Settings → Domains → click `kontrolauto.net` → "Redirect to" → `kontrolauto.co.il` → Save.<br>**B. Code:** add a host-based redirect in `next.config.ts`:<br>`{ source: '/:path*', has: [{ type: 'host', value: 'kontrolauto.net' }], destination: 'https://kontrolauto.co.il/:path*', permanent: true }` |
| GSC TXT verification record | ✅ added | `vercel dns add kontrolauto.co.il @ TXT "google-site-verification=lQ7jB2Qczoyxbno7IuW1XeFl9xGEJxFs-PbSUiit9SI"` — record `rec_ebc3feb0dc44d20f912ea075`. Live on Vercel's NS already (verified via `nslookup -type=TXT kontrolauto.co.il ns1.vercel-dns.com`); will be globally visible once nameserver delegation finishes. |
| Email addresses (`info@`, `partnerships@`, `b2b@`, `dealers@`, `security@`, `partners@`) | ❌ still on `@kontrolauto.net` | Migrating these requires MX records + mailbox setup at the new domain. Pending operator setup. The constants live in `src/lib/site-config.ts` (`EMAIL`) plus 6 page files (b2b/insurance, b2b/fleets, b2b/dealerships, contact, security, partners/body-shops). When ready: `grep -rn 'kontrolauto\.net' src/ \| grep -v 'kontrolauto\.co\.il'` to find them. |
| `homekontrol.net` references in `llms.txt` | ✅ preserved | Those refer to the OTHER brand (Kontrol Technologies smart locks) — must NOT be changed |

**How to verify domain readiness from a fresh shell:**

```bash
# 1. Did the .co.il delegation propagate to Vercel's view?
cd "D:/1STPROH/react-site"
vercel domains inspect kontrolauto.co.il   # "Current Nameservers" should be ns1/ns2.vercel-dns.com (not "-")

# 2. Does the public DNS see Vercel IPs?
nslookup kontrolauto.co.il 8.8.8.8         # should return 76.76.21.21 (or similar Vercel IP), not 216.150.x
nslookup kontrolauto.co.il 1.1.1.1         # same — should match
# Or visually: https://www.whatsmydns.net/#A/kontrolauto.co.il

# 3. Does the site actually serve?
curl -sI https://kontrolauto.co.il | head -1   # expect "HTTP/2 200"
curl -sI https://kontrolauto.co.il/sitemap.xml | head -1

# 4. Cert sanity
curl -vI https://kontrolauto.co.il 2>&1 | grep -E "subject:|issuer:"
```

When all four steps pass cleanly, the redirect step (`.net → .co.il`) becomes safe.

**Post-cutover SEO actions (do AFTER redirect is enabled):**
1. Add `kontrolauto.co.il` as a new property in Google Search Console — verification TXT is already in DNS, just click "Verify"
2. Submit `https://kontrolauto.co.il/sitemap.xml` to GSC + Bing Webmaster
3. In the OLD `kontrolauto.net` GSC property, use the "Change of Address" tool to formally signal the migration to Google — preserves link equity
4. Monitor GSC for the next 2-4 weeks for crawl errors, drop in impressions on the old domain, ramp on the new one

---

## 1 — What was just shipped this session (2026-05-04)

The HANDOFF previously listed a P0 booking-quiz bug + heavy backlog. This session resolved several of those items and added new ones. Each is documented here so the next session knows exactly what changed and why.

### 1.1 ✅ Internal linking + blog discoverability fix

**Problem:** Blog posts were orphaned. The header nav had only `how-it-works / gallery / branches / about / faq / contact` (no Services, no Blog). The footer's `MotionFooter` had only WhatsApp/phone CTAs + a 3-pill row (FAQ / About / Contact). So a blog post or service hub had **zero inbound internal links** beyond the sitemap and the breadcrumb on the post itself. SEO-fatal, and visitors literally couldn't navigate to them.

**Fix (commit `4501794`):**
- `src/components/ui/nav.tsx` — added two items: `שירותים` → `/services`, `בלוג` → `/blog`. Reordered so Services is first.
- `src/components/ui/motion-footer.tsx` — added a 5-column footer link grid above the bottom copyright bar:
  - **שירותים** (8 links: full-repaint, partial-repaint, color-change, body-shop, polish, scratch-repair, wheel-painting, + index)
  - **מידע** (7 links: how-it-works, wholesale-pricing, insurance, gallery, warranty, customer-guide, faq)
  - **בלוג** (6 article links + index)
  - **אזורי שירות** (6 Wave-1 city pages + branches index)
  - **משפטי** (5 legal pages: privacy, terms, accessibility, refund-policy, security)
- `src/app/globals.css` — added `.mf-footer-links`, `.mf-footer-col` styles + responsive breakpoint (5 columns desktop → 2 columns ≤768px)
- `src/components/blog/blog-post-shell.tsx` — added a "מאמרים נוספים" (Related articles) section below every post body, rendering 3 cards from `BLOG_INDEX` excluding the current slug. Cards include hero image, category, reading time, title, description (3-line clamp), and a hover state. New CSS class `.related-article-card`.

**Net effect:** every blog post is now reachable via header (1 click), footer (1 click from any page on the site), and inter-article links (3 cards on each post). PageRank flow is now bidirectional across the blog cluster instead of 6 isolated leaves.

### 1.2 ✅ /book quiz mobile-Safari popup blocker fix

**Problem:** The HANDOFF flagged a P0 "quiz isn't working" with 7 candidate causes. Live testing showed the desktop happy path was fine — POST to `/api/lead` returned 200, Make.com webhook fired, Vercel Blob persisted. The actual fault was cause #4 (popup blocker on mobile Safari): the old code did `await fetch(...)` BEFORE `window.open(...)`. Once the JS engine yields for the await, mobile Safari treats the user-gesture context as consumed and silently blocks `window.open`. So mobile users completed the quiz, saw nothing happen, and bounced.

**Fix (commit `4501794`, `src/components/ui/booking-quiz.tsx` lines ~134-189):**
1. Build the WhatsApp URL up-front, BEFORE the await
2. Call `window.open(waUrl, "_blank", "noopener,noreferrer")` synchronously inside the click handler — this preserves the user-gesture context
3. Add `keepalive: true` to the fetch so the lead-save survives even if the page is unloaded
4. If `window.open` returned `null` (popup blocker fired anyway): fall back to `window.location.href = waUrl` so the user still reaches WhatsApp (in the same tab instead of a new one)
5. If the API call fails AFTER the WA tab opened: close the orphan tab via `waTab.close()` and surface the error

**Verification on dev:** quiz walked through all 6 steps; intercepted `window.open` fires at order 0 (before any fetch); fetch carries `keepalive: true`; success state renders.

### 1.3 ✅ Removed dissonant fake-car gallery from homepage and /gallery

**Problem (operator-flagged 2026-05-04):** Both the homepage §5 ("רכבים שצבענו לאחרונה") and the `/gallery` page rendered a grid of named cars (e.g. `קיה ספורטאז' · 2020 · ראשון לציון`, `סובארו XV · 2016 · ירושלים`) where each card's image was a generic service-type illustration from `/public/images/BETTER/` (e.g. a wheel-painting close-up under the Kia card). Big credibility hit — labels said one thing, images showed another.

**Fix (commit `4501794`):**
- `src/app/page.tsx`:
  - Removed the `cars` array (was 5 fake cars + paths to `/images/BETTER/*-painting.png`)
  - Removed the `galleryFlare = useMouseFlare(...)` hook call (was only used by this section)
  - Removed the entire §5 gallery `<div>` block (TypeOnScroll heading, services-grid, scard-img treatments, the bottom CTA card)
  - Renumbered §6 → §5 in the comment
- `src/app/gallery/page.tsx`:
  - Removed the `PROJECTS` array (was 6 fake cars)
  - Removed the project-grid markup
  - Removed the lead-in `<SubSection>` ("לפני ואחרי / רכבים שצבענו לאחרונה / אין כאן stock photos") since there are no projects to introduce
  - Page now flows: breadcrumb → testimonials section → CTA. Honest interim state until operator [C.1.1] supplies real before/after photos.

`mirrorStyle` constant was kept (still used elsewhere on the homepage). No other refs broken.

### 1.4 ✅ Removed fake co-founders ירין / עמית from /about

**Problem:** `/about` had a "team" block claiming Kontrol was founded by "קאל, ירין ועמית — שלושה שותפים שווים" (three equal partners). Operator confirmed those names are NOT real partners.

**Fix (commit `4501794`, `src/app/about/page.tsx` ~line 61):**
- Old: `kicker="הצוות"` + `title="3 שותפים, חלוקה שווה, מטרה אחת."` + body naming the three.
- New: `kicker="הסיפור"` + `title="מייסד אחד, רשת שותפים, מטרה אחת."` + body reframes Kael as sole founder with the partner-shop network as "the team" — consistent with how the rest of the site already positions the model.
- Sanity check via grep: `ירין` returns 0 hits across `src/`. `עמית` only appears as a substring of the unrelated word `חד-פעמית` in `public/prelander-*.html` (a false positive — those prelander files are NEVER edited per memory).

### 1.5 ✅ Domain switch (in flight — see Section 0.5 for the full status table)

Files touched in commit `f10cc0c`:
- `src/lib/site-config.ts`: `SITE_URL` → `https://kontrolauto.co.il`
- `src/app/layout.tsx`: `metadataBase` and `openGraph.url` → `.co.il`
- `src/app/api/capi/route.ts`: `event_source_url` fallback → `.co.il`
- `public/llms.txt`: 12 absolute URLs swapped from `.net` to `.co.il`. The two `homekontrol.net` references (smart-lock sister brand) intentionally preserved.
- `docs/HANDOFF.md`: replaced `.net` with `.co.il` in operator-facing references (this file is now further rewritten — see Section 0.5)

Vercel CLI actions in this session:
```bash
vercel domains add kontrolauto.co.il                        # added to project
vercel dns add kontrolauto.co.il @ TXT "google-site-verification=..."  # GSC verification
```

What was deliberately NOT touched yet, awaiting DNS propagation:
- `.net → .co.il` redirect (would currently bounce traffic to a broken hostname)
- Email addresses on `@kontrolauto.net` (operator must set up MX + mailboxes first)

---

## 2 — Earlier-session shipped baseline (snapshot — do not re-do)

The full revamp from the 2026-05-03 session is still the foundation. ~140 pages live:

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

**Sitemap:** 131 URLs at `/sitemap.xml` (auto-generated from `src/app/sitemap.ts`, pulls `SITE_URL` from `site-config.ts` so it follows the domain swap automatically).

**llms.txt:** `/llms.txt` for AI search crawlers — now references `.co.il`.

**Redirects (in `next.config.ts`):**
- `/ashdod` → `/branches/ashdod`
- `/rishon-letzion` → `/branches/rishon-letzion`
- `/modiin` → `/branches/modiin`
- `/cities` → `/branches`
- (the `.net → .co.il` host-based redirect is NOT YET added — see Section 0.5)

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

### 🔴 P0 — Domain migration completion (blocks safe public marketing on the new domain)

1. **Wait for `.co.il` DNS propagation** (Section 0.5). Re-check via `vercel domains inspect kontrolauto.co.il` until "Current Nameservers" shows ns1/ns2.vercel-dns.com.
2. **Confirm Vercel auto-provisioned the SSL cert.** Once the NS delegation is visible to Vercel, Let's Encrypt issuance happens within ~30 sec. Verify with `curl -sI https://kontrolauto.co.il`.
3. **Enable the `.net → .co.il` 301 redirect** (dashboard toggle preferred — see 0.5 table).
4. **Verify in Google Search Console** — the TXT record is already in DNS. Click Verify in the new `kontrolauto.co.il` property.
5. **Submit `https://kontrolauto.co.il/sitemap.xml`** to GSC + Bing Webmaster.
6. **Use GSC Change-of-Address tool** on the OLD `.net` property to formally point at `.co.il`. This is the official mechanism Google honors for preserving link equity across a domain change.
7. **Monitor 14 days** — watch GSC for crawl errors and the impression curve cross-over from `.net` to `.co.il`.

### 🟠 P1 — Operator inputs to wire (placeholders that visibly render as `{{...}}` to real visitors)

The site is live with placeholders. **Visitors literally see `{{COMPANY_NUMBER}}` in the footer right now** — this is the most embarrassing of all and should be filled first.

Use `grep -rn '{{' src/ public/ docs/` to find every occurrence. Categorized list (see also the operator-facing summary message in chat history dated 2026-05-04):

**🔴 Tier 1 — blocks launch (visible literal text + legal compliance)**
- `{{COMPANY_NUMBER}}` — לוחמים בצבע ח.פ. (operator [G.3]) — appears in footer copyright on every page, /about, /contact
- `{{STREET_ADDRESS}}`, `{{POSTAL_CODE}}` (and `LEGAL_ADDRESS` object in site-config.ts) — operator [G.2]
- `HQ_GEO` lat/lng — currently Ashdod center placeholder in `src/lib/site-config.ts`
- `{{BUSINESS_HOURS}}` — operator [F.3.1] — also `HOURS_SPEC` schema array in site-config.ts
- Privacy / terms / accessibility / refund / vulnerability disclosure full text (operator [G.4-G.9]) — files: `/privacy`, `/terms`, `/accessibility` (legally required in Israel — תקנות הנגישות 5772-2013), `/refund-policy`, `/security`

**🟠 Tier 2 — visible "blanks" in copy, smells fake**
- `{{LEAD_TIME_DAYS}}` — typical next-available-slot in days (operator [F.1.1]) — appears in homepage FAQ + 2 service price FAQs
- `{{WARRANTY_TERMS}}` — operator [F.1.2] — /warranty + 3 service FAQs
- `{{PAYMENT_METHODS}}` / `{{PAYMENT_METHODS_AND_INSTALLMENTS}}` — operator [F.2.7]
- 4 trust-strip metrics in `src/components/home/trust-strip.tsx` — currently realistic placeholder integers (1247 / 38 / 24 / ₪6,500). Round numbers look invented. Swap with operator [D.1-D.5]
- `{{KAEL_FULL_NAME}}` — blog author display name on all 6 articles + Article schema author

**🟡 Tier 3 — credibility builders, not blocking**
- `{{CUSTOMER_NAME_1..3}}` — testimonials in /gallery (operator [C.3.1])
- Founder portrait for /about (operator [C.1.3])
- Real before/after photos for /gallery (operator [C.1.1]) — page is empty after this session's gallery removal until operator supplies these
- Social URLs: `{{FACEBOOK_URL}}`, `{{INSTAGRAM_URL}}`, `{{TIKTOK_URL}}`, `{{YOUTUBE_URL}}` in `site-config.ts` (operator [B.2.2-5]). Leave blank if a channel doesn't exist — don't link dead handles.

**🟡 Tier 4 — B2B contact phones (4 separate or 1 shared)**
- `{{B2B_PHONE_OR_GENERAL}}` — /b2b/fleets
- `{{PARTNERSHIPS_PHONE}}` — /b2b/insurance
- `{{DEALERS_PHONE}}` — /b2b/dealerships
- `{{PARTNERS_PHONE}}` — /partners/body-shops

**🟢 Tier 5 — per-service pricing details**
- `{{CALIPER_PAINTING_PRICE}}` (₪600-1200 typical) in /services/caliper-painting
- `{{WHEEL_PAINTING_PRICE_PER_4}}` in /services/wheel-painting
- `{{POLISH_STANDALONE_PRICE}}` and `{{POLISH_HOME_DELIVERY_FEE}}` in /services/polish + price page
- `{{LICENSE_UPDATE_FEE}}` in /services/color-change/price
- `{{HEADLIGHT_RESTORATION_WARRANTY}}` in /services/headlight-restoration/price
- `{{WARRANTY_TERMS_POST_ACCIDENT}}` in /services/body-shop/post-accident
- `{{SERVICE_AREA_FAR_DETAILS}}` in /services/pickup-delivery (Eilat/Metula far-region notes)

**🟢 Tier 6 — 45 city monthly counts (mostly skippable)**
Each `/branches/[city]` page has a `{{<CITY>_MONTHLY_COUNT}}` placeholder for "approximate cars/month painted in this area". Strong recommendation: either give one global range and templatize, or remove the line entirely. Filling 45 unique numbers is busywork that visitors don't notice.

### 🟠 P1 — Env vars on Vercel (analytics fire once these are set)

Set these in Vercel project settings → Environment Variables. The site already reads them; setting them turns analytics on without a code change.

```
NEXT_PUBLIC_GA4_ID=G-...
NEXT_PUBLIC_GTM_ID=GTM-...
NEXT_PUBLIC_META_PIXEL_ID=...
META_CAPI_TOKEN=...
META_DATASET_ID=...   (often equal to META_PIXEL_ID)
```

Existing env vars on Vercel that should already be set (used by `/api/lead` flow):
```
BLOB_READ_WRITE_TOKEN=...   (for Vercel Blob writes)
ADMIN_TOKEN=...             (for /api/leads admin endpoint)
```

### 🟠 P1 — Email migration to `@kontrolauto.co.il`

Once operator sets up MX + mailboxes on the new domain, swap the addresses. Files to touch:
- `src/lib/site-config.ts` — `EMAIL` constant
- `src/app/contact/page.tsx` — info@
- `src/app/b2b/insurance/page.tsx` — partnerships@
- `src/app/b2b/fleets/page.tsx` — b2b@
- `src/app/b2b/dealerships/page.tsx` — dealers@
- `src/app/security/page.tsx` — security@
- `src/app/partners/body-shops/page.tsx` — partners@

A single sed across these files works: `sed -i 's|@kontrolauto\.net|@kontrolauto.co.il|g'`. After: `grep -rn 'kontrolauto\.net' src/` should return only the smart-lock sister-brand reference (if any) and zero email matches.

### 🟡 P2 — Operator-supplied photography (replace placeholders / generated images)
- Real customer before/afters for `/gallery` (operator [C.1.1]). The page is currently empty after this session's grid removal (only testimonials + CTA remain). Adding real photos is the recovery path.
- Founder portrait for `/about` (operator [C.1.3]). Add to about page.
- Real partner-shop interior photos. The current `/about/about-paint-shop-tour.png` is generated — fine for now.
- Insurance partner logos — TRADEMARKED, source from each insurer's brand kit. Or remove logos and keep text-only treatment. Get legal check.

### 🟡 P2 — Sanity blog setup (operator [H.7] confirmed; H.x for API keys)
Currently 6 mechanism articles are hardcoded as React components in `src/data/blog/articles/*.tsx`. The brief calls for Sanity blog. Plan:
1. Create a NEW Sanity project (separate from smart-lock per memory `policy_sanity_separate_workspaces.md`)
2. Schema: title, slug, author (with photo + bio + social), publishedAt, category, tags, body (PortableText), heroImage, faq block, related articles
3. Migrate the 6 hardcoded articles into Sanity
4. Update `src/data/blog/index.ts` to fetch from Sanity instead of static `BLOG_INDEX`
5. Keep the existing `BlogPostShell` interface; just swap data source. **Note:** this session added a "Related Articles" feature that reads from `BLOG_INDEX` directly — when migrating to Sanity, make sure the new fetcher returns the same shape so `BlogPostShell` continues to render related cards without changes.

Sanity install: `npm install @sanity/client @sanity/image-url next-sanity sanity`. Studio config: `sanity init` with new project.

### 🟡 P2 — SEO post-launch (per brief PART 11; some items overlap with P0 domain migration)
- ✅ Sitemap.xml exists at `https://kontrolauto.co.il/sitemap.xml` (auto-generated, ~131 URLs)
- ✅ GSC TXT verification record added to DNS
- ⏳ Submit sitemap to GSC + Bing Webmaster (after DNS propagates)
- ⏳ Verify schema on Google Rich Results Test for at least 5 page types (homepage, /services/full-repaint, /branches/ashdod, /blog/why-car-painting-is-expensive, /faq)
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

### 🟡 P2 — Mobile testing for the booking quiz fix (this session's mobile-Safari fix is unverified on real hardware)
The fix in 1.2 above was verified in dev preview; the actual real-device test (open WhatsApp from real iPhone Safari, not just emulated) hasn't happened. Next session should:
1. Visit `https://kontrolauto.co.il/book` on a real iPhone (Safari)
2. Walk through all 6 steps
3. Confirm WhatsApp opens automatically on submit (not blocked)
4. Repeat on Android Chrome
5. If the popup is still blocked on iPhone Safari, the fallback path uses `window.location.href` so worst case is same-tab navigation — verify that's smooth

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
- **Mobile testing on real devices** hasn't happened (also referenced in P2 quiz item above).

### 🟢 P3 — Pre-existing tech debt (NOT regressions, predates these sessions)
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
│   │   └── BETTER/             (legacy MaxColor service-type images — homepage homepage gallery removed 2026-05-04 but other usages on homepage remain. Check before deleting.)
│   ├── llms.txt                (AI-search crawler manifest — now references kontrolauto.co.il)
│   └── prelander-1..4.html     (existing pre-lander HTML — not part of this site, NEVER edit)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── lead/route.ts        (existing — DO NOT change payload shape)
│   │   │   ├── leads/route.ts       (admin read endpoint)
│   │   │   └── capi/route.ts        (Meta CAPI mirror; event_source_url fallback now .co.il)
│   │   ├── about/, accessibility/, blog/, book/, branches/, b2b/, contact/,
│   │   │   customer-guide/, faq/, gallery/, how-it-works/, insurance/, partners/,
│   │   │   privacy/, refund-policy/, security/, services/, terms/, thank-you/,
│   │   │   warranty/, wholesale-pricing/   (all pages)
│   │   ├── branches/[slug]/page.tsx  ← dynamic city route, reads from src/data/cities.ts
│   │   ├── insurance/[slug]/page.tsx ← dynamic insurance route, reads from src/data/insurance.ts
│   │   ├── blog/[slug]/page.tsx      ← dynamic blog route, reads from src/data/blog/index.ts
│   │   ├── layout.tsx                (Heebo font, Hebrew RTL, sitewide schema, analytics, sticky WA, metadataBase=co.il)
│   │   ├── page.tsx                  (homepage with 3D scroll — DO NOT REMOVE existing animations; §5 fake-car gallery REMOVED 2026-05-04)
│   │   ├── robots.ts, sitemap.ts, sitemap.html/page.tsx, not-found.tsx, thank-you/page.tsx
│   ├── components/
│   │   ├── analytics/                (GA4/GTM/Pixel scripts + UtmCapture)
│   │   ├── blog/blog-post-shell.tsx  (now also renders related-articles cards)
│   │   ├── home/                     (homepage v2 sections: whats-included, mechanism-steps, trust-strip, objection-handler, homepage-faq, final-cta)
│   │   ├── insurance/insurance-page-shell.tsx
│   │   ├── schema/                   (10 schema.org JSON-LD components — Organization, WebSite, LocalBusiness, Service, FAQPage, Article, BreadcrumbList, HowTo, ContactPage, JsonLd primitive)
│   │   ├── services/service-page-shell.tsx  (HUB_HERO_IMAGES map lives here)
│   │   └── ui/
│   │       ├── nav.tsx               (now includes Services + Blog)
│   │       ├── sub-page-layout.tsx, breadcrumb.tsx
│   │       ├── city-page.tsx         (BRANCH_HERO_IMAGES map lives here)
│   │       ├── booking-quiz.tsx      (mobile-Safari popup-blocker fix shipped 2026-05-04)
│   │       ├── stub-page.tsx         (used by legal stub pages)
│   │       ├── sticky-whatsapp.tsx, placeholder.tsx
│   │       └── motion-footer.tsx     (now includes 5-column footer link grid above the bottom bar)
│   │       └── (existing: hero-background.tsx, hero-price.tsx,
│   │             section-background.tsx, scroll-line.tsx, type-on-scroll.tsx,
│   │             typewriter.tsx — DO NOT REMOVE)
│   ├── data/
│   │   ├── cities.ts                 (45 city entries for /branches/[slug])
│   │   ├── insurance.ts              (10 insurance partners)
│   │   └── blog/
│   │       ├── index.ts              (BLOG_INDEX + ARTICLE_BODIES dynamic import map)
│   │       └── articles/             (6 hardcoded React-component articles)
│   └── lib/
│       ├── site-config.ts            (NAP, hours, social, schema constants — single source of truth; SITE_URL=co.il)
│       ├── analytics.ts              (track helper)
│       ├── utm.ts                    (UTM persistence + buildWhatsappUrl)
│       └── utils.ts                  (cn() shadcn helper)
├── next.config.ts                    (4 redirects + image config; .net→.co.il host redirect NOT YET ADDED — see Section 0.5)
├── .env.local.example                (env vars to set on Vercel — see P1 above)
└── .env.local                        (local dev vars — gitignored)
```

---

## 5 — Conventions & gotchas

**Quote escaping in JSX:** Hebrew copy with `מע"מ` inside JSX strings will break parsing. Use single quotes for the outer string OR escape with `&quot;`/`&ldquo;`. Hit this 4 times during the original build — every fix in commit history. If you write Hebrew copy with `"` inside, mind this.

**`<a>` for internal navigation in blog articles:** Don't use raw `<a href="/...">` for internal links in blog article components. Use `<Link>` from `next/link`. Two articles already converted (`why-car-painting-is-expensive.tsx`, `insurance-vs-private-paint-pricing.tsx`). When adding new articles, import Link.

**Service hero images map:** Adding a new service page that should have a hero image? Add an entry to `HUB_HERO_IMAGES` in `service-page-shell.tsx`. Format: `"/services/<path>": { folder: "services" | "color-change", slug: "<image-slug>", alt: "Hebrew alt" }`.

**Branch hero images map:** Same pattern in `BRANCH_HERO_IMAGES` in `city-page.tsx`. Keyed by slug (not full URL).

**Image generation:** Use Higgsfield gpt_image_2, quality `high`, resolution `1k`, aspect `16:9`. Style baseline preserved in `docs/IMAGE_ASSETS.md`. Always inspect before approving — regenerate on AI tells / warped surfaces / broken text.

**Dev server port:** 3001 (not 3000) per `.claude/launch.json`.

**Build before push:** `npm run build` produces 100+ static routes. If it fails, investigate before committing — Vercel will fail the deploy too.

**Don't commit `.env.local`:** It's gitignored via `.env*.local` rule in `.gitignore`. If you add a new env var, also add it to `.env.local.example` (which IS committed).

**Mobile-Safari popup blocker (booking-quiz pattern):** When you have a click handler that does `await fetch(...)` then `window.open(...)`, mobile Safari will silently block the popup because the user-gesture context is lost during the await. The pattern in `booking-quiz.tsx:submit` is the canonical fix: open synchronously BEFORE the await, use `keepalive: true` on the fetch, and have a `window.location.href` fallback when the popup returns null. Re-use this pattern for any future flows that submit data + redirect.

**Domain references during migration:** Until the `.net → .co.il` redirect is enabled, BOTH domains serve the same content. Sitemap and canonical tags already point to `.co.il` — that's correct. Don't add hardcoded `https://kontrolauto.net/...` URLs anywhere in code; use `SITE_URL` from `site-config.ts`. Email addresses are the one exception — they remain `@kontrolauto.net` until operator sets up MX records on `.co.il`.

**Don't strip the homepage 3D / motion infrastructure:** Per memory `feedback_no_fiber_threejs.md` and the explicit notes in `src/app/page.tsx` (`useMouseFlare`, `useHeroScroll`, `Typewriter`, `TypeOnScroll`, `ScrollLine`, `MotionFooter` magnetic buttons). The 2026-05-04 cleanup removed `galleryFlare = useMouseFlare(...)` because that specific instance was tied to the deleted §5 gallery section — that was scoped, intentional removal, not a stripping of the broader motion stack.

---

## 6 — How to deploy

```bash
cd "D:/1STPROH/react-site"

# Make changes
git add -A
git commit -m "..."
git push origin main
```

GitHub auto-deploy to Vercel may not be wired (last sessions it didn't trigger reliably). Manual deploy:

```bash
vercel --prod --yes      # not actually --yes; CLI doesn't accept that flag — use the next form instead
vercel --prod            # interactive; press enter through prompts
```

The CLI is at `/c/Users/dtona/AppData/Roaming/npm/vercel`. Project is linked via `.vercel/project.json`. Production deploys auto-alias to BOTH `kontrolauto.net` and `kontrolauto.co.il` (once `.co.il` DNS propagates).

GitHub remote URL: the repo moved orgs from `kontrol-ship-it` to `Kontrol-IL` — the old URL still pushes via redirect, but for fresh clones use `https://github.com/Kontrol-IL/kontrol-site.git`.

---

## 7 — Verifying after a change

```bash
# TypeScript
npx tsc --noEmit

# Lint (only check authored files; pre-existing warnings in code we don't own are OK)
npx eslint --quiet src/app src/components src/lib src/data

# Build
npm run build

# Live smoke tests on BOTH domains during migration window
curl -sI https://kontrolauto.net/ | head -1     # currently the working domain
curl -sI https://kontrolauto.co.il/ | head -1   # may still fail until DNS + cert propagate
curl -s https://kontrolauto.net/sitemap.xml | grep -c '<loc>'    # should be ~131; URLs inside should already be .co.il

# Domain-migration-specific verification
vercel domains inspect kontrolauto.co.il        # nameserver delegation status
nslookup kontrolauto.co.il 8.8.8.8              # public DNS view
nslookup -type=TXT kontrolauto.co.il ns1.vercel-dns.com  # GSC verification record
```

Once the migration is complete:

```bash
# .net should 301 to .co.il
curl -sI https://kontrolauto.net/ | head -3
# Expected:
# HTTP/2 308 (or 301)
# location: https://kontrolauto.co.il/
```

---

## 8 — Reading order for the next session

1. Read this file (`docs/HANDOFF.md`) — start with **Section 0.5** (domain migration status) since that's the active in-flight work
2. Read `docs/IMAGE_ASSETS.md` if doing image work
3. Run `vercel domains inspect kontrolauto.co.il` to see current DNS state — that determines whether the redirect step is unblocked
4. If DNS has propagated and SSL cert is provisioned: enable the `.net → .co.il` redirect (Section 0.5 → "Two implementation paths")
5. If DNS has NOT propagated: pick from the P1 backlog instead — operator placeholders (Tier 1) are the most visibly broken thing on the live site

If user asks for any task during the migration window: be aware that the live site is in a transitional state (both `.net` and `.co.il` should be considered, sitemap/canonical already points at `.co.il`, redirect not yet active). Don't enable the redirect prematurely — see Section 0.5 for why.
