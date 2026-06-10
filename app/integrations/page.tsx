import PageHero from '@/components/PageHero'

const ITEMS = [
  'Parcel and zoning data',
  'Demographics and business inventory',
  'Traffic and mobility data',
  'Sales comps and market comps',
  'Rent rolls and operating statements',
  'Documents, leases, and internal workflow systems',
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Resources · Integrations"
        headline={<>The data stack underneath the reasoning.</>}
        lede="Drift sits on top of the information CRE teams already use. The goal is not another silo. The goal is better reasoning across the inputs that already matter."
      />

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item} className="bg-black p-7 text-base text-[#E8E2D5] font-light">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
