import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-yellow-400 py-8 relative z-10">
      <div className="container mx-auto text-center px-4">
        <p className="text-white mb-4">&copy; 2023 Smash Badminton App. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li><Link href="#" className="text-white hover:text-orange-200 transition-colors">Privacy Policy</Link></li>
          <li><Link href="#" className="text-white hover:text-orange-200 transition-colors">Terms of Service</Link></li>
          <li><Link href="#" className="text-white hover:text-orange-200 transition-colors">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}

