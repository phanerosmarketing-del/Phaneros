'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-phaneros-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="font-cormorant text-2xl font-bold text-phaneros-black">
              PHANEROS™
            </h1>
          </div>

          {/* Tagline (hidden on mobile) */}
          <p className="hidden md:block font-glacial text-sm tracking-wide text-phaneros-gray">
            Be Seen • Be Remembered • Be Chosen
          </p>

          {/* CTA Button */}
          <Link
            href="https://wa.me/c/27672729092"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm font-glacial"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </nav>
  )
}
