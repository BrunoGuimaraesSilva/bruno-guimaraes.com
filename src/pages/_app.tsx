import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Layout from "src/presentation/layout";
import { system } from "src/presentation/ui/theme";
import { appWithTranslation } from "next-i18next";
import "../infra/i18n/i18n";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
