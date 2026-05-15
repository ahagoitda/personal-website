import { PERSONAL_INFO } from "@/lib/data";
import { ASSETS } from "@/lib/assets";
import { useEffect, useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import { ArrowDown } from "lucide-react";

/**
 * DESIGN: Brutalist Typography
 * 히어로 섹션: 전체 화면 비대칭 레이아웃.
 * 왼쪽에 거대한 이름 타이포그래피.
 * 배경 이미지에 패럴랙스 효과.
 * 스크롤 유도 화살표 포함.
 */

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const parallaxOffset = useParallax(0.25);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* 배경 이미지 + 패럴랙스 */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          willChange: "transform",
        }}
      >
        <img
          src={ASSETS.hero}
          alt=""
          className="h-full w-full object-cover opacity-35"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]" />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-12 pt-20 sm:px-8 lg:px-16">
        {/* 상단 네비게이션 바 */}
        <nav
          className="flex items-center justify-between"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-20px)",
            transition: "all 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            transitionDelay: "200ms",
          }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
            Portfolio / 2026
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
            Seoul, KR
          </span>
        </nav>

        {/* 메인 타이포그래피 */}
        <div className="flex flex-col gap-6">
          {/* 이름 - 거대한 타이포 */}
          <div className="overflow-hidden">
            <h1
              className="font-display text-[clamp(3.5rem,12vw,11rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white"
              style={{
                transform: mounted ? "translateY(0)" : "translateY(100%)",
                transition: "transform 900ms cubic-bezier(0.23, 1, 0.32, 1)",
                transitionDelay: "400ms",
              }}
            >
              {PERSONAL_INFO.nameEn}
            </h1>
          </div>

          {/* 라임 강조선 + 직함 */}
          <div className="flex items-center gap-6">
            <div
              className="h-[3px] bg-[#c8ff00]"
              style={{
                width: mounted ? "120px" : "0px",
                transition: "width 800ms cubic-bezier(0.23, 1, 0.32, 1)",
                transitionDelay: "800ms",
              }}
            />
            <p
              className="font-mono text-sm tracking-[0.15em] text-white/70 uppercase sm:text-base"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-20px)",
                transition: "all 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                transitionDelay: "1000ms",
              }}
            >
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* 한글 이름 + 학교 */}
          <div
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1)",
              transitionDelay: "1200ms",
            }}
          >
            <span className="font-display text-xl font-medium text-white/90 sm:text-2xl">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden text-white/30 sm:inline">—</span>
            <span className="font-mono text-xs tracking-wider text-white/40 sm:text-sm">
              {PERSONAL_INFO.university} {PERSONAL_INFO.major} {PERSONAL_INFO.year}
            </span>
          </div>
        </div>

        {/* 하단 스크롤 유도 */}
        <button
          onClick={handleScrollDown}
          className="group flex items-center gap-3 self-start"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            transitionDelay: "1400ms",
          }}
          aria-label="아래로 스크롤"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
            Scroll to explore
          </span>
          <ArrowDown
            className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-y-1"
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* 우측 세로 텍스트 */}
      <div
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 800ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "1600ms",
        }}
      >
        <span
          className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          {PERSONAL_INFO.university} — {PERSONAL_INFO.major}
        </span>
      </div>

      {/* 스크롤 진행 표시 - 좌측 하단 */}
      <div
        className="absolute bottom-12 right-6 hidden lg:block"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 800ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "1800ms",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-[1px] animate-pulse bg-white/30" />
        </div>
      </div>
    </section>
  );
}
