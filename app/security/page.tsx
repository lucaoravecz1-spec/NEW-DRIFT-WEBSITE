import PageHero from '@/components/PageHero'
import Link from 'next/link'

const TRUST = [
  { label: 'SOC 2 Type II', detail: 'Annually audited by Schellman & Co.' },
  { label: 'AES-256 at rest', detail: 'TLS 1.3 in transit. Per-tenant keys.' },
  { label: 'US-hosted on Azure', detail: 'East-US-2 / West-US-3. EU residency available.' },
  { label: 'No model training', detail: 'Customer data never enters foundation model training sets.' },
]

const SECTIONS = [
  {
    id: 'data-handling',
    title: 'Data handling',
    items: [
      ['Tenant model', 'Each customer firm runs in a dedicated logical tenant with isolated storage, isolated vector indexes, and isolated retrieval surfaces. No cross-tenant queries are possible at the platform level.'],
      ['Read-only by default', 'All custodial, accounting, and CRM integrations are read-only. Drift never writes to a system of record without an explicit, scoped, audited write grant.'],
      ['Retention', "Documents and conversation history are retained per the customer's policy (default 7 years for compliance). Customers can purge any record on request; deletions propagate within 24 hours."],
      ['Backups', 'Encrypted point-in-time backups every 6 hours, retained 35 days. Backup restores are logged and require dual approval.'],
    ],
  },
  {
    id: 'encryption',
    title: 'Encryption',
    items: [
      ['At rest', 'AES-256-GCM. Per-tenant data encryption keys, wrapped by a master key in Azure Key Vault HSM (FIPS 140-2 Level 3).'],
      ['In transit', 'TLS 1.3 enforced on all customer and integration endpoints. Internal service-to-service communication uses mTLS.'],
      ['Key rotation', 'Master keys rotated annually. Per-tenant keys rotated on demand or on a customer-defined schedule.'],
    ],
  },
  {
    id: 'access',
    title: 'Access controls',
    items: [
      ['SSO', 'SAML 2.0 and OIDC supported. Okta, Microsoft Entra, Google Workspace tested.'],
      ['MFA', 'Required for all admin actions. Phishing-resistant (WebAuthn/FIDO2) supported and recommended.'],
      ['RBAC', 'Per-firm role definitions. Permission grants are versioned and reviewable.'],
      ['Audit log', 'Every read, write, prompt, and approval is logged with actor, timestamp, source IPs, and result. Logs are immutable and exportable.'],
    ],
  },
  {
    id: 'ai',
    title: 'AI training & data use',
    items: [
      ['No training on customer data', 'Drift does not use customer data to train, fine-tune, or improve any foundation model — ours or our vendors\u2019.'],
      ['Inference isolation', 'Inference requests run against zero-retention model endpoints. No prompts or responses are retained by the model provider.'],
      ['Source-grounded outputs', 'Every model output is grounded in retrieved customer documents. Sources are cited inline; ungrounded claims are surfaced as such.'],
    ],
  },
  {
    id: 'subprocessors',
    title: 'Sub-processors',
    items: [
      ['Microsoft Azure', 'Primary infrastructure (compute, storage, identity).'],
      ['Anthropic & OpenAI', 'Foundation model inference. Both contracted under zero-retention enterprise terms.'],
      ['Datadog', 'Operational telemetry. No customer document content transmitted.'],
      ['Vercel', 'Marketing-site hosting only. No customer data.'],
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance certifications',
    items: [
      ['SOC 2 Type II', 'Continuous since 2025. Latest report available under NDA.'],
      ['SEC / FINRA-aligned', 'Controls mapped to Reg S-P, Reg S-ID, FINRA 4511 books-and-records requirements.'],
      ['GLBA', 'Safeguards Rule controls in place. Annual risk assessment.'],
      ['HIPAA / state privacy', 'Available on enterprise plans where applicable.'],
    ],
  },
  {
    id: 'incident',
    title: 'Incident response',
    items: [
      ['24/7 on-call', 'Engineering and security paired rotation. Mean time to acknowledge under 15 minutes.'],
      ['Customer notification', 'Confirmed security incidents communicated to affected customers within 24 hours.'],
      ['Postmortems', 'Public postmortems for any incident affecting more than one customer. Internal-only postmortems shared with affected customers under NDA.'],
    ],
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Resources · Security"
        headline={
          <>
            Built for the firms that <em className="font-serif italic text-[#E8E2D5]">cannot afford</em> to get this wrong.
          </>
        }
        lede="SOC 2 Type II. Tenant isolation. No training on your data. The CCO's documentation, written by someone who's been a CCO."
      />

      {/* Trust band */}
      <section className="px-6 py-16 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {TRUST.map((t) => (
            <div key={t.label} className="bg-black p-6">
              <div className="text-sm font-medium text-white mb-1.5">{t.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{t.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4">
                Contents
              </div>
              <ul className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[#E8E2D5]/70 hover:text-white transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-9 space-y-16">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="text-2xl font-light text-white tracking-tight mb-8 pb-3 border-b border-white/[0.08]">
                  {s.title}
                </h2>
                <dl className="space-y-6">
                  {s.items.map(([term, def]) => (
                    <div key={term} className="grid sm:grid-cols-12 gap-3 sm:gap-6">
                      <dt className="sm:col-span-4 text-sm font-medium text-white">{term}</dt>
                      <dd className="sm:col-span-8 text-sm text-[#E8E2D5]/70 leading-relaxed font-light">
                        {def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 border-t border-white/[0.06] pt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              For procurement
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-md">
              Download the full security overview.
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-md">
              SOC 2 report, sub-processor list, DPA, and standard responses to CRE firm and institutional security questionnaires.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8E2D5] text-black px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-white transition"
          >
            Request the package
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
