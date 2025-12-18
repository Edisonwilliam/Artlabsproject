import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

export default function MobileMenu({ isOpen, onClose }) {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#how-it-works' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          <motion.div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          
          <motion.div
            className="fixed right-6 top-20 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg w-48 z-50"
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="py-2">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 ${
                    index === 0
                      ? 'font-bold text-black dark:text-white'
                      : 'text-gray-500 dark:text-gray-400'
                  } hover:bg-gray-50 dark:hover:bg-gray-700 transition ${
                    index === menuItems.length - 1 ? 'border-b dark:border-gray-700' : ''
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="px-4 py-4">
                <Button variant="secondary" className="w-full">
                  Explore
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
