'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<'pause' | 'expand' | 'fade' | 'gone'>('pause')

  useEffect(() => {
    // Phase 1: pause at full size (~37% of total)
    const expandTimer = setTimeout(() => setPhase('expand'), 1100)
    // Phase 2 → 3: opacity fade in the last 22% (~660ms of 3000ms)
    const fadeTimer = setTimeout(() => setPhase('fade'), 2340)
    // Phase 3 done — remove from DOM at 3s
    const goneTimer = setTimeout(() => {
      setPhase('gone')
      onDone?.()
    }, 3000)
    return () => {
      clearTimeout(expandTimer)
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
    }
  }, [onDone])

  if (phase === 'gone') return null

  const expanding = phase === 'expand' || phase === 'fade'
  const fading = phase === 'fade'

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden"
      style={{
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 660ms ease-out' : 'none',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* Logo: dark circle (same as hero bg) with DRIFT text inside */}
      <div
        className="relative rounded-full bg-black flex items-center justify-center"
        style={{
          width: '220px',
          height: '220px',
          transform: expanding ? 'scale(30)' : 'scale(1)',
          transition: expanding
            ? 'transform 1240ms cubic-bezier(0.55, 0, 0.85, 0.1)'
            : 'none',
        }}
      >
        <span
          className="text-white font-semibold text-xl tracking-[0.4em] select-none"
          style={{
            opacity: expanding ? 0 : 1,
            transition: expanding ? 'opacity 600ms ease-out' : 'none',
          }}
        >
          D R I F T
        </span>
      </div>
    </div>
  )
}
