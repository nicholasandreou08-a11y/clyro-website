import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clyro — Simple practice software for health professionals",
    template: "%s | Clyro",
  },
  description:
    "Appointments, patient records, and clinical notes in one simple system. Designed for physiotherapists, dieticians, psychologists and clinics in Greece & Cyprus.",
  metadataBase: new URL("https://clyroapp.com"),
  openGraph: {
    title: "Clyro — Simple practice software for health professionals",
    description:
      "Appointments, patient records, and clinical notes in one simple system. Built for Greece & Cyprus.",
    url: "https://clyroapp.com",
    siteName: "Clyro",
    locale: "el_GR",
    alternateLocale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyro — Practice software for health professionals",
    description:
      "Appointments, patient records, and notes in one simple system.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16212D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
