import { Card, CardContent } from "@/components/ui/card"
import { Dices, Tv, Rocket, Crown } from "lucide-react"

export default function GamesSection() {
  const gameCategories = [
    {
      icon: Dices,
      title: "Automaty do Gier",
      description: "Ponad 4000 slotów od najlepszych dostawców",
      games: ["Book of Dead", "Starburst", "Sweet Bonanza", "Gates of Olympus"],
      color: "primary",
    },
    {
      icon: Tv,
      title: "Kasyno na Żywo",
      description: "Prawdziwi krupierzy w HD 24/7",
      games: ["Live Roulette", "Live Blackjack", "Crazy Time", "Lightning Roulette"],
      color: "secondary",
    },
    {
      icon: Rocket,
      title: "Gry Crash",
      description: "Szybkie emocje i instant wypłaty",
      games: ["Aviator", "Plinko", "Dice", "Mines"],
      color: "accent",
    },
    {
      icon: Crown,
      title: "Jackpoty",
      description: "Progresywne pule nagród do milionów",
      games: ["Mega Moolah", "Major Millions", "Divine Fortune", "Hall of Gods"],
      color: "primary",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card/20" id="gry">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Ponad <span className="text-gradient">5000 Gier</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {gameCategories.map((category, index) => {
              const Icon = category.icon
              const colorClasses = {
                primary: "text-primary bg-primary/10 border-primary/20",
                secondary: "text-secondary bg-secondary/10 border-secondary/20",
                accent: "text-accent bg-accent/10 border-accent/20",
              }

              return (
                <Card key={index} className="bg-card border-border hover:border-primary/40 transition-all group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${colorClasses[category.color as keyof typeof colorClasses]}`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.games.map((game, gameIndex) => (
                        <span
                          key={gameIndex}
                          className="px-3 py-1.5 bg-muted rounded-full text-xs text-gray-300 border border-border"
                        >
                          {game}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
