import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PHANEROS™ - Be Seen • Be Remembered • Be Chosen',
  description: 'Visibility Intelligence Platform for Ambitious Brands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Glacial+Indifference&display=swap" rel="stylesheet" />
        <style>{`
          @font-face {
            font-family: 'Copperplate Gothic';
            src: url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
          }
        `}</style>
      </head>
      <body className="bg-phaneros-white text-phaneros-black font-glacial antialiased">
        {children}
      </body>
    </html>
  )
}
