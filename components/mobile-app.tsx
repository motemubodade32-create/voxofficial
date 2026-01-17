import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Download, Zap, Gift, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MobileApp() {
  const features = [
    {
      icon: Zap,
      title: "Szybsze ładowanie gier",
      description: "Optymalizacja pod kątem urządzeń mobilnych",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Gift,
      title: "Ekskluzywne bonusy",
      description: "Specjalne promocje tylko dla użytkowników aplikacji",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Shield,
      title: "Omijanie blokad",
      description: "Aplikacja zawsze łączy się z aktywnym serwerem",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: CheckCircle,
      title: "Powiadomienia",
      description: "Natychmiastowe alerty o promocjach i turniejach",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card/20" id="aplikacja">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Dostępne na iOS i Android</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                <span className="text-gradient">Aplikacja Mobilna</span>
                <br />
                VOX Casino
              </h2>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Graj mobilnie i odbieraj ekskluzywne bonusy. Aplikacja VOX Casino zmienia Twój telefon w przenośne
                centrum rozrywki. Pobierz już teraz i graj gdziekolwiek jesteś!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card/50">
                      <div className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
  <Link href="/play" className="w-full sm:w-auto">
    <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
      <Download className="w-5 h-5 mr-2" />
      Pobierz dla Android
    </Button>
  </Link>
  <Link href="/play" className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="outline"
      className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
    >
      <Download className="w-5 h-5 mr-2" />
      Pobierz dla iOS
    </Button>
  </Link>
</div>
            </div>

            {/* Right Content - Mobile Screenshot */}
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative z-10 max-w-sm mx-auto">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
                  {/* Phone Body */}
                  <div className="relative bg-gray-900 rounded-[40px] p-3 shadow-2xl border-[12px] border-gray-800">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] aspect-[9/19.5]">
                      {/* Screenshot */}
                      <Image
                        src="/mobile.jpg" // Замените на путь к вашему скриншоту
                        alt="VOX Casino Mobile App"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 280px, 320px"
                      />
                      
                      
                      
                      
                    </div>
                  </div>
                  
                  {/* Side Buttons */}
                  <div className="absolute top-24 -right-1 w-1 h-8 bg-gray-800 rounded-l"></div>
                  <div className="absolute top-40 -right-1 w-1 h-14 bg-gray-800 rounded-l"></div>
                  <div className="absolute top-64 -right-1 w-1 h-14 bg-gray-800 rounded-l"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="absolute bottom-20 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg rotate-12">
                +50% BONUS
              </div>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
  <Card className="bg-card border-border hover:border-primary/30 transition-all group">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src="/android.jpg" // Путь к логотипу Android
            alt="Android Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
            Instalacja na Android
          </h3>
          <p className="text-sm text-gray-400">Prosty proces w 4 krokach</p>
        </div>
      </div>
      <ol className="space-y-3">
        {[
          "Pobierz plik VOX Casino APK bezpośrednio z naszej strony",
          "Zezwól na instalację z nieznanych źródeł w ustawieniach",
          "Otwórz plik i zainstaluj aplikację",
          "Zaloguj się i zacznij grać z bonusem!",
        ].map((step, index) => (
          <li key={index} className="flex items-start gap-3 group/step hover:bg-primary/5 p-2 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/step:bg-primary/30 transition-colors">
              <span className="text-primary text-sm font-bold">{index + 1}</span>
            </div>
            <span className="text-gray-300 group-hover/step:text-white transition-colors">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Wersja: 2.4.1 • Rozmiar: 45 MB</span>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="bg-card border-border hover:border-secondary/30 transition-all group">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src="/applelogo.png" // Путь к логотипу Apple
            alt="Apple Logo"
            width={32}
            height={32}
            className="object-contain filter brightness-0 invert"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-white group-hover:text-secondary transition-colors">
            Instalacja na iOS
          </h3>
          <p className="text-sm text-gray-400">Zainstaluj jako PWA aplikację</p>
        </div>
      </div>
      <ol className="space-y-3">
        {[
          "Pobierz profil konfiguracyjny (PWA) z naszej strony",
          "Przejdź do Ustawienia → Ogólne → Profile",
          "Zatwierdź instalację profilu VOX Casino",
          "Aplikacja pojawi się na ekranie głównym",
        ].map((step, index) => (
          <li key={index} className="flex items-start gap-3 group/step hover:bg-secondary/5 p-2 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/step:bg-secondary/30 transition-colors">
              <span className="text-secondary text-sm font-bold">{index + 1}</span>
            </div>
            <span className="text-gray-300 group-hover/step:text-white transition-colors">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span>Wymaga iOS 14.0+ • PWA Application</span>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
        </div>
      </div>
    </section>
  )
}