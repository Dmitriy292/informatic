// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-right': 'spin-right 2s linear infinite',
      },
      keyframes: {
        'spin-right': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
