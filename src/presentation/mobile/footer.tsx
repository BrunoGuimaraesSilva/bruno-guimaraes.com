import { Container, Flex, Text } from "@chakra-ui/react";
import Logo from "@components/Glogo";
import GSeparator from "@components/GSeparator";

export default function FooterMobile() {

  return (
      <Container
        as={"footer"}
        p={5}
        direction="column"
      >
        <Flex align="center" justifyContent="center">
          <Logo width={50} height={50} />
        </Flex>
        <GSeparator />

          <Flex align="center" justify="center" w="70vw" mx="auto">
            <Text fontSize="sm">
              © 2025 Bruno Guimarães da Silva. All rights reserved.
            </Text>
          </Flex>
      </Container>
  );
}
