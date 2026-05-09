import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import Gooeyfilter from "./gooeysearch";

const navItems = [
  {
    label: "Explore",
    href: "/explore",
  },
  // {
  //   label: "Trending",
  //   href: "/trending",
  // },
  {
    label: "Create Slang",
    href: "/createslang",
  },
  {
    label: "About",
    href: "/about",
  },
  
];

function Navbar() {
  return (
    <section className="pl-40 py-4">
      <div className="flex items-start gap-20 translate-x-40">
        
        {/* Logo + Nav Links */}
        <div className="flex items-start gap-18">
          <Image
            className="size-10"
            src="/logo.png"
            alt="Accent"
            width={100}
            height={100}
          />

          <div className="hidden md:flex items-start gap-5 pt-2">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-500 transition-all duration-300 hover:text-gray-700 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

       
        <div className="flex items-start gap-2 pt-1 ">
          <Gooeyfilter />
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}

export { Navbar };