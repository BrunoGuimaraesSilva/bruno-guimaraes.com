import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS, cardBaseStyle } from "@infra/theme/v2-glass";
import i18n from "@i18n";

const SKILL_SECTIONS = [
  "frontend",
  "backend",
  "architecture",
  "database",
  "cloud",
  "observability",
  "other",
] as const;

interface SkillItem {
  name: string;
  description: string;
}

interface SkillCategory {
  title: string;
  list: SkillItem[];
}

export default function AboutSkills() {
  const { t } = i18n;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <Flex align="center" gap={4} mb={12}>
        <Text
          fontFamily='"Manrope", sans-serif'
          fontSize="4xl"
          fontWeight="700"
          color={V2_COLORS.onSurface}
          flexShrink={0}
        >
          {String(t("about:skills.title"))}
        </Text>
        <Box
          flex="1"
          height="1px"
          style={{ background: `${V2_COLORS.outlineVariant}33` }}
        />
      </Flex>

      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={6}
        mb="6rem"
      >
        {SKILL_SECTIONS.map((sectionKey) => {
          const section = t(`about:skills.${sectionKey}`, {
            returnObjects: true,
          }) as SkillCategory;

          return (
            <Box
              key={sectionKey}
              p={6}
              style={{
                ...cardBaseStyle,
                border: `1px solid ${V2_COLORS.outlineVariant}1a`,
              }}
            >
              <Text
                fontFamily='"Manrope", sans-serif'
                fontSize="lg"
                fontWeight="700"
                color={V2_COLORS.primary}
                mb={5}
              >
                {section.title}
              </Text>

              <Flex direction="column" gap={4}>
                {section.list.map((skill) => (
                  <Box key={skill.name}>
                    <Text
                      fontFamily='"Inter", sans-serif'
                      fontSize="sm"
                      fontWeight="600"
                      color={V2_COLORS.onSurface}
                      mb={1}
                    >
                      {skill.name}
                    </Text>
                    <Text
                      fontFamily='"Inter", sans-serif'
                      fontSize="xs"
                      color={V2_COLORS.onSurfaceVariant}
                      lineHeight="relaxed"
                    >
                      {skill.description}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          );
        })}
      </Box>
    </motion.div>
  );
}
