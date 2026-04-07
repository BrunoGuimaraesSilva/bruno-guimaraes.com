import useIsMobile from "@shared/hooks/useIsMobile";
import FooterDesktop from "@v1/desktop/footer";
import FooterMobile from "@v1/mobile/footer";

export default function Footer() {
  const isMobile = useIsMobile();

  return isMobile ? <FooterMobile/> : <FooterDesktop />;
}
