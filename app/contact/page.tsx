import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Contact"
        headline={<>Talk to Drift.</>}
        lede="Whether you want a demo, a partnership conversation, or a security review, we can route the conversation quickly."
      />

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
          {[
            ['Book a demo', 'Walk through a site, deal, diligence, or operations workflow with the Drift team.'],
            ['Partnerships', 'If you work with CRE clients and think Drift should be in the conversation, reach out.'],
            ['Security review', 'We can discuss architecture, permissions, and how Drift handles data access and traceability.'],
            ['General inquiry', 'If you are figuring out fit, we can help you find the right entry point.'],
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
