import { NAV_ITEMS } from "src/domain/constant/navItems";
import { Box, Flex } from "@chakra-ui/react";
import GLink from "@components/GLink";
import Logo from "@components/Glogo";
import {
  ColorModeButton,
  useColorModeValue,
} from "src/presentation/ui/color-mode";
import { t } from "i18next";
import { useRouter } from "next/router";

export default function () {
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

      <Flex align={"center"}>
        <Box
          display="flex"
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={2}
        >
          {NAV_ITEMS.map(({ href, label }, index) => {
            const path = href.toLowerCase();
            const myPath = router.pathname == path;
            if (myPath) {
              return (
                <GLink
                  key={index}
                  href={href}
                  px={8}
                  py={5}
                  rounded="md"
                  borderStartEndRadius="0"
                  borderStartStartRadius="0"
                  bg={bgDefaultColor}
                  color={defaultHoverColor}
                >
                  {t(label)}
                </GLink>
              );
            }

            return (
              <GLink
                ml={1}
                key={index}
                href={href}
                px={8}
                py={5}
                rounded="md"
                borderStartEndRadius="0"
                borderStartStartRadius="0"
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
