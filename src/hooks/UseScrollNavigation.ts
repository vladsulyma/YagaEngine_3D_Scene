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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      isScrolling.current = true;
      setCurrentPoint(prev =>
        clamp(prev + (e.deltaY > 0 ? 1 : -1), 0, maxPoint)
      );

      setTimeout(() => (isScrolling.current = false), scrollDelay);
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [maxPoint, scrollDelay]);

  const navigateTo = (index: number) => {
    if (isScrolling.current) return;
    setCurrentPoint(index);
    isScrolling.current = true;
    setTimeout(() => (isScrolling.current = false), scrollDelay);
  };

  return { currentPoint, containerRef, navigateTo };
};

export default useScrollNavigation;
