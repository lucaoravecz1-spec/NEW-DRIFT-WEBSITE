import PageHero from '@/components/PageHero'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Company · About"
        headline={
          <>
            We built Drift because CRE teams were drowning in work that software still left <em className="font-serif italic text-[#E8E2D5]">to humans.</em>
          </>
        }
        lede="Drift exists to turn fragmented property and market inputs into expert-level reasoning and then carry the work forward without needing another full layer of manual effort."
      />

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-[#E8E2D5]/80 font-light leading-relaxed">
          <p>
            Commercial real estate has no shortage of data. It has a shortage of time, judgment,
            and people who can keep turning data into good decisions at scale.
          </p>
          <p>
            Teams still spend too much of their week stitching together comps, zoning context,
            tenant signals, lease details, diligence materials, and follow-up tasks by hand. The
            insight behind Drift is that this bottleneck is not another data feed problem. It is a
            reasoning and execution problem.
          </p>
          <p>
            So we built Drift to act like a CRE-smart teammate: one that can analyze a property or
            market like a senior expert, explain the recommendation clearly, and then help the team
            move the next step forward.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 pt-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">Work with us</div>
            <h2 className="max-w-xl text-2xl md:text-3xl font-light tracking-tight text-white">
              We&rsquo;re building the operating layer for higher-judgment CRE work.
            </h2>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8E2D5] px-6 py-3 text-sm font-semibold text-black whitespace-nowrap transition hover:bg-white"
          >
            See careers
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
