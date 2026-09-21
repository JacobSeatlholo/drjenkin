import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Aimee Jenkin — Plastic & Reconstructive Surgeon | Cape Town",
  description:
    "Specialist Plastic & Reconstructive Surgeon practicing at Alchimia Clinic, 99 Kloof Street, Gardens, Cape Town. Cosmetic, reconstructive and accessible breast surgery. HPCSA registered, FCS Plast Surg (SA).",
  keywords: [
    "Plastic Surgeon Cape Town",
    "Reconstructive Surgery",
    "Cosmetic Surgery Cape Town",
    "Alchimia Clinic",
    "YourBreast",
    "99 Kloof Street",
    "Dr Aimee Jenkin",
    "Hand Surgery",
    "Microsurgery",
    "Breast Augmentation Cape Town",
  ],
  authors: [{ name: "Dr. Aimee Jenkin" }],
  openGraph: {
    title: "Dr. Aimee Jenkin — Plastic & Reconstructive Surgeon",
    description:
      "Specialist practice at Alchimia Clinic, 99 Kloof Street, Gardens, Cape Town.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-white text-navy font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
