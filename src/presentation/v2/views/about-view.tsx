import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";
import AboutPhotoStrip from "@v2/components/about-photo-strip";
import AboutBio from "@v2/components/about-bio";
import AboutStats from "@v2/components/about-stats";
import AboutSkills from "@v2/components/about-skills";
import EducationSection from "@v2/components/education-section";

const MAX_CONTENT_WIDTH = "7xl";

export default function AboutView() {
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
          {String(t("button:route:about"))}
        </Text>

        <Box
          fontFamily='"Manrope", sans-serif'
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="800"
          letterSpacing="-0.03em"
          lineHeight="1.1"
          mb="5rem"
        >
          <Box as="span" display="block" color={V2_COLORS.onSurface}>
            {String(t("about:about_SE.title"))}
          </Box>
        </Box>
      </motion.div>
      <AboutPhotoStrip />
      <AboutBio />
      <AboutStats />
      <AboutSkills />
      <EducationSection />
    </Box>
  );
}
