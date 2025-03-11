/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
  },
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
}