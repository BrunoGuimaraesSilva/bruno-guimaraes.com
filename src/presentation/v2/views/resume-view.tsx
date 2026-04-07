import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { V2_COLORS, liquidGlassStyle, cardBaseStyle } from "@infra/theme/v2-glass";
import { chakra } from "@chakra-ui/react";

const MAX_CONTENT_WIDTH = "7xl";
const RESUME_PDF = "/assets/Resume_new.pdf";

export default function ResumeView() {
  return (
    <Box maxW={MAX_CONTENT_WIDTH} mx="auto" px={8}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Text
          fontFamily="Inter, sans-serif"
          fontSize="10px"
          letterSpacing="0.2em"
          fontWeight="500"
          textTransform="uppercase"
          color={V2_COLORS.tertiary}
          mb={6}
        >
          Résumé
        </Text>

        <Flex
          align={{ base: "flex-start", md: "flex-end" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={6}
          mb="3rem"
        >
          <Box>
            <Box
              fontFamily="Manrope, sans-serif"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="800"
              letterSpacing="-0.03em"
              lineHeight="1.1"
              mb={3}
            >
              <Box as="span" display="block" color={V2_COLORS.onSurface}>
                Bruno Guimarães
              </Box>
              <Box as="span" display="block" color={V2_COLORS.primary}>
                da Silva
              </Box>
            </Box>
            <Text
              fontFamily="Inter, sans-serif"
              fontSize={{ base: "md", md: "lg" }}
              color={V2_COLORS.onSurfaceVariant}
              lineHeight="1.7"
              maxW="xl"
            >
              Senior Full-Stack Software Engineer · 6+ years · Brazil (Remote)
            </Text>
          </Box>

          {/* Action buttons */}
          <Flex gap={3} flexShrink={0}>
            <chakra.a
              href={RESUME_PDF}
              download="Resume_Bruno_Guimaraes.pdf"
              display="flex"
              alignItems="center"
              gap={2}
              px={6}
              py={3}
              bg={V2_COLORS.primary}
              color="#0f172a"
              fontFamily='"Manrope", sans-serif'
              fontSize="0.9rem"
              fontWeight="700"
              borderRadius="full"
              textDecoration="none"
              transition="all 0.2s ease"
              _hover={{ filter: "brightness(1.1)", transform: "translateY(-1px)", boxShadow: `0 4px 12px ${V2_COLORS.primary}4D` }}
            >
              <FiDownload size={16} />
              Download PDF
            </chakra.a>
            <chakra.a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              px={6}
              py={3}
              bg="transparent"
              border={`1px solid ${V2_COLORS.outlineVariant}`}
              color={V2_COLORS.onSurface}
              fontFamily='"Inter", sans-serif'
              fontSize="0.9rem"
              fontWeight="600"
              borderRadius="full"
              textDecoration="none"
              transition="all 0.2s ease"
              _hover={{ bg: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.4)", transform: "translateY(-1px)" }}
            >
              <FiExternalLink size={16} />
              Open
            </chakra.a>
          </Flex>
        </Flex>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Box
          mb="6rem"
          style={{ ...cardBaseStyle, ...liquidGlassStyle, overflow: "hidden" }}
        >
          {/* Toolbar strip */}
          <Flex
            align="center"
            justify="space-between"
            px={6}
            py={4}
            style={{
              borderBottom: `1px solid ${V2_COLORS.outlineVariant}33`,
            }}
          >
            <Flex align="center" gap={3}>
              <Box
                w={3}
                h={3}
                borderRadius="full"
                style={{ background: "#ff5f57" }}
              />
              <Box
                w={3}
                h={3}
                borderRadius="full"
                style={{ background: "#febc2e" }}
              />
              <Box
                w={3}
                h={3}
                borderRadius="full"
                style={{ background: "#28c840" }}
              />
            </Flex>
            <Text
              fontFamily="Inter, sans-serif"
              fontSize="xs"
              color={V2_COLORS.onSurfaceVariant}
              letterSpacing="0.05em"
            >
              Resume_Bruno_Guimaraes.pdf
            </Text>
            <Box w="52px" />
          </Flex>

          {/* PDF embed */}
          <Box w="100%" style={{ height: "calc(100vh - 260px)", minHeight: "600px" }}>
            <object
              data={RESUME_PDF}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              {/* Fallback for browsers that can't render PDFs inline */}
              <Flex
                direction="column"
                align="center"
                justify="center"
                height="100%"
                gap={4}
                py={16}
              >
                <Text
                  fontFamily="Inter, sans-serif"
                  fontSize="lg"
                  color={V2_COLORS.onSurfaceVariant}
                  textAlign="center"
                >
                  Your browser cannot display PDFs inline.
                </Text>
                <chakra.a
                  href={RESUME_PDF}
                  download="Resume_Bruno_Guimaraes.pdf"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  px={6}
                  py={3}
                  bg={V2_COLORS.primary}
                  color="#0f172a"
                  fontFamily='"Manrope", sans-serif'
                  fontSize="0.9rem"
                  fontWeight="700"
                  borderRadius="full"
                  textDecoration="none"
                  transition="all 0.2s ease"
                  _hover={{ filter: "brightness(1.1)", transform: "translateY(-1px)", boxShadow: `0 4px 12px ${V2_COLORS.primary}4D` }}
                >
                  <FiDownload size={16} />
                  Download PDF instead
                </chakra.a>
              </Flex>
            </object>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
