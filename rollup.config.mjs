import css from 'rollup-plugin-import-css';

export default {
    input: 'src/index.js', // Ensure this matches your entry file path
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        css(), // Use this plugin to handle CSS imports
    ],
};
