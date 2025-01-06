/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./assets/**/*.css",
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
            success: colors.green,
            error: colors.red,
        },
        extend: {},
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
