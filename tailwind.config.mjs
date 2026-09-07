/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0C',
        bone: '#F5F4F0',
        vermilion: '#FF3B00',
        graphite: '#7A7975',
        surface: '#121215',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};