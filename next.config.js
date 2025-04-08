/** @type {import('next').NextConfig} */
module.exports = {
  useFileSystemPublicRoutes: true,
  reactStrictMode: false,
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
  },
  experimental: {
    externalDir: false,
    optimizePackageImports: ["@chakra-ui/react"],
  },
}