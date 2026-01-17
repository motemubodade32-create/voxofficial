import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const partners = [
    { name: "VISA", logo: "/VISA.svg" },
    { name: "MasterCard", logo: "/MasterCard.svg" },
    { name: "Bitcoin", logo: "/Bitcoin.svg" },
    { name: "Blik", logo: "/Blik.svg" },
    { name: "Paysafecard", logo: "/Paysafecard.svg" },
  ]

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="relative w-40 h-12 md:w-48 md:h-14">
                  <Image
                    src="/logo2.png" // Ваше лого
                    alt="VOX Casino"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
                VOX Casino to najlepsze legalne kasyno online w Polsce. Oferujemy ponad 5000 gier, bonusy do 12 000 PLN,
                płatności BLIK i szybkie wypłaty. Dołącz do tysięcy zadowolonych graczy!
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Licencja Curacao eGaming</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">18+</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-white mb-4">Szybkie linki</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#gry" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    Gry
                  </Link>
                </li>
                <li>
                  <Link href="#bonusy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    Bonusy
                  </Link>
                </li>
                <li>
                  <Link href="#platnosci" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    Płatności
                  </Link>
                </li>
                <li>
                  <Link href="#aplikacja" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    Aplikacja
                  </Link>
                </li>
                <li>
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    Polityka Prywatności
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-white mb-4">Kontakt</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Live Chat 24/7
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@voxcasino.pl"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    support@voxcasino.pl
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="relative w-24 h-12 md:w-20 md:h-10">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left">
                © 2026 VOX Casino. Wszelkie prawa zastrzeżone. Graj odpowiedzialnie.
              </p>
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">
                  Polityka Prywatności
                </Link>
                <span>•</span>
                <Link href="/regulamin" className="hover:text-primary transition-colors">
                  Regulamin
                </Link>
                <span>•</span>
                <Link href="/odpowiedzialna-gra" className="hover:text-primary transition-colors">
                  Odpowiedzialna Gra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}