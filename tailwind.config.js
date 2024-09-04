// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your source files
  ],
  theme: {
    extend: {
      colors: {
        steelblue: '#4682B4',
      },
    },
  },
  plugins: [],
};
