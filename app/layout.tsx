import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    canonical: "https://vox-polska-online.com.pl",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171a29",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
