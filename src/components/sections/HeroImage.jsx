import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroImage() {
  const [currentIndex, setCurrentIndex] = useState(0)


  const mobileImages = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/Rectangle 21.png',
  ]


  const desktopImages = [
    '/images/desktop.jpeg',
    '/images/image1.png',
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mobileImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [mobileImages.length])


  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 1,
        ease: 'easeIn',
      },
    },
  }

  return (
    <>
      
      <div className="relative w-screen h-72 md:h-[500px] lg:hidden overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${currentIndex}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${mobileImages[currentIndex]})`,
            }}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>

        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {mobileImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      
      <div className="relative w-screen h-[130vh] hidden lg:block overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={`desktop-${currentIndex}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${desktopImages[currentIndex % desktopImages.length]})`,
            }}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>

        
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex % desktopImages.length
                  ? 'bg-white w-12'
                  : 'bg-white/50 hover:bg-white/75 w-8'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
