import {
  Box,
  Collapsible,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useColorModeValue } from "src/presentation/ui/color-mode";
import { NAV_ITEMS, NavItem } from "src/constant/navItems";

export const MobileHeader = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { open, onToggle } = useDisclosure();
  return (
    <Stack wordSpacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            transition={"all .25s ease-in-out"}
            transform={open ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>{" "}
      <Collapsible.Root
        in={open}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapsible.Root>
    </Stack>
  );
};
