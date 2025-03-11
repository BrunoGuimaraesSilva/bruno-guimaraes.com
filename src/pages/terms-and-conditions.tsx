import { Box, Heading, Text, List, Container } from "@chakra-ui/react";
import { t } from "i18next";

const TermsAndConditions = () => {

  return (
    <Container maxW="800px" py={10}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        {t("termsAndConditions:title")}
      </Heading>

      <Text fontSize="sm" textAlign="center" mb={6}>
        {t("termsAndConditions:description")}
      </Text>

      <Box>
        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:useOfWebsite:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("termsAndConditions:sections:useOfWebsite:items:0")}
          </List.Item>
          <List.Item>
            {t("termsAndConditions:sections:useOfWebsite:items:1")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:intellectualProperty:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("termsAndConditions:sections:intellectualProperty:items:0")}
          </List.Item>
          <List.Item>
            {t("termsAndConditions:sections:intellectualProperty:items:1")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:limitationOfLiability:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("termsAndConditions:sections:limitationOfLiability:items:0")}
          </List.Item>
          <List.Item>
            {t("termsAndConditions:sections:limitationOfLiability:items:1")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:thirdPartyLinks:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("termsAndConditions:sections:thirdPartyLinks:items:0")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:changesToTerms:title")}
        </Heading>
        <List.Root pl={4}>
          <List.Item>
            {t("termsAndConditions:sections:changesToTerms:items:0")}
          </List.Item>
          <List.Item>
            {t("termsAndConditions:sections:changesToTerms:items:1")}
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:governingLaw:title")}
        </Heading>
        <Text pl={4}>
          {t("termsAndConditions:sections:governingLaw:text")}
        </Text>

        <Heading as="h3" size="md" mt={6} mb={2}>
          {t("termsAndConditions:sections:contact:title")}
        </Heading>
        <Text pl={4}>
          {t("termsAndConditions:sections:contact:text")}
        </Text>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
