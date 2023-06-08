/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#202329",
                secondary: "#2E343D",
                dark: "#131313",
                bright: "#8E8E97",
                acent: "#6B8AFD",
            },
        },
    },
    plugins: [],
}
