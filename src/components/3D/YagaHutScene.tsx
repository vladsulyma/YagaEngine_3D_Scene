import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SceneCanvas from "./SceneCanvas";
import HeroSection from "../UI/text/HeroSection";
import BeginButton from "../UI/buttons/BeginButton";
import ScrollHint from "../UI/text/ScrollHint";
import NavigationSideButton from "../UI/buttons/NavigationSideButton";
import Overlay from "../UI/text/Overlay";
import useScrollNavigation from "../../hooks/UseScrollNavigation";
import { CAMERA_POINTS } from "../../constants/CameraPoints";
import type { HotspotData } from "../../types/HotspotData";

const YagaHutScene: React.FC = () => {
  const { currentPoint, containerRef, navigateTo } = useScrollNavigation({
    maxPoint: CAMERA_POINTS.length - 1,
    scrollDelay: 1500
  });

  const [overlayData, setOverlayData] = useState<Omit<
    HotspotData,
    "position" | "cameraPoint" | "onClick"
  > | null>(null);

  const handleBeginJourney = () => navigateTo(1);
  const handleNavClick = (index: number) => navigateTo(index);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative"
    >
      <SceneCanvas
        currentPoint={currentPoint}
        onHotspotClick={data => setOverlayData(data)}
      />

      <AnimatePresence>
        {currentPoint === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection />
            <BeginButton onBegin={handleBeginJourney} />
            <ScrollHint />
          </motion.div>
        )}
      </AnimatePresence>

      <NavigationSideButton
        currentPoint={currentPoint}
        onClick={handleNavClick}
      />

      <AnimatePresence>
        {overlayData !== null && (
          <Overlay
            key="overlay"
            id={overlayData.id}
            title={overlayData.title}
            secondaryTitle1={overlayData.secondaryTitle1}
            secondaryTitle2={overlayData.secondaryTitle2}
            text={overlayData.text}
            extraText={overlayData.extraText}
            onClose={() => setOverlayData(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default YagaHutScene;
