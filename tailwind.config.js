/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#FC4747",
        bg: "#10141E",
        bgSecondary: "#161D2F",
        bgSoft: "#5A698F",
        text:"#FFFFFF",
        bgHalfOpacity: 'rgba(16,20,30,.5)',
        playBgHalfOpacity: 'rgba(255,255,255,.25)'
      },
      fontSize: {
        'heading-large': '32px',
        'heading-medium': '24px',
        'heading-small': '24px',
        'heading-xs': '18px',
        'body-medium': '15px',
        'body-small': '13px',
      },
    },
  },
  plugins: [],
};
