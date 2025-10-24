import { Vector3 } from "three";

export interface CameraPoint {
  position: Vector3;
  lookAt: Vector3;
  name: string;
}

export const CAMERA_POINTS: CameraPoint[] = [
  // initial point
  {
    position: new Vector3(15, 3, 0),
    lookAt: new Vector3(0, 1, -0.5),
    name: "Welcome!"
  },

  // bat
  {
    position: new Vector3(-1, 6.5, 8),
    lookAt: new Vector3(4, 3.5, 0),
    name: "Animation core"
  },

  // potion
  {
    position: new Vector3(3, 2, 2),
    lookAt: new Vector3(1, 0.5, -2),
    name: "Fluid simulation"
  },

  // target
  {
    position: new Vector3(0, 1.5, -5),
    lookAt: new Vector3(6, 0, 0),
    name: "Target system"
  },

  // hero's
  {
    position: new Vector3(3, 1.5, -2),
    lookAt: new Vector3(12, 1, -25),
    name: "Actor management"
  },

  // room
  {
    position: new Vector3(-3.6, 6, 3.3),
    lookAt: new Vector3(3, -6, -22),
    name: "Contacts"
  }
];
