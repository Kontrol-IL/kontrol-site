import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { OrganizationSchema } from "@/components/schema/Organization";
import { WebSiteSchema } from "@/components/schema/WebSite";
import { StickyWhatsapp } from "@/components/ui/sticky-whatsapp";
import { AnalyticsScripts, GTMNoscript } from "@/components/analytics/AnalyticsScripts";
import { UtmCapture } from "@/components/analytics/UtmCapture";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontrolauto.net"),
  title: {
    default: "צביעת רכב במחיר סיטונאי | KONTROL",
    template: "%s | KONTROL",
  },
  description:
    'צביעת רכב מלאה ב־₪3,490 + מע"מ. אנחנו ממלאים שעות תנור פנויות אצל מוסכי צבע מובילים בכל הארץ — אתם משלמים מחיר סיטונאי על אותה איכות.',
  openGraph: {
    title: "צביעת רכב במחיר סיטונאי | KONTROL",
    description: 'צביעת רכב מלאה ב־₪3,490 + מע"מ. בכל הארץ. HQ באשדוד.',
    url: "https://kontrolauto.net",
    siteName: "Kontrol",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body>
        <GTMNoscript />
        <UtmCapture />
        {children}
        <StickyWhatsapp />
        <AnalyticsScripts />
      </body>
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:6702865,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </html>
  );
}
