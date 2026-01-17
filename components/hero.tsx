import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Фоновое изображение - баннер */}
      <div className="relative h-[60vh] min-h-[500px] max-h-[700px]">
        <Image
          src="/banner2.jpeg"
          alt="VOX Casino Banner"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#171a29]"></div>
      </div>

      {/* Контентный блок */}
      <div className="relative bg-[#171a29] pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center -mt-16 relative">
            
            {/* Заголовок с эффектом */}
            <div className="mb-10 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                VOX Casino – 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                  polskie kasyno 2026
                </span>
              </h1>
            </div>

            {/* Кнопка */}
            <div className="relative inline-block">
              {/* Свечение */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-30"></div>
              
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg md:text-xl px-16 py-8 rounded-2xl shadow-2xl shadow-amber-500/30"
                asChild
              >
                <Link href="/play">
                  <span className="flex items-center gap-3">
                    ODBIERZ BONUS
                  </span>
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}