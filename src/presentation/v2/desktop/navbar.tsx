import Link from "next/link";
import { LanguageSwitcher } from "@shared/ui/LanguageSwitcher";
import Logo from "@v1/components/Glogo";
import { Box, Flex } from "@chakra-ui/react";
import V2MobileNavbar from "@v2/mobile/navbar";
import { useV2Navbar } from "@shared/hooks/useV2Navbar";
import { liquidGlassStyle } from "@infra/theme/v2-glass";

function V2DesktopNavbar() {
  const { t, isActive, navItems } = useV2Navbar();

  return (
    <Flex
      as="nav"
      aria-label="Main navigation"
      direction="column"
      align="center"
      position="relative"
      mt={5}
    >
      <Flex
        align="center"
        gap={0}
        px="0.375rem"
        h="52px"
        borderRadius="full"
        position="relative"
        overflow="hidden"
        css={{
          ...liquidGlassStyle,
          pointerEvents: "all",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(1px)",
            boxShadow: "inset -10px -8px 0px -11px rgba(255, 255, 255, 0.8), inset 0px -9px 0px -8px rgba(255, 255, 255, 0.6)",
            opacity: 0.5,
            zIndex: 0,
            filter: "blur(1px) brightness(115%)",
            pointerEvents: "none"
          },
          _hover: {
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 12px 40px rgba(31, 38, 135, 0.18), inset 0 4px 24px rgba(255, 255, 255, 0.08)"
          }
        }}
      >
        {/* Logo */}
        <Flex position="relative" zIndex={1} align="center" px={4} h="100%">
          <Link href="/v2" aria-label="Home">
            <Logo width={36} height={36} />
          </Link>
        </Flex>

        {/* Desktop Nav links */}
        <Flex position="relative" zIndex={1} align="center" gap={0} px={2} h="100%">
          {navItems.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link key={label} href={href} style={{ textDecoration: "none", height: "100%" }}>
                <Flex
                  position="relative"
                  align="center"
                  h="100%"
                  px={3}
                  cursor="pointer"
                  css={{
                    "&::after": active ? {
                      content: '""',
                      position: "absolute",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "18px",
                      height: "2px",
                      borderRadius: "9999px",
                      background: "#89ceff",
                      boxShadow: "0 0 8px rgba(137, 206, 255, 0.7)"
                    } : {}
                  }}
                >
                  <Box
                    as="span"
                    fontFamily='"Manrope", sans-serif'
                    fontSize="0.7rem"
                    fontWeight="700"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    color={active ? "#89ceff" : "rgba(198, 198, 205, 0.7)"}
                    transition="color 0.25s ease"
                    whiteSpace="nowrap"
                    _hover={{ color: "rgba(255, 255, 255, 0.95)" }}
                    suppressHydrationWarning
                  >
                    {t(label)}
                  </Box>
                </Flex>
              </Link>
            );
          })}
        </Flex>

        {/* Right controls */}
        <Flex position="relative" zIndex={1} align="center" gap={1.5} pl={2.5} pr={2} h="100%">
          <Link href="/v1" aria-label="Switch to V1" style={{ textDecoration: "none" }}>
            <Flex
              align="center"
              px={3}
              py={1}
              borderRadius="full"
              fontFamily='"Inter", sans-serif'
              fontSize="0.65rem"
              fontWeight="700"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="rgba(198, 198, 205, 0.5)"
              border="1px solid rgba(255, 255, 255, 0.08)"
              bg="rgba(255, 255, 255, 0.03)"
              transition="all 0.2s ease"
              _hover={{ color: "rgba(255, 255, 255, 0.9)", borderColor: "rgba(255, 255, 255, 0.2)", bg: "rgba(255, 255, 255, 0.07)" }}
            >
              V1
            </Flex>
          </Link>
          <LanguageSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default function V2Navbar() {
  return (
    <Box as="header" position="fixed" top={0} left={0} right={0} zIndex={100} display="flex" justifyContent="center" pointerEvents="none">
      <Box display={{ base: "none", md: "flex" }} flex={1} justifyContent="center">
        <V2DesktopNavbar />
      </Box>
      <Box display={{ base: "flex", md: "none" }} flex={1} justifyContent="center">
        <V2MobileNavbar />
      </Box>
    </Box>
  );
}
