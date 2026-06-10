import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Drift AI — CRE reasoning and execution',
  description:
    'Proactive AI for commercial real estate professionals. Analyze sites and deals, automate follow-through, and run Drift by voice, workflow, or text.',
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
        <Footer />
      </body>
    </html>
  )
}
