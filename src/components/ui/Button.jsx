import { motion } from 'framer-motion'
import { buttonHover } from '../../utils/animations'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  ...props
}) {
  const variants = {
    primary: 'bg-black dark:bg-myarte-purple text-white hover:shadow-2xl',
    secondary: 'bg-myarte-purple text-white hover:shadow-2xl',
    outline: 'bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white hover:shadow-xl',
  }

  const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all duration-300'
  const variantClasses = variants[variant] || variants.primary

  const Component = href ? motion.a : motion.button

  return (
    <Component
      className={`${baseClasses} ${variantClasses} ${className}`}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
    </Component>
  )
}
