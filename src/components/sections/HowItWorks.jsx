import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'
import StaggerContainer from '../animations/StaggerContainer'
import { fadeInUp, bounceAnimation } from '../../utils/animations'

export default function HowItWorks() {
  const creatorSteps = [
    { title: 'Sign Up', description: 'Create your creator profile' },
    { title: 'Build Portfolio', description: 'Showcase your best work' },
    { title: 'Get Discovered', description: 'Clients find and book you' },
    { title: 'Deliver Work', description: 'Complete the project' },
    { title: 'Get Paid', description: 'Receive payment instantly' }
  ]

  const clientSteps = [
    { title: 'Browse Talent', description: 'Find the perfect creator' },
    { title: 'Book & Pay', description: 'Secure your booking with escrow' },
    { title: 'Collaborate', description: 'Work together seamlessly' },
    { title: 'Review Work', description: 'Approve the final deliverables' },
    { title: 'Release Payment', description: 'Creator gets paid automatically' }
  ]

  return (
    <div id="how-it-works" className="px-6 py-16 bg-white dark:bg-myarte-dark lg:px-24">
      <ScrollReveal>
        <h2 className="text-3xl lg:text-4xl font-bold text-center dark:text-white mb-12">
          How It Works
        </h2>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <ScrollReveal direction="left">
          <div className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
              For Creators
            </h3>
            <StaggerContainer className="space-y-4">
              {creatorSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all hover:translate-x-2"
                >
                  <motion.div
                    variants={bounceAnimation}
                    animate="animate"
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold"
                  >
                    {index + 1}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-white">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        
        <ScrollReveal direction="right">
          <div className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
              For Clients
            </h3>
            <StaggerContainer className="space-y-4">
              {clientSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all hover:translate-x-2"
                >
                  <motion.div
                    variants={bounceAnimation}
                    animate="animate"
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold"
                  >
                    {index + 1}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-white">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
