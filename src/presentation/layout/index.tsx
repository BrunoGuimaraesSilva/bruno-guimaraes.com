import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Box>
      <Header />
      <Box as="main" mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
