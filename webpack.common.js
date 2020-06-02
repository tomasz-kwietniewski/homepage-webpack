const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    main: "./src/js/main.js"
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "another", "main"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/animals-for-Jeremiah.html",
      inject: true,
      chunks: ["index", "main"],
      filename: "animals-for-Jeremiah.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html.html",
      inject: true,
      chunks: ["index", "main"],
      filename: "nauka-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css.html",
      inject: true,
      chunks: ["index", "main"],
      filename: "nauka-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js.html",
      inject: true,
      chunks: ["index", "main"],
      filename: "nauka-js.html",
    }),
  ],
};
