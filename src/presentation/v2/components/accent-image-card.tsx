import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { cardBaseStyle } from "@infra/theme/v2-glass";
import accentBg from "public/assets/v2-accent-bg.png";

export default function AccentImageCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      style={{ height: "100%" }}
    >
      <Box
        style={{
          ...cardBaseStyle,
          overflow: "hidden",
          height: "320px",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={accentBg}
          alt="Abstract network circuits representing data architecture"
          fill
          style={{
            objectFit: "cover",
            filter: isHovered ? "grayscale(0%) brightness(0.7)" : "grayscale(100%) brightness(0.5)",
            transition: "filter 700ms ease",
          }}
          quality={90}
        />
      </Box>
    </motion.div>
  );
}
