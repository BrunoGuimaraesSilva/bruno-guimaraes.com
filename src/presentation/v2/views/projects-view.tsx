import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@v2/components/project-card";
import FeaturedProject from "@v2/components/featured-project";
import ProjectModal, { type ProjectDetails } from "@v2/components/project-modal";
import { V2_COLORS } from "@infra/theme/v2-glass";
import i18n from "@i18n";

const MAX_CONTENT_WIDTH = "7xl";

interface ProjectMenuItem {
  title: string;
  href: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectsView() {
  const { t } = i18n;
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const rawMenu = t("projects:menu", { returnObjects: true });
  const rawProjects = t("projects:projects", { returnObjects: true });

  const projectMenu: ProjectMenuItem[] = Array.isArray(rawMenu) ? rawMenu : [];
  const projectsMap: Record<string, ProjectDetails> =
    rawProjects &&
    typeof rawProjects === "object" &&
    !Array.isArray(rawProjects)
      ? (rawProjects as Record<string, ProjectDetails>)
      : {};

  const featured = projectMenu[0];
  const gridProjects = projectMenu.slice(1);
  const featuredDetails = featured ? projectsMap[featured.href] : undefined;

  if (!featured) return null;

  return (
    <>
      <Box maxW={MAX_CONTENT_WIDTH} mx="auto" px={8}>
        {/* ── Header — centred ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center" }}
        >
          <Text
            fontFamily="Inter, sans-serif"
            fontSize="10px"
            letterSpacing="0.2em"
            fontWeight="500"
            textTransform="uppercase"
            color={V2_COLORS.tertiary}
            mb={6}
            suppressHydrationWarning
          >
            {String(t("projects:title"))}
          </Text>

          <Box
            fontFamily="Manrope, sans-serif"
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
            color={V2_COLORS.onSurface}
            mb={4}
          >
            <Box as="span" display="block" suppressHydrationWarning>
              {String(t("projects:headline1"))}
            </Box>
            <Box as="span" display="block" color={V2_COLORS.primary} suppressHydrationWarning>
              {String(t("projects:headline2"))}
            </Box>
          </Box>

          <Text
            fontFamily="Inter, sans-serif"
            fontSize={{ base: "md", md: "lg" }}
            color={V2_COLORS.onSurfaceVariant}
            lineHeight="relaxed"
            maxW="2xl"
            mx="auto"
            mb="5rem"
            suppressHydrationWarning
          >
            {String(t("about:skills.description"))}
          </Text>
        </motion.div>

        {/* ── Featured project ── */}
        <Box mb="6rem">
          <FeaturedProject
            title={featured.title}
            description={featured.description}
            technologies={featured.technologies}
            impact={featuredDetails?.projectImpactDescription ?? ""}
            onClick={() =>
              setSelectedProject({
                ...featuredDetails,
                aboutTitle: featuredDetails?.aboutTitle || featured.title,
                projectDescription:
                  featuredDetails?.projectDescription || featured.description,
                image: featuredDetails?.image || featured.image,
              })
            }
          />
        </Box>

        {/* ── Section divider — centred ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        >
          <Flex align="center" justify="center" gap={4} mb={12}>
            <Box
              flex="1"
              height="1px"
              style={{ background: `${V2_COLORS.outlineVariant}33` }}
            />
            <Text
              fontFamily="Manrope, sans-serif"
              fontSize="2xl"
              fontWeight="700"
              color={V2_COLORS.onSurface}
              flexShrink={0}
              suppressHydrationWarning
            >
              {String(t("projects:title"))}
            </Text>
            <Box
              flex="1"
              height="1px"
              style={{ background: `${V2_COLORS.outlineVariant}33` }}
            />
          </Flex>
        </motion.div>

        {/* ── Project grid — 2 columns, left/right scroll animations ── */}
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 6 }}
          mb="6rem"
        >
          {gridProjects.map((project, index) => {
            const isLeftColumn = index % 2 === 0;
            return (
              <motion.div
                key={project.href}
                initial={{ opacity: 0, x: isLeftColumn ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: Math.floor(index / 2) * 0.12,
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  index={index}
                  onClick={() => {
                    const details = projectsMap[project.href];
                    setSelectedProject({
                      ...details,
                      aboutTitle: details?.aboutTitle || project.title,
                      projectDescription:
                        details?.projectDescription || project.description,
                      image: details?.image || project.image,
                    });
                  }}
                />
              </motion.div>
            );
          })}
        </Box>
      </Box>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
