import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";

const FOOTER_LINKS = [
  { labelKey: "footer:github", href: "https://github.com/BrunoGuimaraesSilva" },
  { labelKey: "footer:linkedin", href: "https://linkedin.com/in/brunoguimaraessilva" },
  { labelKey: "footer:source", href: "https://github.com/BrunoGuimaraesSilva/bruno-guimaraes.com" },
] as const;

export default function V2Footer() {
  const { t } = i18n;

  return (
    <Box as="footer" background="transparent" pb={12} pt={24}>
      <Flex direction="column" align="center" gap={6} maxW="7xl" mx="auto" px={8}>
        <Flex gap={8}>
          {FOOTER_LINKS.map(({ labelKey, href }) => (
            <Link key={labelKey} href={href} target="_blank">
              <Text
                fontFamily="Inter, sans-serif"
                fontSize="10px"
                letterSpacing="0.2em"
                fontWeight="500"
                textTransform="uppercase"
                color="#64748b"
                transition="color 0.5s"
                _hover={{ color: V2_COLORS.primary }}
              >
                {String(t(labelKey))}
              </Text>
            </Link>
          ))}
        </Flex>
        <Text
          fontFamily="Inter, sans-serif"
          fontSize="10px"
          letterSpacing="0.2em"
          fontWeight="500"
          textTransform="uppercase"
          color="#64748b"
        >
          {String(t("footer:copyright"))}
        </Text>
      </Flex>
    </Box>
  );
}
