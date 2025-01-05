'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const dialogues = [
  "Welcome to Smash, the ultimate badminton social app!",
  "Record your best plays and share them with the community.",
  "Track your stats and see how you stack up against others.",
  "Connect with players around the world and improve your game.",
  "Are you ready to join the Smash community?"
]

export default function ScrollingDialogue() {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const panels = gsap.utils.toArray<HTMLElement>('.panel')
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (panelsRef.current?.offsetWidth || 0),
        start: "top top",
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div 
        ref={panelsRef}
        className="flex flex-nowrap relative h-screen"
        style={{ width: `${dialogues.length * 100}vw` }}
      >
        {dialogues.map((dialogue, index) => (
          <div
            key={index}
            className={`panel w-screen h-full flex items-center justify-center relative ${
              getBackgroundColor(index, dialogues.length)
            }`}
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white text-center max-w-3xl mx-auto px-8">
              {dialogue}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

function getBackgroundColor(index: number, total: number) {
  const colors = [
    'bg-gradient-to-br from-yellow-400 to-yellow-500',
    'bg-gradient-to-br from-yellow-500 to-amber-500',
    'bg-gradient-to-br from-amber-500 to-orange-400',
    'bg-gradient-to-br from-orange-400 to-orange-500',
    'bg-gradient-to-br from-orange-500 to-orange-600'
  ]
  return colors[index % colors.length]
}

