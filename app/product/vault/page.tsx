import Link from 'next/link'
import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Diligence"
        headline={
          <>
            Documents, leases, and diligence reviewed <em className="font-serif italic text-[#E8E2D5]">at speed.</em>
          </>
        }
        lede="Drift turns lease files, rent rolls, operating statements, and supporting diligence materials into a consolidated view of risk, inconsistency, and next questions."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
          {[
            ['Lease abstraction', 'Extract key terms, dates, rent escalations, and obligations without reading every page manually.'],
            ['Financial reconciliation', 'Cross-check rent roll, operating statements, and source support for mismatch and leakage.'],
            ['Risk register', 'Surface issues that should change price, structure, or diligence scope.'],
            ['Decision support', 'Help teams move toward buy, renegotiate, or walk with a clear summary.'],
          ].map(([title, body]) => (
            <div key={title} className="bg-black p-8">
              <h2 className="text-2xl font-light tracking-tight text-white mb-4">{title}</h2>
              <p className="text-sm text-[#E8E2D5]/72 font-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 pt-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              Diligence output
            </div>
            <h2 className="max-w-2xl text-2xl md:text-3xl font-light tracking-tight text-white">
              Drift is built to reduce the hours spent assembling the story before anyone can make the call.
            </h2>
          </div>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition hover:bg-white/[0.04]"
          >
            Back to product
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
