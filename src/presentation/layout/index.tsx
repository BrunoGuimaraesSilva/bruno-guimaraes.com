import { Box, Flex } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
import { LayoutProps } from "src/interfaces";
import { useLoading } from "@presentation/contexts/loadingContext";
import i18n from "@i18n";
import { useEffect } from "react";

const Layout = ({ children }: LayoutProps) => {
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(i18n.isInitialized);
  }, [i18n.isInitialized]);

  return isLoading ? (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" mt={3}>
        {children}
      </Box>
      <Footer />
    </Flex>
  ) : ("");
};

export default Layout;
