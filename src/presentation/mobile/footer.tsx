import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import Logo from "@components/Glogo";
import GSeparator from "@components/GSeparator";
import SocialButton from "@components/SocialButton";
import i18n from "@i18n";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterMobile() {
  const { t } = i18n;

  return (
    <Container as={"footer"} p={5} direction="column">
      <Flex align="center" justifyContent="center">
        <Logo width={50} height={50} />
      </Flex>
      <GSeparator />
      <Flex align="center" justify="center" w="70vw" mx="auto">
        <Text fontSize="sm">{t("footer:copyright")}</Text>
      </Flex>
      <Flex align="center" justify="center" mt={5} w="70vw" mx="auto">
        <Stack direction="row">
          <SocialButton
            label={t("footer:social:linkedin")}
            href={t("footer:links:linkedin")}
            aria-label={t("footer:social:linkedin")}
            icon={FaLinkedin}
          />
          <SocialButton
            label={t("footer:social:instagram")}
            href={t("footer:links:instagram")}
            aria-label={t("footer:social:instagram")}
            icon={FaInstagram}
          />

          <SocialButton
            label={t("footer:social:github")}
            href={t("footer:links:github")}
            aria-label={t("footer:social:github")}
            icon={FaGithub}
          />
        </Stack>
      </Flex>
    </Container>
  );
}
