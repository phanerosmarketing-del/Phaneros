'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-phaneros-white via-phaneros-white to-gray-50 overflow-hidden pt-20">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-phaneros-bronze rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-phaneros-black rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up space-y-8">
          {/* Main Headline */}
          <div>
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-phaneros-black leading-tight">
              Visibility alone fades.
            </h1>
            <p className="font-cormorant text-4xl md:text-6xl font-light text-phaneros-black mt-4">
              But with memory, it compounds.
            </p>
          </div>

          {/* Subheadline */}
          <p className="font-glacial text-lg md:text-xl text-phaneros-gray max-w-2xl mx-auto leading-relaxed">
            Recognisable brands get chosen first. We build the visibility systems that make your brand impossible to forget.
          </p>

          {/* CTA */}
          <div className="pt-8">
            <Link
              href="https://wa.me/c/27672729092"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary text-lg font-glacial hover:shadow-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-phaneros-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
