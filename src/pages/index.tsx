import { Box, Heading, Text } from "@chakra-ui/react";
import { t } from "i18next";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";

const About: React.FC = () => {
  return (
    <ResponsiveContainer>
      <Box textAlign="center" py={20}>
        <Heading textStyle="4xl" mb={4}>
          Bruno Guimarães
        </Heading>
        <Text textStyle="sm" maxW="600px" mx="auto">
          {t("common:description")}
        </Text>
      </Box>
    </ResponsiveContainer>
  );
};

export default About;
