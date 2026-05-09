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

  if (!word) {
    notFound();
  }

  const relatedWords = words
    .filter(
      (item) =>
        item.language === word.language &&
        item.slug !== word.slug
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FFF8F1] px-6 py-20 text-black dark:bg-[#0F0F0F] dark:text-white">
      <div className="mx-auto max-w-3xl">

        {/* HEADER */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span
              className="
                rounded-full bg-orange-100 px-3 py-1
                text-sm text-orange-600
                dark:bg-orange-500/10
                dark:text-orange-400
              "
            >
              {word.category}
            </span>

            <span className="text-black/50 dark:text-white/50">
              {word.language}
            </span>
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight">
            {word.word}
          </h1>

          <p className="mt-4 text-xl text-black/60 dark:text-white/60">
            {word.meaning}
          </p>
        </div>

        {/* USAGE */}
        <div
          className="
            rounded-3xl border border-black/10
            bg-white p-8 shadow-sm
            dark:border-white/10
            dark:bg-zinc-900
          "
        >
          <h2 className="text-lg font-semibold">
            Usage
          </h2>

          <p className="mt-4 text-2xl font-medium">
            “{word.usage}”
          </p>

          <p className="mt-3 text-black/50 dark:text-white/50">
            {word.translation}
          </p>
        </div>

        {/* RELATED WORDS */}
        <div className="mt-14">
          <h2 className="mb-6 text-2xl font-bold">
            Related Words
          </h2>

          <div className="flex flex-wrap gap-4">
            {relatedWords.map((item) => (
              <Link
                key={item.slug}
                href={`/word/${item.slug}`}
                className="
                  rounded-full border border-black/10
                  bg-white px-5 py-3 transition
                  hover:-translate-y-1 hover:shadow-md
                  dark:border-white/10
                  dark:bg-zinc-900
                "
              >
                {item.word}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}