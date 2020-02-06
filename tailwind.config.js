module.exports = {
  theme: {
    extend: {
      inset: {
        '1': '0,0625rem',
        '2': '0,125rem',
        '3': '0,1875rem',
         '-1': '-0,0625rem',
         '-2': '-0,125rem',
         '-3': '-0,1875rem',
      },
      maxWidth: {
        'screen-xl' : '88rem',
      },
      width:{
        'calc-0': 'calc(100% - 0rem)',
        'calc-1': 'calc(100% - 0.25rem)',
        'calc-2': 'calc(100% - 0.50rem)',
        'calc-3': 'calc(100% - 0.85rem)',
        'calc-4': 'calc(100% - 1rem)',
        'calc-5': 'calc(100% - 1.25rem)',
        'calc-6': 'calc(100% - 1.50rem)',
        'calc-8': 'calc(100% - 2rem)',
        'calc-10': 'calc(100% - 2.5rem)',
        'calc-12': 'calc(100% - 3rem)',
        'calc-16': 'calc(100% - 4rem)',
        'calc-20': 'calc(100% - 5rem)',
      },
      spacing: {
        'md': '1rem',
        'lg': '1.1428rem',
      },
    }
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),    
    function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''"
          }
        },
        ['before']
      )
    }
  ]
}