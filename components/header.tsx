import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import HeaderClient from "@/components/HeaderClient"

export default function Header() {
  const navLinks = [
    { href: "#gry", label: "Gry" },
    { href: "#bonusy", label: "Bonusy" },
    { href: "#platnosci", label: "Płatności" },
    { href: "#aplikacja", label: "Aplikacja" },
    { href: "/polityka-prywatnosci", label: "Polityka" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#171a29]/95 backdrop-blur-sm border-b border-[#2a2e45]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10 md:w-40 md:h-12">
              <Image
                src="/logo2.png"
                alt="VOX Casino"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/play" className="block">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Zaloguj się
              </Button>
            </Link>
            <Link href="/play" className="block">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
              >
                Rejestracja
              </Button>
            </Link>
          </div>

          {/* Клиентская часть с мобильным меню */}
          <HeaderClient navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}