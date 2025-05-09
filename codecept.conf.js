const { setCommonPlugins } = require('@codeceptjs/configure');
const os = require('os');

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.wikipedia.org",
      show: false,
    },
  },
  include: {
    I: "./steps_file.js",
    Wiki_main_page: "./pages/Wiki_main_page.js",
  },

  gherkin: {
    features: ["./features/*.feature"],
    steps: ["./steps/wikipedia_steps.js"],
  },
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      resultsDir: "allure-results",
      environmentInfo: {
        os_platform: os.platform(),
        os_release: os.release(),
        os_version: os.version(),
        node_version: process.version,
      },
    },
  },

  name: "WikipediaCodecept",
};