const withImages = require("next-images");

module.exports = {};

module.exports = withImages({
  basePath: "/",
  assetPrefix: "/",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/main": { page: "/main" },
      "/statistics": { page: "/statistics" },
      "/rank": { page: "/rank" },
    };
  },
  webpack(config, options) {
    return config;
  },
});
