import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/dist/types/preset";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
