import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4aadb5',
                secondary: '#f7941d',
                tertiary: '#4aadb5',
                light: '#f9f9f9',
                dark: '#333333',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            }
        }
    },
    plugins: [],
};

export default config;