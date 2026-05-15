import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode, type CSSProperties, useMemo } from "react";

/**
 * DESIGN: Brutalist Typography
 * 스크롤 시 요소가 나타나는 reveal 컴포넌트.
 * IntersectionObserver 기반으로 메모리 누수 없음.
 */

type RevealDirection = "up" | "left" | "right" | "clip-up" | "clip-left" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once, threshold });

  const styles = useMemo((): CSSProperties => {
    const base: CSSProperties = {
      transitionProperty: "transform, opacity, clip-path",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "transform, opacity",
    };

    if (!isVisible) {
      switch (direction) {
        case "up":
          return { ...base, opacity: 0, transform: "translateY(60px)" };
        case "left":
          return { ...base, opacity: 0, transform: "translateX(-60px)" };
        case "right":
          return { ...base, opacity: 0, transform: "translateX(60px)" };
        case "clip-up":
          return { ...base, clipPath: "inset(100% 0 0 0)", opacity: 0 };
        case "clip-left":
          return { ...base, clipPath: "inset(0 100% 0 0)", opacity: 0 };
        case "fade":
          return { ...base, opacity: 0 };
        default:
          return { ...base, opacity: 0 };
      }
    }

    return {
      ...base,
      opacity: 1,
      transform: "translate(0, 0)",
      clipPath: "inset(0 0 0 0)",
    };
  }, [isVisible, direction, delay, duration]);

  return (
    <div ref={ref} style={styles} className={className}>
      {children}
    </div>
  );
}
