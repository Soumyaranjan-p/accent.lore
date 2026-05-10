export default function WordPageLoading() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] pt-20">
      <div className="mx-auto max-w-5xl px-6 pb-24">

        {/* BREADCRUMB skeleton */}
        <div className="flex items-center gap-2 pt-6 mb-10">
          <div className="h-3 w-8 rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
          <div className="h-3 w-2 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
          <div className="h-3 w-16 rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
          <div className="h-3 w-2 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
          <div className="h-3 w-20 rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
        </div>

        {/* HERO + SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_272px] gap-10 lg:gap-12 items-start">

          {/* LEFT: HERO skeleton */}
          <div>
            {/* badges */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-7 w-24 rounded-full bg-orange-100 dark:bg-[rgba(255,107,43,0.08)] animate-pulse" />
              <div className="h-7 w-16 rounded-full bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
            </div>

            {/* big word */}
            <div className="h-[96px] md:h-[110px] w-3/4 rounded-2xl bg-black/[0.07] dark:bg-white/[0.07] animate-pulse mb-6" />

            {/* meaning lines */}
            <div className="space-y-3 mb-6 max-w-xl">
              <div className="h-5 w-full rounded bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
              <div className="h-5 w-4/5 rounded bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
            </div>

            {/* meta row */}
            <div className="flex items-center gap-4">
              <div className="h-3 w-24 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
              <div className="h-3 w-14 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
              <div className="h-3 w-16 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
            </div>
          </div>

          {/* RIGHT: SIDEBAR skeleton */}
          <div className="space-y-3 mt-2">

            {/* Actions card */}
            <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-[20px] p-5">
              <div className="flex gap-2 mb-5">
                <div className="flex-1 h-10 rounded-xl bg-orange-100 dark:bg-[rgba(255,107,43,0.08)] animate-pulse" />
                <div className="w-10 h-10 rounded-xl bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
                <div className="w-10 h-10 rounded-xl bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
              </div>
              <div className="h-3 w-28 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse mb-3" />
              <div className="flex flex-wrap gap-2">
                {[56, 44, 52, 60, 68].map((w) => (
                  <div key={w} className="h-7 rounded-full bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" style={{ width: w }} />
                ))}
              </div>
            </div>

            {/* Trending card */}
            <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-[20px] p-5">
              <div className="h-3 w-24 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse mb-4" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-black/[0.06] dark:border-white/[0.06] last:border-b-0">
                  <div className="space-y-1.5">
                    <div className="h-3.5 w-20 rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
                    <div className="h-2.5 w-24 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
                  </div>
                  <div className="h-6 w-8 rounded-md bg-orange-100 dark:bg-[rgba(255,107,43,0.08)] animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT skeletons */}
        <div className="mt-10 space-y-5">

          {/* Pronunciation */}
          <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl p-5 flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
              <div className="h-7 w-32 rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
            </div>
            <div className="w-11 h-11 rounded-xl bg-orange-100 dark:bg-[rgba(255,107,43,0.08)] animate-pulse" />
          </div>

          {/* Usage card */}
          <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-[24px] p-8 md:p-10 space-y-4">
            <div className="h-3 w-28 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
            <div className="space-y-3">
              <div className="h-7 w-full rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
              <div className="h-7 w-5/6 rounded bg-black/[0.07] dark:bg-white/[0.07] animate-pulse" />
            </div>
            <div className="pt-4 border-t border-black/[0.07] dark:border-white/[0.07]">
              <div className="h-4 w-2/3 rounded bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
            </div>
          </div>

          {/* Cultural context */}
          <div className="bg-orange-50 dark:bg-[rgba(255,107,43,0.06)] border border-orange-100 dark:border-[rgba(255,107,43,0.15)] rounded-2xl p-5 space-y-2">
            <div className="h-5 w-5 rounded bg-orange-200 dark:bg-[rgba(255,107,43,0.15)] animate-pulse mb-3" />
            <div className="h-3.5 w-full rounded bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
            <div className="h-3.5 w-5/6 rounded bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
            <div className="h-3.5 w-4/6 rounded bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl p-4 md:p-5 space-y-2">
                <div className="h-8 w-16 rounded bg-black/[0.08] dark:bg-white/[0.08] animate-pulse" />
                <div className="h-3 w-20 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
                <div className="h-3 w-24 rounded bg-green-100 dark:bg-green-900/20 animate-pulse" />
              </div>
            ))}
          </div>

          <div className="h-px bg-black/[0.07] dark:bg-white/[0.07]" />

          {/* Related words */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="h-6 w-32 rounded bg-black/[0.08] dark:bg-white/[0.08] animate-pulse" />
              <div className="h-4 w-36 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
            </div>
            <div className="flex flex-wrap gap-3 pb-4">
              {[80, 96, 72, 88, 76, 92].map((w) => (
                <div key={w} className="h-[60px] rounded-2xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] animate-pulse" style={{ width: w + 40 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}