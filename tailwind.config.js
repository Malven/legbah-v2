module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont'],
      serif: ['Georgia', 'Cambria'],
      mono: ['SFMono-Regular', 'Menlo'],
      display: ['Old English Five'],
      body: ['Crimson Text']
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md:
        ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg:
        ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl:
        ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      focus: '0 0 3px 3px #715526',
      none: 'none'
    },
    extend: {
      colors: {
        'legbah-gold': '#715526',
        'legbah-grey': '#66696c',
        'legbah-gray': 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
