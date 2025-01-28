import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

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
      <Footer/>
    </Box>
  );
};

export default Layout;
