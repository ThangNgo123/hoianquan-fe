import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoianquan | Authentic Vietnamese Cuisine in Stirling, UK",
  description:
    "Discover the authentic flavors of Vietnam at Hoi An Quan. Located at 34 Murray Pl, Stirling FK8 2DD, we offer traditional Vietnamese dishes that transport you to the heart of Hoi An.",
  metadataBase: new URL("https://www.hoianquan.co.uk"), // Replace with actual website URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hoianquan - Authentic Vietnamese Restaurant in Stirling",
    description:
      "Experience the quintessence of Vietnamese culinary tradition at our restaurant in the heart of Stirling. Traditional flavors, warm hospitality.",
    images: [
      {
        url: "https://res.cloudinary.com/dj1u21rta/image/upload/v1743154562/Screenshot_2025-03-28_163444_az0uod.png",
        width: 1200,
        height: 630,
        alt: "Hoianquan - Vietnamese Restaurant Interior",
      },
    ],
    siteName: "Hoianquan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoianquan | Vietnamese Cuisine in Stirling",
    description:
      "Traditional Vietnamese dining at 34 Murray Pl. Authentic flavors, warm atmosphere.",
    images: [
      "https://res.cloudinary.com/dj1u21rta/image/upload/v1743154562/Screenshot_2025-03-28_163444_az0uod.png",
    ],
  },
  keywords: [
    "Vietnamese restaurant Stirling",
    "Vietnamese restaurant",
    "Vietnamese cuisine Stirling",
    "Vietnamese cuisine",
    "Vietnamese cuisine UK",
    "Vietnamese food Stirling",
    "Vietnamese food",
    "Vietnamese food Stirling",
    "Vietnamese food UK",
    "Vietnam food",
    "Hoianquan",
    "Vietnamese cuisine UK",
    "Traditional Vietnamese food",
    "Stirling dining",
    "Asian restaurant Scotland",
  ],
  verification: {
    google: "your-google-site-verification-code", // Replace with actual verification code
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "restaurant:contact_info:street_address": "34 Murray Pl",
    "restaurant:contact_info:locality": "Stirling",
    "restaurant:contact_info:postal_code": "FK8 2DD",
    "restaurant:contact_info:country": "United Kingdom",
    "restaurant:contact_info:email": "hoianquan2025@gmail.com", // Replace with actual email
    "restaurant:contact_info:phone_number": "+44 01786 643 524", // Replace with actual phone number
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <div className="min-h-screen bg-black text-amber-100">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
