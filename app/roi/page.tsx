import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Resources · ROI"
        headline={<>Model the leverage.</>}
        lede="Drift is valuable when it increases deal capacity, compresses review time, and reduces the amount of expensive human effort spent assembling the obvious."
      />

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
          {[
            ['Deal capacity', 'How many more opportunities can a team screen with the same headcount?'],
            ['Cycle time', 'How much faster can a site, diligence, or memo workflow move?'],
            ['Labor leverage', 'Where can Drift replace repetitive analyst or coordinator time with higher-quality throughput?'],
          ].map(([title, body]) => (
            <div key={title} className="bg-black p-8">
              <h2 className="text-2xl font-light tracking-tight text-white mb-4">{title}</h2>
              <p className="text-sm text-[#E8E2D5]/72 font-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
