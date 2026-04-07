import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// We import exactly what the user was using previously for translations:
import i18n from "@i18n";
import { V2_NAV_ITEMS } from "@domain/constant/navItems";
import { useLanguage } from "@shared/contexts/LanguageContext";

export function useV2Navbar() {
  const { t } = i18n;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  // Subscribing to language context ensures reactivity when the language is changed.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { language: _language } = useLanguage();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);
  const closeMobileMenu = () => setIsOpen(false);

  const isActive = (href: string) => router.pathname === href;

  return {
    t,
    router,
    isOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isActive,
    navItems: V2_NAV_ITEMS,
  };
}
