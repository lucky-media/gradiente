module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./content/**/*.md",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            borderRadius: {
                "4xl": "32px",
            },
            fontFamily: {
                sans: "Syne, -apple-system, BlinkMacSystemFont",
                serif: "DM Sans, -apple-system, BlinkMacSystemFont",
            },
            colors: {
                primary: "#41A2D9",
                secondary: "#303DB4",
                gray: {
                    200: "#ECECEC",
                    300: "#F5F5F7",
                    500: "#818181",
                    600: "#808080",
                    700: "#5A6474",
                    800: "#323232",
                    900: "#242424",
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),

        // eslint-disable-next-line no-undef
        require("tailwindcss-debug-screens"),
    ],
};
