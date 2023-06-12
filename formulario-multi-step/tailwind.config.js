/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      'purple-mid': '#633BBC',
      'purple-light': '#8257E5',

      white: '#FFFFFF',
      'gray-100': '#E1E1E6',
      'gray-200': '#8D8D99',
      'gray-300': '#7C7C8A',
      'gray-400': '#323238',

      'sucess-color': '#1D8841',
    },
  },
  plugins: [],
}
