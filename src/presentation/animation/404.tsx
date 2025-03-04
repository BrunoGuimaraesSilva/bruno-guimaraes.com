"use client";

import dynamic from "next/dynamic";
import dark404 from "@infra/animation/404_darkmode.json";
import light404 from "@infra/animation/404_lightmode.json";
import { useColorMode } from "@presentation/ui/color-mode";
import { LottieAnimationProps } from "src/interfaces";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = ({
  width = "100%",
  height = "100%",
  loop = true,
}: LottieAnimationProps) => {
  const { colorMode } = useColorMode();
  const animationData = colorMode === "dark" ? dark404 : light404;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      width={width}
      height={height}
      style={{
        maxHeight: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default LottieAnimation;
