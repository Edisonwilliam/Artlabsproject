import { motion } from 'framer-motion'

export default function AnimatedCard({
  children,
  className = '',
  animationType = 'float', // 'float', 'glide', 'pulse', 'none'
  enableHover = true
}) {

  const animations = {
    float: {
      y: [-20, 0, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    glide: {
      x: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    none: {}
  }


  const hoverAnimation = enableHover ? {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.4, ease: "easeOut" }
  } : {}

  return (
    <motion.div
      className={className}
      animate={animations[animationType]}
      whileHover={hoverAnimation}
    >
      {children}
    </motion.div>
  )
}
