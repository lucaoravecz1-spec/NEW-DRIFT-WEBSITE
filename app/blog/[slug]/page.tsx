import PageHero from '@/components/PageHero'
import Link from 'next/link'

const POSTS: Record<string, { title: string; lede: string; sections: string[] }> = {
  'why-the-site-selection-stack-still-misses-the-answer': {
    title: 'Why the site-selection stack still misses the answer.',
    lede: 'The problem is not that CRE teams lack reports. It is that the final judgment still sits outside the tools.',
    sections: [
      'Site-selection software is good at surfacing inputs and weak at delivering the decision. Teams still have to turn rankings, demographics, and traffic into an opinion a client can actually use.',
      'That is where expert time disappears. The real labor is interpretation, not retrieval.',
      'A useful AI layer in CRE needs to work one level higher: not another dashboard, but a conclusion with evidence, caveats, and a next step.',
    ],
  },
  'diligence-isnt-slow-because-people-are-bad': {
    title: 'Diligence isn’t slow because people are bad at it.',
    lede: 'It is slow because the work requires too many passes across too many files before anyone can confidently summarize the story.',
    sections: [
      'Lease abstraction, rent roll review, statement comparison, and exception logging are all necessary. What hurts is the amount of manual stitching between them.',
      'When a system can read, compare, and flag across the document set, the human reviewer gets to spend their time on the actual judgment.',
      'That is how diligence gets faster without becoming shallower.',
    ],
  },
  'what-cre-teams-actually-need-from-ai': {
    title: 'What CRE teams actually need from AI.',
    lede: 'Not novelty. Not generic chat. They need a system that can help make expensive decisions and keep the follow-through from slipping.',
    sections: [
      'The winning product in CRE is not the flashiest interface. It is the one that saves senior time and lets teams cover more surface area without sacrificing trust.',
      'That requires two things at once: better reasoning and better execution.',
      'If the system cannot explain why it believes something, cite its inputs, and carry the next step forward, it will stay a toy.',
    ],
  },
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug] ?? {
    title: params.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    lede: 'A Drift note on CRE workflows and reasoning systems.',
    sections: ['This page is part of the Drift writing archive.'],
  }

  return (
    <main className="min-h-screen bg-black">
      <PageHero eyebrow="Resources · Blog" headline={post.title} lede={post.lede} />

      <section className="px-6 py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto space-y-8">
          {post.sections.map((section) => (
            <p key={section} className="text-base md:text-lg text-[#E8E2D5]/78 font-light leading-relaxed">
              {section}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 pt-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">More writing</div>
            <h2 className="max-w-xl text-2xl md:text-3xl font-light tracking-tight text-white">
              Back to the archive for more on CRE workflows, reasoning, and execution.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8E2D5] px-6 py-3 text-sm font-semibold text-black whitespace-nowrap transition hover:bg-white"
          >
            Back to blog
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
