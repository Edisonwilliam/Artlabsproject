import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-md"
        animate={{
          x: isDark ? 24 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </button>
  )
}
