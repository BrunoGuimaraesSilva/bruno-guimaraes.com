import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle } from "@infra/theme/v2-glass";
import i18n from "@i18n";

import { LuServer } from "react-icons/lu";

export default function ExperienceCard() {
  const { t } = i18n;
  const tags = [
    "PHP",
    "React.js",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Oracle DB",
    "DDD",
    "SOLID",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ height: "100%" }}
    >
      <Box
        style={{
          ...cardBaseStyle,
          backgroundColor: V2_COLORS.surfaceContainerHigh,
          position: "relative",
          overflow: "hidden",
          height: "100%",
          padding: "2rem",
        }}
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          p={8}
          color={V2_COLORS.primary}
          opacity={0.1}
          transition="opacity 0.3s"
          aria-hidden="true"
        >
          <LuServer size={110} />
        </Box>

        <Box position="relative" zIndex={1}>
          <Text
            fontFamily="Inter, sans-serif"
            fontSize="10px"
            letterSpacing="0.2em"
            fontWeight="500"
            textTransform="uppercase"
            color={V2_COLORS.tertiary}
            mb={6}
            display="block"
          >
            {String(t("about:stats.1.title"))}
          </Text>

          <Text
            fontFamily="Manrope, sans-serif"
            fontSize="3xl"
            fontWeight="700"
            color={V2_COLORS.onSurface}
            mb={2}
          >
            {String(t("timeline:events.0.title")).split(" - ")[1] ||
              "GazinTech"}
          </Text>

          <Text
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            color={V2_COLORS.primary}
            mb={6}
          >
            {String(t("timeline:events.0.title")).split(" - ")[0]}
          </Text>

          <Text
            fontFamily="Inter, sans-serif"
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="tall"
            mb={8}
            maxW="xl"
          >
            {t("timeline:events.0.description")}
          </Text>

          <Flex wrap="wrap" gap={3}>
            {tags.map((tag) => (
              <Box
                key={tag}
                px={4}
                py={1}
                style={{
                  background: `${V2_COLORS.secondaryContainer}80`,
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: V2_COLORS.onSecondaryContainer,
                }}
              >
                {tag}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </motion.div>
  );
}
