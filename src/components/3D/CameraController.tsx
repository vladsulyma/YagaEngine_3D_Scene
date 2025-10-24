/* eslint-disable react/prop-types */
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

interface CameraControllerProps {
  targetPoint: number;
  cameraPoints: { position: Vector3; lookAt: Vector3 }[];
}

const CameraController: React.FC<CameraControllerProps> = ({
  targetPoint,
  cameraPoints
}) => {
  const { camera, mouse } = useThree();
  const currentLookAt = useRef(new Vector3());
  const targetPosition = useRef(new Vector3());
  const targetLookAtPoint = useRef(new Vector3());

  useEffect(() => {
    const point = cameraPoints[targetPoint];
    targetPosition.current.copy(point.position);
    targetLookAtPoint.current.copy(point.lookAt);
  }, [targetPoint, cameraPoints]);

  useFrame(() => {
    camera.position.lerp(targetPosition.current, 0.015);

    const mouseLookAt = new Vector3(
      targetLookAtPoint.current.x + mouse.x * 0.5,
      targetLookAtPoint.current.y + mouse.y * 0.2,
      targetLookAtPoint.current.z
    );

    currentLookAt.current.lerp(mouseLookAt, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};

export default CameraController;
