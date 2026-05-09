import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Gooeyfilter from "./gooeysearch";

const navItems = [
  { label: "Explore",      href: "/explore"     },
  { label: "Create Slang", href: "/createslang" },
  { label: "About",        href: "/about"       },
];

function Navbar() {
  return (
    <header className="
      sticky top-0 z-50
      w-full
      bg-white/80 dark:bg-[#0A0A0A]/80
      backdrop-blur-md
      border-b border-black/[0.06] dark:border-white/[0.06]
      transition-colors duration-300
    ">
      <div className="
        mx-auto max-w-6xl
        px-6
        h-[64px]
        flex items-center justify-between
        gap-8
      ">

        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <span
            className="font-black text-[20px] tracking-[-1px] text-[#1A1614] dark:text-[#F5F0E8]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            accent
          </span>
          <span className="w-[6px] h-[6px] rounded-full bg-orange-500 mx-[3px] mb-[1px] inline-block shrink-0" />
          <span
            className="font-light text-[20px] tracking-[-0.5px] text-[#6B625C] dark:text-[#A09890]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            lore
          </span>
        </Link>

        {/* NAV LINKS — centered */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                px-4 py-2 rounded-lg
                text-[14px] font-medium
                text-[#6B625C] dark:text-[#A09890]
                hover:text-[#1A1614] dark:hover:text-[#F5F0E8]
                hover:bg-black/[0.04] dark:hover:bg-white/[0.06]
                transition-all duration-200
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: SEARCH + THEME */}
        <div className="flex items-center gap-2 shrink-0">
          <Gooeyfilter />
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}

export { Navbar };