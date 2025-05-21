import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import GLink from "@components/GLink";
import Logo from "@components/Glogo";
import { NAV_ITEMS } from "src/domain/constant/navItems";
import SocialButton from "@components/SocialButton";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import GSeparator from "@components/GSeparator";
import {LanguageSwitcher} from "@presentation/ui/LanguageSwitcher";
import i18n from "@i18n";

export default function FooterDesktop() {
  const { t } = i18n;
  return (
    <Box p={"fixed"} bottom={0} as={"footer"} mx="5%">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" py={6}>
        <Logo width={50} height={50} />
        <Stack direction="row">
          {NAV_ITEMS.map(({ href, label }) => (
            <GLink key={label} href={href} p={3} rounded="md">
              {t(label)}
            </GLink>
          ))}
        </Stack>
        <Stack direction="row">
          <SocialButton
            label={t("footer:social:linkedin")}
            href={t("footer:links:linkedin")}
            aria-label={t("footer:social:linkedin")}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={t("footer:social:instagram")}
            href={t("footer:links:instagram")}
            aria-label={t("footer:social:instagram")}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={t("footer:social:github")}
            href={t("footer:links:github")}
            aria-label={t("footer:social:github")}
          >
            <FaGithub />
          </SocialButton>
          <LanguageSwitcher />
        </Stack>
      </Flex>

      <GSeparator />
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        w="70vw"
        mx="auto"
        mb={15}
      >
        <Link href={t("footer:links:privacyPolicy")} passHref>
          <Text fontSize="sm" _hover={{ textDecoration: "underline" }}>
            {t("footer:privacyPolicy")}
          </Text>
        </Link>
        <Text fontSize="sm">{t("footer:copyright")}</Text>
        <Link href={t("footer:links:termsAndConditions")} passHref>
          <Text fontSize="sm" _hover={{ textDecoration: "underline" }}>
            {t("footer:termsAndConditions")}
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
