import StubPage from '@/components/StubPage'

export default function Page({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <StubPage
      eyebrow="Writing"
      title={title || 'Post'}
      description="This post is being prepared. Check back soon — or subscribe for the next one."
    />
  )
}
