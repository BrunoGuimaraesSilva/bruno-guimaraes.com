import { t } from "i18next";
import GImage from "@components/GImage";
import SePhoto from "public/assets/SE.png";
import useIsMobile from "@hooks/useIsMobile";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";
import CountUp from "react-countup";
import GSeparator from "@components/GSeparator";

interface StatItem {
  title: string;
  description: string;
  number: number;
}

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  const statsArray = Object.values(
    t("about:stats", { returnObjects: true }) as Record<string, StatItem>
  ).slice(0, -1);

  return (
    <ResponsiveContainer containerProps={{ id: "AboutSection" }}>
      <Flex
        mt={5}
        maxW={"650px"}
        direction={isMobile ? "column" : "row"}
        justifyContent={"center"}
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
          <strong>{t("about:about_SE:name")}</strong>
          {t("about:about_SE:description")}
        </Box>
      </Flex>
      <GSeparator />
      <Box display="flex" justifyContent="center" alignItems="center" mb={10}>
        <Heading textStyle="4xl">Statistics</Heading>
      </Box>
      <SimpleGrid columns={2} gap="40px">
        {statsArray.map((data, index) => {
          return (
            <Box key={index} w={"100%"} borderRadius={5} border={5}>
              <Heading>+<CountUp
                duration={4}
                end={data.number}
                delay={2}
                suffix="  "
              /> {data.title}</Heading>
              <Text textStyle="sm">{data.description}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </ResponsiveContainer>
  );
};

export default AboutSection;
