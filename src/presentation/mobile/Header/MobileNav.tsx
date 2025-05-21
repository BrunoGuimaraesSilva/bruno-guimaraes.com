// src/presentation/components/MobileNav.tsx
import { ColorModeButton } from "src/presentation/ui/color-mode";
import { NAV_ITEMS, NavItem } from "src/domain/constant/navItems";
import { Stack } from "@chakra-ui/react";
import GLink from "@components/GLink";
import i18n from "@i18n";

const MobileNav = ({ handleNavItemClick }: { handleNavItemClick: (label: string) => void }) => {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      h="100%"
      p={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
          handleClick={handleNavItemClick}
        />
      ))}
      <ColorModeButton />
    </Stack>
  );
};

const MobileNavItem = ({ label, href, handleClick }: NavItem & { handleClick: (label: string) => void }) => {
  const { t } = i18n;
  const handleItemClick = () => {
    handleClick(label);
  };

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
      onClick={handleItemClick}
    >
      {t(label)}
    </GLink>
  );
};

export default MobileNav;
