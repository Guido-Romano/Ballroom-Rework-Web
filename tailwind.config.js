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
        color3: '#2c2c2c',
        color4: '#3a3a3a',
        color5: '#474747',
      },
      screens: {
        'mini': '390px', 
      },
      fontFamily: {
        'Cinzel': ['Cinzel'], 
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

