/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                dancing: ["Dancing Script", "cursive"],
            },
            keyframes: {
                bloom: {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
                "grow-stem": {
                    "0%": { height: "0" },
                    "100%": { height: "100%" },
                },
                "grow-leaf": {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
            },
            animation: {
                bloom: "bloom 1s ease-in-out forwards",
                "grow-stem": "grow-stem 1s ease-in-out forwards",
                "grow-leaf": "grow-leaf 1s ease-in-out forwards",
            },
        },
    },
    plugins: [],
};
