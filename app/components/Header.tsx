'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-yellow-400 bg-opacity-80 py-4 z-10"
    >
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-3xl font-bold text-white font-handdrawn">
          Smash
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="#features" className="text-white hover:text-orange-200 transition-colors">Features</Link></li>
          <li><Link href="#signup" className="text-white hover:text-orange-200 transition-colors">Sign Up</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}

