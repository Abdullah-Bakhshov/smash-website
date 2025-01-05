'use client'
import { motion } from 'framer-motion'
import { Smartphone, BarChart2, Upload } from 'lucide-react'

const features = [
  { 
    title: 'Record Your Clips', 
    description: 'Capture your best badminton moments with ease.',
    icon: Smartphone
  },
  { 
    title: 'Upload and Share', 
    description: 'Share your skills with the badminton community.',
    icon: Upload
  },
  { 
    title: 'Track Your Stats', 
    description: 'Monitor your performance with detailed match statistics.',
    icon: BarChart2
  },
]

export default function Features() {
  return (
    <section id="features" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white font-handdrawn mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-orange-500 bg-opacity-80 rounded-lg shadow-lg p-6"
    >
      <Icon className="w-12 h-12 text-white mb-4" />
      <h3 className="text-2xl font-bold text-white mb-4 font-handdrawn">{title}</h3>
      <p className="text-white">{description}</p>
    </motion.div>
  )
}

