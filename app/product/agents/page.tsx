import Link from 'next/link'
import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Operations"
        headline={
          <>
            Operational follow-through without the <em className="font-serif italic text-[#E8E2D5]">manual churn.</em>
          </>
        }
        lede="Drift helps teams handle tenant communication, maintenance triage, leasing follow-up, and property-level tasks so the work keeps moving even when people are spread thin."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              Use cases
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              For owners, operators, property managers, and lean teams.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4">
            {[
              'Maintenance requests routed and summarized for action',
              'Tenant communication drafted with the right property context',
              'Renewal and churn risk surfaced before the deadline arrives',
              'Post-meeting follow-up handled automatically',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-base text-[#E8E2D5] font-light">
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
              Operational leverage
            </div>
            <h2 className="max-w-xl text-2xl md:text-3xl font-light tracking-tight text-white">
              The goal is not another inbox. It&rsquo;s fewer dropped balls and less repetitive coordination work.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8E2D5] px-6 py-3 text-sm font-semibold text-black whitespace-nowrap transition hover:bg-white"
          >
            See operations demo
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
