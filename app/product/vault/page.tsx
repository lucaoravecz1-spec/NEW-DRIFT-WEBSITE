import PageHero from '@/components/PageHero'
import Link from 'next/link'

const DOC_TYPES = [
  { name: 'Trusts & estates', detail: 'Revocable, irrevocable, GRAT, ILIT, charitable remainder, dynasty.' },
  { name: 'Tax documents', detail: '1099 packages, K-1s, partnership returns, prior-year 1040s.' },
  { name: 'Custodial statements', detail: 'Monthly and quarterly across every custodian and account type.' },
  { name: 'Beneficiary forms', detail: 'IRA, retirement plan, insurance, payable-on-death, transfer-on-death.' },
  { name: 'Insurance policies', detail: 'Life, LTC, umbrella, P&C declarations and riders.' },
  { name: 'Operating agreements', detail: 'LLC, partnership, S-corp documents and amendments.' },
  { name: 'Real estate', detail: 'Deeds, mortgages, leases, title insurance, tax assessments.' },
  { name: 'Correspondence', detail: 'Engagement letters, prior-firm transition records, attorney memos.' },
]

const STATS = [
  { v: '14k', l: 'documents in a typical 60-day rollout' },
  { v: '< 60s', l: 'from upload to fully indexed and searchable' },
  { v: '99.4%', l: 'extraction accuracy on financial document tables' },
  { v: '7 yrs', l: 'default retention; per-firm policy honored' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Product · Vault"
        headline={
          <>
            Every document in the firm, <em className="font-serif italic text-[#E8E2D5]">finally readable.</em>
          </>
        }
        lede="Trusts, K-1s, statements, beneficiary forms, operating agreements — the entire firm's document graph, semantically indexed against the household."
      />

      {/* Scanner visualization + Q&A */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {/* Document */}
          <div className="lg:col-span-5 bg-black p-8 relative overflow-hidden">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-2">
              Indexing
            </div>
            <div className="text-sm font-medium text-white mb-1">
              Hartman Family Trust 2018 (Restated 2023).pdf
            </div>
            <div className="text-xs text-gray-500 mb-8">42 pages · 1.4 MB</div>

            <div className="relative rounded-lg border border-white/[0.08] bg-white/[0.015] p-5 h-[280px] overflow-hidden">
              {/* faux text lines */}
              <div className="space-y-2.5">
                {[
                  'ARTICLE I — REVOCATION AND AMENDMENT',
                  '1.1 Grantor reserves the right to revoke or amend',
                  '    this Trust at any time during their lifetime by',
                  '    delivering written instrument to the Trustee.',
                  '1.2 Upon the death of the Grantor, this Trust shall',
                  '    become irrevocable.',
                  'ARTICLE II — TRUSTEE',
                  '2.1 The initial Trustee shall be Margaret R. Hartman.',
                  '2.2 If Margaret R. Hartman is unable or unwilling to',
                  '    serve, the successor Trustee shall be Catherine',
                  '    A. Hartman, daughter of the Grantor.',
                  'ARTICLE III — DISTRIBUTIONS DURING LIFETIME',
                ].map((line, i) => (
                  <div
                    key={i}
                    className="text-[10.5px] text-[#E8E2D5]/55 font-mono tracking-tight whitespace-pre"
                    style={{
                      animation: `vaultLine 3.6s ease-in-out infinite`,
                      animationDelay: `${i * 0.18}s`,
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
              {/* scanner beam */}
              <div
                className="absolute left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, #E8E2D5, transparent)',
                  boxShadow: '0 0 12px rgba(232,226,213,0.5)',
                  animation: 'vaultBeam 3.6s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* Q&A */}
          <div className="lg:col-span-7 bg-[#080808] p-8 md:p-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
              Ask the document
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white mb-6">
              Who can serve as successor trustee if Margaret is unable to?
            </div>

            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              Answer
            </div>
            <p className="text-base md:text-lg text-[#E8E2D5] font-light leading-relaxed mb-6">
              Catherine A. Hartman, daughter of the Grantor. She is named as the successor
              Trustee under Article II, Section 2.2 of the Hartman Family Trust 2018,
              restated in 2023.
            </p>

            <div className="border border-white/[0.06] bg-white/[0.02] rounded-lg p-4 text-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#E8E2D5] font-medium">[1]</span>
                <span className="text-gray-400">
                  Hartman Family Trust 2018 (Restated 2023).pdf
                </span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-500">p. 3, Article II §2.2</span>
              </div>
              <div className="text-[#E8E2D5]/70 font-light italic leading-relaxed">
                &ldquo;...the successor Trustee shall be Catherine A. Hartman, daughter of the Grantor.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it ingests */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
            What Vault ingests
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-12 max-w-2xl">
            Every shape of document a household generates over a generation.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {DOC_TYPES.map((d) => (
              <div key={d.name} className="bg-black p-6">
                <div className="text-sm font-medium text-white mb-2">{d.name}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{d.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-10">
            What scale looks like
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {STATS.map((s) => (
              <div key={s.l} className="bg-black p-7">
                <div className="text-4xl md:text-5xl font-light text-[#E8E2D5] tracking-tight leading-none mb-3 tabular-nums">
                  {s.v}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 pt-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              Bring your archive
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-md">
              We&rsquo;ll index your first 1,000 documents in a pilot.
            </h2>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
          >
            Start a pilot
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes vaultBeam {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes vaultLine {
          0%, 100% { color: rgba(232,226,213,0.55); }
          45%, 55% { color: rgba(232,226,213,1); }
        }
      `}</style>
    </main>
  )
}
