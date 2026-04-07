import { Box, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle, liquidGlassStyle } from "@infra/theme/v2-glass";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  index: number;
  onClick: () => void;
}

const CARD_VARIANT = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: index * 0.15 },
  }),
};

export default function ProjectCard({
  title,
  description,
  technologies,
  index,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={CARD_VARIANT}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Box
        role="group"
        cursor="pointer"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        p={6}
        style={{
          ...cardBaseStyle,
          ...liquidGlassStyle,
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          borderColor: isHovered ? V2_COLORS.primary : undefined,
          boxShadow: isHovered
            ? `0 8px 24px -6px rgba(137, 206, 255, 0.1), inset 1px 1px 0px 0px rgba(69, 70, 77, 0.2)`
            : cardBaseStyle.boxShadow,
        }}
      >
        <Flex wrap="wrap" gap={2} mb={4}>
          {technologies.map((tech) => (
            <Text
              key={tech}
              fontFamily="Inter, sans-serif"
              fontSize="11px"
              fontWeight="500"
              letterSpacing="0.05em"
              px={3}
              py={1}
              borderRadius="full"
              style={{
                background: `${V2_COLORS.primary}20`,
                color: V2_COLORS.primary,
              }}
            >
              {tech}
            </Text>
          ))}
        </Flex>

        <Text
          fontFamily="Manrope, sans-serif"
          fontSize="xl"
          fontWeight="700"
          color={isHovered ? V2_COLORS.primary : V2_COLORS.onSurface}
          mb={3}
          transition="color 0.3s"
        >
          {title}
        </Text>

        <Text
          fontFamily="Inter, sans-serif"
          fontSize="sm"
          color={V2_COLORS.onSurfaceVariant}
          lineHeight="relaxed"
          lineClamp={3}
        >
          {description}
        </Text>
      </Box>
    </motion.div>
  );
}
