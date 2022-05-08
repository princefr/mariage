module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './notifications/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "theos": ['Theos',  'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'dancing': ['Dancing Script']
      },
    },
  },
  plugins: [],
}
