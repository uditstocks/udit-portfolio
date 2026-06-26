"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { navLinks, personal } from "@/lib/data";
import { easeOutExpo } from "@/lib/motion";

export function Nav() {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-lock + focus management while the dialog is open (symmetric cleanup).
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    const id = window.setTimeout(() => closeBtnRef.current?.focus(), 60);
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuOpen, lenis]);

  // Escape closes the dialog and returns focus to the trigger.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  const trapFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -40, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="nav-shell" data-scrolled={scrolled}>
        <button
          type="button"
          onClick={() => scrollTo("#top")}
          className="group flex items-center gap-2"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-semibold transition-colors group-hover:bg-text group-hover:text-bg">
            {personal.monogram}
          </span>
          <span className="hidden text-sm font-medium lowercase tracking-tight sm:inline">
            {personal.name.toLowerCase()}
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="nav-anchor"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            className="theme-toggle"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onKeyDown={trapFocus}
            className="fixed inset-0 z-[80] flex flex-col bg-bg md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <div className="flex items-center justify-between px-[5vw] py-[1.25rem]">
              <span className="text-sm font-medium lowercase">
                {personal.name.toLowerCase()}
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                className="theme-toggle"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-[5vw]" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="py-2 text-left text-4xl font-medium lowercase tracking-tightest text-text"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: easeOutExpo }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <a
              href={`mailto:${personal.email}`}
              className="px-[5vw] py-8 text-sm text-muted transition-colors hover:text-text"
            >
              {personal.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
