// src/presentation/components/MobileNav.tsx
import { ColorModeButton, useColorModeValue } from "src/presentation/ui/color-mode";
import { NAV_ITEMS, NavItem } from "src/domain/constant/navItems";
import { Stack } from "@chakra-ui/react";
import GLink from "@components/GLink";
import { t } from "i18next";

const MobileNav = () => {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      h="100%"
      p={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <ColorModeButton/>
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <GLink
      textAlign="center"
      justifyContent="center"
      m={1}
      fontSize={22}
      fontWeight={600}
      href={href}
      h="30%"
      w="100%"
    >
      {t(label)}
    </GLink>
  );
};

export default MobileNav;
