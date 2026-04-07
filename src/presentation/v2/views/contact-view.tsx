import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";
import ContactForm from "@v2/components/contact-form";
import { type IconType } from "react-icons";

const MAX_CONTENT_WIDTH = "7xl";

interface SocialLink {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    icon: FiMail,
    label: "E-mail",
    value: "bruno@bruno-guimaraes.com",
    href: "mailto:bruno@bruno-guimaraes.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bruno-webdev",
    href: "https://www.linkedin.com/in/bruno-webdev/",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/BrunoGuimaraesSilva",
    href: "https://github.com/BrunoGuimaraesSilva",
  },
] as const;

export default function ContactView() {
  const { t } = i18n;

  return (
    <Box maxW={MAX_CONTENT_WIDTH} mx="auto" px={8}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Text
          fontFamily='"Inter", sans-serif'
          fontSize="10px"
          letterSpacing="0.2em"
          fontWeight="500"
          textTransform="uppercase"
          color={V2_COLORS.tertiary}
          mb={6}
          suppressHydrationWarning
        >
          {String(t("contact:title"))}
        </Text>

        <Box
          fontFamily='"Manrope", sans-serif'
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="800"
          letterSpacing="-0.03em"
          lineHeight="1.1"
          mb={4}
        >
          <Box as="span" display="block" color={V2_COLORS.onSurface}>
            {String(t("contact:v2.heading1"))}
          </Box>
          <Box as="span" display="block" color={V2_COLORS.primary}>
            {String(t("contact:v2.heading2"))}
          </Box>
        </Box>

        <Text
          fontFamily='"Inter", sans-serif'
          fontSize={{ base: "md", md: "lg" }}
          color={V2_COLORS.onSurfaceVariant}
          lineHeight="1.8"
          maxW="2xl"
          mb="5rem"
        >
          {String(t("contact:v2.subtitle"))}
        </Text>
      </motion.div>

      {/* Main Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
        gap={{ base: 10, lg: 16 }}
        mb="6rem"
        alignItems="start"
      >
        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Flex direction="column" gap={4}>
            {SOCIAL_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none" }}
              >
                <Box
                  p={4}
                  borderRadius="1rem"
                  bg="rgba(255, 255, 255, 0.02)"
                  border="1px solid rgba(255, 255, 255, 0.05)"
                  transition="all 0.3s ease"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.04)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)"
                  }}
                >
                <Flex align="center" gap={4}>
                  <Box
                    p={3}
                    borderRadius="0.5rem"
                    style={{
                      background: `${V2_COLORS.primary}15`,
                      color: V2_COLORS.primary,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </Box>
                  <Box>
                    <Text
                      fontFamily='"Inter", sans-serif'
                      fontSize="xs"
                      fontWeight="600"
                      letterSpacing="0.08em"
                      textTransform="uppercase"
                      color={V2_COLORS.tertiary}
                      mb={0.5}
                    >
                      {label}
                    </Text>
                    <Text
                      fontFamily='"Inter", sans-serif'
                      fontSize="sm"
                      color={V2_COLORS.onSurface}
                      fontWeight="500"
                    >
                      {value}
                    </Text>
                  </Box>
                </Flex>
                </Box>
              </a>
            ))}

            {/* Availability badge */}
            <Box
              mt={4}
              p={5}
              borderRadius="0.5rem"
              style={{
                background: `${V2_COLORS.tertiary}10`,
                border: `1px solid ${V2_COLORS.tertiary}30`,
              }}
            >
              <Flex align="center" gap={3}>
                <Box
                  w={2}
                  h={2}
                  borderRadius="full"
                  flexShrink={0}
                  style={{ background: V2_COLORS.tertiary }}
                  boxShadow={`0 0 8px ${V2_COLORS.tertiary}`}
                  animation="pulse 2s infinite ease-in-out"
                  css={{
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 1 },
                      "50%": { opacity: 0.4 }
                    }
                  }}
                />
                <Text
                  fontFamily='"Inter", sans-serif'
                  fontSize="sm"
                  color={V2_COLORS.tertiary}
                  fontWeight="600"
                >
                  {String(t("contact:v2.availability"))}
                </Text>
              </Flex>
              <Text
                fontFamily='"Inter", sans-serif'
                fontSize="xs"
                color={V2_COLORS.onSurfaceVariant}
                mt={2}
                lineHeight="relaxed"
              >
                {String(t("contact:v2.location"))}
              </Text>
            </Box>
          </Flex>
        </motion.div>

        {/* Right — Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </Box>
    </Box>
  );
}
