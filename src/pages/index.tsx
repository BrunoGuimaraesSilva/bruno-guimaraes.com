import { Box, Heading, Text } from "@chakra-ui/react";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";

const About: React.FC = () => {
  return (
    <ResponsiveContainer containerProps={{ style: { height: "65vh" } }}>
      <Box 
        textAlign="center" 
        py={20}
      >
        <Heading 
          textStyle="4xl"
          mb={4}
        >
          Bruno Guimarães
        </Heading>
        <Text 
          textStyle="sm"
          maxW="600px"
          mx="auto"
        >
          Software Engineer based in Dublin, passionate about creating efficient and 
          user-friendly applications. Specialized in React, TypeScript, and Next.js.
        </Text>
      </Box>
    </ResponsiveContainer>
  );
};

export default About;
