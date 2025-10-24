import React from "react";

type Props = {
  className?: string;
  text: string;
};

const NeonSubtitle: React.FC<Props> = ({ className = "", text }) => {
  return (
    <p
      className={` text-[#88c057]
              [text-shadow:0_0_5px_#88c057,0_0_10px_#88c057,0_0_20px_#88c057,0_0_40px_#88c057,0_0_80px_#88c057]
              ${className}`}
    >
      {text}
    </p>
  );
};

export default NeonSubtitle;
