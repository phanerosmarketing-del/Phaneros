import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DemandMarkets from '@/components/DemandMarkets'
import StrategicReframe from '@/components/StrategicReframe'
import AIAudit from '@/components/AIAudit'
import SocialProof from '@/components/SocialProof'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full bg-phaneros-white">
      <Navbar />
      <Hero />
      <DemandMarkets />
      <StrategicReframe />
      <AIAudit />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
