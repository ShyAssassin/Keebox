import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false
};

const styles = {
    global: {
        body: {
            fontFamily: "`Ubuntu`",
        },
        h1: {
            fontSize: "2rem",
            fontWeight: "bold",
        }
    },
}

const colors = {
    brand: {
        50: "#f7fafc",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#718096",
        600: "#4a5568",
        700: "#2d3748",
        800: "#1a202c",
        900: "#171923",
    },
};

const theme = extendTheme({
    config: config,
    colors: colors,
    styles: styles
});

export default theme;
