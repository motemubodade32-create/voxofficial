import { Gift, Users, Headphones, TrendingUp, Lock, Sparkles } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: Gift,
      title: "Hojne Bonusy",
      description: "Do 12 000 PLN pakiet powitalny + setki darmowych spinów",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Program VIP",
      description: "5 poziomów lojalnościowych z ekskluzywnymi przywilejami",
      color: "text-secondary",
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Polski zespół wsparcia dostępny przez całą dobę",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Wysokie RTP",
      description: "Gry z najwyższymi wskaźnikami zwrotu dla gracza",
      color: "text-primary",
    },
    {
      icon: Lock,
      title: "Bezpieczeństwo",
      description: "Szyfrowanie SSL i licencjonowane gry od najlepszych",
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: "Cotygodniowe Promocje",
      description: "Turbo Czwartek, cashback i turnieje z nagrodami",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Nasze <span className="text-gradient">Przewagi</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dołącz do tysięcy zadowolonych graczy i odkryj, co wyróżnia VOX Casino
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all hover:transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
