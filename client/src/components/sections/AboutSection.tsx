import { PERSONAL_INFO } from "@/lib/data";
import { ASSETS } from "@/lib/assets";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * DESIGN: Brutalist Typography
 * About 섹션: 비대칭 2컬럼 레이아웃.
 * 왼쪽에 프로필 이미지 (호버 시 grayscale 해제), 오른쪽에 자기소개.
 * 굵은 수평선으로 구분. 모바일에서는 단일 컬럼.
 */

const INFO_ITEMS = [
  { label: "이름", value: PERSONAL_INFO.name },
  { label: "대학교", value: PERSONAL_INFO.university },
  { label: "전공", value: PERSONAL_INFO.major },
  { label: "학번", value: PERSONAL_INFO.year },
  { label: "고등학교", value: `${PERSONAL_INFO.highSchool} 졸업` },
  { label: "위치", value: PERSONAL_INFO.location },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#f5f2ec] py-28 sm:py-36 lg:py-44">
      <div className="container">
        <ScrollReveal direction="left">
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#0a0a0a]/30 uppercase">
              01
            </span>
            <div className="h-[2px] w-12 bg-[#0a0a0a]/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#0a0a0a]/30 uppercase">
              About
            </span>
          </div>
        </ScrollReveal>

        {/* 메인 그리드 - 모바일: 1col, 데스크탑: 2col 비대칭 */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* 좌측: 프로필 이미지 */}
          <ScrollReveal direction="clip-left" delay={100}>
            <div className="relative max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden border-[3px] border-[#0a0a0a]">
                <img
                  src={ASSETS.profile}
                  alt={`${PERSONAL_INFO.name} 프로필 사진`}
                  className="aspect-[3/4] w-full object-cover grayscale transition-[filter] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              {/* 라임 강조 블록 - 장식 요소 */}
              <div
                className="absolute -bottom-4 -right-4 h-20 w-20 bg-[#c8ff00] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>

          {/* 우측: 텍스트 */}
          <div className="flex flex-col justify-center">
            <ScrollReveal direction="up" delay={200}>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#0a0a0a]">
                WHO
                <br />
                AM I<span className="text-[#c8ff00]">.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <p className="mt-8 max-w-lg text-base leading-[1.8] text-[#0a0a0a]/70 sm:text-lg">
                {PERSONAL_INFO.bio}
              </p>
            </ScrollReveal>

            {/* 정보 그리드 */}
            <ScrollReveal direction="up" delay={500}>
              <div className="mt-12 border-t-[3px] border-[#0a0a0a] pt-8">
                <div className="grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
                  {INFO_ITEMS.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
                        {item.label}
                      </span>
                      <span className="font-display text-sm font-medium text-[#0a0a0a] sm:text-base">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
