/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brutal-yellow': '#FFE600',
        'brutal-lime': '#A3E635',
        'brutal-cyan': '#00F0FF',
        'brutal-orange': '#FF5C00',
        'brutal-pink': '#FF2A85',
        'brutal-bg-light': '#F4F0EA',
        'brutal-bg-dark': '#0D0D0D',
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #000000',
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-lg': '10px 10px 0px 0px #000000',
        'brutal-dark': '6px 6px 0px 0px #FFE600',
        'brutal-dark-sm': '4px 4px 0px 0px #FFE600',
        'brutal-dark-white': '6px 6px 0px 0px #F4F0EA',
      },
    },
  },
  plugins: [],
}
