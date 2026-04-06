import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "MAX COLOR — הפכו את הצבע למקסימום",
  description: "שירותי צביעת רכב מקצועיים לכל המותגים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body>{children}</body>
    </html>
  );
}
