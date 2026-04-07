import { FC, memo } from "react";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import GImage from "@v1/components/GImage";
import GSeparator from "@v1/components/GSeparator";
import ResponsiveContainer from "@shared/wrappers/ResponsiveContainer";
import SePhoto from "public/assets/SE.png";
import {
  EducationItem,
  SkillItem,
  StatItem,
} from "@shared/@types/about.types";
import {
  EducationItemComponent,
  SkillList,
  StatItemComponent,
} from "@v1/components/about/components";
import i18n from "@i18n";

const GRID_COLUMNS = { base: 1, md: 2 };
const IMAGE_SIZE = 250;

const SKILL_KEYS = [
  "frontend",
  "backend",
  "architecture",
  "database",
  "cloud",
  "observability",
  "other",
] as const;

const AboutSection: FC = () => {
  const { t } = i18n;

  const rawStats = t("about:stats", { returnObjects: true });
  const statsArray: StatItem[] = rawStats && typeof rawStats === "object" && !Array.isArray(rawStats)
    ? Object.values(rawStats as Record<string, StatItem>).slice(0, -1)
    : [];

  const rawDescriptions = t("about:about_SE.description", { returnObjects: true });
  const descriptionArray: string[] = Array.isArray(rawDescriptions) ? rawDescriptions : [];

  const skillCategories = SKILL_KEYS.map((key) => {
    const raw = t(`about:skills.${key}`, { returnObjects: true }) as { title: string; list: SkillItem[] } | string;
    return {
      key,
      title: typeof raw === "object" ? raw.title : key,
      list: typeof raw === "object" && Array.isArray(raw.list) ? raw.list : [],
    };
  });

  const rawStudies = t("about:education.list", { returnObjects: true });
  const studiesListArray: EducationItem[] = Array.isArray(rawStudies) ? rawStudies : [];

  return (
    <ResponsiveContainer containerProps={{ id: "AboutSection" }}>
      <Flex direction={{ base: "column", md: "row" }} justify="center" gap={{ base: 6, md: 8 }} py={8}>
        <Box flexShrink={0} width={{ base: "full", md: IMAGE_SIZE }}>
          <GImage width={IMAGE_SIZE} src={SePhoto} alt={String(t("about:about_SE.imageAlt")) || "photo"} />
        </Box>
        <Box maxW="2xl">
          <Heading size="2xl" mb={4}>{String(t("about:about_SE.title"))}</Heading>
          <Text fontWeight="bold" mb={2}>{String(t("about:about_SE.name"))}</Text>
          {descriptionArray.map((description, index) => (
            <Text key={index} fontSize="sm" mb={2}>{description}</Text>
          ))}
        </Box>
      </Flex>

      <GSeparator my={8} />

      <Box textAlign="center" mb={10}>
        <Heading size="2xl" mb={6}>{String(t("about:stats.title"))}</Heading>
        <SimpleGrid columns={GRID_COLUMNS}>
          {statsArray.map((data, index) => (
            <StatItemComponent key={index} data={data} />
          ))}
        </SimpleGrid>
      </Box>

      <GSeparator my={8} />

      <Box mb={10}>
        <Heading size="2xl" textAlign="center" mb={8}>{String(t("about:education.title"))}</Heading>
        {studiesListArray.map((study, index) => (
          <EducationItemComponent key={index} data={study} />
        ))}
      </Box>

      <GSeparator my={8} />

      <Box>
        <Heading size="2xl" textAlign="center" mb={4}>{String(t("about:skills.title"))}</Heading>
        <Text textAlign="center" fontSize="sm" mb={8}>{String(t("about:skills.description"))}</Text>
        {skillCategories.map(({ key, title, list }) => (
          <SkillList key={key} title={title} items={list} />
        ))}
      </Box>
    </ResponsiveContainer>
  );
};

export default memo(AboutSection);
