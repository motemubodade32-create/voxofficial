import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Smartphone, Bitcoin, Building } from "lucide-react"

export default function PaymentMethods() {
  const paymentMethods = [
    { method: "BLIK", type: "Mobilna", time: "Natychmiast", min: "20 PLN", fee: "0%", icon: Smartphone },
    { method: "Visa / Mastercard", type: "Karta", time: "Natychmiast", min: "50 PLN", fee: "0%", icon: CreditCard },
    { method: "Bitcoin / Krypto", type: "Krypto", time: "10-30 min", min: "100 PLN", fee: "0%", icon: Bitcoin },
    { method: "Przelew", type: "Bank", time: "1-3 dni", min: "100 PLN", fee: "0%", icon: Building },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card/20" id="platnosci">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Metody <span className="text-gradient">Płatności</span>
            </h2>
          </div>

          {/* Payment Methods Table - Desktop */}
          <div className="hidden lg:block overflow-x-auto mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metoda płatności</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Typ</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Czas przetwarzania</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Minimalna kwota</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Komisja</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.map((payment, index) => {
                      const Icon = payment.icon
                      return (
                        <tr key={index} className="border-t border-border hover:bg-muted/20 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-semibold text-white">{payment.method}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{payment.type}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                              {payment.time}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{payment.min}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                              {payment.fee}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods Cards - Mobile */}
          <div className="lg:hidden grid gap-4 mb-12">
            {paymentMethods.map((payment, index) => {
              const Icon = payment.icon
              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white">{payment.method}</h3>
                        <p className="text-sm text-gray-400">{payment.type}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Czas przetwarzania:</span>
                        <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                          {payment.time}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Minimalna kwota:</span>
                        <span className="text-white font-semibold">{payment.min}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Komisja:</span>
                        <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                          {payment.fee}
                        </span>
                      </div>
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
