module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './notifications/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/assets/pexels-photo-10149274.jpeg')"
      },
      fontFamily: {
        "theos": ['Theos',  'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'dancing': ['Dancing Script']
      },
    },
  },
  plugins: [],
}
