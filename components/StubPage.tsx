type Props = {
  eyebrow: string
  title: string
  description: string
}

export default function StubPage({ eyebrow, title, description }: Props) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 pt-32 pb-32">
      <div className="text-center max-w-2xl">
        <div className="text-xs tracking-[0.3em] text-gray-500 mb-6 uppercase">
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-[#E8E2D5]/60 font-light leading-relaxed">
          {description}
        </p>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] text-gray-600 uppercase border border-white/10 rounded-full px-4 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          In development
        </div>
      </div>
    </main>
  )
}
