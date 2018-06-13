const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "temp"),
    filename: "bundle.js"
  },
  resolve: {
    mainFields: ["browser", "main"],
    modules: [
      path.join(__dirname, 'src')
  ]
  }
};
