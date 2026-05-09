import words from "@/data/words.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function WordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const word = words.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!word) notFound();

  const relatedWords = words
    .filter((item) => item.language === word.language && item.slug !== word.slug)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] text-[#1A1614] dark:text-[#F5F0E8] pt-20 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 pb-24">

        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs text-[#A09890] dark:text-[#6A6460] pt-6 mb-10">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span className="text-[10px]">›</span>
          <Link href={`/language/${word.language.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
            {word.language}
          </Link>
          <span className="text-[10px]">›</span>
          <span className="text-[#6B625C] dark:text-[#A09890]">{word.word}</span>
        </nav>

        {/* HERO + SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_272px] gap-10 lg:gap-12 items-start">

          {/* LEFT: HERO */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="bg-orange-100 dark:bg-[rgba(255,107,43,0.08)] border border-orange-200 dark:border-[rgba(255,107,43,0.25)] text-orange-600 dark:text-[#FF8C5A] text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
                {word.category}
              </span>
              <span className="border border-black/10 dark:border-white/10 text-[#A09890] text-[13px] px-3 py-1.5 rounded-full">
                {word.language}
              </span>
            </div>

            <h1 className="text-[80px] md:text-[110px] font-black leading-[0.9] tracking-[-5px] text-[#1A1614] dark:text-[#F5F0E8] mb-6">
              {word.word}
            </h1>

            <p className="text-xl md:text-2xl font-light text-[#6B625C] dark:text-[#A09890] leading-relaxed max-w-xl mb-6">
              {word.meaning}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#A09890] dark:text-[#6A6460]">
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                2.4K uses today
              </span>
              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
              <span>18K views</span>
              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
              <span>Added 2023</span>
            </div>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="space-y-3 mt-2">

            {/* Actions */}
            <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-[20px] p-5">
              <div className="flex gap-2 mb-5">
                <button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[13px] font-medium py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                  Save
                </button>
                <button className="flex items-center justify-center w-10 bg-gray-100 dark:bg-[#181818] border border-black/10 dark:border-white/10 text-[#6B625C] dark:text-[#A09890] hover:text-[#1A1614] dark:hover:text-[#F5F0E8] rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                </button>
                <button className="flex items-center justify-center w-10 bg-gray-100 dark:bg-[#181818] border border-black/10 dark:border-white/10 text-[#6B625C] dark:text-[#A09890] hover:text-[#1A1614] dark:hover:text-[#F5F0E8] rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>

              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#A09890] dark:text-[#6A6460] mb-3">
                Related Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {["Bengali", "Hindi", "Telugu", "Marathi", "Assamese"].map((lang) => (
                  <Link
                    key={lang}
                    href={`/language/${lang.toLowerCase()}`}
                    className="px-3 py-1.5 rounded-full text-[12px] border border-black/10 dark:border-white/10 text-[#6B625C] dark:text-[#A09890] hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-[rgba(255,107,43,0.08)] transition-all duration-200"
                  >
                    {lang}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-[20px] p-5">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#A09890] dark:text-[#6A6460] mb-4">
                Trending Now
              </p>
              {[
                { word: "Timepass", lang: "Hindi · Casual", num: "#1" },
                { word: "Jugaad",   lang: "Hindi · Daily",  num: "#2" },
                { word: "Poda",     lang: "Odia · Slang",   num: "#3" },
                { word: "Bindaas",  lang: "Mumbai · Vibe",  num: "#4" },
              ].map((item) => (
                <div key={item.word} className="flex items-center justify-between py-2.5 border-b border-black/[0.06] dark:border-white/[0.06] last:border-b-0 group cursor-pointer">
                  <div>
                    <p className="text-[14px] font-medium text-[#1A1614] dark:text-[#F5F0E8] group-hover:text-orange-500 transition-colors">{item.word}</p>
                    <p className="text-[11px] text-[#A09890] dark:text-[#6A6460]">{item.lang}</p>
                  </div>
                  <span className="text-[11px] font-bold text-orange-500 bg-orange-50 dark:bg-[rgba(255,107,43,0.08)] px-2 py-1 rounded-md">
                    {item.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-10 space-y-5">

          {/* Pronunciation */}
          <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] tracking-[1px] uppercase text-[#A09890] dark:text-[#6A6460] mb-1.5">Pronunciation</p>
              <p className="text-2xl font-light text-[#6B625C] dark:text-[#A09890] italic tracking-widest">/ hɑː-oo /</p>
            </div>
            <button className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-[rgba(255,107,43,0.08)] border border-orange-200 dark:border-[rgba(255,107,43,0.25)] text-orange-500 dark:text-[#FF8C5A] flex items-center justify-center hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>

          {/* Usage Card */}
          <div className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-[24px] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[2px] uppercase text-[#A09890] dark:text-[#6A6460] mb-6">
              <span className="block w-5 h-px bg-current" />
              Usage Example
            </p>
            <p className="text-2xl md:text-3xl font-light text-[#1A1614] dark:text-[#F5F0E8] leading-relaxed mb-5 italic">
              "<span className="font-semibold text-orange-500 not-italic">{word.word}</span>, {word.usage.replace(word.word, "").replace(/^,?\s*/, "")}"
            </p>
            <div className="pt-4 border-t border-black/[0.07] dark:border-white/[0.07]">
              <p className="text-[15px] text-[#6B625C] dark:text-[#A09890] font-light">
                <span className="text-[#1A1614] dark:text-[#F5F0E8] font-normal">{word.translation}</span>
              </p>
            </div>
          </div>

          {/* Cultural Context */}
          <div className="bg-orange-50 dark:bg-[rgba(255,107,43,0.06)] border border-orange-100 dark:border-[rgba(255,107,43,0.15)] rounded-2xl p-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mb-3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <p className="text-[14px] text-[#6B625C] dark:text-[#A09890] leading-relaxed">
              <span className="text-[#1A1614] dark:text-[#F5F0E8] font-medium">Cultural context: </span>
              "{word.word}" is one of the most versatile words in casual {word.language} speech. It can signal agreement, acknowledgment, or mild dismissal depending on tone and context.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: "2.4K", lbl: "Uses today",   trend: "↑ 12% this week"   },
              { val: "18K",  lbl: "Total views",   trend: "↑ 8% this month"   },
              { val: "94%",  lbl: "Accuracy",      trend: "Community verified" },
            ].map((s) => (
              <div key={s.lbl} className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl p-4 md:p-5 hover:border-black/20 dark:hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200">
                <p className="text-[26px] font-black text-[#1A1614] dark:text-[#F5F0E8] leading-none mb-1">{s.val}</p>
                <p className="text-[11px] text-[#A09890] dark:text-[#6A6460]">{s.lbl}</p>
                <p className="text-[11px] text-green-600 dark:text-green-500 mt-1">{s.trend}</p>
              </div>
            ))}
          </div>

          <div className="h-px bg-black/[0.07] dark:bg-white/[0.07]" />

          {/* Related Words */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1614] dark:text-[#F5F0E8]">
                Related Words
              </h2>
              <Link href={`/language/${word.language.toLowerCase()}`} className="text-[13px] text-orange-500 hover:opacity-70 transition-opacity">
                View all {word.language} words →
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pb-4">
              {relatedWords.map((item) => (
                <Link
                  key={item.slug}
                  href={`/word/${item.slug}`}
                  className="group bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl px-5 py-3 hover:border-orange-400 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-[rgba(255,107,43,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,107,43,0.10)] transition-all duration-200"
                >
                  <p className="text-[15px] font-medium text-[#1A1614] dark:text-[#F5F0E8] group-hover:text-orange-500 transition-colors">{item.word}</p>
                  <p className="text-[11px] text-[#A09890] dark:text-[#6A6460] mt-0.5">{item.meaning}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}