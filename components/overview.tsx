import { Shield, Zap, Smartphone, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Overview() {
  return (
    <section className="py-12 md:py-20 lg:py-24" id="overview">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Dlaczego <span className="text-gradient">VOX Casino</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Rynek hazardowy jest ogromny, ale VOX Casino wyróżnia się na tle konkurencji. Oferujemy najlepsze
              doświadczenie gry w Polsce.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  Bezpieczeństwo i Licencja
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Wybierając VOX Casino, wybierasz spokój ducha. Gracze często pytają o legalne kasyno online w Polsce –
                  my działamy na podstawie międzynarodowej licencji Curacao, co sprawia, że Twoje środki są w pełni
                  chronione.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Szyfrowanie SSL 256-bit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Licencja Curacao
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Regularne audyty gier
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">Nowoczesna Technologia</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Platforma VOX Casino działa płynnie na każdym urządzeniu. Niezależnie od tego, czy grasz na
                  komputerze, czy korzystasz z aplikacji mobilnej na smartfonie, doświadczenie jest zawsze na najwyższym
                  poziomie.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Aplikacja mobilna iOS i Android
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Responsywny design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Błyskawiczne ładowanie
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">Ogromna Oferta Gier</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Kasyno VOX to ponad 5000 tytułów od czołowych dostawców. Współpracujemy z gigantami branży, aby
                  dostarczyć Ci najlepsze automaty, stoły na żywo i hity typu Plinko.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Pragmatic Play, NetEnt, Evolution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Kasyno na żywo z prawdziwymi krupierami
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Jackpoty progresywne
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">BLIK i Szybkie Wypłaty</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Jesteśmy dumni, że oferujemy kasyno z BLIK. Wpłaty są natychmiastowe, a wypłaty realizowane w
                  kilkanaście minut. Obsługujemy najpopularniejsze metody płatności w Polsce.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    BLIK – natychmiastowe wpłaty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Kryptowaluty – anonimowość
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Wypłaty w 10-30 minut
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
