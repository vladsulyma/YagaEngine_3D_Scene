import React, { lazy, Suspense } from "react";
import Loader from "./components/UI/Loader";

const YagaHutScene = lazy(() => import("./components/3D/YagaHutScene"));

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen">
      <Suspense fallback={<Loader />}>
        <YagaHutScene />
      </Suspense>
    </div>
  );
};

export default App;
