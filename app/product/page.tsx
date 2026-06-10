import MarketingOverviewPage from '@/components/MarketingOverviewPage'

export default function Page() {
  return (
    <MarketingOverviewPage
      eyebrow="Product"
      headline={<>The CRE operating layer, end to end.</>}
      lede="Drift combines expert reasoning with proactive execution so teams can analyze properties, move diligence, and keep operational work in motion without adding more software sprawl."
      cards={[
        {
          title: 'Reasoning',
          body: 'Interpret site, market, and deal data like a senior CRE professional.',
          href: '/product/assistant',
          label: 'See reasoning',
        },
        {
          title: 'Diligence',
          body: 'Read leases, reconcile statements, and surface the risks hiding in the documents.',
          href: '/product/vault',
          label: 'See diligence',
        },
        {
          title: 'Operations',
          body: 'Handle tenant, leasing, and property workflows without manual follow-up loops.',
          href: '/product/agents',
          label: 'See operations',
        },
        {
          title: 'Agentic Layer',
          body: 'Voice, SMS, and proactive automation that makes Drift feel like a live teammate.',
          href: '/product/compliance',
          label: 'See agentic layer',
        },
      ]}
      sections={[
        {
          label: 'One system',
          title: 'Think and act in the same workflow.',
          body: 'Most software stops at delivering information. Drift turns information into conclusions, and then helps move the next action forward.',
          points: [
            'Move from site question to recommendation in one system.',
            'Carry context from analysis into follow-up and communication.',
            'Keep evidence, reasoning, and outputs tied together.',
          ],
        },
        {
          label: 'Why teams buy',
          title: 'Leverage where the expensive time sits.',
          body: 'CRE teams already have data sources. What they lack is enough senior bandwidth to interpret, synthesize, and follow through at the speed the market demands.',
          points: [
            'Screen more opportunities without hiring linearly.',
            'Reduce manual work in diligence and property operations.',
            'Make recommendations easier to trust because the sources stay visible.',
          ],
        },
      ]}
      cta={{
        eyebrow: 'See the workflow',
        title: 'We can show Drift on a real CRE use case in one call.',
        label: 'Book a demo',
        href: '/demo',
      }}
    />
  )
}
