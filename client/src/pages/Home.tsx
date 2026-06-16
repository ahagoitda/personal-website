import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MarqueeText from "@/components/MarqueeText";

/**
 * DESIGN: Brutalist Typography
 * 메인 페이지: 모든 섹션을 순서대로 조합.
 * 섹션 사이에 마퀴 텍스트로 시각적 리듬 생성.
 */

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <main>
        <HeroSection />

        {/* 마퀴 구분자 1 */}
        <div className="overflow-hidden border-y-[3px] border-[#0a0a0a] bg-[#f5f2ec] py-5">
          <MarqueeText
            text="AI ENGINEERING • SEOUL TECH • 인공지능응용학과 • BAK JUN SEO • 서울과학기술대학교"
            speed={35}
            className="text-[#0a0a0a]/10"
          />
        </div>

        <AboutSection />

        {/* 마퀴 구분자 2 */}
        <div className="overflow-hidden bg-[#0a0a0a] py-5">
          <MarqueeText
            text="EDUCATION • HISTORY • GROWTH • 성장 • 배움 • EXPERIENCE"
            speed={28}
            direction="right"
            className="text-white/5"
          />
        </div>

        <TimelineSection />
        <SkillsSection />

        {/* 마퀴 구분자 3 */}
        <div className="overflow-hidden border-y-[3px] border-[#0a0a0a] bg-[#f5f2ec] py-5">
          <MarqueeText
            text="GOLAEAT • 골라잇 • BUILT WITH AI • SOLO PROJECT • NOW LIVE • 운영 중"
            speed={32}
            className="text-[#0a0a0a]/10"
          />
        </div>

        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
