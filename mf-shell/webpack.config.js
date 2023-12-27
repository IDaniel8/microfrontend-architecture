const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfShell",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      remotes: {
        mfangular: "http://localhost:4202/remoteEntry.js",
        mfreact: "http://localhost:4201/assets/remoteEntry.js",
      },
      shared: [
        "@angular/core",
        "@angular/common",
        "@angular/router",
        "@angular/common/http",
      ],
    }),
  ],
};
