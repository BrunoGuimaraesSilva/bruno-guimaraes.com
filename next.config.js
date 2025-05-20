const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  reactStrictMode: false,
  experimental: {
    externalDir: false,
    optimizePackageImports: ["@chakra-ui/react"],
  },
};
