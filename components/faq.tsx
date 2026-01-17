import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "Jak znaleźć oficjalną stronę VOX Casino?",
      answer:
        'Wpisz w wyszukiwarkę "VOX Casino online" lub skorzystaj z linków na naszych profilach społecznościowych. Pamiętaj, że nasze legalne kasyno zawsze działa pod bezpieczną domeną z certyfikatem SSL.',
    },
    {
      question: "Czy oferujecie kasyno online BLIK?",
      answer:
        "Tak, BLIK to nasza specjalność. Możesz dokonywać wpłat natychmiastowo za pomocą kodu BLIK, co jest najwygodniejszą metodą płatności w Polsce. Wpłaty są realizowane w czasie rzeczywistym bez żadnych opłat.",
    },
    {
      question: "Jak pobrać aplikację VOX Casino?",
      answer:
        'Przejdź do sekcji "Aplikacja" na naszej stronie i kliknij "Pobierz". Dla Androida pobierz plik APK, dla iOS zainstaluj profil konfiguracyjny PWA. Aplikacja oferuje szybsze ładowanie i ekskluzywne bonusy.',
    },
    {
      question: "Czy VOX Casino jest legalne w Polsce?",
      answer:
        "Tak, jesteśmy legalnym kasynem online działającym na podstawie licencji Curacao eGaming. Twoje dane osobowe i środki finansowe są w pełni chronione dzięki szyfrowaniu SSL 256-bit.",
    },
    {
      question: "Jak szybko VOX Casino wypłaca pieniądze?",
      answer:
        "Jesteśmy znani jako kasyno z szybkimi wypłatami. Wypłaty na portfele kryptowalutowe i e-wallety są realizowane w 10-30 minut po zatwierdzeniu. Przelewy bankowe zajmują standardowo 1-3 dni robocze.",
    },
    {
      question: "Jakie są wymagania dotyczące bonusu powitalnego?",
      answer:
        "Bonus powitalny do 12 000 PLN wymaga minimalnej wpłaty 20 PLN. Wager wynosi 35x, co oznacza, że musisz obrócić kwotę bonusu 35 razy przed wypłatą. Masz 30 dni na spełnienie wymagań.",
    },
    {
      question: "Czy mogę grać na VOX Casino na telefonie?",
      answer:
        "Tak! Nasza platforma jest w pełni responsywna i działa płynnie na wszystkich urządzeniach mobilnych. Możesz również pobrać dedykowaną aplikację mobilną na iOS lub Android dla jeszcze lepszego doświadczenia.",
    },
    {
      question: "Jak skontaktować się z obsługą klienta?",
      answer:
        "Nasz polski zespół wsparcia jest dostępny 24/7 przez Live Chat (najszybsza metoda) lub e-mail [[email protected]]. Odpowiadamy na wszystkie zapytania w ciągu kilku minut.",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Najczęściej zadawane <span className="text-gradient">pytania</span>
            </h2>
            <p className="text-lg text-gray-400">Znajdź odpowiedzi na popularne pytania dotyczące VOX Casino</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
