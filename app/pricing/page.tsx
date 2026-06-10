import PageHero from '@/components/PageHero'
import Link from 'next/link'

const TIERS = [
  {
    name: 'Pilot',
    tag: 'Best for first deployment',
    price: '$3k-$8k',
    cadence: 'monthly plus setup',
    features: [
      'One configured workflow',
      'Reasoning reports and team onboarding',
      'Shared Slack or text support',
      'Usage-based data and compute passthrough',
    ],
  },
  {
    name: 'Team',
    tag: 'For active broker, developer, or investment teams',
    price: '$10k+',
    cadence: 'monthly plus seats and usage',
    features: [
      'Multiple workflows and user roles',
      'Voice, SMS, and automation enabled',
      'Custom prompt and report configuration',
      'Priority support and rollout help',
    ],
  },
  {
    name: 'Enterprise',
    tag: 'For scaled platforms and operators',
    price: 'Custom',
    cadence: 'structured to environment and usage',
    features: [
      'Advanced security and process review',
      'Expanded integrations and workflow design',
      'Team-wide rollout support',
      'Commercial terms for larger usage patterns',
    ],
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Pricing"
        headline={
          <>
            Priced like leverage, <em className="font-serif italic text-[#E8E2D5]">not software sprawl.</em>
          </>
        }
        lede="Drift is sold the way clients actually buy new capability in CRE: setup to get live, a monthly platform fee, per-seat expansion as usage spreads, and usage-based data and compute passthrough."
      />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div key={tier.name} className="bg-black p-8 md:p-10">
              <div className="text-xs tracking-wide text-gray-500 mb-3">{tier.tag}</div>
              <h2 className="text-3xl font-light tracking-tight text-white mb-4">{tier.name}</h2>
              <div className="text-4xl font-light tracking-tight text-white mb-2">{tier.price}</div>
              <div className="text-xs text-gray-500 mb-8">{tier.cadence}</div>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#E8E2D5]/74 font-light leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E8E2D5]/45 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 pt-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">Commercial framing</div>
            <h2 className="max-w-2xl text-2xl md:text-3xl font-light tracking-tight text-white">
              The pitch is simple: for less than the cost of another analyst, your team gets more reasoning capacity, more coverage, and faster execution.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8E2D5] px-6 py-3 text-sm font-semibold text-black whitespace-nowrap transition hover:bg-white"
          >
            Talk pricing
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
