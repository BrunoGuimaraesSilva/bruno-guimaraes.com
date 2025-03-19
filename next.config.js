/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
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