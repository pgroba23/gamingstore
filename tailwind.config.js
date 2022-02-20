module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        auto: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
