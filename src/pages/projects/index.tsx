import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { LIGHT, useColorMode } from "@presentation/ui/color-mode";
import ResponsiveContainer from "@presentation/wrappers/ResponsiveContainer";
import { t } from "i18next";
import Link from "next/link";

interface MenuItem {
  title: string;
  description: string;
  image: string;
  href: string;
  technologies: Array<string>;
}

const menuArray = t("projects:menu", { returnObjects: true }) as MenuItem[];

export default function ProjectsPage() {
  const { colorMode } = useColorMode();

  return (
    <ResponsiveContainer containerProps={{ id: "ProjectsSection", style: { paddingTop: 50 } }}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        {t("projects:title")}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {menuArray.map((project, key) => (
          <Link href={`/projects/${project.href}`}>
            <Box
              h={"100%"}
              key={key}
              p={4}
              m={{ base: 2, md: 4 }}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                boxShadow:
                  colorMode === LIGHT
                    ? "2xl"
                    : "0px 4px 6px rgba(255, 255, 255, 0.5)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
                maxH={300}
                mb={4}
              />
              <VStack align="start">
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Text fontSize="sm">{project.description}</Text>
                <HStack>
                  {project.technologies.map((tech) => (
                    <Badge size="lg">{tech}</Badge>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </ResponsiveContainer>
  );
}
