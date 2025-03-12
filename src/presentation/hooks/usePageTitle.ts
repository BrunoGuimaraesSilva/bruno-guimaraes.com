import { t } from "i18next";
import { useRouter } from "next/router";

export const usePageTitle = () => {
  const { pathname } = useRouter();
  const routeKey = pathname.split("/").pop() || "home";
  const title = t(`button:route:${routeKey}`, { defaultValue: "Home" });

  return title;
};
