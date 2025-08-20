"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeSwitchProps {
  theme: string;
  toggleTheme: () => void;
}

export function ThemeSwitch({ theme, toggleTheme }: ThemeSwitchProps) {
  return (
    <SwitchPrimitives.Root
      checked={theme === "dark"}
      onCheckedChange={toggleTheme}
      className={cn(
        "relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors",
        theme === "dark" ? "bg-blue-500" : "bg-yellow-200"
      )}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform",
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        )}
      >
        {theme === "dark" ? (
          <FaMoon className="text-blue-500 h-4 w-4" />
        ) : (
          <FaSun className="text-yellow-500 h-4 w-4" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}
