import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/animations'

export default function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.2,
  delayChildren = 0.3
}) {
  const customStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={customStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
