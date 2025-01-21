export interface NavItem {
    label: string;
    href: string;
    children?: Array<NavItem>; // Optional for nested menus
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Learn Design",
      href: "/learn-design",
    },
    {
      label: "Hire Designers",
      href: "/hire-designers",
    },
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "Our Team", href: "/about/team" },
        { label: "Our Mission", href: "/about/mission" },
      ],
    },
  ];