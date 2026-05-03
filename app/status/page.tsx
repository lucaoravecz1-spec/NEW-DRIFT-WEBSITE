import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="System"
        headline="All systems operational."
        lede="Current status of the Drift platform, core agent services, and supporting infrastructure."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Platform API', 'Operational'],
            ['Agent workflows', 'Operational'],
            ['Document analysis', 'Operational'],
            ['Customer integrations', 'Operational'],
          ].map(([label, status]) => (
            <div key={label} className="bg-black p-7">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-gray-500 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <span>{status}</span>
              </div>
              <div className="text-xl font-light tracking-tight text-white">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              Incident process
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
              How Drift communicates issues.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-sm md:text-base text-[#E8E2D5]/75 font-light leading-relaxed">
            <p>
              If a production incident affects availability, latency, or a customer-facing
              workflow, we post an update here and communicate directly with impacted firms.
            </p>
            <p>
              Material incidents receive an initial acknowledgement, regular progress updates,
              and a closing summary once the issue is resolved and verified.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
