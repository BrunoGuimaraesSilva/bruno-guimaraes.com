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
          content="Portfolio of Bruno Guimarães – Full-Stack Developer specialized in PHP, TypeScript, and a passionate Go learner."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bruno-guimaraes.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content={`Bruno Guimarães`} />
        <meta
          property="og:description"
          content="Full-Stack Developer with expertise in TypeScript, PHP and a growing love for Go. Explore my portfolio and projects."
        />
        <meta
          property="og:image"
          content="https://homolog.bruno-guimaraes.com/assets/preview.png"
        />
        <meta property="og:url" content="https://bruno-guimaraes.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Bruno Guimarães`} />
        <meta
          name="twitter:description"
          content="Explore the work of Bruno Guimarães – Full-Stack Developer focused on TypeScript, PHP, and learning Go."
        />
        <meta
          name="twitter:image"
          content="https://homolog.bruno-guimaraes.com/assets/preview.png"
        />
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
