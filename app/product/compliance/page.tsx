import Link from 'next/link'
import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Agentic Layer"
        headline={
          <>
            Voice, SMS, and proactive execution <em className="font-serif italic text-[#E8E2D5]">across the stack.</em>
          </>
        }
        lede="Drift is not just an analysis surface. It can communicate, follow up, and run recurring workflows so professionals can manage deals and properties by text, phone, or trigger."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-2 xl:grid-cols-4">
          {[
            'Text Drift from your phone to start work or ask a property question',
            'Use voice agents for calls, intake, and outreach',
            'Automate recurring workflows after meetings or updates',
            'Let Drift handle follow-through before the task goes cold',
          ].map((item) => (
            <div key={item} className="bg-black p-7 text-sm text-[#E8E2D5]/74 font-light leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 pt-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              Why it matters
            </div>
            <h2 className="max-w-2xl text-2xl md:text-3xl font-light tracking-tight text-white">
              This is what makes Drift feel like a teammate instead of another tool you have to remember to open.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition hover:bg-white/[0.04]"
          >
            Talk to the team
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
