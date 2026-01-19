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
    url: "https://casino-vox-online.com/",
    siteName: "VOX Casino",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "VOX Casino",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOX Casino Polska – Legalne Kasyno Online",
    description: "Graj i wygrywaj w najlepszym kasynie online w Polsce",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://casino-vox-online.com/",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "gambling",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171a29",
}

// Structured Data dla SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "VOX Casino",
  "url": "https://casino-vox-online.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://casino-vox-online.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const casinoData = {
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

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jak znaleźć oficjalną stronę VOX Casino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wpisz w wyszukiwarkę 'VOX Casino online' lub skorzystaj z linków na naszych profilach społecznościowych. Pamiętaj, że nasze legalne kasyno zawsze działa pod bezpieczną domeną z certyfikatem SSL."
      }
    },
    {
      "@type": "Question",
      "name": "Czy oferujecie kasyno online BLIK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, BLIK to nasza specjalność. Możesz dokonywać wpłat natymiastowo za pomocą kodu BLIK, co jest najwygodniejszą metodą płatności w Polsce. Wpłaty są realizowane w czasie rzeczywistym bez żadnych opłat."
      }
    },
    {
      "@type": "Question",
      "name": "Czy VOX Casino jest legalne w Polsce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, jesteśmy legalnym kasynem online działającym na podstawie licencji Curacao eGaming. Twoje dane osobowe i środki finansowe są w pełni chronione dzięki szyfrowaniu SSL 256-bit."
      }
    },
    {
      "@type": "Question",
      "name": "Jak szybko VOX Casino wypłaca pieniądze?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jesteśmy znani jako kasyno z szybkimi wypłatami. Wypłaty na portfele kryptowalutowe i e-wallety są realizowane w 10-30 minut po zatwierdzeniu. Przelewy bankowe zajmują standardowo 1-3 dni robocze."
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Analytics */}
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
        
        {/* Structured Data dla SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(casinoData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        
        {/* Podstawowe meta tagi SEO */}
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Polska" />
        <meta name="geo.position" content="52.229676;21.012229" />
        <meta name="ICBM" content="52.229676, 21.012229" />
        <meta name="language" content="pl" />
        <meta name="rating" content="Adult" />
        <meta name="copyright" content="VOX Casino" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://casino-vox-online.com/" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}