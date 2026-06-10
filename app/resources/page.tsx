import MarketingOverviewPage from '@/components/MarketingOverviewPage'

export default function Page() {
  return (
    <MarketingOverviewPage
      eyebrow="Resources"
      headline={<>How Drift works, and why it matters.</>}
      lede="The method, the customer stories, the controls, and the integration footprint. Everything an advisor, COO, or CCO needs before the first call."
      cards={[
        {
          title: 'Method',
          body: 'A plain-language walkthrough of how Drift plugs into the firm and where approvals stay human.',
          href: '/method',
          label: 'Read the method',
        },
        {
          title: 'Customers',
          body: 'How firms use Drift to compress prep time and increase deal coverage.',
          href: '/customers',
          label: 'Read customer stories',
        },
        {
          title: 'Security',
          body: 'SOC 2 posture, data handling, encryption, and operational controls.',
          href: '/security',
          label: 'Review security',
        },
        {
          title: 'Blog',
          body: 'Long-form writing on advisory operations, AI systems, and retrieval-grounded workflows.',
          href: '/blog',
          label: 'Read the blog',
        },
      ]}
      sections={[
        {
          label: 'Evaluation',
          title: 'Built for real diligence, not hand-waving.',
          body: 'Firms evaluating Drift usually need more than a landing page. They need concrete answers about controls, implementation, and where the system stops.',
          points: [
            'Clear separation between drafting, recommendation, and final human approval.',
            'Integration pages that show where Drift connects without forcing a migration.',
            'Resources written for operators, compliance teams, and working advisors.',
          ],
        },
        {
          label: 'Next steps',
          title: 'Start with the angle that matters to your team.',
          body: 'If the buyer is operations-led, begin with method and integrations. If the buyer is risk-led, start with security and compliance. If the buyer is advisor-led, go straight to demo and case studies.',
          points: [
            'Operations teams usually begin with `/method` and `/integrations`.',
            'Risk and legal teams usually begin with `/security` and `/compliance`.',
            'Growth-minded advisors usually begin with `/customers` and `/demo`.',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Need the walkthrough',
        title: 'We can tailor the resource tour around operations, compliance, or advisor workflow.',
        label: 'Talk to the team',
        href: '/contact',
      }}
    />
  )
}
