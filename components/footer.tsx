import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center">
        <div>&copy; 2025 MIKJADE VENTURES LIMITED. All rights reserved.</div>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="#" aria-label="TikTok">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}
