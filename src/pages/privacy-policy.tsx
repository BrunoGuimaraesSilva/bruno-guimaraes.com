import { Box, Heading, Text, List, Container } from "@chakra-ui/react";
import i18n from "@i18n";

const PrivacyPolicy = () => {
  const { t } = i18n;
  return (
    <Container maxW="800px" py={10}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        {t("privacyPolicy:title")}
      </Heading>

      <Text fontSize="sm" textAlign="center" mb={6}>
        {t("privacyPolicy:description")}
      </Text>

      <Box>
        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:informationWeCollect:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("privacyPolicy:sections:informationWeCollect:items:0")}
          </List.Item>
          <List.Item>
            {t("privacyPolicy:sections:informationWeCollect:items:1")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:howWeUseYourInformation:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("privacyPolicy:sections:howWeUseYourInformation:items:0")}
          </List.Item>
          <List.Item>
            {t("privacyPolicy:sections:howWeUseYourInformation:items:1")}
          </List.Item>
          <List.Item>
            {t("privacyPolicy:sections:howWeUseYourInformation:items:2")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:sharingOfInformation:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("privacyPolicy:sections:sharingOfInformation:items:0")}
          </List.Item>
          <List.Item>
            {t("privacyPolicy:sections:sharingOfInformation:items:1")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:cookiesAndTrackingTechnologies:title")}
        </Heading>
        <Text pl={4}>
          {t("privacyPolicy:sections:cookiesAndTrackingTechnologies:text")}
        </Text>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:dataSecurity:title")}
        </Heading>
        <Text pl={4}>{t("privacyPolicy:sections:dataSecurity:text")}</Text>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:changesToPolicy:title")}
        </Heading>
        <Text pl={4}>{t("privacyPolicy:sections:changesToPolicy:text")}</Text>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("privacyPolicy:sections:contact:title")}
        </Heading>
        <Text pl={4}>{t("privacyPolicy:sections:contact:text")}</Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
