import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import HeroImage from './components/sections/HeroImage'
import FeatureCards from './components/sections/FeatureCards'
import ValueProposition from './components/sections/ValueProposition'
import WhySection from './components/sections/WhySection'
import HowItWorks from './components/sections/HowItWorks'
import LaunchpadCTA from './components/sections/LaunchpadCTA'

function App() {
  return (
    <div className="font-inter dark:bg-myarte-dark transition-colors duration-300">
      <Navbar />
      <Hero />
      <HeroImage />
      <FeatureCards />
      <ValueProposition />
      <WhySection />
      <HowItWorks />
      <LaunchpadCTA />
      <Footer />
    </div>
  )
}

export default App
