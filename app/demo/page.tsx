import MarketingOverviewPage from '@/components/MarketingOverviewPage'

export default function Page() {
  return (
    <MarketingOverviewPage
      eyebrow="Demo"
      headline={<>See Drift on a real CRE workflow.</>}
      lede="The best Drift demo is anchored in a real property, deal, or operational bottleneck. We show the reasoning, the output, and what happens next."
      cards={[
        {
          title: 'For developers',
          body: 'Walk through site selection, void analysis, or highest-and-best-use.',
          href: '/product/assistant',
          label: 'See reasoning',
        },
        {
          title: 'For investors',
          body: 'Pressure-test deal screening, memos, and diligence synthesis.',
          href: '/product/vault',
          label: 'See diligence',
        },
        {
          title: 'For operators',
          body: 'Review tenant communication, tasks, and proactive follow-through.',
          href: '/product/agents',
          label: 'See operations',
        },
        {
          title: 'For teams on the move',
          body: 'See how Drift can be run by workflow, voice, or text from your phone.',
          href: '/product/compliance',
          label: 'See agentic layer',
        },
      ]}
      sections={[
        {
          label: 'What we show',
          title: 'From input to recommendation to next action.',
          body: 'Drift is most compelling when you can see the whole chain, not just one report.',
          points: [
            'How the system assembles evidence from approved sources',
            'How it distinguishes fact from judgment and cites its work',
            'How outputs become a report, memo, or follow-up task',
          ],
        },
        {
          label: 'Best first call',
          title: 'Bring one real use case.',
          body: 'The strongest first demo is usually a specific high-friction workflow the team already cares about.',
          points: [
            'A site decision that needs to be made soon',
            'A diligence process that takes too long',
            'An operations workflow with too many dropped follow-ups',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Ready to book',
        title: 'We can tailor the walkthrough to development, brokerage, investment, or operations.',
        label: 'Contact Drift',
        href: '/contact',
      }}
    />
  )
}
