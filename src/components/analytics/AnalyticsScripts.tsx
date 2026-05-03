import Script from "next/script";

/**
 * GA4 + GTM + Meta Pixel scripts. Mounted from the root layout.
 * Israel jurisdiction — no consent gating (no GDPR-equivalent law).
 *
 * Set these env vars on Vercel:
 *   NEXT_PUBLIC_GA4_ID         — e.g. G-XXXXXXX
 *   NEXT_PUBLIC_GTM_ID         — e.g. GTM-XXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID  — e.g. 1234567890
 *
 * If any is missing, that block is skipped silently.
 */

const GA4 = process.env.NEXT_PUBLIC_GA4_ID || "";
const GTM = process.env.NEXT_PUBLIC_GTM_ID || "";
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function AnalyticsScripts() {
  return (
    <>
      {GTM && (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM}');`,
            }}
          />
        </>
      )}

      {GA4 && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} strategy="afterInteractive" />
          <Script
            id="ga4"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());gtag('config','${GA4}', { send_page_view: true });`,
            }}
          />
        </>
      )}

      {PIXEL && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,
              'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${PIXEL}');fbq('track','PageView');`,
          }}
        />
      )}
    </>
  );
}

export function GTMNoscript() {
  if (!GTM) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
