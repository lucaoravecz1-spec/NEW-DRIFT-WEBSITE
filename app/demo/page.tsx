import MarketingOverviewPage from '@/components/MarketingOverviewPage'

export default function Page() {
  return (
    <MarketingOverviewPage
      eyebrow="Demo"
      headline={<>See Drift on your firm.</>}
      lede="A 30-minute walkthrough with our team, anchored in the workflows your advisors and operators already run every day."
      cards={[
        {
          title: 'Before the call',
          body: 'We gather your firm size, custodians, core systems, and the workflows you want to pressure-test.',
          href: '/contact',
          label: 'Share firm details',
        },
        {
          title: 'During the demo',
          body: 'We show prep, messaging, document analysis, and approvals running on one household thread.',
          href: '/product',
          label: 'Preview the product',
        },
        {
          title: 'Security review',
          body: 'If needed, we can cover retention, permissions, and the compliance package in the same meeting.',
          href: '/security',
          label: 'Review controls',
        },
        {
          title: 'Pilot design',
          body: 'Most firms leave with a practical first use case and an implementation path sized to the team.',
          href: '/pricing',
          label: 'See pilot fit',
        },
      ]}
      sections={[
        {
          label: 'Agenda',
          title: 'What we cover in the first 30 minutes.',
          body: 'The goal is not a polished product tour. It is to see whether Drift changes the economics of the workflows your team already carries.',
          points: [
            'How Drift reads CRM, custodial, planning, and document context without a re-platform.',
            'How an advisor or operator approves, edits, or rejects recommendations in the loop.',
            'Where firms usually start: prep, drafts, document review, or tax-aware monitoring.',
          ],
        },
        {
          label: 'Best fit',
          title: 'The most useful demos are anchored in one specific workflow.',
          body: 'Bring one high-friction process and one real operating constraint. That is enough to see whether Drift is a fit.',
          points: [
            'Examples: annual review prep, compliance memo drafting, concentrated position monitoring.',
            'We can adapt for solo RIAs, multi-advisor firms, and bank-affiliated wealth teams.',
            'A strong first pilot is usually narrow, measurable, and easy to approve internally.',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Ready to book',
        title: 'If you want, the next step can simply be a call focused on one workflow.',
        label: 'Contact Drift',
        href: '/contact',
      }}
    />
  )
}
