/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxxsm': '320px',
        'xxsm': '375px',
        'xsm': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      gridTemplateColumns: {
        "tpl1440": "1fr repeat(12, calc((min(100% - 40px, 90rem) - 20px * 13) / 12)) 1fr",
      },
      fontFamily: {
        familjenGrotesk: ["Familjen Grotesk", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
