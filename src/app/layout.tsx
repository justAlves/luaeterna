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
  title: "LuaEterna | Eternize Momentos Especiais com a Lua",
  description: "Crie páginas personalizadas que mostram a fase da lua em datas especiais. Uma forma única e romântica de presentear alguém especial com uma lembrança eterna.",
  keywords: "lua, presente romântico, fase da lua, data especial, lembrança, amor, namoro, casamento, aniversário de namoro",
  authors: [{ name: "LuaEterna" }],
  creator: "LuaEterna",
  metadataBase: new URL('https://luaeterna.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://luaeterna.com.br',
    title: 'LuaEterna | Eternize Momentos Especiais com a Lua',
    description: 'Crie páginas personalizadas que mostram a fase da lua em datas especiais. Uma forma única e romântica de presentear.',
    siteName: 'LuaEterna',
    images: [
      {
        url: '/og-image.png', // Certifique-se de criar esta imagem
        width: 500,
        height: 500,
        alt: 'LuaEterna - Eternize seus momentos especiais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuaEterna | Eternize Momentos Especiais com a Lua',
    description: 'Crie páginas personalizadas que mostram a fase da lua em datas especiais.',
    images: ['/og-image.png'], // Mesma imagem do OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-app_primary`}
      >
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
