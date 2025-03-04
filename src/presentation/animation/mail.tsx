"use client";

import dynamic from "next/dynamic";
import darkMail from "@infra/animation/mail_darkmode.json";
import lightMail from "@infra/animation/mail_lightmode.json";
import { useColorMode } from "@presentation/ui/color-mode";
import { LottieAnimationProps } from "src/interfaces";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = ({
  width = "100%",
  height = "100%",
  loop = true,
}: LottieAnimationProps) => {
  const { colorMode } = useColorMode();
  const animationData = colorMode === "dark" ? darkMail : lightMail;

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
