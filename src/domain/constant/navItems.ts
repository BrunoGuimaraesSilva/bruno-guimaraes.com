import { t } from "i18next";

export interface NavItem {
    label: string;
    href: string;
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: t('button:about'),
      href: "/about",
    },
    {
      label: t('button:contact'),
      href: "/contact",
    },
    {
      label: t('button:projects'),      
      href: "/projects",
    },
    {
      label: t('button:recipes'),      
      href: "/recipes",
    },
    {
      label: t('button:resume'),      
      href: "/resume",
    },
  ];