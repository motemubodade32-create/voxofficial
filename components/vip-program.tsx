import { Card, CardContent } from "@/components/ui/card"
import { Crown, Trophy, Gem, Star, Award, Shield, Zap, Gift, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Добавляем импорт Link

export default function VipProgram() {
  const vipLevels = [
    {
      level: "VIP Gold",
      subtitle: "VIP Gold",
      image: "/gold.svg", // Замените на путь к вашей иконке Gold
      requirements: "Make deposits of:",
      requirementValue: "3,000 €",
      features: [
        "Access to VIP games",
        "Fast withdrawals",
        "VIP bonuses and a personal manager",
        "VIP Tournaments",
        "A unique Avatar",
        "My account skin",
        "90% bonus on any deposit",
        "Cashback 9% weekly",
      ],
      icon: Trophy,
      color: "text-yellow-400",
      bgGradient: "from-yellow-900/20 to-yellow-500/10",
    },
    {
      level: "VIP Platinum",
      subtitle: "VIP Platinum",
      image: "/platinum.svg", // Замените на путь к вашей иконке Platinum
      requirements: "Make deposits of:",
      requirementValue: "6,000 €",
      features: [
        "Everything available to Gold VIPs",
        "VIP Tournaments",
        "Achievement for reaching VIP Platinum",
        "A unique avatar",
        "My account skin",
        "100% bonus on any deposit",
        "Cashback 9.5% weekly",
      ],
      icon: Gem,
      color: "text-cyan-400",
      bgGradient: "from-cyan-900/20 to-cyan-500/10",
    },
    {
      level: "VIP Diamond",
      subtitle: "VIP Diamond",
      image: "/diamond.svg", // Замените на путь к вашей иконке Diamond
      requirements: "Make deposits of:",
      requirementValue: "12,000 €",
      features: [
        "Everything that is available to Gold and Platinum VIPs",
        "VIP Tournaments",
        "A unique avatar",
        "My account skin",
        "110% bonus on any deposit",
        "Cashback 10% weekly",
      ],
      icon: Crown,
      color: "text-purple-400",
      bgGradient: "from-purple-900/20 to-purple-500/10",
    },
  ]

  const vipPrivileges = [
    {
      title: "VIP Games",
      description: "All new games will initially only be available to members of the VIP club",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "VIP Tournaments",
      description: "New conditions with new, exclusive prizes",
      icon: Trophy,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "VIP Bonuses",
      description: "New conditions with new, exclusive prizes",
      icon: Gift,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Quicker Withdrawal",
      description: "Expedited withdrawal request processing for accounts with total deposits of at least 1,000 € within the last 30 days.",
      icon: Award,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      title: "VIP Achievements",
      description: "New conditions with new, exclusive prizes",
      icon: Star,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "Special Avatar",
      description: "VIP club members have a special Personal Account with a unique avatar that is visible to everyone in tournaments",
      icon: Users,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Exclusive <span className="text-gradient">VIP Program</span>
            </h2>
          </div>

          {/* VIP Levels Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {vipLevels.map((level, index) => {
              const Icon = level.icon
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${level.bgGradient} border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden`}
                >
                  <CardContent className="p-6">
                    {/* VIP Level Header */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative w-24 h-24 mb-4">
                        <div className={`absolute inset-0 rounded-full ${level.bgGradient} blur-md opacity-50`}></div>
                        <div className="relative flex items-center justify-center w-full h-full">
                          {/* Если есть изображение, показываем его, иначе иконку */}
                          {level.image ? (
                            <Image
                              src={level.image}
                              alt={level.level}
                              width={96}
                              height={96}
                              className="object-contain"
                            />
                          ) : (
                            <Icon className={`w-16 h-16 ${level.color}`} />
                          )}
                        </div>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {level.level}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">{level.subtitle}</p>
                      
                      {/* Requirements */}
                      <div className="bg-black/30 rounded-xl p-4 w-full mb-4">
                        <p className="text-sm text-gray-400 mb-1">{level.requirements}</p>
                        <p className="text-2xl font-bold text-white">{level.requirementValue}</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full ${level.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className="w-2 h-2 bg-current rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Join Button - теперь ссылка на /play */}
                    <Link href="/play" className="block">
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold rounded-xl transition-all duration-300 group-hover:scale-[1.02]">
                        Become {level.level}
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* VIP Privileges Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                VIP <span className="text-gradient">Privileges</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vipPrivileges.map((privilege, index) => {
                const Icon = privilege.icon
                return (
                  <Card key={index} className="bg-card/50 border-border hover:border-primary/30 transition-all group h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex flex-col items-center text-center flex-grow">
                        <div className={`w-16 h-16 ${privilege.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 ${privilege.color}`} />
                        </div>
                        <h4 className="text-xl font-display font-bold text-white mb-3">
                          {privilege.title}
                        </h4>
                        <p className="text-gray-400 flex-grow">
                          {privilege.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* VIP Benefits Banner */}
          <Card className="bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border-primary/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Ready to Join the VIP Club?
                  </h3>
                  <p className="text-gray-300">
                    Start your journey to exclusive benefits and premium gaming experience
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/play">
                    <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:opacity-90 text-black font-bold rounded-xl transition-all">
                      Join VIP Now
                    </button>
                  </Link>
                  <Link href="/play">
                    <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-xl transition-all">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}