import css from 'rollup-plugin-import-css';

export default {
    input: 'src/index.js', // Ensure this path matches the location of your entry file
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        css(),
    ],
};
