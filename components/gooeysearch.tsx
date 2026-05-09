"use client";
import Link from "next/link";
import words from "../data/words.json";
import { motion, SVGMotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Gooeyfilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputref = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  const buttonVariants = {
    collapsed: {
      width: "115px",
      marginLeft: "0",
    },
    expanded: {
      width: "200px",
      marginLeft: "50px",
    },
  };

  const iconBubblevariants = {
    collapsed: {
      x: 56,
      scale: 0.5,
      opacity: 0,
    },
    expanded: {
      scale: 1,
      opacity: 1,
    },
  };

  const Transition = {
    duration: 1,
    type: "spring" as const,
    bounce: 0.25,
  };

  const SVGFilter = () => {
    return (
      <svg className="absolute hidden h-0 w-0">
        <defs>
          <filter
            id="gooey-filter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 20 -10"
              result="goo"
            />

            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
    );
  };
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  useEffect(() => {
    if (isExpanded) {
      inputref.current?.focus();
    } else {
      setSearchText("");
    }
  }, [isExpanded]);

  return (
    <div ref={searchRef} className="relative">
      <SVGFilter />

      <div
        style={{
          filter: "url(#gooey-filter)",
        }}
        className="relative flex h-10 items-center justify-center"
      >
        <motion.div
          variants={buttonVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={Transition}
          onClick={() => {
            setIsExpanded(true);
            inputref.current?.focus();
          }}
          className="flex h-10 w-full items-center justify-center"
        >
          <button
            onClick={() => setIsExpanded(true)}
            className="
  flex h-8 w-full items-center justify-center gap-2
  rounded-full border border-black/10
  bg-white px-3 font-medium text-black
  shadow-sm transition-all duration-300
  dark:border-white/10
  dark:bg-zinc-900
  dark:text-white
"
          >
            {isExpanded && searchText.length > 0 && (
  <div
    className="
      absolute top-14 z-50 w-full overflow-hidden
      rounded-3xl border border-black/10
      bg-white shadow-2xl
      dark:border-white/10
      dark:bg-zinc-900
    "
  >
    {words
      .filter((item) =>
        item.word.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(0, 6)
      .map((item) => (
        <Link
          key={item.slug}
          href={`/word/${item.slug}`}
          className="
            flex items-center justify-between
            border-b border-black/5 px-5 py-4
            transition hover:bg-black/5
            dark:border-white/5
            dark:hover:bg-white/5
          "
        >
          <div>
            <p className="font-medium">{item.word}</p>

            <p className="text-sm text-black/50 dark:text-white/50">
              {item.language}
            </p>
          </div>

          <span
            className="
              rounded-full bg-orange-100 px-3 py-1
              text-xs text-orange-600
              dark:bg-orange-500/10
              dark:text-orange-400
            "
          >
            {item.meaning}
          </span>
        </Link>
      ))}
  </div>
)}
            <motion.input
              layoutId="input"
              ref={inputref}
              value={searchText}
              onBlur={() => !searchText && setIsExpanded(false)}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Slangs"
              className="
                h-full w-full bg-transparent text-sm outline-none
                placeholder:text-black/40
                dark:placeholder:text-white/40
              "
            />
          </button>
        </motion.div>

        <motion.div
          variants={iconBubblevariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={Transition}
          className="
            absolute top-1/2 -left-14 flex size-10
            -translate-y-1/2 items-center justify-center
            rounded-full border border-black/10
            bg-white shadow-sm
            dark:border-white/10
            dark:bg-zinc-900
          "
        >
          <SearchIcon className="size-5 text-black dark:text-white" />
        </motion.div>
      </div>
    </div>
  );
}

const SearchIcon = (props: SVGMotionProps<SVGSVGElement>) => {
  return (
    <motion.svg
      layoutId="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </motion.svg>
  );
};