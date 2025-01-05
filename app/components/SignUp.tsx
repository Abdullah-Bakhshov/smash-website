'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate that all fields are filled
    if (!email || !firstName || !lastName) {
      alert('Please fill in all fields')
      return
    }

    try {
      const response = await fetch('https://79d8-2a00-23c5-a94-7301-3c97-63a-3a77-8b5c.ngrok-free.app/website_saving_sign_ups', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: `${email},${firstName},${lastName}`
      })

      // Log the response details
      console.log('Response status:', response.status)
      const responseText = await response.text()
      console.log('Response body:', responseText)

      if (response.status === 200 || response.status === 204) {
        // Reset form on success
        setEmail('')
        setFirstName('')
        setLastName('')
        alert('Thank you for signing up!')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
      console.error('Submission error:', error)
    }
  }

  return (
    <section id="signup" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white font-handdrawn mb-8"
        >
          Join the Smash Community
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
            className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-orange-800"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
            className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-orange-800"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-orange-800"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Get Early Access
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

