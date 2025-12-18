import { motion } from 'framer-motion'
import StaggerContainer from '../animations/StaggerContainer'
import ScrollReveal from '../animations/ScrollReveal'
import { fadeInUp } from '../../utils/animations'

export default function WhySection() {
  const whyCards = [
    {
      image: '/images/Rectangle 17.png',
      title: 'African-First',
      description: 'Built specifically for the African creative economy'
    },
    {
      image: '/images/Rectangle 18.png',
      title: 'Verified Talent',
      description: 'All creators are verified and reviewed'
    },
    {
      image: '/images/Rectangle 19.png',
      title: 'Fair Pricing',
      description: 'Transparent pricing with no hidden fees'
    },
    {
      image: '/images/Rectangle 20.png',
      title: 'Seamless Experience',
      description: 'Easy to use platform for both creators and clients'
    }
  ]

  return (
    <div className="px-6 py-16 bg-gradient-to-br from-purple-600 to-purple-800 lg:px-24">
      <ScrollReveal>
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Why MyArteLab?
        </h2>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {whyCards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group backdrop-blur-xl bg-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white hover:text-black transition-all duration-500"
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? -2 : 2
            }}
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-black mb-2">
              {card.title}
            </h3>
            <p className="text-white/90 group-hover:text-gray-700">
              {card.description}
            </p>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  )
}
