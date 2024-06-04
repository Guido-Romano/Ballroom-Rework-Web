module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        gold: '#E6C068',
        color1: '#030303',
        color2: '#161616',
        color3: '#1D1D1D',
        color4: '#2c2c2c',
        color5: '#3a3a3a',
      },
      screens: {
        'mini': '390px', 
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: false, // Deshabilita la configuración de fontFamily por defecto
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'], // Extiende las variantes de fontFamily para incluir hover y focus
    },
  }
}

