import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"

export default function BonusSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24" id="bonusy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Bonusy i <span className="text-gradient">Promocje</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Odbierz do 12 000 PLN w bonusach powitalnych i ciesz się cotygodniowymi promocjami
            </p>
          </div>

          {/* Main Bonus Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
  <Card className="bg-gradient-to-br from-primary/20 to-secondary/10 border-primary/40 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
    <CardContent className="p-6 md:p-8 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
          <Gift className="w-6 h-6 text-primary" />
        </div>
        <div>
          <div className="text-sm text-primary font-medium">Bonus Powitalny</div>
          <div className="text-2xl md:text-3xl font-bold text-white">Do 12 000 PLN</div>
        </div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Podwajamy Twoją pierwszą wpłatę! Wpłacasz 1000 zł, grasz za 2000 zł. Plus setki darmowych spinów na
        najpopularniejsze sloty.
      </p>
      <ul className="space-y-2 mb-6 text-sm text-gray-300">
        <li className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          100% bonus od pierwszego depozytu
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          200 darmowych spinów
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          Wager 35x
        </li>
      </ul>
      <Button 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
        asChild
      >
        <Link href="/play">Odbierz bonus</Link>
      </Button>
    </CardContent>
  </Card>

  <Card className="bg-gradient-to-br from-secondary/20 to-accent/10 border-secondary/40 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
    <CardContent className="p-6 md:p-8 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
          <Crown className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <div className="text-sm text-secondary font-medium">HighRoller Bonus</div>
          <div className="text-2xl md:text-3xl font-bold text-white">Do 20 000 PLN</div>
        </div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Dla graczy lubiących wysokie stawki przygotowaliśmy ekskluzywny pakiet z niższym wagerem i osobistym
        menedżerem konta.
      </p>
      <ul className="space-y-2 mb-6 text-sm text-gray-300">
        <li className="flex items-center gap-2">
          <Star className="w-4 h-4 text-secondary" />
          Minimalna wpłata 500 PLN
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-4 h-4 text-secondary" />
          Osobisty menedżer VIP
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-4 h-4 text-secondary" />
          Wager 25x
        </li>
      </ul>
      <Button 
        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
        asChild
      >
        <Link href="/play">Zostań HighRollerem</Link>
      </Button>
    </CardContent>
  </Card>
</div>

          {/* Additional Promotions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-card border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Turbo Czwartek</h3>
                <p className="text-sm text-gray-400">Cotygodniowe doładowanie i cashback</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Cashback</h3>
                <p className="text-sm text-gray-400">Do 15% zwrotu z przegranych zakładów</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Turnieje</h3>
                <p className="text-sm text-gray-400">Rywalizuj o pule nagród do 50 000 PLN</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Program VIP</h3>
                <p className="text-sm text-gray-400">5 poziomów ekskluzywnych nagród</p>
              </CardContent>
            </Card>
          </div>

          {/* Wagering Strategy */}
          <Card className="mt-8 bg-card/50 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">Jak skutecznie obrócić bonus? 💡</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Najlepsze strategie:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Wybieraj sloty z RTP powyżej 96.5% (NetEnt, Pragmatic Play)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Stawiaj 1-2% aktualnego salda bonusowego na spin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Sprawdź listę gier wykluczonych w regulaminie</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Polecane gry:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center justify-between">
                      <span>Chicken Road 2</span>
                      <span className="text-primary font-medium">RTP 96.21%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Aviator</span>
                      <span className="text-primary font-medium">RTP 96.09%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>LeBandit</span>
                      <span className="text-primary font-medium">RTP 95.97%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Coin Win 2</span>
                      <span className="text-primary font-medium">RTP 96.50%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
