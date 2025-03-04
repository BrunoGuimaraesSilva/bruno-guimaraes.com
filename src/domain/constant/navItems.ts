export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "button:route:about",
    href: "/about",
  },
  {
    label: "button:route:contact",
    href: "/contact",
  },
  {
    label: "button:route:projects",
    href: "/projects",
  },
  {
    label: "button:route:timeline",
    href: "/timeline",
  },
  {
    label: "button:route:resume",
    href: "/resume",
  },
];
