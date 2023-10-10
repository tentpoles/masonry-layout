import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            'xs': {'min': '0px', 'max': '426px'},
            'sm': {'min': '427px', 'max': '1024px'},
            'md': {'min': '1025px'},
        },
    },
    plugins: [],
} satisfies Config;
