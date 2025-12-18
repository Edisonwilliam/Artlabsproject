import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="flex items-center justify-between px-6 py-4 bg-white dark:bg-myarte-dark sticky top-0 z-50 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/logo 1.svg" alt="MyArteLab Logo" className="h-8" />
          </a>
        </div>

        <ul className="hidden md:flex items-center space-x-10 text-sm font-bold text-gray-900 dark:text-gray-100">
          <li>
            <a href="#home" className="cursor-pointer hover:text-myarte-purple transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-myarte-purple transition">
              About us
            </a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer hover:text-myarte-purple transition">
              Services
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="cursor-pointer hover:text-myarte-purple transition">
              How it works
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <img
              src="/images/ep_menu.svg"
              alt="Menu"
              className="cursor-pointer w-6 h-6"
            />
          </button>

          <Button variant="secondary" className="hidden md:block shimmer-effect relative overflow-hidden">
            Explore
          </Button>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
