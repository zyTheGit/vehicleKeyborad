// const path = require("path");

import path from "path";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import styles from "rollup-plugin-styles";

module.exports = {
  input: path.resolve(__dirname, "./src/keyboard.js"),
  output: [
    {
      file: path.resolve(__dirname, "./lib/index.js"),
      format: "umd",
      name: "Keyboard",
      // plugins: [terser()],
    },
    {
      file: path.resolve(__dirname, "./lib/Keyboard.min.js"),
      format: "iife",
      name: "Keyboard",
    },
  ],
  plugins: [
    styles({ mode: "emit" }),
    postcss({
      extensions: [".css"],
    }),
    resolve({ jsnext: true, main: true, browser: true }),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
    terser(),
  ],
};
