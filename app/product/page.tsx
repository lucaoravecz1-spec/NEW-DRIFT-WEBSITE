import MarketingOverviewPage from '@/components/MarketingOverviewPage'

export default function Page() {
  return (
    <MarketingOverviewPage
      eyebrow="Product"
      headline={<>The platform, end to end.</>}
      lede="Assistant, Vault, Agents, and Compliance are four surfaces of one operating model. Start anywhere. The context, controls, and workflows compound across the whole firm."
      cards={[
        {
          title: 'Assistant',
          body: 'A firm-grounded interface for prep, answers, and follow-through on live properties and deals.',
          href: '/product/assistant',
          label: 'See Assistant',
        },
        {
          title: 'Vault',
          body: 'Document understanding across statements, trusts, letters, and client records.',
          href: '/product/vault',
          label: 'See Vault',
        },
        {
          title: 'Agents',
          body: 'Always-on workflows that scan, draft, queue, and notify before the team asks.',
          href: '/product/agents',
          label: 'See Agents',
        },
        {
          title: 'Compliance',
          body: 'Review trails, approvals, and audit-ready artifacts built into every recommendation.',
          href: '/product/compliance',
          label: 'See Compliance',
        },
      ]}
      sections={[
        {
          label: 'How it fits',
          title: 'One model, four working surfaces.',
          body: 'The advisor does not need another app for every task. Drift connects to the current stack, builds a living context model, and exposes that model in the right place for the job.',
          points: [
            'Shared property and deal memory across meetings, messages, portfolios, and documents.',
            'Grounded retrieval so every answer can cite source records and timestamps.',
            'Human approval gates before anything reaches a client, custodian, or archive.',
          ],
        },
        {
          label: 'What changes',
          title: 'The team spends less time stitching systems together.',
          body: 'Instead of making advisors act as the integration layer, Drift prepares the work before the conversation starts and leaves a clean trail after it ends.',
          points: [
            'Prep packets assembled overnight from CRM, documents, and account changes.',
            'Drafted replies and memos tied to the exact property and deal context they reference.',
            'A single review queue for recommendations, approvals, and exceptions.',
          ],
        },
      ]}
      cta={{
        eyebrow: 'See the full flow',
        title: 'We can walk through the product on a sandbox that matches your firm.',
        label: 'Book a demo',
        href: '/demo',
      }}
    />
  )
}
