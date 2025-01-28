import { useColorModeValue } from "src/presentation/ui/color-mode";
import { LuMenu, LuCircleX } from "react-icons/lu";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { Collapsible } from "@chakra-ui/react";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Logo from "@components/Glogo";

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <Box>
      <Collapsible.Root open={menuOpen} unmountOnExit>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg={useColorModeValue("background_light", "background_dark")}
        >
          <Flex align="center" justify="space-between" w="100%">
            <Logo width={50} height={50} />
            <Collapsible.Trigger onClick={handleToggleMenu}>
              <Icon fontSize="2xl">
                {menuOpen ? <LuCircleX /> : <LuMenu />}
              </Icon>
            </Collapsible.Trigger>
          </Flex>
        </Flex>

        <Collapsible.Content height="80vh">
          <MobileNav />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}
