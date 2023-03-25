/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-input': '0 0 10px rgba(255, 255, 255)',
        'custom-bg-home': 'inset 0px 0px 40px rgba(250, 200, 50)',
      },
      backgroundImage: {
        home: "url('../public/background.jpeg')",
      },
    },
    fontFamily: {
      'russo-one': ['"Russo One"'],
    },
  },
  plugins: [],
}
