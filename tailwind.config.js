/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg:
          "url('/assets/img/weatherstack-Real-Time-World-Weather-REST-API-1-1.png')",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        autoGrid: "repeat(auto-fill,350px)",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      maxWidth: {
        "1/2": "50%",
        "13*100": "1350px",
      },
      width: {
        "3*100": "320px",
        "2*50": "100px",
        "2*48": "98px",
      },
      height: {
        "3*100": "320px",
        "2*50": "100px",
        "2*48": "98px",
      },
    },
  },
  plugins: [],
};
