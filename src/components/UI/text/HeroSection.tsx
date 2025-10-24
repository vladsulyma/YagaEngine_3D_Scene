import Logo from "./Logo";
import NeonSubtitle from "./NeonSubtitle";

const HeroSection: React.FC = () => {
  return (
    <div
      className="absolute top-16 sm:top-8 left-1/2 transform -translate-x-1/2 z-10
                w-full max-w-[324px] sm:max-w-[540px] flex flex-col items-center justify-center
                pointer-events-none bg-black/30 backdrop-blur-sm p-6 rounded-2xl
                shadow-[0_0_60px_40px_rgba(0,0,0,0.4)]"
      style={{
        boxShadow: `
          0 0 50px 20px rgba(0, 0, 0, 0.4),
          inset -80px -100px 100px -120px rgba(255, 140, 60, 0.2),
          inset 80px -100px 100px -120px rgba(255, 140, 60, 0.2)
        `
      }}
    >
      <Logo className="mb-4" />
      <NeonSubtitle
        className="text-xl text-center text-wrap"
        text="Step into the darkly magical world of the YagaEngine - where every pixel
      can cast a spell."
      />
    </div>
  );
};

export default HeroSection;
