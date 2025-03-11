/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en-us", "pt-br"],
    defaultLocale: "en-us",
  },
  experimental: {
    externalDir: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
}