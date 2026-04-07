export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "button:route:about",
    href: "/v1/about",
  },
  {
    label: "button:route:projects",
    href: "/v1/projects",
  },
  {
    label: "button:route:resume",
    href: "/v1/resume",
  },
  {
    label: "button:route:contact",
    href: "/v1/contact",
  },
];

export const V2_NAV_ITEMS: Array<NavItem> = [
  {
    label: "button:route:about",
    href: "/v2/about",
  },
  {
    label: "button:route:projects",
    href: "/v2/projects",
  },
  {
    label: "button:route:resume",
    href: "/v2/resume",
  },
  {
    label: "button:route:contact",
    href: "/v2/contact",
  },
];
