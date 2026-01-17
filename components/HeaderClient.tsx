"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderClientProps {
  navLinks: Array<{
    href: string
    label: string
  }>
}

export default function HeaderClient({ navLinks }: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleMobileLogin = () => {
    router.push("/play")
    setIsMenuOpen(false)
  }

  const handleMobileRegister = () => {
    router.push("/play")
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="lg:hidden p-2 text-white" 
        aria-label="Menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 py-4 border-t border-[#2a2e45] bg-[#171a29]">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full bg-transparent"
                  onClick={handleMobileLogin}
                >
                  Zaloguj się
                </Button>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  onClick={handleMobileRegister}
                >
                  Rejestracja
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}