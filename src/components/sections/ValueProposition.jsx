import ScrollReveal from '../animations/ScrollReveal'

export default function ValueProposition() {
  return (
    <div id="about" className="px-6 py-12 dark:bg-myarte-dark lg:px-24">
      <ScrollReveal>
        <h1 className="text-2xl lg:text-3xl text-center mb-10 font-bold dark:text-white">
          Stable. Fast. Borderless payments. Powered by Solana.
        </h1>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <ScrollReveal direction="left">
          <div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">Value proposition</h2>
            <p className="text-gray-600 dark:text-gray-400">
              A trusted marketplace for creative work across Africa. MyArteLab solves the biggest challenges creatives and clients face.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">For Creators</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Get paid fairly and on time. Showcase your work. Build your reputation. Access global opportunities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.4}>
          <div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">For Clients</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find verified African talent. Secure escrow protection. Fast turnaround. Quality guaranteed.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
