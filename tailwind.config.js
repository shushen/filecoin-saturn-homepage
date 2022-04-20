module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",,
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-logo': "url('/nav-logo.svg')",
        'nav-menu': "url('/nav-open-menu.svg')",
        'menu-cross': "url('/menu-cross.svg')",
        'filecoin-logo': "url('/filecoin-logo.svg')",
        'protocol-labs-logo': "url('/protocol-labs.svg')",
        'card-logo-gateway': "url('/card-logo-gateway.png')",
        'card-logo-station': "url('/card-logo-station.png')",
        'gradient-background-learn': "url('/learn-more-button.svg')",
        'learn-more-button': "url('/learn-more-button.svg')",
        'filecoin-saturn-border': "url('/filecoin-saturn-border.svg')",
        'icon-border': "url('/icon-border.svg')",
        'protocol-labs-footer': "url('/protocol-labs-footer.svg')",
        'filecoin-saturn-footer': "url('/filecoin-saturn-footer.svg')",
        'focus-menu-button': "url('/focus-menu-button.svg')",
      },
      colors: {
        'gradient-turqouise': '#39C0CC',
        'gradient-blue': '#078FFF',
        'regular-blue': '#0E67FF',
        'dark-blue': '#194FCA',
        'dark-blue-2': '#0B275B',
        'light-blue': '#0090FF',
        'light-blue-2': '#E7F0FF',
        'light-grey': '#888A93',
      }, 
      fontFamily: {
        "roboto": ['"Roboto"', 'Arial', 'sans-serif'],
        "inter": ['"Inter"', 'Arial', 'sans-serif'],
        "source-serif-pro": ['"Source Serif Pro"', 'Arial', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            small: {
              p: {
                fontSize: '1rem !important'
              }
            },
            '.description': {
              p: {
                color: '#4f4f4f',
                fontFamily: 'Roboto, Arial, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.25rem',
                margin: '0',
                '@media (min-width: theme("screens.sm"))': {
                  fontSize: '1rem',
                  lineHeight: '1.5rem'
                }
              }  
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
