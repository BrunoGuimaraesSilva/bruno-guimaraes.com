import { NAV_ITEMS } from "src/domain/constant/navItems";
import { Box, Flex } from "@chakra-ui/react";
import GLink from "@components/GLink";
import Image from "next/image";
import logo from "public/assets/logo.png";

import {
  ColorModeButton,
  useColorModeValue,
} from "src/presentation/ui/color-mode";

export default function () {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={useColorModeValue("background_light", "background_dark")}
      pt={0}
      pb={4}
    >
      <Box flex={1} pt={2}>
        <Image src={logo} alt="Logo" width="50" height="50" />
      </Box>

      <Flex align={"end"}>
        <Box
          display="flex"
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={2}
        >
          {NAV_ITEMS.map(({ href, label }, index) => {
            return (
              <GLink
                key={index}
                href={href}
                px={8}
                py={5}
                rounded="md"
                borderStartEndRadius="0"
                borderStartStartRadius="0"
              >
                {label}
              </GLink>
            );
          })}
          <ColorModeButton />
        </Box>
      </Flex>
    </Flex>
  );
}
