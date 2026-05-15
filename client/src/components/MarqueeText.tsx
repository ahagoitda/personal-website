import { useRef, useEffect } from "react";

/**
 * DESIGN: Brutalist Typography
 * 무한 스크롤 마퀴 텍스트.
 * CSS animation 기반으로 JS 의존 없음 → 메모리 누수 없음.
 * prefers-reduced-motion 존중.
 */

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
  direction?: "left" | "right";
}

export default function MarqueeText({
  text,
  speed = 30,
  className = "",
  direction = "left",
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CSS 커스텀 속성으로 속도 전달
    if (containerRef.current) {
      containerRef.current.style.setProperty("--marquee-speed", `${speed}s`);
    }
  }, [speed]);

  const repeatedText = Array(6).fill(text).join(" — ");

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <div
        className="inline-flex animate-marquee"
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: `${speed}s`,
        }}
      >
        <span className="inline-block pr-8 font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-[-0.02em]">
          {repeatedText}
        </span>
        <span className="inline-block pr-8 font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-[-0.02em]">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
