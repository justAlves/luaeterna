import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display,  } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuaEterna",
  description: "A Lua do Nosso Amor, Para Sempre - Crie páginas personalizadas que mostram a fase da lua em uma data especial, como uma forma única e romântica de presentear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-app_primary`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
