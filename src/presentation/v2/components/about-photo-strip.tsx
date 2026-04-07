import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardBaseStyle } from "@infra/theme/v2-glass";

const PHOTO_STRIP = [
  { src: "/assets/about-portrait.jpeg", alt: "Portrait", height: "420px" },
  { src: "/assets/about-workspace.png", alt: "Workspace", height: "350px" },
  { src: "/assets/about-stockcar.jpeg", alt: "StockCar", height: "400px" },
];

export default function AboutPhotoStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        gap={5}
        mb="6rem"
        overflowX="auto"
        overflowY="hidden"
        mx={{ base: -8, md: 0 }}
        px={{ base: 8, md: 0 }}
        pb={4}
        css={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {PHOTO_STRIP.map((photo, index) => (
          <Box
            key={photo.alt}
            position="relative"
            overflow="hidden"
            flex={{ base: "0 0 85%", md: "1" }}
            style={{
              ...cardBaseStyle,
              height: photo.height,
            }}
            css={{
              scrollSnapAlign: "center",
            }}
            mt={{ base: 0, md: index === 1 ? "2rem" : 0 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 80vw, 33vw"
            />
          </Box>
        ))}
      </Flex>
    </motion.div>
  );
}
