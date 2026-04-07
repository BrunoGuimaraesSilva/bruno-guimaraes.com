import { type CSSProperties } from "react";

export const V2_COLORS = {
  primary: "#89ceff",
  tertiary: "#4edea3",
  surface: "#0b1326",
  surfaceContainerLow: "#131b2e",
  surfaceContainer: "#171f33",
  surfaceContainerHigh: "#222a3d",
  surfaceContainerHighest: "#2d3449",
  onSurface: "#dae2fd",
  onSurfaceVariant: "#c6c6cd",
  outlineVariant: "#45464d",
  secondaryContainer: "#3e495d",
  onSecondaryContainer: "#aeb9d0",
} as const;

export const liquidGlassStyle: CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(23, 31, 51, 0.7) 0%, rgba(11, 19, 38, 0.7) 100%)",
  backdropFilter: "blur(20px)",
};

export const innerGlowStyle: CSSProperties = {
  boxShadow: "inset 1px 1px 0px 0px rgba(69, 70, 77, 0.2)",
};

export const cardBaseStyle: CSSProperties = {
  borderRadius: "0.5rem",
  border: `1px solid rgba(69, 70, 77, 0.15)`,
  boxShadow: "inset 1px 1px 0px 0px rgba(69, 70, 77, 0.2)",
};
