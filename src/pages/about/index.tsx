import { FC, memo } from "react";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import GImage from "@components/GImage";
import GSeparator from "@components/GSeparator";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";
import SePhoto from "public/assets/SE.png";
import {
  EducationItem,
  SkillItem,
  StatItem,
} from "../../presentation/@types/about.types";
import {
  EducationItemComponent,
  SkillList,
  StatItemComponent,
} from "@components/about/components";

import i18n from "@i18n";

const GRID_COLUMNS = { base: 1, md: 2 };
const IMAGE_SIZE = 250;

const { t } = i18n;

const AboutSection: FC = () => {
  const statsArray = Object.values(
    t("about:stats", { returnObjects: true }) as Record<string, StatItem>
  ).slice(0, -1);

  const descriptionArray = t("about:about_SE:description", {
    returnObjects: true,
  }) as string[];

  const skillCategories = {
    frontend: t("about:skills:frontend", { returnObjects: true }) as {
      title: string;
      list: SkillItem[];
    },
    backend: t("about:skills:backend", { returnObjects: true }) as {
      title: string;
      list: SkillItem[];
    },
    optimization: t("about:skills:optimization", { returnObjects: true }) as {
      title: string;
      list: SkillItem[];
    },
    cloud: t("about:skills:cloud", { returnObjects: true }) as {
      title: string;
      list: SkillItem[];
    },
    other: t("about:skills:other", { returnObjects: true }) as {
      title: string;
      list: SkillItem[];
    },
  };

  const studiesListArray = t("about:education:list", {
    returnObjects: true,
  }) as EducationItem[];

  return (
    <ResponsiveContainer containerProps={{ id: "AboutSection" }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        gap={{ base: 6, md: 8 }}
        py={8}
      >
        <Box flexShrink={0} width={{ base: "full", md: IMAGE_SIZE }}>
          <GImage
            width={IMAGE_SIZE}
            src={SePhoto}
            alt={t("about:about_SE:imageAlt") || "photo"}
          />
        </Box>
        <Box maxW="2xl">
          <Heading size="2xl" mb={4}>
            {t("about:about_SE:title")}
          </Heading>
          <Text fontWeight="bold" mb={2}>
            {t("about:about_SE:name")}
          </Text>
          {descriptionArray.map((description, index) => (
            <Text key={index} fontSize="sm" mb={2}>
              {description}
            </Text>
          ))}
        </Box>
      </Flex>

      <GSeparator my={8} />

      <Box textAlign="center" mb={10}>
        <Heading size="2xl" mb={6}>
          {t("about:stats:title")}
        </Heading>
        <SimpleGrid columns={GRID_COLUMNS}>
          {statsArray.map((data, index) => (
            <StatItemComponent key={index} data={data} />
          ))}
        </SimpleGrid>
      </Box>

      <GSeparator my={8} />

      <Box mb={10}>
        <Heading size="2xl" textAlign="center" mb={8}>
          {t("about:education:title")}
        </Heading>
        {studiesListArray.map((study, index) => (
          <EducationItemComponent key={index} data={study} />
        ))}
      </Box>

      <GSeparator my={8} />

      <Box>
        <Heading size="2xl" textAlign="center" mb={4}>
          {t("about:skills:title")}
        </Heading>
        <Text textAlign="center" fontSize="sm" mb={8}>
          {t("about:skills:description")}
        </Text>
        {Object.entries(skillCategories).map(([key, { title, list }]) => (
          <SkillList key={key} title={title} items={list} />
        ))}
      </Box>
    </ResponsiveContainer>
  );
};

export default memo(AboutSection);
