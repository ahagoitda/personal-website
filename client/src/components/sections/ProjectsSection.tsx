import { PROJECTS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

/**
 * DESIGN: Brutalist Typography
 * 프로젝트 섹션: 직접 만들어 운영 중인 작업물을 강조.
 * 다크 배경 위 큰 영문 타이틀 + 라임 포인트.
 * 각 카드는 호버 시 라임 라인 확장 + 화살표 인터랙션.
 * 모든 외부 링크에 rel="noopener noreferrer" 적용 (보안).
 */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <ScrollReveal direction="up" delay={index * 120}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block border-t border-white/10 py-10 sm:py-14"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[200px_1fr] sm:gap-8 lg:grid-cols-[280px_1fr]">
          {/* 좌측: 연도 + 상태 */}
          <div className="flex items-start gap-4">
            <span className="font-display text-3xl font-bold text-white/20 transition-colors duration-300 group-hover:text-[#c8ff00] sm:text-4xl lg:text-5xl">
              {project.year}
            </span>
            <span className="mt-2 border border-[#c8ff00] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#c8ff00] uppercase">
              {project.status}
            </span>
          </div>

          {/* 우측: 내용 */}
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                {project.nameEn}
              </h3>
              <span className="font-display text-lg font-medium text-white/50 sm:text-xl">
                {project.name}
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              {project.description}
            </p>

            {/* 하이라이트 태그 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.highlights.map(highlight => (
                <span
                  key={highlight}
                  className="border border-white/15 px-3 py-1 font-mono text-[10px] tracking-wider text-white/60 uppercase"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* 링크 */}
            <div className="mt-8 inline-flex items-center gap-2">
              <span className="font-mono text-sm tracking-wider text-white underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-[#c8ff00] group-hover:text-[#c8ff00]">
                {project.urlLabel}
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c8ff00]"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* 호버 시 라임 라인 - 하단에서 좌→우 확장 */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8ff00] transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full" />
      </a>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0a0a0a] py-28 sm:py-36 lg:py-44"
    >
      <div className="container relative z-10">
        {/* 섹션 헤더 */}
        <ScrollReveal direction="left">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase">
              04
            </span>
            <div className="h-[2px] w-12 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase">
              Projects
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="clip-up">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
            MY
            <br />
            WORK<span className="text-[#c8ff00]">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <p className="mt-8 max-w-lg text-base leading-[1.8] text-white/50 sm:text-lg">
            아이디어를 직접 제품으로 만들고 운영합니다. AI를 도구 삼아 혼자서
            끝까지 완성한 작업물입니다.
          </p>
        </ScrollReveal>

        {/* 프로젝트 카드들 */}
        <div className="mt-20 space-y-0">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
