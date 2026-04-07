import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle } from "@infra/theme/v2-glass";
import i18n from "@i18n";
import { LuGraduationCap } from "react-icons/lu";

export default function StudiesCard() {
  const { t } = i18n;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ height: "100%" }}
    >
      <Box
        style={{
          ...cardBaseStyle,
          backgroundColor: V2_COLORS.surfaceContainer,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
          padding: "2rem",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box
          position="absolute"
          top="10%"
          right="-5%"
          color={V2_COLORS.primary}
          opacity={0.04}
          transform="scale(2)"
          aria-hidden="true"
        >
          <LuGraduationCap size={120} />
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
            {String(t("about:education.title"))}
          </Text>

          <Flex direction="column" gap={6}>
            <Flex direction="column" gap={1}>
              <Text fontFamily="Manrope, sans-serif" fontSize="sm" fontWeight="700" color={V2_COLORS.onSurface} lineHeight="1.3">
                 {String(t("about:education.list.0.degree"))}
              </Text>
              <Text fontFamily="Inter, sans-serif" fontSize="11px" fontWeight="500" color={V2_COLORS.primary}>
                {String(t("about:education.list.0.duration"))}
              </Text>
            </Flex>

            <Flex direction="column" gap={1}>
              <Text fontFamily="Manrope, sans-serif" fontSize="sm" fontWeight="700" color={V2_COLORS.onSurface} lineHeight="1.3">
                 {String(t("about:education.list.1.degree"))}
              </Text>
              <Text fontFamily="Inter, sans-serif" fontSize="11px" fontWeight="500" color={V2_COLORS.primary}>
                {String(t("about:education.list.1.duration"))}
              </Text>
            </Flex>

            <Flex direction="column" gap={1}>
              <Text fontFamily="Manrope, sans-serif" fontSize="sm" fontWeight="700" color={V2_COLORS.onSurface} lineHeight="1.3">
                 {String(t("about:education.list.2.degree"))}
              </Text>
              <Text fontFamily="Inter, sans-serif" fontSize="11px" fontWeight="500" color={V2_COLORS.primary}>
                {String(t("about:education.list.2.duration"))}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </motion.div>
  );
}
