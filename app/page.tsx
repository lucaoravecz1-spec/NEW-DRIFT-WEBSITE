'use client'

import Link from 'next/link'

const AUDIENCES = [
  {
    name: 'Developers',
    body: 'Source sites faster, pressure-test highest-and-best-use, and catch entitlement risk before the wrong parcel eats months.',
  },
  {
    name: 'Brokers',
    body: 'Win with better site selection, sharper valuations, faster offering materials, and real answers on whether a location works.',
  },
  {
    name: 'Investors',
    body: 'Screen more deals, produce tighter memos, and move from raw information to buy, pass, or renegotiate faster.',
  },
  {
    name: 'Owners & operators',
    body: 'Handle tenant communication, maintenance triage, renewals, and at-risk signals without adding more operational drag.',
  },
]

const MODULES = [
  'Site selection and market analysis',
  'Underwriting and financial review',
  'Due diligence and lease abstraction',
  'Zoning, buildability, and highest-and-best-use',
  'IC memos and investment synthesis',
  'Voice, SMS, workflow automation, and proactive follow-through',
]

const TRUST = [
  'Drift cites the source behind each important claim and recommendation.',
  'If data is missing, Drift flags it instead of pretending certainty.',
  'Verified fact and expert judgment are kept distinct in the output.',
  'The system is designed to help professionals act, not to bluff them into acting.',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="px-6 pt-40 pb-20 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-8 text-[10px] tracking-[0.3em] uppercase text-gray-500">
            <span className="w-1 h-1 rounded-full bg-[#E8E2D5]" />
            <span>Drift AI</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-light text-white tracking-tight leading-[1.02] text-5xl md:text-7xl mb-8 max-w-[950px]">
                Proactive AI for <em className="font-serif italic text-[#E8E2D5]">commercial real estate.</em>
              </h1>
              <p className="text-lg md:text-2xl text-[#E8E2D5]/72 max-w-[760px] leading-relaxed font-light">
                Drift is a CRE-smart reasoning and execution layer that analyzes sites and deals
                like a senior expert, automates the repetitive work, and keeps transactions and
                operations moving by voice, workflow, or text.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pl-8">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <div className="text-[10px] tracking-[0.28em] uppercase text-gray-500 mb-4">
                  What makes Drift different
                </div>
                <p className="text-sm text-[#E8E2D5]/78 font-light leading-relaxed">
                  Most CRE tools give you more dashboards and more data. Drift tells you what the
                  site means, what the deal is worth, what the risks are, and what to do next.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
            >
              Book a demo
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 border border-white/[0.14] text-white px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white/[0.04] transition"
            >
              Explore product
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-8">
            Who it&rsquo;s for
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06]">
            {AUDIENCES.map((audience) => (
              <div key={audience.name} className="bg-black p-8">
                <h2 className="text-2xl font-light text-white tracking-tight mb-4">{audience.name}</h2>
                <p className="text-sm text-[#E8E2D5]/72 font-light leading-relaxed">{audience.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              Core idea
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              The bottleneck is not data. It&rsquo;s turning data into decisions.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-base md:text-lg text-[#E8E2D5]/74 font-light leading-relaxed">
            <p>
              Commercial real estate already has parcel data, zoning records, comps, business
              inventory, traffic, rent rolls, and operating statements. What teams do not have is
              enough expert time to reason across all of it consistently.
            </p>
            <p>
              Drift sits one layer above the data stack. It assembles the relevant evidence, runs
              CRE-specific reasoning over it, and returns a structured verdict with the supporting
              logic, sources, risks, and next actions.
            </p>
            <p>
              That means faster site decisions, tighter diligence, more deals screened, and less
              operator time spent stitching the work together by hand.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
              From property or question to a usable recommendation.
            </h2>
            <p className="text-base md:text-lg text-[#E8E2D5]/72 font-light leading-relaxed">
              A user gives Drift a property, deal, document, or request. Drift gathers the
              necessary data, reasons over it with CRE-specific prompts, and returns a conclusion
              that can be verified and acted on.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              ['1', 'Assemble the picture', 'Pull only the relevant structured data and documents needed for the task.'],
              ['2', 'Reason like an expert', 'Evaluate the inputs the way a senior CRE analyst, broker, or operator would.'],
              ['3', 'Show the verdict', 'Deliver a clear output with decision, rationale, risks, and citations.'],
              ['4', 'Keep moving', 'Trigger next steps through automation, outreach, voice, or SMS.'],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="text-[10px] tracking-[0.25em] uppercase text-gray-500 mb-3">Step {step}</div>
                <h3 className="text-xl font-light text-white tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-[#E8E2D5]/72 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-8">
            Modules
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06]">
            {MODULES.map((module) => (
              <div key={module} className="bg-black p-7">
                <div className="text-base md:text-lg text-white font-light tracking-tight">{module}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              Trust foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Real-money decisions require real discipline.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {TRUST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#E8E2D5]/74 font-light leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E8E2D5]/55 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 pt-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              Signature strength
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-2xl">
              Give Drift a property and an intended use, and it can move from question to
              recommendation in minutes instead of weeks.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
          >
            See it live
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
