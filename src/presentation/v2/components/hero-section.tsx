import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";


const FADE_IN_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const FADE_IN_UP_DELAYED = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

export default function HeroSection() {
  const { t } = i18n;

  return (
    <Box as="section" mb="6rem">
      <motion.div initial="hidden" animate="visible" variants={FADE_IN_UP}>
        <Flex direction="column" gap={4} mb={8}>
          <Text
            fontFamily="Inter, sans-serif"
            fontSize="10px"
            letterSpacing="0.2em"
            fontWeight="500"
            textTransform="uppercase"
            color={V2_COLORS.tertiary}
          >
            {t("about:about_SE.title")}
          </Text>
          <Box
            fontFamily="Manrope, sans-serif"
            fontSize={{ base: "4rem", md: "7rem" }}
            fontWeight="800"
            letterSpacing="-0.04em"
            lineHeight="1"
            color={V2_COLORS.onSurface}
          >
            <Box as="span" display="block">
              {String(t("about:about_SE.name")).split(" ").slice(0, 2).join(" ")}
            </Box>
            <Box as="span" display="block" color={V2_COLORS.primary}>
              {String(t("about:about_SE.name")).split(" ").slice(2).join(" ")}
            </Box>
          </Box>
        </Flex>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={FADE_IN_UP_DELAYED}>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
          style={{ gap: "4rem" }}
        >
          <Box display={{ base: "none", md: "block" }} />
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="relaxed"
            maxW="2xl"
          >
            {t("common:description")}
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
}
