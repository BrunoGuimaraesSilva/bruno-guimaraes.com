/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
  },
  experimental: {
    externalDir: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
}