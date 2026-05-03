'use client'

import { useEffect, useRef, useState } from 'react'

const ROW_ONE = [
  'Schwab',
  'Fidelity',
  'Pershing',
  'Altruist',
  'BNY Mellon',
  'Goldman Sachs',
  'JP Morgan',
  'TD Ameritrade',
  'Interactive Brokers',
  'Apex',
]

const ROW_TWO = [
  'Addepar',
  'Orion',
  'Black Diamond',
  'Tamarac',
  'Redtail',
  'Wealthbox',
  'Salesforce',
  'eMoney',
  'MoneyGuide Pro',
  'RightCapital',
]

const ROW_THREE = [
  'DocuSign',
  'Box',
  'Dropbox',
  'Google Workspace',
  'Microsoft 365',
  'Slack',
  'Zoom',
  'Calendly',
  'HubSpot',
  'Notion',
]

export default function IntegrationsMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-6 py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-xs tracking-[0.3em] text-gray-500 mb-6">
          INTEGRATES WITH
        </div>
        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-3xl">
          Already in your stack.
        </h2>
        <p className="mt-6 text-base md:text-lg text-[#E8E2D5]/60 max-w-xl font-light leading-relaxed">
          Drift sits on top of the tools your firm already runs — custodians,
          portfolio systems, planning software, document vaults, and the calendar.
        </p>
      </div>

      <div
        className="relative space-y-5"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 800ms ease-out',
        }}
      >
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent" />

        <MarqueeRow items={ROW_ONE} duration={48} direction="left" />
        <MarqueeRow items={ROW_TWO} duration={56} direction="right" />
        <MarqueeRow items={ROW_THREE} duration={52} direction="left" />
      </div>

      <style>{`
        @keyframes drift-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes drift-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .drift-marquee-track { animation: none !important; }
        }
      `}</style>
    </section>
  )
}

function MarqueeRow({
  items,
  duration,
  direction,
}: {
  items: string[]
  duration: number
  direction: 'left' | 'right'
}) {
  // duplicate for seamless loop
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className="drift-marquee-track flex gap-3 w-max"
        style={{
          animation: `drift-marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05] transition-colors duration-300"
          >
            <LogoMark name={name} />
            <span className="text-sm text-[#E8E2D5] whitespace-nowrap font-light">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LogoMark({ name }: { name: string }) {
  // small monogram square — first letter of name in cream
  const letter = name[0]
  return (
    <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center text-[11px] font-semibold text-[#E8E2D5]/80">
      {letter}
    </div>
  )
}
