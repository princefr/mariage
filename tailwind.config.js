module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './notifications/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/assets/pexels-photo-10149274.jpeg')",
        "test2": "url('https://image.freepik.com/photos-gratuite/fond-aquarelle-rose-pastel_1048-6837.jpg')",
        "test3": "url('https://i.pinimg.com/736x/4e/ad/57/4ead573e89feaf58da5387c1404366fd.jpg')",
        "test4": "url('/assets/pexels-henry-&-co-1939485.jpg')",
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
