import PageHero from '@/components/PageHero'

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Resources · Method"
        headline={<>How Drift works.</>}
        lede="Drift assembles approved property and market inputs, reasons across them with CRE-specific workflows, and returns a clear recommendation with sources, risks, and next steps."
      />

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            ['1. Gather the right inputs', 'Drift pulls the relevant structured data and client materials needed for the task at hand.'],
            ['2. Reason over the evidence', 'The system applies CRE-specific prompts designed to mimic senior judgment in each workflow.'],
            ['3. Return a decision-ready output', 'The output includes a verdict, rationale, risk framing, and citations instead of a generic AI wall of text.'],
            ['4. Trigger follow-through', 'Reports, memos, communication, and recurring actions can all flow from the same work product.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <h2 className="text-2xl font-light tracking-tight text-white mb-3">{title}</h2>
              <p className="text-sm text-[#E8E2D5]/72 font-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
