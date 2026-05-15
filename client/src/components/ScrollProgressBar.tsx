import { useScrollProgress } from "@/hooks/useScrollReveal";

/**
 * DESIGN: Brutalist Typography
 * 우측 고정 스크롤 진행 바.
 * 라임색 바가 스크롤에 따라 채워짐.
 */

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed right-0 top-0 z-50 hidden h-screen w-[3px] lg:block"
      aria-hidden="true"
    >
      <div className="h-full w-full bg-[#0a0a0a]/10">
        <div
          className="w-full origin-top bg-[#c8ff00]"
          style={{
            height: `${progress * 100}%`,
            transition: "height 100ms linear",
          }}
        />
      </div>
    </div>
  );
}
