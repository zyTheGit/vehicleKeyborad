// const path = require("path");

import path from "path";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import styles from "rollup-plugin-styles";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

module.exports = {
  input: path.resolve(__dirname, "./src/keyboard.js"),
  output: [
    {
      file: path.resolve(__dirname, "./lib/Keyboard.js"),
      format: "es",
      name: "Keyboard",
    },
    {
      file: path.resolve(__dirname, "./lib/Keyboard.min.js"),
      format: "umd",
      name: "Keyboard",
    },
  ],
  plugins: [
    styles({ mode: "emit" }),
    postcss({
      extensions: [".css"],
      plugins: [autoprefixer(), cssnano()],
      extract: "css/default.css",
    }),
    resolve({ jsnext: true, main: true, browser: true }),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
    terser(),
  ],
};
