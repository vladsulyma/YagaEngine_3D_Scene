/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

type GLTFResult = {
  scene: Group;
  animations: any[];
  nodes: Record<string, any>;
  materials: Record<string, any>;
};

const YagaHutModel: React.FC = () => {
  const gltf = useGLTF("/assets/3d/babayaga.glb") as GLTFResult;

  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      actions[names[0]]!.play();
    }
  }, [actions, names]);

  return (
    <primitive
      object={gltf.scene}
      rotation={[0, -2.1, 0]}
    />
  );
};

export default YagaHutModel;
