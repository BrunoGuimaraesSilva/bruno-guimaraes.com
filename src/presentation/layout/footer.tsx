import useIsMobile from "@hooks/useIsMobile";
import FooterDesktop from "../desktop/footer";
import FooterMobile from "../mobile/footer";

export default function Footer() {
  const isMobile = useIsMobile();

  return isMobile ? <FooterMobile/> : <FooterDesktop />;
}
