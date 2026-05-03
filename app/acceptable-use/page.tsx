import PolicyPage from '@/components/PolicyPage'

export default function Page() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Acceptable Use Policy"
      lede="The rules of the road for using Drift safely, lawfully, and in a way that remains fit for fiduciary work."
      callouts={[
        { label: 'Applies to', value: 'Customers, pilots, and internal users' },
        { label: 'Intent', value: 'Protect clients, firms, and the platform' },
        { label: 'Escalation', value: 'Violations may suspend access' },
      ]}
      sections={[
        {
          title: 'Permitted use',
          body: 'Drift is designed for legitimate advisory, operational, compliance, and client-service workflows carried out by authorized firm personnel.',
          bullets: [
            'Use Drift only with data your firm is allowed to access and process.',
            'Keep a human reviewer in the loop for client-facing recommendations and regulated actions.',
            'Follow your own supervisory and recordkeeping obligations while using the product.',
          ],
        },
        {
          title: 'Prohibited use',
          body: 'You may not use Drift to violate law, regulation, privacy obligations, or the rights of other parties.',
          bullets: [
            'No attempts to evade approval controls, audit logging, or permission boundaries.',
            'No uploads of malicious files, harmful prompts, or content intended to degrade service.',
            'No use of the system to generate deceptive communications or impersonate regulated personnel without review.',
          ],
        },
        {
          title: 'Security expectations',
          body: 'Firms are expected to manage access, disable former-user credentials promptly, and notify Drift if they suspect compromise or misuse.',
        },
      ]}
      cta={{
        title: 'Need the full legal package',
        body: 'We can provide customer terms, the DPA, and supporting security documentation for review.',
        label: 'Request documents',
        href: '/contact',
      }}
    />
  )
}
