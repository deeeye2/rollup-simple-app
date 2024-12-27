import css from 'rollup-plugin-import-css';

export default {
  input: 'src/index.js', // Entry point
  output: {
    dir: 'dist', // Output directory
    format: 'esm', // ES module format
    sourcemap: true, // Include sourcemap for debugging
  },
  plugins: [
    css(), // Handle CSS imports
  ],
};
