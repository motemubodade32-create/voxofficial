import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertCircle, Clock, Ban } from "lucide-react"

export default function ResponsibleGaming() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Odpowiedzialna Gra</h2>
            <p className="text-lg text-gray-400">
              Hazard to rozrywka. Wspieramy politykę odpowiedzialnej gry i dbamy o Twoje bezpieczeństwo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Limity czasowe</h3>
                <p className="text-sm text-gray-400">
                  Ustaw limity czasu gry w panelu gracza, aby kontrolować czas spędzony w kasynie
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Limity depozytów</h3>
                <p className="text-sm text-gray-400">
                  Określ maksymalne kwoty wpłat dziennych, tygodniowych lub miesięcznych
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Ban className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Samowykluczenie</h3>
                <p className="text-sm text-gray-400">
                  Możesz czasowo lub permanentnie zablokować swoje konto w każdej chwili
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">Pomoc specjalistyczna</h3>
                <p className="text-sm text-gray-400">
                  Skontaktuj się z naszym supportem, jeśli potrzebujesz pomocy lub wsparcia
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/40">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Pamiętaj:</strong> Hazard powinien być rozrywką, a nie źródłem dochodu.
                Graj odpowiedzialnie i nigdy nie wydawaj więcej, niż możesz stracić. Jeśli czujesz, że tracisz kontrolę,
                skontaktuj się z organizacjami pomocowymi lub naszym zespołem wsparcia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
