'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollingDialogue from './components/ScrollingDialogue'
import Features from './components/Features'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

export default function Home() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen bg-yellow-400 text-white">
      <motion.div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          // backgroundImage: "url('/images/badminton-court.jpg')",
          y: backgroundY
        }}
      />
      <Header />
      <div ref={scrollRef}>
        <Hero />
        <ScrollingDialogue />
        <Features />
        <SignUp />
        <Footer />
      </div>
    </main>
  )
}

