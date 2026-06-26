"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";

interface CatStickerProps {
  /** Image path, e.g. "/cats/about.png". */
  src: string;
  /** Decorative by default; pass text only if meaningful. */
  alt?: string;
  /** Tailwind position classes, e.g. "right-[6vw] top-[5vh]". */
  position?: string;
  /** Square box size in px. Default 110. */
  size?: number;
  /** Resting tilt in degrees. Default -8. */
  rotate?: number;
  /** Float-loop phase offset (s) so multiple stickers desync. Default 0. */
  floatDelay?: number;
  className?: string;
  /** Hide below md to keep dense mobile layouts clean. Default true. */
  hideOnMobile?: boolean;
  /** Override the responsive hide entirely, e.g. "hidden lg:block". */
  visibilityClass?: string;
  /** Make it grabbable — drag to fling it around; it springs back. Default false. */
  draggable?: boolean;
  /** Render as a rounded, bordered photo-card (for non-transparent images). */
  framed?: boolean;
}

/**
 * A small, playful cat-meme "sticker": tilts at rest, pops in on scroll,
 * gently floats, and straightens + scales on hover. Optionally draggable.
 * Decorative only. Missing image files degrade to nothing (no broken icon).
 */
export function CatSticker({
  src,
  alt = "",
  position = "",
  size = 110,
  rotate = -8,
  floatDelay = 0,
  className,
  hideOnMobile = true,
  visibilityClass,
  draggable = false,
  framed = false,
}: CatStickerProps) {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  const entrance = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 0.4, rotate: rotate - 18 },
        whileInView: { opacity: 1, scale: 1, rotate },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.7, ease: easeOutExpo },
      };

  const dragProps =
    draggable && !reduce
      ? {
          drag: true as const,
          dragSnapToOrigin: true,
          dragElastic: 0.6,
          whileDrag: { scale: 1.15, zIndex: 30, rotate: 0 },
        }
      : {};

  const visibility =
    visibilityClass ?? (hideOnMobile ? "hidden md:block" : "block");

  return (
    <motion.div
      aria-hidden="true"
      data-cursor="hover"
      className={cn(
        "pointer-events-auto absolute z-[2] select-none",
        draggable && "cursor-grab active:cursor-grabbing",
        visibility,
        position,
        className,
      )}
      style={{ width: size, height: size, rotate: reduce ? rotate : undefined }}
      whileHover={reduce ? undefined : { scale: 1.18, rotate: 0 }}
      {...entrance}
      {...dragProps}
    >
      <motion.img
        src={src}
        alt={alt}
        width={size}
        height={size}
        loading="lazy"
        draggable={false}
        onError={() => setFailed(true)}
        className={cn(
          "pointer-events-none h-full w-full",
          framed
            ? "rounded-2xl border border-white/15 object-cover shadow-[0_18px_44px_rgba(0,0,0,0.6)]"
            : "object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]",
        )}
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={
          reduce
            ? undefined
            : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: floatDelay }
        }
      />
    </motion.div>
  );
}
