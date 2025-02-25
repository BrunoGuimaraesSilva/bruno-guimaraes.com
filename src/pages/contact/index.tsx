import { Box, Heading, Text, VStack, Link, Icon } from "@chakra-ui/react";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <ResponsiveContainer containerProps={{ style: { height: "65vh" } }}>
      <Box 
        textAlign="center" 
        py={20}
      >
        <Heading 
          textStyle="4xl"
          mb={6}
        >
          Get in Touch
        </Heading>
        <VStack 
          wordSpacing={4} 
          maxW="400px" 
          mx="auto"
        >
          <Link 
            href="mailto:your.email@example.com" 
            display="flex" 
            alignItems="center"
          >
            <Icon as={FaEnvelope} mr={2} />
            <Text>your.email@example.com</Text>
          </Link>
          
          <Link 
            href="https://github.com/yourusername" 
            target="_blank"
            display="flex" 
            alignItems="center"
          >
            <Icon as={FaGithub} mr={2} />
            <Text>GitHub</Text>
          </Link>
          
          <Link 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            display="flex" 
            alignItems="center"
          >
            <Icon as={FaLinkedin} mr={2} />
            <Text>LinkedIn</Text>
          </Link>
        </VStack>
      </Box>
    </ResponsiveContainer>
  );
};

export default Contact;