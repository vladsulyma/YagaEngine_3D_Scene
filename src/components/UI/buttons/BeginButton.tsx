import React from "react";

interface BeginButtonProps {
  onBegin: () => void;
}

const BeginButton: React.FC<BeginButtonProps> = ({ onBegin }) => {
  return (
    <div className="flex items-center justify-center absolute bottom-10 left-0 w-full z-20">
      <div className="relative group">
        <button
          onClick={onBegin}
          className="relative inline-block p-px font-semibold leading-6 text-white shadow-2xl cursor-pointer rounded-2xl transition-all duration-300 ease-in-out backdrop-blur-sm"
        >
          <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-emerald-500 via-cyan-500 to-sky-600 p-0.5 opacity-0 transition-opacity duration-500 group-hover:opacity-15" />
          <span
            className="relative z-10 block px-6 py-3 rounded-2xl bg-black/50 backdrop-blur-sm p-6
                shadow-[0_0_60px_40px_rgba(0,0,0,0.4)]"
            style={{
              boxShadow: `
          0 0 50px 20px rgba(0, 0, 0, 0.4)
        `
            }}
          >
            <div className="relative z-10 flex items-center space-x-3">
              <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                Begin Journey
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-white transition-all duration-500 ease-in-out group-hover:text-emerald-300 group-hover:translate-x-1.5 group-hover:rotate-12"
              >
                <path d="m13 11 9-9" />
                <path d="M14.6 12.6c.8.8.9 2.1.2 3L10 22l-8-8 6.4-4.8c.9-.7 2.2-.6 3 .2Z" />
                <path d="m6.8 10.4 6.8 6.8" />
                <path d="m5 17 1.4-1.4" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BeginButton;
