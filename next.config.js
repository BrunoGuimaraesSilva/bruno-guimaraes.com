/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
}