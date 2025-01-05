'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative z-10">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-white font-handdrawn mb-4"
        >
          Smash
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          Your Badminton Social Hub
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="animate-bounce"
        >
          <a href="#scrolling-dialogue" className="text-white text-lg">
            Scroll to discover
            <br />
            ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}

