const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // Add aliases for commonly referenced directories
    config.resolve.alias["context"] = path.resolve(__dirname, "../context/");
    config.resolve.alias["lib"] = path.resolve(__dirname, "../lib/");
    config.resolve.alias["utility"] = path.resolve(__dirname, "../utility/");

    // Add aliases manually for Chakra due to https://github.com/storybookjs/storybook/issues/13114
    config.resolve.alias["@emotion/core"] = "@emotion/react";
    config.resolve.alias["emotion-theming"] = "@emotion/react";
    return config;
  },
};
