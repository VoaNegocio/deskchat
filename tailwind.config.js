/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                dark: {
                    DEFAULT: '#0A0F1C',
                    card: '#111827',
                    surface: '#1A2236',
                },
                green: {
                    brand: '#4ADE80',
                },
                cyan: {
                    brand: '#14B8A6',
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out both',
                'fade-in': 'fade-in 0.6s ease-out both',
                'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2.5s infinite',
                'float': 'float 3s ease-in-out infinite',
                'scale-in': 'scale-in 0.5s ease-out both',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: 0, transform: 'translateY(30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.85, transform: 'scale(1.02)' },
                },
                'shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'scale-in': {
                    'from': { opacity: 0, transform: 'scale(0.9)' },
                    'to': { opacity: 1, transform: 'scale(1)' },
                },
            }
        },
    },
    plugins: [],
}
