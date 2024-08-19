/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), require("tailwind-scrollbar")],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    corePlugins: {
        preflight: true,
    },
};
