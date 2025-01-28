import useIsMobile from "@hooks/useIsMobile";
import HeaderDesktop from "src/presentation/desktop/header";
import HeaderMobile from "src/presentation/mobile/Header";

export default function Header() {
  const isMobile = useIsMobile();

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
