import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary_light: {
          50: { value: "#ffffff" },
          100: { value: "#f0f7ff" },
          200: { value: "#e1efff" },
          300: { value: "#c2e1ff" },
          400: { value: "#a3d2ff" },
          500: { value: "#84c3ff" },
          600: { value: "#70b1e8" },
          700: { value: "#5b99d0" },
          800: { value: "#4682b4" },
          900: { value: "#EBF1FC" },
        },
        primary_dark: {
          50: { value: "#e1e5ff" },
          100: { value: "#bbdefb" },
          200: { value: "#90caf9" },
          300: { value: "#64b5f6" },
          400: { value: "#42a5f5" },
          500: { value: "#2196f3" },
          600: { value: "#1e88e5" },
          700: { value: "#1976d2" },
          800: { value: "#1565c0" },
          900: { value: "#002147" },
        },
        background_dark: { value: "#002147" },
        background_light: { value: "#F4FDFF" },
      },
    },
  },
});

