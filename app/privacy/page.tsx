import PolicyPage from '@/components/PolicyPage'

export default function Page() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How Drift collects, uses, and protects information across the public site and customer interactions."
      callouts={[
        { label: 'Model training', value: 'Customer data is not used to train foundation models' },
        { label: 'Collection', value: 'Only what is needed to market, support, and operate the service' },
        { label: 'Access', value: 'Restricted by role, need, and audit trail' },
      ]}
      sections={[
        {
          title: 'Information we collect',
          body: 'We collect contact information you submit through forms, communication history with the Drift team, and limited technical data needed to run and secure the site.',
          bullets: [
            'Name, work email, firm name, and inquiry details from contact and demo requests.',
            'Basic device, browser, and network signals used for abuse prevention and performance measurement.',
            'Customer-account information necessary to provision and support the product.',
          ],
        },
        {
          title: 'How information is used',
          body: 'Drift uses information to respond to inquiries, provide the service, secure the platform, improve product quality, and comply with legal obligations.',
          bullets: [
            'Respond to demo, sales, support, and recruiting inquiries.',
            'Provision customer environments and maintain platform reliability.',
            'Investigate misuse, security events, and operational incidents.',
          ],
        },
        {
          title: 'Data protection',
          body: 'Access is limited by role, logged centrally, and reviewed through standard security controls. Production data is handled under least-privilege principles and contractual confidentiality obligations.',
        },
      ]}
      cta={{
        title: 'Need a DPA or security review',
        body: 'We can send the current legal and security package to your firm under the usual review process.',
        label: 'Talk to Drift',
        href: '/contact',
      }}
    />
  )
}
