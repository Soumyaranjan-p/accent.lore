"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { SunMoonIcon } from "@/themes/moon";
import { SunDimIcon } from "@/themes/sun";

function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "px-2.5 flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {!mounted ? (
        <div className="w-7 h-7" /> 
      ) : isDark ? (
        <SunMoonIcon />
      ) : (
        <SunDimIcon />
      )}
    </button>
  );
}

export { ThemeToggle };