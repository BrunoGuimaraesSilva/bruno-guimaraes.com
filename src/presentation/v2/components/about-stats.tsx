import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";

interface StatEntry {
  title: string;
  number: number;
  description: string;
}

export default function AboutStats() {
  const { t } = i18n;

  const stats = [
    t("about:stats.1", { returnObjects: true }) as StatEntry,
    t("about:stats.3", { returnObjects: true }) as StatEntry,
    t("about:stats.4", { returnObjects: true }) as StatEntry,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={8}
        mb="6rem"
        py={12}
        style={{
          borderTop: `1px solid ${V2_COLORS.outlineVariant}33`,
          borderBottom: `1px solid ${V2_COLORS.outlineVariant}33`,
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.title} textAlign="center">
            <Text
              fontFamily='"Manrope", sans-serif'
              fontSize="5xl"
              fontWeight="800"
              color={V2_COLORS.primary}
              mb={2}
            >
              {stat.number}+
            </Text>
            <Text
              fontFamily='"Manrope", sans-serif'
              fontSize="lg"
              fontWeight="700"
              color={V2_COLORS.onSurface}
              mb={2}
            >
              {stat.title}
            </Text>
            <Text
              fontFamily='"Inter", sans-serif'
              fontSize="sm"
              color={V2_COLORS.onSurfaceVariant}
              lineHeight="relaxed"
            >
              {stat.description}
            </Text>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}
