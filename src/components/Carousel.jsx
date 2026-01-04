import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carousel = ({ items, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (autoPlayInterval) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % items.length)
      }, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [items.length, autoPlayInterval])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="w-full"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-primary-600 dark:text-primary-400" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-primary-600 dark:text-primary-400" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary-600 dark:bg-primary-400 w-8'
                : 'bg-white/50 dark:bg-gray-600/50 hover:bg-white dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

