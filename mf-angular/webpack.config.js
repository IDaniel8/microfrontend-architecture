const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfAngular",
    publicPath: "http://localhost:4202/",
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
      name: 'mfangular',
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts'
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
