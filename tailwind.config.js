module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {

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

