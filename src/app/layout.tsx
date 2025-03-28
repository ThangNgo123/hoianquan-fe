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
  title: "Hoianquan",
  description:
    "Experience the quintessence of Vietnamese culinary tradition at Hoi An Quan in Stirling.",
  openGraph: {
    title: "Hoianquan",
    description:
      "Experience the quintessence of Vietnamese culinary tradition at Hoi An Quan in Stirling.",
    images: [
      {
        url: "https://www.mind-gpt.online/banner.png",
      },
    ],
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
