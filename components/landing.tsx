// components/TrendingNowSection.tsx

"use client";

import { Flame } from "lucide-react";

const trendingWords = [
  {
    word: "Nagbeku",
    language: "Kannada",
    meaning: "Need to laugh",
    usage: "Idanna nodi nagbeku.",
    translation: "You have to laugh at this.",
    category: "funny",
    region: "Karnataka",
  },
  {
    word: "Vachindi ra",
    language: "Telugu",
    meaning: "It has arrived",
    usage: "Trend vachindi ra.",
    translation: "The trend has arrived.",
    category: "internet",
    region: "Andhra Pradesh/Telangana",
  },
  {
    word: "Comment daalo",
    language: "Hindi Slang",
    meaning: "Drop a comment",
    usage: "Apna opinion comment daalo.",
    translation: "Drop your opinion in the comments.",
    category: "internet",
    region: "India",
  },
  {
    word: "Moye moye",
    language: "Hindi Slang",
    meaning: "Sad-fail reaction",
    usage: "Assignment late, moye moye.",
    translation: "Assignment late, sad fail moment.",
    category: "meme",
    region: "India",
  },
];

export default function TrendingNowSection() {
  return (
    <section className="w-full py-10">
      {/* SAME WIDTH AS NAVBAR */}
      <div className="mx-auto max-w-6xl px-6">

        {/* HEADING */}
        <div className="mb-6 flex items-center gap-3">
          <div className="
            flex h-10 w-10 items-center justify-center
            rounded-2xl
            bg-orange-500/10
            dark:bg-orange-400/10
            ml-16
          ">
            <Flame className="h-4 w-4 text-orange-500" />
          </div>

          <div>
            <h2 className="
              text-xl font-semibold tracking-tight
              text-[#1A1614] dark:text-[#F5F0E8]
            ">
              Trending Now
            </h2>

            <p className="
              text-sm
              text-[#6B625C] dark:text-[#A09890]
            ">
              Viral slang & trending internet phrases
            </p>
          </div>
        </div>

        {/* 2 x 2 GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {trendingWords.map((item) => (
            <div
              key={item.word}
              className="
                group relative overflow-hidden

                rounded-[28px]

                border border-black/[0.06]
                dark:border-white/[0.08]

                bg-white/90
                dark:bg-[#111111]

                p-6

                shadow-[0_1px_2px_rgba(0,0,0,0.03)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                transition-all duration-300
                hover:-translate-y-1
              "
            >

              {/* TOP */}
              <div className="mb-5 flex items-start justify-between">

                <div>
                  <h3 className="
                    text-[20px]
                    font-semibold tracking-tight
                    text-[#1A1614]
                    dark:text-[#F5F0E8]
                  ">
                    {item.word}
                  </h3>

                  <p className="
                    mt-1 text-xs
                    text-[#6B625C]
                    dark:text-[#A09890]
                  ">
                    {item.language}
                  </p>
                </div>

                <span className="
                  rounded-full
                  border border-black/[0.06]
                  dark:border-white/[0.08]

                  bg-black/[0.03]
                  dark:bg-white/[0.04]

                  px-3 py-1

                  text-[11px]
                  font-medium
                  capitalize

                  text-[#6B625C]
                  dark:text-[#CFC7BF]
                ">
                  {item.category}
                </span>

              </div>

              {/* MEANING */}
              <p className="
                mb-5
                text-[15px]
                font-medium
                leading-relaxed

                text-[#2B2623]
                dark:text-[#E8E1D9]
              ">
                {item.meaning}
              </p>

              {/* USAGE BOX */}
              <div className="
                rounded-2xl

                border border-black/[0.05]
                dark:border-white/[0.06]

                bg-black/[0.02]
                dark:bg-white/[0.03]

                p-4
              ">

                <p className="
                  text-sm italic leading-relaxed
                  text-[#3E3733]
                  dark:text-[#DDD6CF]
                ">
                  "{item.usage}"
                </p>

                <p className="
                  mt-2
                  text-xs leading-relaxed
                  text-[#7A7068]
                  dark:text-[#9F978F]
                ">
                  {item.translation}
                </p>

              </div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center justify-between">

                <span className="
                  text-xs
                  text-[#7A7068]
                  dark:text-[#9F978F]
                ">
                  {item.region}
                </span>

                <button
                  className="
                    rounded-full

                    border border-black/[0.06]
                    dark:border-white/[0.08]

                    px-4 py-2

                    text-xs font-medium

                    text-[#1A1614]
                    dark:text-[#F5F0E8]

                    hover:bg-black/[0.04]
                    dark:hover:bg-white/[0.06]

                    transition-all duration-200
                  "
                >
                  Explore
                </button>

              </div>

              {/* HOVER GLOW */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
              ">
                <div className="
                  absolute -top-20 right-0
                  h-40 w-40 rounded-full
                  bg-orange-500/10 blur-3xl
                " />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}