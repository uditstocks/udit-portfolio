"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./theme-provider";
import { SmoothScroll } from "./smooth-scroll";

interface ReadyContextValue {
  ready: boolean;
  markReady: () => void;
}

const ReadyContext = createContext<ReadyContextValue>({
  ready: true,
  markReady: () => {},
});

/** True once the preloader has finished — gates the hero entrance. */
export const useReady = () => useContext(ReadyContext);

export function Providers({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);
  // Stable identity so dependent effects (e.g. the preloader) don't re-fire.
  const markReady = useCallback(() => setReady(true), []);

  // Safety net: never leave the hero hidden if the preloader misbehaves.
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 3000);
    return () => window.clearTimeout(t);
  }, []);

  const value = useMemo(() => ({ ready, markReady }), [ready, markReady]);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <ReadyContext.Provider value={value}>{children}</ReadyContext.Provider>
        </SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  );
}
