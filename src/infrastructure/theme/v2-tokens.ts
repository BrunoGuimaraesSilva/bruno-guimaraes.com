import { defineConfig } from "@chakra-ui/react";

export const v2Config = defineConfig({
  theme: {
    tokens: {
      colors: {
        v2: {
          primary: { value: "#89ceff" },
          tertiary: { value: "#4edea3" },
          surface: { value: "#0b1326" },
          surfaceDim: { value: "#0b1326" },
          surfaceContainerLowest: { value: "#060e20" },
          surfaceContainerLow: { value: "#131b2e" },
          surfaceContainer: { value: "#171f33" },
          surfaceContainerHigh: { value: "#222a3d" },
          surfaceContainerHighest: { value: "#2d3449" },
          surfaceBright: { value: "#31394d" },
          surfaceVariant: { value: "#2d3449" },
          onSurface: { value: "#dae2fd" },
          onSurfaceVariant: { value: "#c6c6cd" },
          onBackground: { value: "#dae2fd" },
          outlineVariant: { value: "#45464d" },
          outline: { value: "#909097" },
          onPrimary: { value: "#00344d" },
          primaryContainer: { value: "#001a29" },
          onPrimaryContainer: { value: "#0089c3" },
          secondaryContainer: { value: "#3e495d" },
          onSecondaryContainer: { value: "#aeb9d0" },
        },
      },
      fonts: {
        v2Headline: { value: "Manrope, sans-serif" },
        v2Body: { value: "Inter, sans-serif" },
      },
    },
  },
});
