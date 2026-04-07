import { useEffect } from "react";
import { Box, Flex, Text, IconButton, Portal } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { V2_COLORS, liquidGlassStyle } from "@infra/theme/v2-glass";

export interface ProjectDetails {
  aboutTitle?: string;
  projectDescription?: string;
  responsibilitiesTitle?: string;
  responsibilitiesDescription?: string;
  projectImpactTitle?: string;
  projectImpactDescription?: string;
  image?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={9999}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={{ base: 4, md: 8 }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(11, 19, 38, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* Modal Content — Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                maxHeight: "90vh",
                overflowY: "auto",
                borderRadius: "24px",
                margin: "auto",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Box css={{ ...liquidGlassStyle }}>
              <IconButton
                aria-label="Close modal"
                bg="transparent"
                _hover={{ bg: "whiteAlpha.200" }}
                color={V2_COLORS.onSurface}
                borderRadius="full"
                position="absolute"
                top={4}
                right={4}
                zIndex={10}
                onClick={onClose}
              >
                <FiX size={24} />
              </IconButton>

              <Box p={{ base: 6, md: 10 }} position="relative" zIndex={1}>
                <Text
                  fontFamily="Manrope, sans-serif"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="800"
                  color={V2_COLORS.primary}
                  mb={6}
                >
                  {project.aboutTitle}
                </Text>

                <Flex direction="column" gap={6}>
                  <Box>
                    <Text
                      fontFamily="Manrope, sans-serif"
                      fontSize="lg"
                      fontWeight="700"
                      color={V2_COLORS.onSurface}
                      mb={2}
                    >
                      Overview
                    </Text>
                    <Text
                      fontFamily="Inter, sans-serif"
                      color={V2_COLORS.onSurfaceVariant}
                      lineHeight="relaxed"
                    >
                      {project.projectDescription}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily="Manrope, sans-serif"
                      fontSize="lg"
                      fontWeight="700"
                      color={V2_COLORS.onSurface}
                      mb={2}
                    >
                      {project.responsibilitiesTitle}
                    </Text>
                    <Text
                      fontFamily="Inter, sans-serif"
                      color={V2_COLORS.onSurfaceVariant}
                      lineHeight="relaxed"
                    >
                      {project.responsibilitiesDescription}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily="Manrope, sans-serif"
                      fontSize="lg"
                      fontWeight="700"
                      color={V2_COLORS.onSurface}
                      mb={2}
                    >
                      {project.projectImpactTitle}
                    </Text>
                    <Text
                      fontFamily="Inter, sans-serif"
                      color={V2_COLORS.onSurfaceVariant}
                      lineHeight="relaxed"
                    >
                      {project.projectImpactDescription}
                    </Text>
                  </Box>
                </Flex>
              </Box>
              </Box>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </Portal>
  );
}
