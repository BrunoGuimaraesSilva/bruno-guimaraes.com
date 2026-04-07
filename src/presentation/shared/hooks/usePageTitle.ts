import { useRouter } from "next/router";
import i18n, { t } from "i18next";

export const usePageTitle = () => {
  const { pathname } = useRouter();
  const routeKey = pathname.split("/").pop() || "home";

  if (!i18n.isInitialized) return "Loading...";

  const translated = t(`button:route.${routeKey}`, { defaultValue: "Home" });
  return Array.isArray(translated) ? "" : String(translated);
};
