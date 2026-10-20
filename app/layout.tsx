import type { Metadata } from "next";
import { Inter, Playfair_Display, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jupiter – Стартап-команда, которая помогает основателям и бизнесам пройти путь от сырой идеи до работающего цифрового продукта.",
  description:
    "Мы превращаем идеи людей в цифровые продукты — быстро, вдумчиво и с фокусом на запуск",
  icons: {
    icon: "/assets/logos/logo_short.svg",
    apple: "/assets/logos/logo_short.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black font-sans text-white">{children}</body>
    </html>
  );
}
