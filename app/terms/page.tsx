import PolicyPage from '@/components/PolicyPage'

export default function Page() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of Service"
      lede="The terms that govern your access to Drift products, pilots, websites, and related services."
      callouts={[
        { label: 'Commercial model', value: 'Pilot, annual, or multi-year agreements' },
        { label: 'Service boundary', value: 'Drift drafts and assists; firms retain final authority' },
        { label: 'Support', value: 'Response times vary by plan and contract' },
      ]}
      sections={[
        {
          title: 'Use of the service',
          body: 'Access to Drift is limited to authorized users under a valid customer relationship or approved pilot. Firms remain responsible for the acts of their authorized users.',
        },
        {
          title: 'Responsibilities',
          body: 'Drift provides tools for analysis, drafting, routing, and recommendation support. The customer remains responsible for supervision, client communications, approvals, and regulatory compliance.',
          bullets: [
            'Customers control which workflows Drift may support and who may approve them.',
            'Nothing in the product transfers fiduciary duty or discretionary authority to Drift.',
          ],
        },
        {
          title: 'Availability and changes',
          body: 'We maintain and improve the service continuously. Features, integrations, and supporting infrastructure may evolve, provided core contractual obligations and security commitments remain in effect.',
        },
      ]}
      cta={{
        title: 'Need the executed legal language',
        body: 'For procurement or counsel review, we can provide the current customer terms package directly.',
        label: 'Contact legal',
        href: '/contact',
      }}
    />
  )
}
