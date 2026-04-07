import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";

const STAGGER_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ENTRY_VARIANT = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EducationSection() {
  const { t } = i18n;
  const entries = t("about:education.list", { returnObjects: true }) as Array<{
    duration: string;
    degree: string;
    description: string;
    institution: string;
  }>;

  return (
    <Box as="section" mt="6rem">
      <Flex align="center" gap={4} mb={12}>
        <Text
          fontFamily="Manrope, sans-serif"
          fontSize="4xl"
          fontWeight="700"
          color={V2_COLORS.onSurface}
          flexShrink={0}
        >
          {String(t("about:education.title"))}
        </Text>
        <Box flex="1" height="1px" style={{ background: `${V2_COLORS.outlineVariant}33` }} />
      </Flex>

      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Flex direction="column" gap={12}>
          {entries.map((entry, index) => (
            <motion.div key={index} variants={ENTRY_VARIANT}>
              <Box
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
                style={{ gap: "4rem", alignItems: "baseline" }}
              >
                <Text
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                  fontSize="lg"
                  color={V2_COLORS.primary}
                >
                  {entry.duration}
                </Text>
                <Box
                  style={{
                    background: `${V2_COLORS.surfaceContainerHigh}80`,
                    borderRadius: "0.75rem",
                    border: `1px solid ${V2_COLORS.outlineVariant}26`,
                    padding: "2rem",
                  }}
                >
                  <Text
                    fontFamily="Manrope, sans-serif"
                    fontSize="2xl"
                    fontWeight="700"
                    color={V2_COLORS.onSurface}
                    mb={2}
                  >
                    {entry.degree}
                  </Text>
                  <Text
                    fontFamily="Inter, sans-serif"
                    color={V2_COLORS.onSurfaceVariant}
                    lineHeight="tall"
                  >
                    {entry.description}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </motion.div>
    </Box>
  );
}
