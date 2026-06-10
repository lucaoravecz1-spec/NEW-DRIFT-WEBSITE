import PageHero from '@/components/PageHero'

const STORIES = [
  {
    label: 'Developer workflow',
    title: 'Site decisions in hours instead of outsourced weeks.',
    body: 'Developers use Drift to screen parcels, test use cases, and pressure-test what a site actually wants to be before real money and calendar time are burned.',
  },
  {
    label: 'Investor workflow',
    title: 'More deals screened without adding another analyst layer.',
    body: 'Investment teams use Drift to turn early information into a faster buy, pass, or renegotiate recommendation with clearer risk framing.',
  },
  {
    label: 'Operator workflow',
    title: 'Less operational drag after the deal closes.',
    body: 'Owners and operators use Drift to handle tenant communication, triage issues, and keep tasks from going stale.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Resources · Customers"
        headline={<>How CRE teams use Drift in practice.</>}
        lede="Different teams buy Drift for different reasons, but the pattern is consistent: more decisions covered, less manual churn, and clearer follow-through."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
          {STORIES.map((story) => (
            <div key={story.title} className="bg-black p-8">
              <div className="text-[10px] tracking-[0.28em] uppercase text-gray-500 mb-4">{story.label}</div>
              <h2 className="text-2xl font-light tracking-tight text-white mb-4">{story.title}</h2>
              <p className="text-sm text-[#E8E2D5]/72 font-light leading-relaxed">{story.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
