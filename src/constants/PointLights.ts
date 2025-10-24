interface PointLightConfig {
  position: [number, number, number];
  intensity: number;
  distance: number;
  decay: number;
  color: string;
}

export const POINT_LIGHTS: PointLightConfig[] = [
  // potion
  {
    position: [1.5, 0.7, -1],
    intensity: 1.6,
    distance: 4,
    decay: 0.9,
    color: "#b2ff99"
  },

  // candles left
  {
    position: [1, 1.3, 4.9],
    intensity: 1,
    distance: 3.5,
    decay: 1,
    color: "#ffb366"
  },

  // candle table
  {
    position: [-0.35, 1, -3.8],
    intensity: 0.5,
    distance: 2,
    decay: 0.01,
    color: "#ffb366"
  },

  // torch
  {
    position: [-3, 2, -5.5],
    intensity: 3,
    distance: 3,
    decay: 1,
    color: "#ffb366"
  },

  // candle in hut
  {
    position: [-4.2, 5.4, 1.7],
    intensity: 2,
    distance: 5,
    decay: 1,
    color: "#ffb366"
  }
] as const;

export default POINT_LIGHTS;
