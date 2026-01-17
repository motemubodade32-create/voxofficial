import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Polityka Prywatności | VOX Casino Polska",
  description:
    "Polityka prywatności VOX Casino. Dowiedz się, jak chronimy Twoje dane osobowe i zapewniamy bezpieczeństwo informacji.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
                Polityka <span className="text-gradient">Prywatności</span>
              </h1>
              <p className="text-gray-400 text-lg">Ostatnia aktualizacja: Styczeń 2026</p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">1. Wprowadzenie</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    VOX Casino (zwane dalej „Kasynem", „my", „nas" lub „nasz") zobowiązuje się do ochrony prywatności
                    wszystkich użytkowników naszej platformy. Niniejsza Polityka Prywatności wyjaśnia, jakie dane
                    osobowe zbieramy, w jaki sposób je wykorzystujemy, przechowujemy i chronimy.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Korzystając z naszych usług, wyrażasz zgodę na zbieranie i wykorzystywanie informacji zgodnie z
                    niniejszą polityką. Jeśli nie zgadzasz się z naszą polityką prywatności, nie korzystaj z naszych
                    usług.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">2. Jakie dane zbieramy?</h2>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2.1 Dane osobowe</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Imię i nazwisko</li>
                        <li>Adres e-mail</li>
                        <li>Numer telefonu</li>
                        <li>Data urodzenia (w celu weryfikacji wieku 18+)</li>
                        <li>Adres zamieszkania</li>
                        <li>Dokumenty tożsamości (do weryfikacji KYC)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2.2 Dane finansowe</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Informacje o metodach płatności (karty, portfele elektroniczne, BLIK)</li>
                        <li>Historia transakcji (wpłaty i wypłaty)</li>
                        <li>Informacje o wygranych i przegranych</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2.3 Dane techniczne</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Adres IP</li>
                        <li>Typ przeglądarki i urządzenia</li>
                        <li>Lokalizacja geograficzna</li>
                        <li>Pliki cookies i podobne technologie</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">
                    3. W jakim celu wykorzystujemy Twoje dane?
                  </h2>
                  <ul className="space-y-3 text-gray-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Świadczenie usług:</strong> Rejestracja konta, przetwarzanie
                        transakcji, zarządzanie grami
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Weryfikacja tożsamości:</strong> Spełnienie wymogów KYC (Know
                        Your Customer) i AML (Anti-Money Laundering)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Bezpieczeństwo:</strong> Wykrywanie i zapobieganie oszustwom,
                        nadużyciom i praniu pieniędzy
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Komunikacja:</strong> Wysyłanie powiadomień o promocjach,
                        bonusach i aktualizacjach
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Wsparcie klienta:</strong> Obsługa zapytań i rozwiązywanie
                        problemów
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Analiza i ulepszenia:</strong> Optymalizacja naszej platformy i
                        doświadczenia użytkownika
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">4. Jak chronimy Twoje dane?</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Bezpieczeństwo Twoich danych jest dla nas priorytetem. Stosujemy zaawansowane środki bezpieczeństwa,
                    w tym:
                  </p>
                  <ul className="space-y-3 text-gray-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>
                        <strong className="text-white">Szyfrowanie SSL 256-bit:</strong> Wszystkie dane przesyłane
                        między Twoją przeglądarką a naszymi serwerami są szyfrowane
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>
                        <strong className="text-white">Bezpieczne serwery:</strong> Dane są przechowywane na serwerach
                        chronionych zaporami sieciowymi
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>
                        <strong className="text-white">Ograniczony dostęp:</strong> Tylko autoryzowany personel ma
                        dostęp do danych osobowych
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>
                        <strong className="text-white">Regularne audyty:</strong> Przeprowadzamy regularne kontrole
                        bezpieczeństwa i testy penetracyjne
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">
                    5. Udostępnianie danych osobom trzecim
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    VOX Casino nie sprzedaje ani nie wynajmuje Twoich danych osobowych stronom trzecim. Możemy jednak
                    udostępniać dane w następujących przypadkach:
                  </p>
                  <ul className="space-y-2 text-gray-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Dostawcom usług płatniczych (np. BLIK, Visa, Mastercard, procesory kryptowalut)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Dostawcom oprogramowania do gier (np. Pragmatic Play, NetEnt, Evolution Gaming)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Organom regulacyjnym i organom ścigania (w przypadku wymagań prawnych)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Firmom świadczącym usługi weryfikacji tożsamości (KYC)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">6. Pliki cookies</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Nasza strona wykorzystuje pliki cookies i podobne technologie w celu:
                  </p>
                  <ul className="space-y-2 text-gray-400 leading-relaxed mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Zapamiętywania Twoich preferencji i ustawień</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Analizy ruchu na stronie i zachowań użytkowników</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Personalizacji treści i reklam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Zapewnienia bezpieczeństwa i wykrywania oszustw</span>
                    </li>
                  </ul>
                  <p className="text-gray-400 leading-relaxed">
                    Możesz zarządzać ustawieniami cookies w swojej przeglądarce. Pamiętaj jednak, że wyłączenie cookies
                    może ograniczyć funkcjonalność naszej strony.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">7. Twoje prawa</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Zgodnie z RODO (Rozporządzenie o Ochronie Danych Osobowych) masz prawo do:
                  </p>
                  <ul className="space-y-3 text-gray-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Dostępu:</strong> Możesz poprosić o kopię swoich danych osobowych
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Sprostowania:</strong> Możesz poprosić o poprawienie
                        nieprawidłowych danych
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Usunięcia:</strong> Możesz poprosić o usunięcie swoich danych
                        (prawo do bycia zapomnianym)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Ograniczenia:</strong> Możesz poprosić o ograniczenie
                        przetwarzania danych
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Przenoszenia:</strong> Możesz poprosić o przekazanie danych
                        innemu administratorowi
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong className="text-white">Sprzeciwu:</strong> Możesz sprzeciwić się przetwarzaniu danych w
                        celach marketingowych
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">8. Przechowywanie danych</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Przechowujemy Twoje dane osobowe tylko tak długo, jak jest to konieczne do realizacji celów
                    określonych w niniejszej polityce prywatności. Po zamknięciu konta Twoje dane będą przechowywane
                    przez okres wymagany przez przepisy prawa (zazwyczaj 5-7 lat w celach księgowych i regulacyjnych), a
                    następnie zostaną bezpiecznie usunięte.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">9. Zmiany w Polityce Prywatności</h2>
                  <p className="text-gray-400 leading-relaxed">
                    VOX Casino zastrzega sobie prawo do aktualizacji niniejszej Polityki Prywatności w dowolnym czasie.
                    O wszelkich zmianach poinformujemy Cię poprzez powiadomienie na stronie lub e-mail. Zalecamy
                    regularne przeglądanie tej polityki, aby być na bieżąco z tym, jak chronimy Twoje dane.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/40">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-4">10. Kontakt</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub chcesz skorzystać ze swoich praw,
                    skontaktuj się z nami:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">E-mail:</span>
                      <a href="mailto:[email protected]" className="text-primary hover:underline">
                        [email protected]
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">Live Chat:</span>
                      <span>Dostępny 24/7 na naszej stronie</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
