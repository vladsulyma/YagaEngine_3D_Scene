import React from "react";

type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className = "" }) => {
  return (
    <h1
      className={`font-tiltPrism text-5xl none mt-0 mb-0 text-white select-none ${className}`}
    >
      YagaEngine
    </h1>
  );
};

export default Logo;
