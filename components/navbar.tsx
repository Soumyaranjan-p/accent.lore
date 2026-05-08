

import Image from "next/image";
import Link from "next/link";


import { ThemeToggle } from "./theme-toggle";

const navItems = [
 
  {
    label: "Explore",
    href: "/explore",
  },
  {
    label: "Trending",
    href: "/trending",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Create Slang",
    href: "/createslang",
  },
];

function Navbar() {
  return (
    <section className="font-poppins mx-auto max-w-5xl px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and nav items */} 
        <div className="flex items-baseline gap-4">
          <Image
            className="size-10"
            src="/logo.png"
            alt="Accent"
            width={100}
            height={100}
          />
          {navItems.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <span className="hidden cursor-pointer text-sm font-medium text-gray-500 transition-all duration-300 hover:text-gray-700 hover:underline md:block">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* User actions */}
        <div className="flex items-center gap-1">
          
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}

export { Navbar };
