"use client";

import { useTheme } from "next-themes";

import { cn } from "../lib/utils";
import { SunMoonIcon } from "@/themes/moon";
import { SunDimIcon } from "@/themes/sun";




function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme, theme } = useTheme();

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "px-2.5 flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {isDark ? (
        <SunMoonIcon/>
      ) : (
        <SunDimIcon />
      )}
    </button>
  );
}

export { ThemeToggle };