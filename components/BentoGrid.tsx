'use client'

import { useEffect, useRef, useState } from 'react'

type Cell = {
  tag: string
  title: string
  body: string
  span: string
  visual: 'compliance' | 'vault' | 'meetings' | 'tax' | 'rmd' | 'custodian' | 'audit'
}

const CELLS: Cell[] = [
  {
    tag: 'INVESTMENT MEMOS',
    title: 'Memos draft themselves.',
    body: 'Every recommendation comes with a sourced investment memo. Cited, dated, and ready for the decision meeting.',
    span: 'md:col-span-2 md:row-span-2',
    visual: 'compliance',
  },
  {
    tag: 'VAULT',
    title: 'Search every document.',
    body: 'Leases, rent rolls, operating statements, and diligence files — semantic search across the firm.',
    span: 'md:col-span-1',
    visual: 'vault',
  },
  {
    tag: 'MEETINGS',
    title: 'Calls become tasks.',
    body: 'Every conversation is captured, summarized, and filed against the property or deal.',
    span: 'md:col-span-1',
    visual: 'meetings',
  },
  {
    tag: 'SITE SELECTION',
    title: 'From data to verdict.',
    body: 'Continuous analysis of demand, competition, trade area, and site fit.',
    span: 'md:col-span-1',
    visual: 'tax',
  },
  {
    tag: 'DEADLINES',
    title: 'Never miss a deadline.',
    body: 'Lease dates, diligence tasks, and follow-ups queued and tracked on schedule.',
    span: 'md:col-span-1',
    visual: 'rmd',
  },
  {
    tag: 'DATA SOURCES',
    title: 'Live across every desk.',
    body: 'Property data, CRM, deal systems, and documents — connected and reconciled in real time. No spreadsheet bridge.',
    span: 'md:col-span-2',
    visual: 'custodian',
  },
  {
    tag: 'AUDIT',
    title: 'Every action sourced.',
    body: 'Who saw what, when, and why. Immutable log, exportable on demand.',
    span: 'md:col-span-1',
    visual: 'audit',
  },
]

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !visible) setVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [visible])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-6 py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-xs tracking-[0.3em] text-gray-500 mb-6">
          EVERY SURFACE
        </div>
        <h2 className="text-3xl md:text-5xl font-light text-white mb-20 leading-tight max-w-3xl">
          One firm. One CRE model.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(220px,auto)]">
          {CELLS.map((cell, idx) => (
            <div
              key={cell.title}
              className={`group relative ${cell.span} rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/25 p-7 overflow-hidden transition-colors duration-500`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 700ms cubic-bezier(0.19, 1, 0.22, 1) ${
                  idx * 80
                }ms, transform 700ms cubic-bezier(0.19, 1, 0.22, 1) ${
                  idx * 80
                }ms, border-color 500ms ease`,
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-[10px] tracking-[0.25em] text-gray-500 mb-3 font-mono">
                  {cell.tag}
                </div>
                <h3 className="text-xl md:text-2xl text-white font-light mb-3 leading-tight">
                  {cell.title}
                </h3>
                <p className="text-sm md:text-base text-[#E8E2D5]/60 leading-relaxed font-light max-w-md">
                  {cell.body}
                </p>
                <div className="mt-auto pt-6">
                  <Visual kind={cell.visual} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Visual({ kind }: { kind: Cell['visual'] }) {
  if (kind === 'compliance') {
    return (
      <div className="rounded-md bg-black/60 border border-white/5 p-4 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between text-gray-600">
          <span>MEMO-2026-0481</span>
          <span>SIGNED</span>
        </div>
        <div className="text-[#E8E2D5]/70 leading-relaxed">
          Recommendation: rebalance Henderson trust from 70/30 to 65/35.
        </div>
        <div className="text-gray-600 pt-1">
          cite: ips.henderson §4.2, irs §1.411(d)
        </div>
        <div className="flex items-center gap-2 pt-2 text-gray-500">
          <div className="w-1 h-1 rounded-full bg-white/60" />
          <span>queued for 9:00 AM review</span>
        </div>
      </div>
    )
  }
  if (kind === 'vault') {
    return (
      <div className="space-y-1.5 font-mono text-[11px] text-gray-500">
        <div className="flex justify-between"><span>henderson_trust_2019.pdf</span><span className="text-white/60">match</span></div>
        <div className="flex justify-between"><span>chen_ira_beneficiary.pdf</span><span>—</span></div>
        <div className="flex justify-between"><span>davies_estate_plan.docx</span><span>—</span></div>
      </div>
    )
  }
  if (kind === 'meetings') {
    return (
      <div className="font-mono text-[11px] text-gray-500 leading-relaxed">
        <div className="text-[#E8E2D5]/70">42 min · Margaret Chen</div>
        <div>→ open Roth conversion analysis</div>
        <div>→ flag concentrated NVDA position</div>
      </div>
    )
  }
  if (kind === 'tax') {
    return (
      <div className="flex items-end gap-1 h-10">
        {[0.3, 0.45, 0.4, 0.6, 0.55, 0.7, 0.85, 0.65, 0.5, 0.75, 0.9, 0.8].map((h, i) => (
          <div key={i} className="flex-1 bg-white/30 rounded-sm" style={{ height: `${h * 100}%` }} />
        ))}
      </div>
    )
  }
  if (kind === 'rmd') {
    return (
      <div className="font-mono text-[11px]">
        <div className="text-[#E8E2D5]/70">Q4 · 7 distributions queued</div>
        <div className="text-gray-500">next: Dec 15 · $42,300</div>
      </div>
    )
  }
  if (kind === 'custodian') {
    return (
      <div className="flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.15em]">
        {['SCHWAB', 'FIDELITY', 'PERSHING', 'ALTRUIST', 'BNY', 'GOLDMAN'].map((c) => (
          <div key={c} className="px-3 py-1.5 rounded-full border border-white/10 text-gray-400">
            {c} · LIVE
          </div>
        ))}
      </div>
    )
  }
  // audit
  return (
    <div className="font-mono text-[11px] text-gray-500 space-y-1">
      <div>03:14 · scan complete</div>
      <div>09:02 · memo signed · jdoe</div>
      <div>09:14 · trade approved · jdoe</div>
    </div>
  )
}
