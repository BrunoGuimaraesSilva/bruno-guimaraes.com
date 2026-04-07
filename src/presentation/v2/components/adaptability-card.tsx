import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle } from "@infra/theme/v2-glass";
import i18n from "@i18n";
import { FiTarget } from "react-icons/fi";

export default function AdaptabilityCard() {
  const { t } = i18n;

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
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box
          position="absolute"
          top="-20%"
          right="-5%"
          color={V2_COLORS.primary}
          opacity={0.06}
          transform="scale(2.5)"
          aria-hidden="true"
        >
          <FiTarget size={140} />
        </Box>

        <Box position="relative" zIndex={1}>
          <Text
            fontFamily="Inter, sans-serif"
            fontSize="10px"
            letterSpacing="0.2em"
            fontWeight="500"
            textTransform="uppercase"
            color={V2_COLORS.tertiary}
            mb={4}
            display="block"
          >
            Team Impact
          </Text>

          <Text
            fontFamily="Manrope, sans-serif"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            color={V2_COLORS.onSurface}
            mb={4}
          >
            {String(t("common:joker.title"))}
          </Text>

          <Text
            fontFamily="Inter, sans-serif"
            fontSize={{ base: "sm", md: "md" }}
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="1.8"
            maxW="4xl"
          >
            {String(t("common:joker.description"))}
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
}
