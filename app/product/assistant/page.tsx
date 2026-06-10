import Link from 'next/link'
import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Reasoning"
        headline={
          <>
            Expert-grade CRE analysis, <em className="font-serif italic text-[#E8E2D5]">on demand.</em>
          </>
        }
        lede="Drift's reasoning engine pulls together structured market and property data, reasons across it like a senior analyst, and returns a usable conclusion instead of a dashboard."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              What it covers
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Site, market, deal, and tenant questions.
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
            {[
              'Void and gap analysis',
              'Trade area and competition analysis',
              'Highest-and-best-use recommendations',
              'Quick underwriting and valuation framing',
              'Tenant fit and site scoring',
              'Decision-ready site reports',
            ].map((item) => (
              <div key={item} className="bg-black p-6 text-base text-[#E8E2D5] font-light">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 pt-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              See the workflow
            </div>
            <h2 className="max-w-xl text-2xl md:text-3xl font-light tracking-tight text-white">
              Drop in a property and Drift can take you from raw inputs to a recommendation.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8E2D5] px-6 py-3 text-sm font-semibold text-black whitespace-nowrap transition hover:bg-white"
          >
            Book a demo
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
