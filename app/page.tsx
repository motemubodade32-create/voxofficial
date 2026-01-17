import Header from "@/components/header"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import Benefits from "@/components/benefits"
import BonusSection from "@/components/bonus-section"
import GamesSection from "@/components/games-section"
import SlotsSection from "@/components/slots-section"
import VipProgram from "@/components/vip-program"
import PaymentMethods from "@/components/payment-methods"
import GameProviders from "@/components/game-providers"
import MobileApp from "@/components/mobile-app"
import ResponsibleGaming from "@/components/responsible-gaming"
import Faq from "@/components/faq"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SlotsSection />
      {/* <Overview /> */}
      <Benefits />
      <BonusSection />
      <GamesSection />
      <VipProgram />
      <PaymentMethods />
      <GameProviders />
      <MobileApp />
      {/* <ResponsibleGaming /> */}
      <Faq />
      {/* <Cta /> */}
      <Footer />
    </main>
  )
}
