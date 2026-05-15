import { useEffect, useRef, useState, useCallback } from "react";

/**
 * 경량 패럴랙스 훅.
 * - requestAnimationFrame 기반으로 부드러운 움직임
 * - cleanup 시 RAF 취소 + 이벤트 리스너 제거로 메모리 누수 방지
 * - passive 이벤트 리스너로 스크롤 성능 최적화
 */
export function useParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      rafRef.current = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
        ticking.current = false;
      });
    }
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return offset;
}

/**
 * 요소가 뷰포트에 있을 때만 패럴랙스 계산하는 최적화 훅.
 * - IntersectionObserver로 가시성 체크
 * - 보이지 않을 때는 RAF 호출하지 않음
 */
export function useElementParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.2
) {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState(0);
  const isVisibleRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!isVisibleRef.current || ticking.current) return;
      ticking.current = true;

      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) {
          ticking.current = false;
          return;
        }
        const rect = ref.current.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = centerY - viewportCenter;
        setTransform(distance * speed);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed]);

  return { ref, transform };
}
