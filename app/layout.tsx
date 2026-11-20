import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightBytes Solutions | Smart Systems. Real Growth.",
  description:
    "BrightBytes Solutions helps businesses grow with digital marketing, business automation, Zoho and Odoo solutions. Founded by Luvala Kelvin in Nairobi, Kenya.",
  keywords: [
    "BrightBytes Solutions",
    "Digital Marketing",
    "Business Automation",
    "Zoho",
    "Odoo",
    "Nairobi",
  ],
  openGraph: {
    title: "BrightBytes Solutions | Smart Systems. Real Growth.",
    description:
      "Practical technology and digital solutions for businesses ready to grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
