import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Layout from "src/presentation/layout";
import { system } from "src/presentation/ui/theme";
import { appWithTranslation } from "next-i18next";
import "../infrastructure/i18n/i18n";
import { MailProvider } from "@presentation/contexts/MailContext";
import Head from "next/head";

import { usePageTitle } from "@hooks/usePageTitle";

function App({ Component, pageProps }: AppProps) {
  const title = usePageTitle();
  
  return (
    <>
      <Head>
        <title>{title} | Bruno Guimarães</title>
        <meta
          name="description"
          content="Portfolio of Bruno Guimarães - Full-Stack Developer specializing in Next.js and TypeScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider value={system}>
        <ThemeProvider
          enableColorScheme
          attribute="class"
          disableTransitionOnChange
        >
          <MailProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MailProvider>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(App);
