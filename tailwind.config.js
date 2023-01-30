module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    // themes: ["light", "dark"],
    darkTheme: "dark",
    logs: false,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary": "#297ace",
          "primary-content": "#f0eded",
          "secondary": "#d3dff0",
          "secondary-content": "#164b8e",
          "accent": "#37CDBE",
          "neutral": "#3f4859",
          "neutral-content": "#f0eded",
          "base-100": "#FFFFFF",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary": "#297ace",
          "primary-content": "#f0eded",
          "secondary": "#172738",
          "secondary-content": "#a8c9ed",
          "accent": "#1fb2a6",
          "neutral": "#3f4859",
          "neutral-content": "#f0eded",
          "neutral-focus": "#2d3440",
          "base-100": "#131419",
        },
      },
    ],
  },
}
