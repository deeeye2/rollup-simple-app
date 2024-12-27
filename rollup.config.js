import css from 'rollup-plugin-import-css';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'es',
    },
    plugins: [
        css({ output: 'bundle.css' }),
    ],
};
