import { t } from "i18next";
import GImage from "@components/GImage";
import SePhoto from "public/assets/SE.png";
import chefPhoto from "public/assets/chef.jpg";
import useIsMobile from "@hooks/useIsMobile";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";
import GSeparator from "@components/GSeparator";

interface StatItem {
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  const statsArray: StatItem[] = Object.values(
    t("about:stats", { returnObjects: true })
  );
  return (
    <ResponsiveContainer containerProps={{ id: "AboutSection" }}>
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
          pr={!isMobile ? 5 : undefined}
        >
          <GImage
            style={{ borderRadius: "5px" }}
            width={250}
            src={SePhoto}
            alt={t("about:about_SE:imageAlt") || "photo"}
          />
        </Box>
        <Box>
          <Heading textStyle="4xl" mb={5}>
            {t("about:about_SE:title")}
          </Heading>
          <Text textStyle="sm">{t("about:about_SE:description")}</Text>
        </Box>
      </Flex>
      <GSeparator />
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
          pr={!isMobile ? 5 : undefined}
        >
          <GImage
            style={{ borderRadius: "5px" }}
            width={250}
            src={chefPhoto}
            alt={t("about:about_SE:imageAlt") || "photo"}
          />
        </Box>
        <Box>
          <Heading textStyle="4xl" mb={5}>
            {t("about:about_chef:title")}
          </Heading>
          <Text textStyle="sm">{t("about:about_chef:description")}</Text>
        </Box>
      </Flex>

      <GSeparator />
      <Box display="flex" justifyContent="center" alignItems="center" mb={10}>
        <Heading textStyle="4xl">Statistics</Heading>
      </Box>
      <SimpleGrid columns={2} gap="40px">
        {statsArray.map((data, index) => {
          console.log(data);
          return (
            <Box key={index} w={"100%"} h={50} borderRadius={5} border={2}>
              <Heading>{data.title}</Heading>
              <Text textStyle="sm">{data.description}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </ResponsiveContainer>
  );
};

export default AboutSection;
