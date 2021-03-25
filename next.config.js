const withImages = require("next-images");

module.exports = withImages({
  basePath: process.env.BASE_URL || "",
  assetPrefix: process.env.BASE_URL || "",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/main": { page: "/main" },
      "/statistics": { page: "/statistics" },
      "/rank": { page: "/rank" },
    };
  },
  webpack(config) {
    return config;
  },
});
