import { Box, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle, liquidGlassStyle } from "@infra/theme/v2-glass";

interface FeaturedProjectProps {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  onClick: () => void;
}

export default function FeaturedProject({
  title,
  description,
  technologies,
  impact,
  onClick,
}: FeaturedProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        p={{ base: 6, md: 10 }}
        cursor="pointer"
        onClick={onClick}
        role="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...cardBaseStyle,
          ...liquidGlassStyle,
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          borderColor: isHovered ? V2_COLORS.primary : undefined,
          boxShadow: isHovered
            ? `0 12px 32px -8px rgba(137, 206, 255, 0.12), inset 1px 1px 0px 0px rgba(69, 70, 77, 0.2)`
            : cardBaseStyle.boxShadow,
        }}
      >
        <Text
          fontFamily="Inter, sans-serif"
          fontSize="10px"
          letterSpacing="0.2em"
          fontWeight="500"
          textTransform="uppercase"
          color={V2_COLORS.tertiary}
          mb={4}
        >
          Featured Project
        </Text>

        <Text
          fontFamily="Manrope, sans-serif"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="800"
          color={isHovered ? V2_COLORS.primary : V2_COLORS.onSurface}
          mb={4}
          lineHeight="1.1"
          transition="color 0.3s"
        >
          {title}
        </Text>

        <Text
          fontFamily="Inter, sans-serif"
          fontSize="md"
          color={V2_COLORS.onSurfaceVariant}
          lineHeight="tall"
          mb={6}
          maxW="3xl"
        >
          {description}
        </Text>

        <Text
          fontFamily="Inter, sans-serif"
          fontSize="sm"
          color={V2_COLORS.primary}
          fontWeight="500"
          mb={6}
        >
          {impact}
        </Text>

        <Flex wrap="wrap" gap={2} mb={6}>
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
                background: `${V2_COLORS.secondaryContainer}80`,
                color: V2_COLORS.onSecondaryContainer,
              }}
            >
              {tech}
            </Text>
          ))}
        </Flex>

        <Flex align="center" gap={2}>
          <Text
            fontFamily="Manrope, sans-serif"
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.05em"
            textTransform="uppercase"
            color={V2_COLORS.primary}
            transition="transform 0.3s"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            View Case Study →
          </Text>
        </Flex>
      </Box>
    </motion.div>
  );
}
