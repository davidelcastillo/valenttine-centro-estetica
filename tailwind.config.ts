import type { Config } from 'tailwindcss'


export default {
content: [
'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui'],
display: ['Poppins', 'Inter', 'ui-sans-serif'],
},
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6', // primario
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
},
},
keyframes: {
pageEnter: {
'0%': { opacity: '0', transform: 'scale(.95) translateY(20px)' },
'50%': { opacity: '.7' },
'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
},
heroSlideIn: {
from: { opacity: '0', transform: 'translateX(-50px)' },
to: { opacity: '1', transform: 'translateX(0)' },
},
logoFloat: {
'0%,100%': { transform: 'translateY(0) rotate(0)' },
'50%': { transform: 'translateY(-10px) rotate(2deg)' },
},
pulseRing: {
'0%': { transform: 'scale(.8)', opacity: '1' },
'80%,100%': { transform: 'scale(1.2)', opacity: '0' },
},
gradientMove: {
'0%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
'100%': { backgroundPosition: '0% 50%' },
},
formSlideIn: {
from: { opacity: '0', transform: 'translateX(50px)' },
to: { opacity: '1', transform: 'translateX(0)' },
},
fadeIn: {
from: { opacity: '0', transform: 'translateY(20px)' },
to: { opacity: '1', transform: 'translateY(0)' },
},
slideDown: {
from: { opacity: '0', transform: 'translateY(-10px)' },
to: { opacity: '1', transform: 'translateY(0)' },
},
heartbeat: {
'0%,100%': { transform: 'scale(1)' },
'50%': { transform: 'scale(1.05)' },
},
},
animation: {
'page-enter': 'pageEnter 1.2s cubic-bezier(0.4,0,0.2,1)',
'hero': 'heroSlideIn 1s ease-out .3s both',
'logo-float': 'logoFloat 3s ease-in-out infinite',
'pulse-ring': 'pulseRing 2s cubic-bezier(0.455,0.03,0.515,0.955) infinite',
'gradient-move': 'gradientMove 8s ease infinite',
'form-in': 'formSlideIn .8s ease-out .5s both',
'fade-in': 'fadeIn .5s ease-in',
'slide-down': 'slideDown .3s ease-out',
'heartbeat': 'heartbeat 2s ease-in-out infinite',
},
backgroundImage: {
'brand-gradient': 'linear-gradient(-45deg,#7c3aed,#a855f7,#8b5cf6,#3b82f6,#6366f1,#4f46e5)',
},
boxShadow: {
glow: '0 0 30px rgba(139,92,246,.3)'
}
},
},
plugins: [],
} satisfies Config