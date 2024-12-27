import css from 'rollup-plugin-import-css';

export default {
    input: 'src/index.js', // Entry point for the application
    output: {
        file: 'dist/bundle.js', // Output JS file
        format: 'iife', // Immediately Invoked Function Expression
        sourcemap: true, // Enable source maps
    },
    plugins: [
        css({ output: 'bundle.css' }), // Generate CSS bundle
    ],
};

