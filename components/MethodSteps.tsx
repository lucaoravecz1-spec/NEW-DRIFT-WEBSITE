'use client'

import { useEffect, useRef, useState } from 'react'

type Step = {
  number: string
  title: string
  body: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'We meet your stack.',
    body: 'Drift connects to your custodian, CRM, planning tools, and document vault in days, not quarters. No data migration. No re-platforming. We meet the firm where it lives.',
  },
  {
    number: '02',
    title: 'A living model of your firm.',
    body: 'Every meeting note, statement, trust document, and email thread becomes context. The model is not generic — it is your firm, encoded. It compounds with every conversation.',
  },
  {
    number: '03',
    title: 'Agents do the work, not the talking.',
    body: 'Drift runs in the background — drafting compliance memos, scanning for tax-loss opportunities, queuing RMDs, surfacing concentrated positions before they become problems.',
  },
  {
    number: '04',
    title: 'Every decision is yours.',
    body: 'Drift drafts. You approve. Every action is logged, sourced, and auditable. The agent never sends, trades, or files without explicit human consent. The loop ends with you.',
  },
]

const HEADLINE = 'How Drift works.'

export default function MethodSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)
  const [typed, setTyped] = useState('')
  const [headlineDone, setHeadlineDone] = useState(false)
  const [revealedSteps, setRevealedSteps] = useState<number>(0)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) setStarted(true)
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let cancelled = false
    let i = 0
    const tick = () => {
      if (cancelled) return
      if (i >= HEADLINE.length) {
        setHeadlineDone(true)
        return
      }
      const ch = HEADLINE[i]
      i++
      setTyped(HEADLINE.slice(0, i))
      const delay = /[.,;:]/.test(ch) ? 320 : ch === ' ' ? 22 : 38
      setTimeout(tick, delay)
    }
    setTimeout(tick, 250)
    return () => {
      cancelled = true
    }
  }, [started])

  useEffect(() => {
    if (!headlineDone) return
    let cancelled = false
    const reveal = (idx: number) => {
      if (cancelled || idx > STEPS.length) return
      setRevealedSteps(idx)
      if (idx < STEPS.length) {
        setTimeout(() => reveal(idx + 1), 200)
      }
    }
    setTimeout(() => reveal(1), 400)
    return () => {
      cancelled = true
    }
  }, [headlineDone])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-6 py-32 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="text-xs tracking-[0.3em] text-gray-500 mb-8">
          THE METHOD
        </div>

        {/* Typewriter headline */}
        <h2 className="text-3xl md:text-5xl font-light text-white mb-20 leading-tight">
          {typed}
          {!headlineDone && started && (
            <span className="inline-block w-[2px] h-[0.9em] bg-white align-middle ml-[1px] animate-pulse" />
          )}
        </h2>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Vertical line — connects first three only */}
          <div
            className="absolute left-[7px] top-2 w-px bg-white/15"
            style={{
              height:
                revealedSteps >= 3
                  ? 'calc(66% - 12px)'
                  : revealedSteps === 2
                  ? 'calc(33% - 12px)'
                  : revealedSteps === 1
                  ? '0%'
                  : '0%',
              transition: 'height 700ms cubic-bezier(0.19, 1, 0.22, 1)',
            }}
          />

          {STEPS.map((step, idx) => {
            const isRevealed = revealedSteps > idx
            const isLast = idx === STEPS.length - 1
            return (
              <div
                key={step.number}
                className="relative pl-8 pb-12 last:pb-0"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(12px)',
                  transition:
                    'opacity 600ms cubic-bezier(0.19, 1, 0.22, 1), transform 600ms cubic-bezier(0.19, 1, 0.22, 1)',
                }}
              >
                {/* Dot — only on first three */}
                {!isLast && (
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-black border border-white/40 flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-full bg-white/80" />
                  </div>
                )}
                {/* Final step marker — slightly larger, no dot inside */}
                {isLast && (
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-white" />
                )}

                <div className="text-xs tracking-[0.2em] text-gray-500 mb-2 font-mono">
                  {step.number}
                </div>
                <div className="text-2xl md:text-3xl text-white font-light mb-3">
                  {step.title}
                </div>
                <div className="text-base md:text-lg text-[#E8E2D5]/70 leading-relaxed font-light max-w-xl">
                  {step.body}
                </div>
              </div>
            )
          })}
        </div>

        {/* Hairline rule + closing thesis */}
        <div
          className="mt-16 pt-12 border-t border-white/10"
          style={{
            opacity: revealedSteps > STEPS.length ? 1 : 0,
            transition: 'opacity 800ms ease-out',
          }}
        >
          <p className="text-xl md:text-2xl text-[#E8E2D5] font-light leading-relaxed italic">
            Every conversation makes the next one sharper.
          </p>
        </div>
      </div>
    </section>
  )
}
