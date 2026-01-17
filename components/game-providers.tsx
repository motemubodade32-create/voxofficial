export default function GameProviders() {
  const providers = [
    { name: "Pragmatic Play", description: "Lider slotów wideo z funkcją Bonus Buy" },
    { name: "Evolution Gaming", description: "Najlepsze kasyno na żywo – Crazy Time, Lightning Roulette" },
    { name: "Play'n GO", description: "Mistrzowie narracji – Book of Dead i inne hity" },
    { name: "NetEnt", description: "Legendarne gry – Starburst, Gonzo's Quest" },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Dostawcy <span className="text-gradient">Oprogramowania</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Współpracujemy wyłącznie z liderami branży, którzy definiują współczesny hazard
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {providers.map((provider, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card rounded-xl border border-border hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{provider.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{provider.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 text-center">
              Dlaczego to ma znaczenie?
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Jakość rozgrywki w VOX Casino wynika bezpośrednio z jakości naszych partnerów. Wszystkie gry są regularnie
              audytowane, posiadają certyfikaty uczciwości i oferują wysokie wskaźniki RTP. To gwarancja, że grasz w
              bezpiecznym i uczciwym środowisku.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
