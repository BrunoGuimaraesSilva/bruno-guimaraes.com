import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle } from "@infra/theme/v2-glass";
import i18n from "@i18n";


const CHECK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4.5-4.5 1.41-1.41L10 13.67l7.09-7.09L18.5 8l-8.5 8.5z" />
  </svg>
);

export default function SqlCard() {
  const { t } = i18n;
  const checks = String(t("about:skills.database.list.0.description")).split(", ").slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{ height: "100%" }}
    >
      <Box
        style={{
          ...cardBaseStyle,
          backgroundColor: V2_COLORS.surfaceContainerLow,
          height: "100%",
          padding: "2rem",
        }}
      >
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
          {String(t("about:skills.database.title"))}
        </Text>

        <Text
          fontFamily="Manrope, sans-serif"
          fontSize="2xl"
          fontWeight="700"
          color={V2_COLORS.onSurface}
          mb={6}
        >
          {String(t("about:skills.database.title"))}
        </Text>

        <Flex direction="column" gap={4}>
          {checks.map((check) => (
            <Flex key={check} align="flex-start" gap={3}>
              <Box color={V2_COLORS.primary} flexShrink={0} mt="2px">
                {CHECK_ICON}
              </Box>
              <Text
                fontFamily="Inter, sans-serif"
                fontSize="sm"
                color={V2_COLORS.onSurfaceVariant}
                textTransform="capitalize"
              >
                {check}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </motion.div>
  );
}
