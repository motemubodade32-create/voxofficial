"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Slot {
  name: string
  rtp: string
  maxWin: string
  popular?: boolean
  hot?: boolean
  image: string
}

interface SlotsCarouselProps {
  slots: Slot[]
}

export default function SlotsCarousel({ slots }: SlotsCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      setScrollPosition(container.scrollLeft - scrollAmount)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setScrollPosition(container.scrollLeft + scrollAmount)
    }
  }

  return (
    <div className="relative">
      {/* Кнопки навигации */}
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-card border-border hover:bg-accent"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-card border-border hover:bg-accent"
          onClick={scrollRight}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Контейнер для горизонтального скролла */}
      <div 
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {slots.map((slot, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-80"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Card className="bg-card border-border hover:border-primary/40 transition-all group overflow-hidden h-full">
              <Link href="/play" className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={slot.image || "/placeholder.svg"}
                    alt={slot.name}
                    width={320}
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
                  <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[56px]">
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
          </div>
        ))}
      </div>

      {/* Индикатор прокрутки */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(slots.length / 2) }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === Math.floor(scrollPosition / 320)
                ? 'w-6 bg-primary'
                : 'w-1.5 bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}