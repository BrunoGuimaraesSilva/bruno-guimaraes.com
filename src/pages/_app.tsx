import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"
import { system } from "src/presentation/ui/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}