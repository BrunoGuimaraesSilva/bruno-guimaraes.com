import { Box, Flex, Avatar, Text, Button, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <Box maxW="600px" mx="auto" textAlign="center" p={6} boxShadow="lg" borderRadius="lg" bg="white">
      <Text fontSize="2xl" fontWeight="bold">Bruno Guimarães</Text>
      <Text fontSize="md" color="gray.600" mt={2}>
        Full-Stack Developer | Frontend Specialist
      </Text>
      <Text fontSize="sm" color="gray.500" mt={3}>
        Passionate about creating modern and user-friendly web applications. Experienced in React, Node.js, and UI/UX design.
      </Text>
    </Box>
  );
};

export default AboutSection;
