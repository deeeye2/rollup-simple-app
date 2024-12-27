import css from "rollup-plugin-import-css";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    css({ output: "bundle.css" }), // Output CSS to dist/bundle.css
  ],
};
