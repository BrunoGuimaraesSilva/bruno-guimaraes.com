import React from "react";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import GImage from "./GImage";
import GLink from "./GLink";

interface GShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
}

const GShowcase: React.FC<GShowcaseProps> = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}) => {
  return (
    <Box
      bg="gray.50"
      p={8}
      borderRadius="lg"
      boxShadow="md"
      maxW="1200px"
      mx="auto"
      textAlign="center"
    >
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Box flex="1" mb={{ base: 6, md: 0 }}>
          <GImage src={imageSrc} alt={title} />
        </Box>

        <Box flex="1" pl={{ md: 8 }}>
          <Heading as="h1" size="2xl" mb={4} color="primary_dark.900">
            {title}
          </Heading>
          <Text fontSize="lg" mb={6} color="primary_dark.900">
            {description}
          </Text>
          <GLink as={Link} href={buttonLink} color={"primary_dark.900"} hoverColor={"primary_dark.900"}>
            {buttonText}
          </GLink>
        </Box>
      </Flex>
    </Box>
  );
};

// Default Props
GShowcase.defaultProps = {
  title: "Default Title",
  description: "This is a default description for the showcase component.",
  imageSrc: "https://via.placeholder.com/400",
  buttonText: "Learn More",
  buttonLink: "#",
};

export default GShowcase;
