import ScrollReveal from '../animations/ScrollReveal'
import Button from '../ui/Button'

export default function LaunchpadCTA() {
  return (
    <div className="px-6 py-16 bg-white dark:bg-myarte-dark lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <ScrollReveal direction="left">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/Rectangle 21.png"
              alt="Launchpad"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        
        <ScrollReveal direction="right">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">
              Ready to Launch Your Creative Career?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Join thousands of African creators who are building successful careers on MyArteLab.
              Start earning today with secure payments and fair rates.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" className="glow-border">
                Get Started
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
