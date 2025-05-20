import { NAV_ITEMS } from "src/domain/constant/navItems";
import { Box, Flex } from "@chakra-ui/react";
import GLink from "@components/GLink";
import Logo from "@components/Glogo";
import {
  ColorModeButton,
  useColorModeValue,
} from "src/presentation/ui/color-mode";
import { useRouter } from "next/router";
import { t } from "i18next";

export default function Header() {
  const router = useRouter();

  const bgDefaultColor = useColorModeValue(
    "background_dark",
    "background_light"
  );
  const defaultHoverColor = useColorModeValue(
    "primary_light.50",
    "primary_dark.900"
  );


  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      px="1.5rem"
      pb={5}
      pt={0}
      bgColor={useColorModeValue("white", "black")}
    >
      <Box flex={1} pt={2}>
        <Logo width={50} height={50} />
      </Box>

      <Flex align="center">
        <Box
          display="flex"
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={2}
        >
          {NAV_ITEMS.map(({ href, label }, index) => {
            const currentPath = router.pathname.toLowerCase().replace(/\/$/, "");
            const linkPath = href.toLowerCase().replace(/\/$/, "");

            const isCurrentPage = currentPath === linkPath;

            return (
              <GLink
                key={index}
                href={href}
                px={8}
                py={5}
                rounded="md"
                borderStartEndRadius="0"
                borderStartStartRadius="0"
                bg={isCurrentPage ? bgDefaultColor : undefined}
                color={isCurrentPage ? defaultHoverColor : undefined}
                ml={!isCurrentPage ? 1 : undefined}
              >
                {t(label)}
              </GLink>
            );
          })}
          <ColorModeButton ml={1} />
        </Box>
      </Flex>
    </Flex>
  );
}
