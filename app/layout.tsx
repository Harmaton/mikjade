import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/mkjlogo.png",
  },
  title: "Mikjade Ventures | Best Interior Designers in Kenya",
  description: "limited company that specializes in interior design, construction, and renovation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-thin">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black overflow-x-hidden relative`}
      >
        {children}
      </body>
    </html>
  );
}
