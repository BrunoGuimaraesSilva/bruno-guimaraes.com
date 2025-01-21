import React from "react";
import { Box } from "@chakra-ui/react";
import { DesktopHeader } from "../desktop/Header";
import { MobileHeader } from "../mobile/Header";
import useIsMobile from "src/presentation/hooks/useIsMobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <Box>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Box as="main" mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
