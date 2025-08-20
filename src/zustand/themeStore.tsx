import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => {
        set({ theme });
        const html = document.documentElement;
        if (theme === "dark") html.classList.add("dark");
        else html.classList.remove("dark");
      },
      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark";
        get().setTheme(newTheme);
      },
    }),
    {
      name: "theme-storage",
    }
  )
);
