import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import SlotsCarousel from "@/components/SlotsCarousel"

export default function SlotsSection() {
  const slots = [
    {
      name: "Mega Wild Fruits & Chillies",
      rtp: "96.21%",
      maxWin: "5000x",
      popular: true,
      image: "/1.webp",
    },
    {
      name: "Coin Win 2: Hold The Spin",
      rtp: "96.09%",
      maxWin: "500x",
      popular: true,
      image: "/2.webp",
    },
    {
      name: "Aviator",
      rtp: "96.51%",
      maxWin: "21,100x",
      hot: true,
      image: "/3.jfif",
    },
    {
      name: "Chicken Road 2",
      rtp: "96.50%",
      maxWin: "5000x",
      hot: true,
      image: "/4.jpeg",
    },
    {
      name: "Buffalo Power",
      rtp: "96.71%",
      maxWin: "2,100x",
      popular: true,
      image: "/5.webp",
    },
    {
      name: "Lucky Streak 3",
      rtp: "95.97%",
      maxWin: "2,500x",
      popular: false,
      image: "/6.webp",
    },
    {
      name: "LeBandit",
      rtp: "96.01%",
      maxWin: "1,000x",
      hot: false,
      image: "/7.webp",
    },
    {
      name: "Gladiator's Rising",
      rtp: "96.51%",
      maxWin: "4,570x",
      popular: false,
      image: "/8.jfif",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background" id="sloty">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Top <span className="text-gradient">Automaty do Gier</span>
            </h2>
          </div>

          {/* Мобильная версия с горизонтальным скроллом */}
          <div className="lg:hidden mb-8">
            <SlotsCarousel slots={slots} />
          </div>

          {/* Десктопная версия с гридом */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-10">
            {slots.map((slot, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/40 transition-all group overflow-hidden"
              >
                <Link href="/play" className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={slot.image || "/placeholder.svg"}
                      alt={slot.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {slot.popular && (
                      <div className="absolute top-2 right-2 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 text-primary-foreground fill-current" />
                        <span className="text-xs font-bold text-primary-foreground">Popular</span>
                      </div>
                    )}
                    {slot.hot && (
                      <div className="absolute top-2 right-2 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-white" />
                        <span className="text-xs font-bold text-white">Hot</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {slot.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-gray-400 mb-0.5">RTP</p>
                        <p className="text-sm font-bold text-accent">{slot.rtp}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-gray-400 mb-0.5">Max Win</p>
                        <p className="text-sm font-bold text-primary">{slot.maxWin}</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-bold"
                      asChild
                    >
                      <Link href="/play">Graj Teraz</Link>
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/play">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Zobacz Wszystkie Sloty (4000+)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}