import { PERSONAL_INFO } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Github } from "lucide-react";

/**
 * DESIGN: Brutalist Typography
 * 연락처 섹션: 라임 배경의 강렬한 CTA.
 * 대각선 패턴 배경 + 비대칭 레이아웃.
 * 모든 외부 링크에 rel="noopener noreferrer" 적용 (보안).
 */

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#c8ff00] py-28 sm:py-36 lg:py-44"
    >
      {/* 배경 패턴 - 대각선 */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #0a0a0a 0, #0a0a0a 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <ScrollReveal direction="left">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#0a0a0a]/30 uppercase">
              05
            </span>
            <div className="h-[2px] w-12 bg-[#0a0a0a]/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#0a0a0a]/30 uppercase">
              Contact
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="clip-up">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.90] tracking-[-0.03em] text-[#0a0a0a]">
            LET'S
            <br />
            CONNECT<span className="text-white">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <p className="mt-8 max-w-lg text-base leading-[1.8] text-[#0a0a0a]/70 sm:text-lg">
            새로운 프로젝트, 협업, 또는 단순한 대화도 환영합니다.
            <br />
            언제든 연락해 주세요.
          </p>
        </ScrollReveal>

        {/* 연락처 정보 */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-start gap-4 border-t-[3px] border-[#0a0a0a] pt-6 transition-colors"
            >
              <Mail
                className="mt-0.5 h-5 w-5 shrink-0 text-[#0a0a0a]/50 transition-colors group-hover:text-[#0a0a0a]"
                strokeWidth={1.5}
              />
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
                  Email
                </span>
                <p className="mt-1 font-display text-sm font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/20 underline-offset-4 transition-colors group-hover:decoration-[#0a0a0a] sm:text-base">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 border-t-[3px] border-[#0a0a0a] pt-6">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-[#0a0a0a]/50"
                strokeWidth={1.5}
              />
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
                  Location
                </span>
                <p className="mt-1 font-display text-sm font-medium text-[#0a0a0a] sm:text-base">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border-t-[3px] border-[#0a0a0a] pt-6 transition-colors"
            >
              <Github
                className="mt-0.5 h-5 w-5 shrink-0 text-[#0a0a0a]/50 transition-colors group-hover:text-[#0a0a0a]"
                strokeWidth={1.5}
              />
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
                  GitHub
                </span>
                <p className="mt-1 font-display text-sm font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/20 underline-offset-4 transition-colors group-hover:decoration-[#0a0a0a] sm:text-base">
                  github.com/ahagoitda
                </p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* 하단 풋터 */}
      <ScrollReveal direction="fade" delay={600}>
        <footer className="container relative z-10 mt-28 border-t border-[#0a0a0a]/20 pt-8 sm:mt-36">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
              reserved.
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 uppercase">
              {PERSONAL_INFO.university} {PERSONAL_INFO.major}
            </span>
          </div>
        </footer>
      </ScrollReveal>
    </section>
  );
}
