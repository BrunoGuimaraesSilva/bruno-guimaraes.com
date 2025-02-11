import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import GLink from "@components/GLink";
import Logo from "@components/Glogo";
import { NAV_ITEMS } from "src/domain/constant/navItems";
import SocialButton from "@components/SocialButton";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { t } from "i18next";

export default function FooterDesktop() {
  const bg = useColorModeValue("background_light", "background_dark");

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
          <Stack direction="row" wordSpacing={4}>
            {NAV_ITEMS.map(({ href, label }) => (
              <GLink key={label} href={href} p={3} rounded="md">
                {t(label)}
              </GLink>
            ))}
          </Stack>
          <Stack direction="row" wordSpacing={4}>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="LinkedIn" href="#">
              <FaLinkedin />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Flex>

        <Box
          borderTopWidth={3}
          borderStyle="solid"
          borderColor={useColorModeValue("background_dark", "background_light")}
          py={4}
        >
          <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            w="70vw"
            mx="auto"
          >
            <Text fontSize="sm">Privacy Policy</Text>
            <Text fontSize="sm">
              © 2025 Bruno Guimarães da Silva. All rights reserved.
            </Text>
            <Text fontSize="sm">Terms and Conditions</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
