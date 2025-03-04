import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import GLink from "@components/GLink";
import Logo from "@components/Glogo";
import { NAV_ITEMS } from "src/domain/constant/navItems";
import SocialButton from "@components/SocialButton";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { t } from "i18next";
import Link from "next/link";

export default function FooterDesktop() {
  const bg = useColorModeValue("background_light", "background_dark");
  const borderColor = useColorModeValue("background_dark", "background_light");

  return (
    <Box bg={bg}>
      <Box mx="5%">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          py={6}
        >
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
          </Stack>
        </Flex>

        <Box
          borderTopWidth={3}
          borderStyle="solid"
          borderColor={borderColor}
          py={4}
        >
          <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            w="70vw"
            mx="auto"
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
      </Box>
    </Box>
  );
}
