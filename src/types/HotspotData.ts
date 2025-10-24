import React from "react";

export interface HotspotData {
  id: number;
  title: string;
  secondaryTitle1?: string;
  secondaryTitle2?: string;
  text: string | React.ReactNode;
  extraText?: string | React.ReactNode;
  position?: [number, number, number];
  cameraPoint?: number;

  onClick?: (data: HotspotData) => void;
  onClose?: () => void;
}
