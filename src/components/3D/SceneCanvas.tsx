/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Html } from "@react-three/drei";
import CameraController from "./CameraController";
import { CAMERA_POINTS } from "../../constants/CameraPoints";
import { POINT_LIGHTS } from "../../constants/PointLights";
import YagaHutModel from "./YagaHutModel";
import Hotspot from "../UI/buttons/Hotspot";
import { HOTSPOTS } from "../../constants/Hotspots";
import type { HotspotData } from "../../types/HotspotData";

interface SceneCanvasProps {
  currentPoint: number;
  onHotspotClick: (data: HotspotData) => void;
}

const SceneCanvas: React.FC<SceneCanvasProps> = ({
  currentPoint,
  onHotspotClick
}) => {
  const visibleHotspots = HOTSPOTS.filter(h => h.cameraPoint === currentPoint);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 0], fov: 35, near: 0.1, far: 100 }}
    >
      <CameraController
        targetPoint={currentPoint}
        cameraPoints={CAMERA_POINTS}
      />

      <Suspense fallback={null}>
        <YagaHutModel />
      </Suspense>

      <fog
        attach="fog"
        args={["rgba(161, 126, 126, 1)", 10, 40]}
      />
      <color
        attach="background"
        args={["hsla(274, 68%, 20%, 1.00)"]}
      />

      <directionalLight
        position={[1, 5, 1]}
        intensity={0.15}
        color="#aabbff"
        castShadow
      />
      <ambientLight intensity={0.15} />
      {POINT_LIGHTS.map((light, idx) => (
        <pointLight
          key={idx}
          {...light}
          castShadow
        />
      ))}

      <EffectComposer multisampling={4}>
        <Bloom
          intensity={40}
          luminanceThreshold={0.1}
          luminanceSmoothing={1.2}
        />
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={0.7}
        />
      </EffectComposer>

      <AnimatePresence>
        {visibleHotspots.map(spot => (
          <Html
            key={spot.id}
            position={spot.position}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Hotspot
                data={spot}
                onClick={onHotspotClick}
              />
            </motion.div>
          </Html>
        ))}
      </AnimatePresence>
    </Canvas>
  );
};

export default SceneCanvas;
