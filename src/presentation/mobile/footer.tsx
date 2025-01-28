import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import Logo from "@components/Glogo";

export default function FooterMobile() {
  const bg = useColorModeValue("background_light", "background_dark");

  return (
    <Box bg={bg}>
      <Container
        as={Stack}
        p={5}
        direction="column"
      >
        <Flex align="center" justifyContent="center">
          <Logo width={50} height={50} />
        </Flex>
        <Box
          borderTopWidth={3}
          borderStyle="solid"
          borderColor={useColorModeValue("background_dark", "background_light")}
          py={4}
        >
          <Flex align="center" justify="center" w="70vw" mx="auto">
            <Text fontSize="sm">
              © 2025 Bruno Guimarães da Silva. All rights reserved.
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
