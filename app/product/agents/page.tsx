import PageHero from '@/components/PageHero'
import Link from 'next/link'

const QUEUE = [
  {
    tag: 'Tax-loss harvesting',
    head: 'Reyes Family · Joint Taxable',
    body: 'NVDA lot from 03/14 down 18.4% — eligible for harvest. Wash-sale clear. Suggested replacement: SMH for 31 days.',
    cta: 'Approve trade',
    badge: 'Save ~$8,400',
  },
  {
    tag: 'RMD',
    head: 'Henry Pemberton · Traditional IRA',
    body: 'First RMD of $96,400 due by April 1, 2027. Household preference: QCD-eligible distribution to St. Mary\u2019s.',
    cta: 'Schedule',
    badge: 'Due in 11 mo',
  },
  {
    tag: 'Concentration',
    head: 'Calloway Household · 41% in MSFT',
    body: 'Crossed 40% threshold this morning after gain. Per IPS, recommend trim to 28% over two quarters.',
    cta: 'Draft client note',
    badge: 'Threshold breach',
  },
  {
    tag: 'Roth window',
    head: 'Aldrich Family · Joint',
    body: 'Income window for Roth conversion opens September. Estimated optimal conversion: $185k at 24% bracket.',
    cta: 'Model and review',
    badge: 'Q3 opportunity',
  },
  {
    tag: 'Beneficiary',
    head: 'Vance Trust · IRA',
    body: 'IRA primary beneficiary still lists former spouse (divorced 2019). Update needed before next QPR.',
    cta: 'Send form',
    badge: 'Needs action',
  },
]

const CATALOG = [
  {
    h: 'Tax-loss harvesting',
    b: 'Continuously monitors taxable accounts for harvest-eligible lots. Wash-sale aware across linked households.',
  },
  {
    h: 'RMD scheduling',
    b: 'Tracks every required distribution across IRAs and inherited accounts. QCD-aware. Surfaces 11 months early.',
  },
  {
    h: 'Concentration monitor',
    b: 'Per-household IPS thresholds. Alerts on breach. Drafts the conversation note when it triggers.',
  },
  {
    h: 'Roth conversion windows',
    b: 'Reads the income trajectory. Surfaces conversion opportunities when the bracket and the cash both line up.',
  },
  {
    h: 'Beneficiary review',
    b: 'Catches stale designations against marital status, deceased relatives, and account-type rule changes.',
  },
  {
    h: 'Fee verification',
    b: 'Reconciles billed advisory fees against custodial fee deductions. Flags anything off by more than $1.',
  },
  {
    h: 'Cash sweep',
    b: 'Watches cash balances across the household. Sweeps to the right vehicle by household rule.',
  },
  {
    h: 'Custom agents',
    b: 'Define your own. Triggered by data events; produce drafts that wait for advisor sign-off.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Agents"
        headline={
          <>
            Planning workflows that run <em className="font-serif italic text-[#E8E2D5]">while you sleep.</em>
          </>
        }
        lede="Tax-loss scans, RMD scheduling, concentration monitoring, Roth conversion windows. Drift runs in the background; you approve in the morning."
      />

      {/* Morning queue */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
                The morning queue
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight max-w-2xl">
                Five things that need an advisor today.
              </h2>
            </div>
            <div className="text-xs text-gray-500 tabular-nums">
              Generated 06:14 ET · 5 items · 0 critical
            </div>
          </div>

          <ul className="space-y-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {QUEUE.map((q) => (
              <li key={q.head} className="bg-black hover:bg-white/[0.02] transition-colors">
                <div className="grid lg:grid-cols-12 gap-4 p-6 items-center">
                  <div className="lg:col-span-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                      {q.tag}
                    </span>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="text-sm font-medium text-white mb-1">{q.head}</div>
                    <div className="text-sm text-[#E8E2D5]/70 font-light leading-snug">
                      {q.body}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <span className="text-xs text-[#E8E2D5] bg-[#E8E2D5]/10 border border-[#E8E2D5]/20 rounded-full px-2.5 py-1 inline-block">
                      {q.badge}
                    </span>
                  </div>
                  <div className="lg:col-span-1 lg:text-right">
                    <button className="text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                      {q.cta} <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Catalog */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            The catalog
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-12 max-w-2xl">
            Eight workflows ship with Drift. Build any number more.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {CATALOG.map((c) => (
              <div key={c.h} className="bg-black p-6">
                <div className="text-sm font-medium text-white mb-2 tracking-tight">
                  {c.h}
                </div>
                <div className="text-xs text-[#E8E2D5]/70 font-light leading-relaxed">
                  {c.b}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approval flow */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            How approval works
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-12 max-w-2xl">
            The professional stays in the loop. Always.
          </h2>

          <ol className="grid sm:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {[
              ['Detect', 'Agent monitors data; trigger fires.'],
              ['Draft', 'Memo, trade ticket, or client note prepared with sources.'],
              ['Queue', 'Item lands in the morning review with reasoning attached.'],
              ['Approve', 'Advisor reviews, edits, signs. Audit log captures everything.'],
            ].map(([h, b], i) => (
              <li key={h} className="bg-black p-6">
                <div className="text-[10px] text-gray-500 mb-3 tabular-nums tracking-[0.2em]">
                  0{i + 1}
                </div>
                <div className="text-base font-medium text-white mb-2">{h}</div>
                <div className="text-xs text-[#E8E2D5]/70 leading-relaxed">{b}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-32 pt-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              Run agents on your firm
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-md">
              Pilot one agent on one segment of your book. We&rsquo;ll measure the lift.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
          >
            Start an agent pilot
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
