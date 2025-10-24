import React from "react";
import type { HotspotData } from "../../../types/HotspotData";

interface HotspotProps {
  data: HotspotData;
  onClick?: (data: HotspotData) => void;
}

const Hotspot: React.FC<HotspotProps> = ({ data, onClick }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div
        className="w-50 h-50 flex gap-4 items-center justify-center"
        onClick={() => onClick?.(data)}
      >
        <div className="w-4 h-4 rounded-full bg-white/80 border border-emerald-400 shadow-lg animate-pulse transition-transform" />
        <span className="text-sm mt-1 text-emerald-300">{data.title}</span>
      </div>
    </div>
  );
};

export default Hotspot;
