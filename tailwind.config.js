/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        colors: {
            gray: colors.neutral,
            text: colors.neutral,
            primary: colors.emerald,
            secondary: colors.cyan,
        },
        extend: {},
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
