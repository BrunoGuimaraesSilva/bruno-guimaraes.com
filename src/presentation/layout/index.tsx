import { Box, Flex } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
import { GLayoutProps } from "src/interfaces";

const Layout: GLayoutProps = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1"  mt={3}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
