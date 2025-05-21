import { useColorModeValue } from "src/presentation/ui/color-mode";
import { LuMenu, LuCircleX } from "react-icons/lu";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { Collapsible } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./MobileNav";
import Logo from "@components/Glogo";

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const menuRef = useRef<HTMLDivElement>(null);
  const bgColor = useColorModeValue("background_dark", "background_light");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Box ref={menuRef}>
      <Collapsible.Root open={menuOpen} unmountOnExit>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
        >
          <Flex align="center" justify="space-between" w="100%">
            <Logo width={50} height={50} />
            <Collapsible.Trigger>
              <Button
                as="div"
                bgColor={"transparent"}
                onClick={handleToggleMenu}
                style={{ cursor: "pointer" }}
              >
                <Icon
                  as={menuOpen ? LuCircleX : LuMenu}
                  color={bgColor}
                  fontSize="2xl"
                />
              </Button>
            </Collapsible.Trigger>
          </Flex>
        </Flex>

        <Collapsible.Content>
          <Box height="80vh">
            <MobileNav handleNavItemClick={handleToggleMenu} />
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}
