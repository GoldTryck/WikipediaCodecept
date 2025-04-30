/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.wikipedia.org',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },

  "gherkin": {
  "features": [
      "./features/*.feature",
    ],
  "steps": [
    "./steps/*_steps.js"
  ]
},

  name: 'WikipediaCodecept'
}