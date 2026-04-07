import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle } from "@infra/theme/v2-glass";
import i18n from "@i18n";

const TRANSLATE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
  </svg>
);

export default function LanguageCard() {
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
          justifyContent: "space-between",
          height: "100%",
          padding: "2rem",
        }}
      >
        <Box>
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
            {String(t("timeline:events.2.title")).split(" + ")[0]}
          </Text>

          <Text
            fontFamily="Manrope, sans-serif"
            fontSize="3xl"
            fontWeight="700"
            color={V2_COLORS.onSurface}
            mb={2}
          >
            English
          </Text>

          <Text fontFamily="Inter, sans-serif" fontWeight="500" color={V2_COLORS.primary}>
            {String(t("about:education.list.2.degree")).split(" — ")[1]}
          </Text>
        </Box>

        <Box mt={8}>
          <Flex align="center" gap={4}>
            <Flex
              width="48px"
              height="48px"
              borderRadius="full"
              align="center"
              justify="center"
              color={V2_COLORS.primary}
              flexShrink={0}
              style={{ background: `${V2_COLORS.primary}1a` }}
            >
              {TRANSLATE_ICON}
            </Flex>
            <Text
              fontFamily="Inter, sans-serif"
              fontSize="sm"
              color={V2_COLORS.onSurfaceVariant}
              fontStyle="italic"
            >
              {String(t("about:education.list.2.description")).split(", ")[0]}
            </Text>
          </Flex>
        </Box>
      </Box>
    </motion.div>
  );
}
