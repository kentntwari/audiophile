module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },

    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },

    colors: {
      orange: {
        full: '#d87d4a',
        dimmed: '#fbaf85',
      },
      black: {
        full: '#000000',
        plus: '#101010',
      },
      white: {
        full: '#ffffff',
        plus: '#fafafa',
        dimmed: '#f1f1f1',
      },
    },

    extend: {
      fontSize: {
        h1: [
          '3.5rem',
          {
            letterSpacing: '0.125rem',
            lineHeight: '3.625rem',
          },
        ],

        h2: [
          '2.5rem',
          {
            letterSpacing: '0.094rem',
            lineHeight: '2.75rem',
          },
        ],

        h3: [
          '2rem',
          {
            letterSpacing: '0.072rem',
            lineHeight: '2.25rem',
          },
        ],
        h4: [
          '1.75rem',
          {
            letterSpacing: '0.125rem',
            lineHeight: '2.375rem',
          },
        ],
        h5: [
          '1.5rem',
          {
            letterSpacing: '0.106rem',
            lineHeight: '2.063rem',
          },
        ],
        h6: [
          '1.125rem',
          {
            letterSpacing: '0.081rem',
            lineHeight: '1.5rem',
          },
        ],
        overline: [
          '0.875rem',
          {
            letterSpacing: '0.625rem',
            lineHeight: '1.188rem',
          },
        ],
        subtitle: [
          '0.813rem',
          {
            letterSpacing: '0.063rem',
            lineHeight: '1.563rem',
          },
        ],
        body: [
          '0.938rem',
          {
            // letterSpacing: '0rem',
            lineHeight: '1.563rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
