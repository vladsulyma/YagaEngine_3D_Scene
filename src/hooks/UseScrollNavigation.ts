import { useRef, useState, useEffect } from "react";
import { clamp } from "../utils/navigationUtils";

interface UseScrollNavigationProps {
  maxPoint: number;
  scrollDelay?: number;
}

export const useScrollNavigation = ({
  maxPoint,
  scrollDelay = 800
}: UseScrollNavigationProps) => {
  const [currentPoint, setCurrentPoint] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollHandler = (delta: number) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      setCurrentPoint(prev => clamp(prev + (delta > 0 ? 1 : -1), 0, maxPoint));
      setTimeout(() => (isScrolling.current = false), scrollDelay);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollHandler(e.deltaY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 30) return;
      scrollHandler(delta);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [maxPoint, scrollDelay]);

  const navigateTo = (index: number) => {
    if (isScrolling.current) return;
    setCurrentPoint(clamp(index, 0, maxPoint));
    isScrolling.current = true;
    setTimeout(() => (isScrolling.current = false), scrollDelay);
  };

  return { currentPoint, containerRef, navigateTo };
};

export default useScrollNavigation;
