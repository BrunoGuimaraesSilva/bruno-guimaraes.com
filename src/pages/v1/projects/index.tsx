import { Box, SimpleGrid, Heading, Text, Badge, Flex } from "@chakra-ui/react";
import ResponsiveContainer from "@shared/wrappers/ResponsiveContainer";
import i18n from "@i18n";
import { useState } from "react";

interface ProjectMenuItem {
  title: string;
  href: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectsPage = () => {
  const { t } = i18n;
  const [selected, setSelected] = useState<string | null>(null);

  const rawMenu = t("projects:menu", { returnObjects: true });
  const projectMenu: ProjectMenuItem[] = Array.isArray(rawMenu) ? rawMenu : [];

  return (
    <ResponsiveContainer containerProps={{ id: "ProjectsSection" }}>
      <Box py={10}>
        <Heading size="2xl" mb={2}>{String(t("projects:title"))}</Heading>
        <Text mb={10} color="gray.500">{String(t("projects:headline1"))} {String(t("projects:headline2"))}</Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {projectMenu.map((project) => (
            <Box
              key={project.href}
              p={6}
              borderRadius="lg"
              border="1px solid"
              borderColor={selected === project.href ? "blue.400" : "gray.200"}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ borderColor: "blue.400", shadow: "md" }}
              onClick={() => setSelected(selected === project.href ? null : project.href)}
            >
              <Heading size="sm" mb={2}>{project.title}</Heading>
              <Text fontSize="sm" mb={4} color="gray.500">{project.description}</Text>
              <Flex wrap="wrap" gap={2}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} colorScheme="blue" fontSize="xs">{tech}</Badge>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ResponsiveContainer>
  );
};

export default ProjectsPage;
