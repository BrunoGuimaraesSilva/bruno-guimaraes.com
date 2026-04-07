import { Box } from "@chakra-ui/react";
import useIsMobile from "@shared/hooks/useIsMobile";
import HeaderDesktop from "@v1/desktop/header";
import HeaderMobile from "@v1/mobile/Header";

export default function Header() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeaderMobile />
  ) : (
    <Box mb={50}>
      <HeaderDesktop />
    </Box>
  );
}
