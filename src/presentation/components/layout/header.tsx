import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  ColorModeButton,
  useColorModeValue,
} from "src/presentation/ui/color-mode";

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          wordSpacing={6}
        >
          <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"plain"}>
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
          <ColorModeButton />
        </Stack>
      </Flex>
    </Box>
  );
}
