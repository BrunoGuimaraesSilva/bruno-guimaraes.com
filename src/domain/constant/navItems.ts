export interface NavItem {
    label: string;
    href: string;
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Recipes",
      href: "/recipes",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ];