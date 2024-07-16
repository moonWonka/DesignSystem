/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/templates/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
