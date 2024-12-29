/** @type {import('tailwindcss').Config} */
export const content = [
  "index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
   
   
    keyframes: {
      moveup: {
        '0%': { transform: 'translateY(40px)', opacity: '0' },
        '100%': { transform: 'translateY(0px)', opacity: '1' },
      },
    },
    animation: {
      moveup: 'moveup 0.5s ease-in-out', // Adjust duration and easing as needed
    },
  },
};
export const plugins = [];
