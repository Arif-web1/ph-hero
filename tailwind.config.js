/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust the paths as needed
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // Keep DaisyUI enabled
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#2563eb",
            "secondary": "#9333ea",
            "accent": "#14b8a6",
            "neutral": "#1e293b",
            "base-100": "#ffffff", // Sets the background color to white
          },
        },
      ],
      darkTheme: "mytheme", // Optional, ensures consistency
    },
  };
  