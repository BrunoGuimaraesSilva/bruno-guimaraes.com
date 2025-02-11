import { Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
import { GLayoutProps } from "src/interfaces";
import { useTheme } from 'next-themes'

const Layout:GLayoutProps = ({ children }) => {
  const { resolvedTheme } = useTheme()
  return (
    <Box bg={resolvedTheme =="dark" ? "background_dark" : "background_light"}>
      <Header />
      <Box as="main" mt={3}>
        {children}
      </Box>
      <Footer/>
    </Box>
  );
};

export default Layout;
