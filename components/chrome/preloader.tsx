"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useReady } from "@/components/providers";
import { easeOutExpo } from "@/lib/motion";
import { personal } from "@/lib/data";

const SESSION_KEY = "udit-preloaded";

/** Premium intro: name mask-reveal + 000→100 counter, then slides away. */
export function Preloader() {
  const { markReady } = useReady();
  const lenis = useLenis();
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [decided, setDecided] = useState(false);

  // Decide whether to play, and drive the counter.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(SESSION_KEY);
    } catch {
      /* ignore */
    }

    if (reduced || seen) {
      setDecided(true);
      markReady();
      return;
    }

    setShow(true);
    setDecided(true);

    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [markReady]);

  // Scroll-lock tied symmetrically to `show` — always restored on cleanup.
  useEffect(() => {
    if (!show) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [show, lenis]);

  // Exit once the counter completes.
  useEffect(() => {
    if (!show || count < 100) return;
    const t = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      markReady();
      setShow(false);
    }, 450);
    return () => window.clearTimeout(t);
  }, [count, show, markReady]);

  if (!decided) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end bg-bg px-[5vw] pb-[8vh]"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          aria-hidden="true"
        >
          <div className="flex w-full items-end justify-between gap-6">
            <div className="overflow-hidden pb-[0.1em]">
              <motion.span
                className="block text-[clamp(2rem,7vw,5rem)] font-medium lowercase leading-none tracking-tightest text-text"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.1 }}
              >
                {personal.name.toLowerCase()}
              </motion.span>
            </div>
            <span className="font-medium tabular-nums text-muted text-xl sm:text-3xl">
              {String(count).padStart(3, "0")}
            </span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-text"
            style={{ width: `${count}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
