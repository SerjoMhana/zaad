module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
    
      
      },
    
    colors: {
      // You can define custom colors here
    },
    extend: {
      colors: {
        'zad-green': '#4CAF50', // A shade of green inspired by the logo
      },
      backgroundImage: {
       

      }}
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};
