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
import { t } from "i18next";
import Link from "next/link";

interface MenuItem {
  title: string;
  description: string;
  image: string;
  href:string;
  technologies: Array<string>;
}

const menuArray = t("projects:menu", { returnObjects: true }) as MenuItem[];

console.log(menuArray);
export default function ProjectsPage() {
  return (
    <Box maxW="6xl" mx="auto" py={10} px={6}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {menuArray.map((project, key) => (
          <Link href={`/projects/${project.href}`}>
            <Box key={key} p={4} borderRadius="lg" boxShadow="lg">
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
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
    </Box>
  );
}
