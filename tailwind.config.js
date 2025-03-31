/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // NOTE: Update this to include the paths to all of your component files.
  // NOTE: You can also use the `content` option to specify the paths to your component files.
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}