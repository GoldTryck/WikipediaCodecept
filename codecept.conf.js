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
      resultsDir: "./output/allure-results",
    },
  },

  name: "WikipediaCodecept",
};