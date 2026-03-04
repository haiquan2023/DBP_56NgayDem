/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brass': {
                    50: '#fdf8e8',
                    100: '#f9ecc4',
                    200: '#f3d888',
                    300: '#e9bf4a',
                    400: '#d4a332',
                    500: '#b8862a',
                    600: '#9a6c22',
                    700: '#7c531c',
                    800: '#5e3e18',
                    900: '#3f2b14',
                },
                'military': {
                    50: '#f0f4e8',
                    100: '#dce5c8',
                    200: '#b8cc91',
                    300: '#8fad56',
                    400: '#6b8f30',
                    500: '#4a6b1e',
                    600: '#3a5518',
                    700: '#2d4114',
                    800: '#1f2e10',
                    900: '#131c0c',
                },
            },
            fontFamily: {
                'serif-vn': ['"Playfair Display"', 'Georgia', 'serif'],
                'body-vn': ['"Roboto"', '"Noto Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
