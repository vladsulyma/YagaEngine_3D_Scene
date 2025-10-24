import React from "react";
import Logo from "./text/Logo";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-[#1a0b2e] text-white w-full h-full z-2">
      <Logo />
      <p className="text-lg font-raleway tracking-widest animate-pulse">
        Brewing magic...
      </p>
      <span className="loader mt-8"></span>
    </div>
  );
};

export default Loader;
