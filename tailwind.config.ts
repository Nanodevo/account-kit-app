import { createColorSet, withAccountKitUi } from "@account-kit/react/tailwind";

/** @type {import('tailwindcss').Config} */
export default withAccountKitUi({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@account-kit/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}, {
  colors: {
    "btn-primary": createColorSet("#E82594", "#FF66CC"),
    "fg-accent-brand": createColorSet("#E82594", "#FF66CC"),
  },
  borderRadius: "lg"
});
