import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Layout from "@v1/layout";
import { system } from "@shared/ui/theme";
import { appWithTranslation } from "next-i18next";
import "../infrastructure/i18n/i18n";
import { MailProvider } from "@shared/contexts/MailContext";
import { usePageTitle } from "@shared/hooks/usePageTitle";
import { LanguageProvider, useLanguage } from "@shared/contexts/LanguageContext";
import { LoadingProvider } from "@shared/contexts/loadingContext";
import DefaultSeo from "@shared/ui/default-seo";
import AnalyticsScripts from "@shared/ui/analytics-scripts";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface PageRendererProps {
  Component: NextPageWithLayout;
  pageProps: AppProps["pageProps"];
}

function PageRenderer({ Component, pageProps }: PageRendererProps) {
  const { language } = useLanguage();
  return (
    <div key={language}>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </div>
  );
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const title = usePageTitle();

  return (
    <>
      <AnalyticsScripts />
      <DefaultSeo title={title} />

      <ChakraProvider value={system}>
        <ThemeProvider
          enableColorScheme
          attribute="class"
          disableTransitionOnChange
        >
          <MailProvider>
            <LanguageProvider>
              <LoadingProvider>
                <PageRenderer Component={Component} pageProps={pageProps} />
              </LoadingProvider>
            </LanguageProvider>
          </MailProvider>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(App);
