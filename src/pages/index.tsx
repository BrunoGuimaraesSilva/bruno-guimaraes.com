import { t } from "i18next";
import GImage from "@components/GImage";
import SePhoto from "public/assets/SE.png";
import chefPhoto from "public/assets/chef.jpg";
import useIsMobile from "@hooks/useIsMobile";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";
import GSeparator from "@components/GSeparator";
import GShowcase from "@components/GShowcase";

interface StatItem {
  title: string;
  description: string;
}

interface AboutSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  imageAlt: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc,
  title,
  description,
  imageAlt,
}) => {
  const isMobile = useIsMobile();

  return (
    <Flex
      mt={5}
      direction={isMobile ? "column" : "row"}
      justifyContent={isMobile ? "center" : "flex-start"}
      gap={isMobile ? 3 : 5}
    >
      <Box
        minW={250}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pr={!isMobile ? 5 : 0}
      >
        <GImage
          style={{ borderRadius: "5px" }}
          width={250}
          src={imageSrc}
          alt={imageAlt}
        />
      </Box>
      <Box>
        <Heading textStyle="4xl" mb={5}>
          {title}
        </Heading>
        <Text textStyle="sm">{description}</Text>
      </Box>
    </Flex>
  );
};

const StatisticsSection: React.FC = () => {
  const stats: StatItem[] = Object.values(
    t("common:stats", { returnObjects: true })
  );

  return (
    <Box m={10}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={10}>
        <Heading textStyle="4xl">
          {t("common:stats:title") || "Statistics"}
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {stats.map((stat, index) => (
          <Box key={index} p={4}>
            <Heading size="md">{stat.title}</Heading>
            <Text textStyle="sm">{stat.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const ShowcaseSection: React.FC = () => {
  return (
    <Flex mt={10} direction="column" alignItems="center" textAlign="center">
      <Box mb={5}>
        <Heading textStyle="4xl">
          {t("common:showcase:title") || "Showcase"}
        </Heading>
        <Text textStyle="sm" mt={2}>
          {t("common:showcase:description")}
        </Text>
      </Box>
    </Flex>
  );
};
const About: React.FC = () => {
  return (
    <ResponsiveContainer containerProps={{ id: "AboutSection" }}>
      <AboutSection
        imageSrc={SePhoto}
        title={t("common:about_SE:title")}
        description={t("common:about_SE:description")}
        imageAlt={t("common:about_SE:imageAlt") || "Software Engineer Image"}
      />
      <GSeparator />

      <AboutSection
        imageSrc={chefPhoto}
        title={t("common:about_chef:title")}
        description={t("common:about_chef:description")}
        imageAlt={t("common:about_chef:imageAlt") || "Chef Image"}
      />
      <GSeparator />

      <StatisticsSection />
      <GSeparator />
      <ShowcaseSection />
      <GSeparator borderTopWidth={2} />
      <GShowcase
        title={t("common:projects:1:title")}
        description={t("common:projects:1:description")}
        imageSrc={""}
        buttonText={"View Project"}
        buttonLink={""}
      />
    </ResponsiveContainer>
  );
};

export default About;
