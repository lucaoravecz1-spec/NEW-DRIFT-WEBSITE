import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MaturityBand from '@/components/MaturityBand'

export const metadata: Metadata = {
  title: 'Drift — Commercial real estate intelligence',
  description: 'Proactive AI reasoning and execution for commercial real estate professionals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Nav />
        {children}
        <MaturityBand />
        <Footer />
      </body>
    </html>
  )
}
