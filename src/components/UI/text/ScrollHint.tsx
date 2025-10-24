import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollHint: React.FC = () => {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-pulse z-10">
      <span className="text-sm">Scroll or click to navigate</span>
      <ChevronDown className="w-5 h-5" />
    </div>
  );
};

export default ScrollHint;
