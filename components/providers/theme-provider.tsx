"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (e?: { clientX?: number; clientY?: number }) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "udit-theme";

/**
 * Minimal theme system with a View-Transitions circular reveal
 * (faithfully ported from the reference site). The initial theme is
 * applied pre-paint by an inline script in <head> to avoid any flash.
 */
export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const apply = useCallback((next: Theme) => {
    const doc = document.documentElement;
    doc.classList.add("theme-no-transition");
    doc.classList.toggle("light", next === "light");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — ignore */
    }
    setTheme(next);
    // Re-enable per-element transitions after the new theme has painted.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        doc.classList.remove("theme-no-transition");
      });
    });
  }, []);

  const toggleTheme = useCallback(
    (e?: { clientX?: number; clientY?: number }) => {
      const next: Theme = theme === "dark" ? "light" : "dark";
      const doc = document.documentElement;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const canTransition =
        typeof document.startViewTransition === "function";

      if (!canTransition || prefersReduced) {
        apply(next);
        return;
      }

      const x = e?.clientX ?? window.innerWidth - 56;
      const y = e?.clientY ?? 48;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      doc.classList.add(
        next === "dark" ? "transitioning-to-dark" : "transitioning-to-light",
      );

      const transition = document.startViewTransition(() => apply(next));

      transition.ready.then(() => {
        const clip = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ];
        const goingLight = next === "light";
        doc.animate(
          { clipPath: goingLight ? clip : [...clip].reverse() },
          {
            duration: 500,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: goingLight
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
          },
        );
      });

      transition.finished.finally(() => {
        doc.classList.remove("transitioning-to-dark", "transitioning-to-light");
      });
    },
    [theme, apply],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}

/** Inline script string injected pre-paint to set the initial theme (no flash). */
export const themeInitScript = `
(function(){try{var t=localStorage.getItem('${STORAGE_KEY}')||'dark';if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();
`;
