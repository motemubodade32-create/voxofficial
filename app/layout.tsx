import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VOX Casino Polska 2026 – Legalne Kasyno Online BLIK | Oficjalna Strona",
  description:
    "VOX Casino to najlepsze legalne kasyno online w Polsce. Graj na prawdziwe pieniądze z BLIK, odbieraj bonusy do 12 000 PLN i ciesz się szybkimi wypłatami. Ponad 5000 gier!",
  keywords:
    "vox casino, kasyno online, kasyno online blik, legalne kasyno, kasyno polska, gry hazardowe, automaty online, wypłaty blik",
  authors: [{ name: "VOX Casino" }],
  openGraph: {
    title: "VOX Casino Polska – Legalne Kasyno Online z BLIK",
    description:
      "Najlepsze kasyno online w Polsce. Bonusy do 12 000 PLN, szybkie wypłaty BLIK, ponad 5000 gier hazardowych.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://casino-vox-online.com/",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171a29",
}

// Структурированные данные для SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Casino",
  "name": "VOX Casino",
  "description": "Legalne kasyno online w Polsce z bonusami do 12 000 PLN i wypłatami BLIK",
  "url": "https://casino-vox-online.com/",
  "logo": "https://casino-vox-online.com/logo.png",
  "sameAs": [
    "https://facebook.com/voxcasino",
    "https://twitter.com/voxcasino",
    "https://instagram.com/voxcasino"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PL"
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "paymentAccepted": ["BLIK", "Credit Card", "Przelewy24", "Cryptocurrency"],
  "currenciesAccepted": ["PLN", "EUR"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Analytics скрипт */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-F3Y8Z0BX2M"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F3Y8Z0BX2M');
            `,
          }}
        />
        
        {/* Структурированные данные для SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Дополнительные метатеги для казино */}
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Polska" />
        <meta name="geo.position" content="52.229676;21.012229" />
        <meta name="ICBM" content="52.229676, 21.012229" />
        <meta name="language" content="pl" />
        <meta name="rating" content="Adult" />
        <meta name="revisit-after" content="2 days" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="VOX Casino" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}