import Link from "next/link";
import { LanguageSwitcher } from "@shared/ui/LanguageSwitcher";
import Logo from "@v1/components/Glogo";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import { useV2Navbar } from "@shared/hooks/useV2Navbar";
import { liquidGlassStyle } from "@infra/theme/v2-glass";

export default function V2MobileNavbar() {
  const { t, isOpen, toggleMobileMenu, isActive, navItems } = useV2Navbar();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mt={5}
      w="100%"
      position="relative"
    >
      <Flex
        as="nav"
        aria-label="Mobile navigation"
        justify="space-between"
        align="center"
        px={6}
        h="64px"
        w="300px"
        borderRadius="full"
        position="relative"
        css={{
          ...liquidGlassStyle,
          width: "auto",
          pointerEvents: "all",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "full",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(1px)",
            boxShadow:
              "inset -10px -8px 0px -11px rgba(255, 255, 255, 0.8), inset 0px -9px 0px -8px rgba(255, 255, 255, 0.6)",
            opacity: 0.5,
            zIndex: 0,
            filter: "blur(1px) brightness(115%)",
            pointerEvents: "none",
          },
        }}
      >
        <Flex
          position="relative"
          zIndex={1}
          align="center"
          justify="center"
          px={1}
          h="100%"
        >
          <Link href="/v2" aria-label="Home">
            <Logo width={42} height={42} />
          </Link>
        </Flex>

        <Flex
          as="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          bg="transparent"
          border="none"
          color="rgba(255, 255, 255, 0.8)"
          px={1}
          cursor="pointer"
          align="center"
          justify="center"
          position="relative"
          zIndex={1}
          h="100%"
          transition="color 0.2s"
          _hover={{ color: "white" }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </Flex>
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "calc(64px + 1.25rem + 0.5rem)",
              left: 0,
              right: 0,
              width: "min(280px, calc(100vw - 2rem))",
              margin: "0 auto",
              borderRadius: "16px",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              pointerEvents: "all",
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderTopColor: "rgba(255, 255, 255, 0.3)",
              borderBottomColor: "rgba(255, 255, 255, 0.05)",
              boxShadow:
                "0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.06)",
              zIndex: 99,
            }}
          >
            {navItems.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  style={{ textDecoration: "none" }}
                >
                  <Flex
                    position="relative"
                    zIndex={1}
                    px={4}
                    py={3}
                    borderRadius="12px"
                    color={active ? "#89ceff" : "rgba(255, 255, 255, 0.7)"}
                    bg={active ? "rgba(137, 206, 255, 0.1)" : "transparent"}
                    fontFamily='"Manrope", sans-serif'
                    fontSize="0.8rem"
                    fontWeight="700"
                    letterSpacing="0.05em"
                    align="center"
                    transition="all 0.2s ease"
                    _hover={
                      !active
                        ? { bg: "rgba(255, 255, 255, 0.05)", color: "white" }
                        : {}
                    }
                  >
                    <Box as="span" suppressHydrationWarning>
                      {t(label)}
                    </Box>
                  </Flex>
                </Link>
              );
            })}

            <Box
              position="relative"
              zIndex={1}
              h="1px"
              bg="rgba(255, 255, 255, 0.1)"
              my={2}
            />

            <Flex
              position="relative"
              zIndex={1}
              align="center"
              justify="space-between"
              p={2}
            >
              <Link href="/v1" style={{ textDecoration: "none" }}>
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
                  _hover={{
                    color: "rgba(255, 255, 255, 0.9)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    bg: "rgba(255, 255, 255, 0.07)",
                  }}
                >
                  V1
                </Flex>
              </Link>
              <LanguageSwitcher />
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
}
