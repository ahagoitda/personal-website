import { TIMELINE } from "@/lib/data";
import { ASSETS } from "@/lib/assets";
import ScrollReveal from "@/components/ScrollReveal";
import { useElementParallax } from "@/hooks/useParallax";

/**
 * DESIGN: Brutalist Typography
 * 타임라인 섹션: 좌측에 큰 연도, 우측에 내용.
 * 배경에 캠퍼스 이미지 + 패럴랙스.
 * 각 항목은 스크롤 시 순차적으로 나타남.
 * 호버 시 라임 라인이 확장되는 인터랙션.
 */

function TimelineItem({ item, index }: { item: typeof TIMELINE[number]; index: number }) {
  return (
    <ScrollReveal direction="up" delay={index * 120}>
      <div className="group relative border-t border-white/10 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[200px_1fr] sm:gap-8 lg:grid-cols-[280px_1fr]">
          {/* 연도 */}
          <div className="flex items-start gap-4">
            <span className="font-display text-3xl font-bold text-white/20 transition-colors duration-300 group-hover:text-[#c8ff00] sm:text-4xl lg:text-5xl">
              {item.year}
            </span>
            {item.tag && (
              <span className="mt-2 border border-[#c8ff00] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#c8ff00] uppercase">
                {item.tag}
              </span>
            )}
          </div>

          {/* 내용 */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
              {item.description}
            </p>
          </div>
        </div>

        {/* 호버 시 라임 라인 - 하단에서 좌→우 확장 */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8ff00] transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full" />
      </div>
    </ScrollReveal>
  );
}

export default function TimelineSection() {
  const { ref: bgRef, transform: bgTransform } = useElementParallax<HTMLDivElement>(0.08);

  return (
    <section id="history" className="relative overflow-hidden bg-[#0a0a0a] py-28 sm:py-36 lg:py-44">
      {/* 배경 이미지 + 패럴랙스 */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          transform: `translateY(${bgTransform}px)`,
          willChange: "transform",
        }}
      >
        <img
          src={ASSETS.campus}
          alt=""
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
        />
      </div>

      <div className="container relative z-10">
        {/* 섹션 헤더 */}
        <ScrollReveal direction="left">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase">
              02
            </span>
            <div className="h-[2px] w-12 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase">
              History
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="clip-up">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
            MY
            <br />
            HISTORY<span className="text-[#c8ff00]">.</span>
          </h2>
        </ScrollReveal>

        {/* 타임라인 항목들 */}
        <div className="mt-20 space-y-0">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>

        {/* 하단 구분 요소 */}
        <ScrollReveal direction="fade" delay={600}>
          <div className="mt-16 flex items-center gap-4">
            <div className="h-[3px] flex-1 bg-white/5" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase">
              계속 성장 중
            </span>
            <div className="h-[3px] flex-1 bg-white/5" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
