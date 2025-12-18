import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { slideInLeft, pulseScale } from '../../utils/animations'
import ScrollReveal from '../animations/ScrollReveal'

export default function Hero() {
  const creators = [
    '/images/Ellipse 1.svg',
    '/images/Ellipse 2.svg',
    '/images/Ellipse 3.svg',
    '/images/Ellipse 4.png',
    '/images/Ellipse 5.png',
    '/images/Ellipse 6.png',
    '/images/Ellipse 7.png',
  ]

  return (
    <main
      id="home"
      className="px-12 py-12 space-y-6 md:flex md:justify-between md:items-center dark:bg-myarte-dark lg:px-24"
    >
      
      <ScrollReveal direction="left">
        <div className="space-y-4">
          <h1 className="font-gasoek font-bold text-4xl md:text-5xl dark:text-white">
            MyArteLab
          </h1>
          <p className="font-bold dark:text-gray-300">Built for African Creators.</p>
          <p className="font-bold dark:text-gray-300">Trusted by Clients Globally.</p>
          <Button variant="primary" className="glow-border">
            Become a Creator
          </Button>
        </div>
      </ScrollReveal>

      
      <motion.div
        className="bg-black dark:bg-white dark:text-black text-white rounded-2xl p-6 max-w-md cursor-pointer"
        variants={pulseScale}
        animate="animate"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <motion.div
            className="flex -space-x-2"
            variants={pulseScale}
            animate="animate"
          >
            {creators.map((src, i) => (
              <img
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
                src={src}
                alt="Creator"
              />
            ))}
          </motion.div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-base">Trusted by creators in</h2>
            <span className="text-sm text-gray-300 dark:text-gray-600">
              500+ verified creators across 15 African countries
            </span>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
