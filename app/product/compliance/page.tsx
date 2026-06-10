import PageHero from '@/components/PageHero'
import Link from 'next/link'

const COVERAGE = [
  {
    rule: 'Reg BI',
    detail: 'Best Interest documentation for every recommendation. Care, conflict, disclosure obligations cited inline.',
  },
  {
    rule: 'Suitability',
    detail: 'Customer profile, risk tolerance, time horizon checked against the recommended action with a written rationale.',
  },
  {
    rule: 'Fee disclosure',
    detail: 'Form CRS and ADV cross-referenced. Fee changes flagged before they ship.',
  },
  {
    rule: 'Trade rationale',
    detail: 'Why this trade, why now, why for this household. Documented at the moment of recommendation, not after.',
  },
  {
    rule: 'Books & records',
    detail: 'FINRA 4511 retention. Immutable, time-stamped, exportable. Seven-year default; longer on request.',
  },
  {
    rule: 'Marketing rule',
    detail: 'Performance claims, hypothetical returns, testimonials reviewed against the SEC marketing rule before publish.',
  },
]

const AUDIT = [
  { ts: '06:14:02', actor: 'Drift', action: 'Detected concentration breach · Calloway Household · MSFT 41.2%' },
  { ts: '06:14:03', actor: 'Drift', action: 'Drafted client recommendation memo · sources [IPS, positions, prior reviews]' },
  { ts: '08:42:11', actor: 'C. Ahn', action: 'Reviewed memo · 2 edits · approved' },
  { ts: '08:42:48', actor: 'Drift', action: 'Sent memo to client portal · receipt logged' },
  { ts: '08:42:49', actor: 'Drift', action: 'Recorded in books & records · v1.0 · hash f7c2…' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Compliance"
        headline={
          <>
            The memo, the moment of <em className="font-serif italic text-[#E8E2D5]">the recommendation.</em>
          </>
        }
        lede="Every recommendation comes with a sourced, dated, and signed compliance memo — the regulator's homework, done before they ask for it."
      />

      {/* Sample memo */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            Sample memo
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-10 max-w-2xl">
            What lands in the file the moment you click approve.
          </h2>

          <article
            className="rounded-2xl border border-white/[0.08] p-8 md:p-10"
            style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #060606 100%)' }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 mb-6 border-b border-white/[0.08]">
              <div className="text-sm font-medium text-white">
                Best Interest Recommendation Memo · Calloway Household
              </div>
              <div className="text-xs text-gray-500 tabular-nums">
                Memo ID: BI-2026-0429-0411 · Drafted 06:14 ET · Approved 08:42 ET
              </div>
            </div>

            <div className="space-y-5 text-[#E8E2D5]/85 font-light leading-relaxed text-[15px]">
              <p>
                <span className="text-white font-medium">Recommendation.</span>{' '}
                Trim Microsoft (MSFT) position in the Calloway joint taxable account from 41.2%
                of household equity to a target of 28%, executed in two tranches across Q2 and Q3
                2026.
              </p>
              <p>
                <span className="text-white font-medium">Care obligation.</span>{' '}
                The Calloway IPS, last reviewed 11/2024, sets a 30% single-name concentration
                ceiling. The current MSFT position exceeds that ceiling by 11.2 percentage
                points. Trimming to 28% restores compliance with a 2-point buffer.{' '}
                <Cite>1</Cite>
              </p>
              <p>
                <span className="text-white font-medium">Conflict obligation.</span>{' '}
                No advisor compensation is tied to the recommended action. Drift fee schedule
                applies; no transaction-based fees.
              </p>
              <p>
                <span className="text-white font-medium">Disclosure obligation.</span>{' '}
                Tax impact estimated at $42,800 in long-term capital gains across the two
                tranches. Discussed with client per the meeting note dated 03/18/2026.{' '}
                <Cite>2</Cite>
              </p>
              <p>
                <span className="text-white font-medium">Rationale.</span>{' '}
                Recommendation aligns with stated household objectives of capital preservation
                and tax efficiency in the five years approaching retirement. <Cite>3</Cite>
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-2">
              <Source n={1} label="Calloway IPS · v3 · 11/2024" />
              <Source n={2} label="Meeting note · 03/18/2026" />
              <Source n={3} label="Household plan · eMoney" />
            </div>
          </article>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            What it covers
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-12 max-w-2xl">
            The rules a CCO would write into a checklist — automated against the work.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {COVERAGE.map((c) => (
              <div key={c.rule} className="bg-black p-6">
                <div className="text-sm font-medium text-white mb-2">{c.rule}</div>
                <div className="text-xs text-[#E8E2D5]/70 font-light leading-relaxed">
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit log */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            Audit trail
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-10 max-w-2xl">
            Every action, with an actor and a timestamp.
          </h2>

          <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 text-[10px] tracking-[0.25em] uppercase text-gray-500 bg-white/[0.02] border-b border-white/[0.06]">
              <div className="col-span-2">Time</div>
              <div className="col-span-2">Actor</div>
              <div className="col-span-8">Action</div>
            </div>
            <ul>
              {AUDIT.map((a, i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/[0.04] last:border-0 text-sm font-mono"
                >
                  <div className="col-span-2 text-gray-500 tabular-nums">{a.ts}</div>
                  <div className="col-span-2 text-[#E8E2D5]">{a.actor}</div>
                  <div className="col-span-8 text-[#E8E2D5]/80 font-light">{a.action}</div>
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
              Built for the CCO
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-md">
              We&rsquo;ll walk through the audit log with your compliance team.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
          >
            Schedule the walkthrough
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

function Cite({ children }: { children: React.ReactNode }) {
  return (
    <sup className="text-[10px] text-[#E8E2D5]/60 ml-0.5 align-super">[{children}]</sup>
  )
}

function Source({ n, label }: { n: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-full px-2.5 py-1">
      <span className="text-[#E8E2D5]">[{n}]</span>
      {label}
    </span>
  )
}
