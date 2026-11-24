import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { doctor } from "@/data";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} con subespecialidad en ${doctor.subspecialty} en ${doctor.city}. Urología ginecológica, ginecología y obstetricia.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
    locale: "es_MX",
    type: "website",
    images: [
      { url: "/icon-512.png", width: 512, height: 512, alt: `${doctor.title} ${doctor.name} — ${doctor.specialty}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b498c4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${playfair.variable} ${manrope.variable} font-sans`}>
      <body className="pb-24 md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
