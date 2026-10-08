import type { Metadata } from "next";
import { Public_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Northstar Medical Center | Los Angeles, California",
  description:
    "Northstar Medical Center is a premier academic medical institution in Los Angeles, California, providing world-class specialty care, breakthrough clinical research, and compassionate patient care.",
  keywords: [
    "Northstar Medical",
    "Los Angeles Hospital",
    "Specialty Care",
    "Cardiology",
    "Oncology",
    "Clinical Trials",
    "Beverly Grove",
    "Academic Medical Center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-northstar-charcoal">
        {children}
      </body>
    </html>
  );
}
