import MarketingOverviewPage from '@/components/MarketingOverviewPage'

export default function Page() {
  return (
    <MarketingOverviewPage
      eyebrow="Resources"
      headline={<>How Drift works, and where it fits in CRE.</>}
      lede="The method, the use cases, the data sources, and the economic case for a reasoning and execution layer in commercial real estate."
      cards={[
        {
          title: 'Method',
          body: 'How Drift assembles data, reasons across it, and returns a recommendation.',
          href: '/method',
          label: 'Read the method',
        },
        {
          title: 'Customers',
          body: 'Examples of how developers, brokers, and operators use Drift in practice.',
          href: '/customers',
          label: 'See examples',
        },
        {
          title: 'ROI Model',
          body: 'Frame the value against analyst time, deal volume, and avoided delay.',
          href: '/roi',
          label: 'Explore ROI',
        },
        {
          title: 'Integrations',
          body: 'The data and workflow systems Drift can sit on top of today.',
          href: '/integrations',
          label: 'View integrations',
        },
      ]}
      sections={[
        {
          label: 'Positioning',
          title: 'Drift is not another dashboard.',
          body: 'The product lives one layer above raw data tools. It is there to turn evidence into a verdict and then keep the work moving.',
          points: [
            'Built for teams making expensive decisions from fragmented inputs.',
            'Structured for client-facing trust: citation, clarity, and missing-data honesty.',
            'Flexible across development, brokerage, investment, and operations.',
          ],
        },
        {
          label: 'What to review',
          title: 'Start with the workflow that matters most to your team.',
          body: 'Every buyer comes in through a different entry point. Drift is modular enough to meet them there.',
          points: [
            'Developers usually start with site selection and feasibility.',
            'Investors usually start with screening, underwriting, and diligence.',
            'Operators usually start with tenant communication and follow-through.',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Need the walkthrough',
        title: 'We can tailor the conversation around development, brokerage, investment, or operations.',
        label: 'Talk to Drift',
        href: '/contact',
      }}
    />
  )
}
