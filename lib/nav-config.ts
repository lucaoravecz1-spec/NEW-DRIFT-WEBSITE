export type NavChild = {
  label: string
  href: string
  desc?: string
  visual?: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
  eyebrow?: string
  viewAllLabel?: string
  viewAllHref?: string
}

export const navConfig: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Product',
    href: '/product',
    eyebrow: 'Product',
    viewAllLabel: 'View the full product',
    viewAllHref: '/product',
    children: [
      {
        label: 'Reasoning',
        href: '/product/assistant',
        desc: 'Expert-grade site, market, and deal analysis',
        visual: 'assistant',
      },
      {
        label: 'Diligence',
        href: '/product/vault',
        desc: 'Document review, risk extraction, and synthesis',
        visual: 'vault',
      },
      {
        label: 'Operations',
        href: '/product/agents',
        desc: 'Tenant, task, and workflow automation',
        visual: 'agents',
      },
      {
        label: 'Agentic Layer',
        href: '/product/compliance',
        desc: 'Voice, SMS, and proactive execution',
        visual: 'compliance',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    eyebrow: 'Resources',
    viewAllLabel: 'View all resources',
    viewAllHref: '/resources',
    children: [
      { label: 'Method', href: '/method', desc: 'How Drift works', visual: 'method' },
      { label: 'Customers', href: '/customers', desc: 'Teams using Drift in CRE', visual: 'customers' },
      { label: 'ROI Model', href: '/roi', desc: 'Measure analyst and time savings', visual: 'roi' },
      { label: 'Integrations', href: '/integrations', desc: 'Data sources and workflow systems', visual: 'integrations' },
      { label: 'Blog', href: '/blog', desc: 'Writing on CRE and AI', visual: 'blog' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    eyebrow: 'Company',
    viewAllLabel: 'About Drift',
    viewAllHref: '/about',
    children: [
      { label: 'About', href: '/about', desc: 'Why we built Drift for CRE', visual: 'about' },
      { label: 'Careers', href: '/careers', desc: 'Join the team', visual: 'careers' },
      { label: 'Contact', href: '/contact', desc: 'Talk to sales or partnerships', visual: 'contact' },
    ],
  },
]

export const footerConfig = {
  product: [
    { label: 'Reasoning', href: '/product/assistant' },
    { label: 'Diligence', href: '/product/vault' },
    { label: 'Operations', href: '/product/agents' },
    { label: 'Agentic Layer', href: '/product/compliance' },
    { label: 'Pricing', href: '/pricing' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Method', href: '/method' },
    { label: 'Customers', href: '/customers' },
    { label: 'ROI Model', href: '/roi' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Acceptable Use', href: '/acceptable-use' },
    { label: 'Service Status', href: '/status' },
  ],
}
