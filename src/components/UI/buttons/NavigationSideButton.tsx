import React from "react";
import { CAMERA_POINTS } from "../../../constants/CameraPoints";

interface Props {
  currentPoint: number;
  onClick: (index: number) => void;
}

const NavigationSideButton: React.FC<Props> = ({ currentPoint, onClick }) => (
  <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
    {CAMERA_POINTS.map((point, index) => (
      <button
        key={index}
        onClick={() => onClick(index)}
        className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
          currentPoint === index ? "bg-white scale-125" : (
            "bg-white/40 hover:bg-white/70"
          )
        }`}
        aria-label={point.name}
      >
        <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none">
          {point.name}
        </span>
      </button>
    ))}
  </div>
);

export default NavigationSideButton;
