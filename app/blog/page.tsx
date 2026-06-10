import PageHero from '@/components/PageHero'
import Link from 'next/link'

const POSTS = [
  'why-the-site-selection-stack-still-misses-the-answer',
  'diligence-isnt-slow-because-people-are-bad',
  'what-cre-teams-actually-need-from-ai',
]

function toTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="Resources · Blog"
        headline={<>Notes on CRE, AI, and the work between the tools.</>}
        lede="Writing about commercial real estate workflows, reasoning systems, and why the most valuable software still has to earn trust at the decision layer."
      />

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06]">
          {POSTS.map((slug) => (
            <Link key={slug} href={`/blog/${slug}`} className="block bg-black p-6 hover:bg-white/[0.02] transition-colors">
              <div className="text-[10px] tracking-[0.28em] uppercase text-gray-500 mb-3">Article</div>
              <h2 className="text-2xl font-light tracking-tight text-white">{toTitle(slug)}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
