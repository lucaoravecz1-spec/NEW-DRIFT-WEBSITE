import PageHero from '@/components/PageHero'
import Link from 'next/link'

const ASKS = [
  {
    cat: 'Review prep',
    q: 'Summarize the Pemberton household for tomorrow\u2019s 10am — emphasize cash position and the new RMD on the IRA.',
  },
  {
    cat: 'Document Q&A',
    q: 'In the Hartman family trust, who has discretion to distribute principal after the death of the grantor?',
  },
  {
    cat: 'Portfolio check',
    q: 'Show me every property and deal over 35% in concentrated single-name stock. Sort by gain percentage.',
  },
  {
    cat: 'Client comms',
    q: 'Draft a note to the Reyes family explaining their Q1 performance and the rebalance we made in March.',
  },
]

const PRINCIPLES = [
  {
    h: 'Reads from your data',
    b: 'Custodian, accounting, planning, CRM, and the document vault. Every answer scoped to the household, the firm, and the policies.',
  },
  {
    h: 'Cites every source',
    b: 'No "the model thinks." Each line links back to a position, a document page, a policy clause, or a CRM note. Click through to verify.',
  },
  {
    h: 'Waits for approval',
    b: 'Drafted communications and recommendations sit in the morning queue. Nothing leaves the firm without an team signing off.',
  },
]

const COVERAGE = [
  'Custodial positions and trades',
  'Portfolio accounting (Addepar / Orion / Black Diamond)',
  'Planning models (eMoney / MoneyGuide)',
  'CRM (Salesforce FSC / Redtail / Wealthbox)',
  'Document store (Box / SharePoint / Drive / NetDocuments)',
  'Calendar and meeting transcripts',
  'Email and client correspondence',
  'Custodial statements and tax documents',
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Assistant"
        headline={
          <>
            The associate who <em className="font-serif italic text-[#E8E2D5]">reads everything</em> overnight.
          </>
        }
        lede="DANTE is a daily co-pilot grounded in your firm's data. It reads documents, queries portfolios, and drafts client communications — and cites where every answer came from."
      />

      {/* Interface preview */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)' }}
          >
            <div className="grid lg:grid-cols-12">
              {/* Thread rail */}
              <aside className="lg:col-span-3 border-r border-white/[0.06] p-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
                  Today
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="px-3 py-2 rounded-lg bg-white/[0.05] text-white">
                    Pemberton review prep
                  </li>
                  <li className="px-3 py-2 rounded-lg text-[#E8E2D5]/70">
                    Hartman trust Q&amp;A
                  </li>
                  <li className="px-3 py-2 rounded-lg text-[#E8E2D5]/70">
                    Concentration scan
                  </li>
                  <li className="px-3 py-2 rounded-lg text-[#E8E2D5]/70">
                    Reyes Q1 letter draft
                  </li>
                </ul>
              </aside>

              {/* Conversation */}
              <div className="lg:col-span-9 p-8 md:p-10">
                <div className="flex justify-end mb-6">
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tr-sm px-4 py-3 max-w-md text-sm text-white">
                    Summarize the Pemberton household for tomorrow&rsquo;s 10am — emphasize cash position and the new RMD on the IRA.
                  </div>
                </div>

                <div className="mb-2 text-[10px] tracking-[0.3em] uppercase text-gray-500">
                  DANTE
                </div>
                <div className="text-[#E8E2D5] text-base leading-relaxed font-light space-y-3 mb-6">
                  <p>
                    The Pemberton household has $4.2M in custody across a joint taxable, two
                    Roth IRAs, and a traditional IRA in Henry&rsquo;s name.{' '}
                    <Cite>1</Cite>
                  </p>
                  <p>
                    Cash position is <span className="text-white">$285k</span> — about 6.8% of
                    total — sitting in the joint account from the March bond ladder maturity.
                    <Cite>2</Cite>
                  </p>
                  <p>
                    Henry turned 73 in February; his first RMD on the traditional IRA is{' '}
                    <span className="text-white">$96,400</span>, due by April 1, 2027.{' '}
                    <Cite>3</Cite> Per the 2024 review notes, the household prefers QCD-eligible
                    distributions to St. Mary&rsquo;s. <Cite>4</Cite>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  <Source n={1} label="Schwab positions" />
                  <Source n={2} label="Addepar 03/14/26" />
                  <Source n={3} label="IRS Pub 590-B" />
                  <Source n={4} label="CRM note · 11/2024" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you can ask */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            What you can ask
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-12 max-w-2xl">
            The questions an associate would answer — answered in seconds, with sources.
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {ASKS.map((a) => (
              <div key={a.q} className="bg-black p-7">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
                  {a.cat}
                </div>
                <p className="text-base md:text-lg text-[#E8E2D5] font-light leading-snug">
                  &ldquo;{a.q}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            How it stays grounded
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-14 max-w-2xl">
            The model is the easy part. The discipline around it is the product.
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {PRINCIPLES.map((p, i) => (
              <div key={p.h}>
                <div className="text-[10px] text-gray-500 mb-4 tabular-nums tracking-[0.2em]">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-light text-white tracking-tight mb-3">
                  {p.h}
                </h3>
                <p className="text-sm text-[#E8E2D5]/70 font-light leading-relaxed">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              What it reads
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
              Every system the firm already runs.
            </h2>
            <p className="text-base text-[#E8E2D5]/70 font-light leading-relaxed mt-6 max-w-md">
              Read-only by default. The system of record stays the system of record.
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {COVERAGE.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 text-sm text-[#E8E2D5]/85 font-light leading-snug"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-[#E8E2D5]/60 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-32 pt-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              See it on your firm
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-md">
              A 30-minute walkthrough on your own data.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
          >
            Book a demo
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

function Cite({ children }: { children: React.ReactNode }) {
  return (
    <sup className="text-[10px] text-[#E8E2D5]/60 ml-0.5 align-super">
      [{children}]
    </sup>
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
