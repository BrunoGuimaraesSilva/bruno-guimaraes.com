import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";

export default function AboutBio() {
  const { t } = i18n;
  const descriptions = t("about:about_SE.description", {
    returnObjects: true,
  }) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 16 }}
        mb="6rem"
      >
        <Box>
          <Text
            fontFamily='"Inter", sans-serif'
            fontSize="md"
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="1.9"
            mb={6}
          >
            {descriptions[1]}
          </Text>
          <Text
            fontFamily='"Inter", sans-serif'
            fontSize="md"
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="1.9"
          >
            {descriptions[2]}
          </Text>
        </Box>
        <Box>
          <Text
            fontFamily='"Inter", sans-serif'
            fontSize="md"
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="1.9"
            mb={6}
          >
            {descriptions[3]}
          </Text>
          <Text
            fontFamily='"Inter", sans-serif'
            fontSize="md"
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="1.9"
            mb={6}
          >
            {descriptions[4]}
          </Text>
          <Text
            fontFamily='"Inter", sans-serif'
            fontSize="md"
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="1.9"
          >
            {descriptions[5]}
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
}
