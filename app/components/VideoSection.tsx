'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const videoFeatures = [
  "Record your best shots",
  "Analyze your technique",
  "Share with friends",
  "Get feedback from pros"
]

export default function VideoSection() {
  const containerRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const { top, height } = videoRef.current.getBoundingClientRect()
        const scrollPosition = window.innerHeight - top
        const progress = Math.min(Math.max(scrollPosition / height, 0), 1)
        videoRef.current.currentTime = progress * videoRef.current.duration
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="video" ref={containerRef} className="min-h-screen flex items-center justify-center bg-yellow-200 relative overflow-hidden">
      <motion.div style={{ opacity, scale }} className="w-full max-w-4xl">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-2xl"
          src="/videos/badminton-promo.mp4"
          muted
          playsInline
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          {videoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <p className="text-orange-600 font-semibold">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

