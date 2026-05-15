import { SKILLS, INTERESTS } from "@/lib/data";
import { ASSETS } from "@/lib/assets";
import ScrollReveal from "@/components/ScrollReveal";
import { useElementParallax } from "@/hooks/useParallax";

/**
 * DESIGN: Brutalist Typography
 * 스킬 섹션: 카테고리별 스킬을 비대칭 그리드로 배치.
 * 각 스킬 태그는 호버 시 색상 반전.
 * AI 뉴럴넷 이미지에 패럴랙스 적용.
 */

function SkillTag({ skill, delay }: { skill: string; delay: number }) {
  return (
    <span
      className="inline-block border-[2px] border-[#0a0a0a] px-4 py-2 font-display text-sm font-medium text-[#0a0a0a] transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#0a0a0a] hover:text-[#c8ff00] active:scale-[0.97]"
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {skill}
    </span>
  );
}

export default function SkillsSection() {
  const { ref: imgRef, transform: imgTransform } = useElementParallax<HTMLDivElement>(0.06);

  return (
    <section id="skills" className="relative bg-[#f5f2ec] py-28 sm:py-36 lg:py-44">
      <div className="container">
        {/* 섹션 헤더 */}
        <ScrollReveal direction="left">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#0a0a0a]/30 uppercase">
              03
            </span>
            <div className="h-[2px] w-12 bg-[#0a0a0a]/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#0a0a0a]/30 uppercase">
              Skills
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* 좌측: 타이틀 + AI 이미지 */}
          <div>
            <ScrollReveal direction="clip-up">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#0a0a0a]">
                TECH
                <br />
                STACK<span className="text-[#c8ff00]">.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div
                ref={imgRef}
                className="relative mt-10 overflow-hidden border-[3px] border-[#0a0a0a]"
                style={{
                  transform: `translateY(${imgTransform}px)`,
                  willChange: "transform",
                }}
              >
                <img
                  src={ASSETS.aiAbstract}
                  alt="AI 뉴럴 네트워크 시각화"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
                {/* 이미지 위 오버레이 텍스트 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent p-6">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#c8ff00] uppercase">
                    Artificial Intelligence & Machine Learning
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* 관심 분야 */}
            <ScrollReveal direction="up" delay={350}>
              <div className="mt-10">
                <h3 className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
                  관심 분야
                </h3>
                <ul className="mt-4 space-y-3">
                  {INTERESTS.map((interest, i) => (
                    <li
                      key={interest}
                      className="flex items-center gap-3 text-sm text-[#0a0a0a]/70 transition-colors duration-200 hover:text-[#0a0a0a]"
                    >
                      <span className="font-mono text-[10px] font-medium text-[#c8ff00]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-[1px] w-4 bg-[#0a0a0a]/20" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* 우측: 스킬 카테고리 */}
          <div className="flex flex-col gap-10 lg:pt-20">
            {SKILLS.map((category, catIndex) => (
              <ScrollReveal key={category.category} direction="right" delay={catIndex * 150}>
                <div className="border-t-[3px] border-[#0a0a0a] pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs tracking-[0.2em] text-[#0a0a0a]/50 uppercase">
                      {category.category}
                    </h3>
                    <span className="font-mono text-[10px] text-[#0a0a0a]/30">
                      {category.skills.length} items
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillTag
                        key={skill}
                        skill={skill}
                        delay={skillIndex * 50}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* 추가 메트릭 */}
            <ScrollReveal direction="fade" delay={700}>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="border-[2px] border-[#0a0a0a]/10 p-5">
                  <span className="font-display text-3xl font-bold text-[#0a0a0a]">4+</span>
                  <p className="mt-1 font-mono text-[10px] tracking-wider text-[#0a0a0a]/40 uppercase">
                    Programming Languages
                  </p>
                </div>
                <div className="border-[2px] border-[#0a0a0a]/10 p-5">
                  <span className="font-display text-3xl font-bold text-[#0a0a0a]">∞</span>
                  <p className="mt-1 font-mono text-[10px] tracking-wider text-[#0a0a0a]/40 uppercase">
                    Learning & Growing
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
