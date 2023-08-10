import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false
};

const styles = {};

const colors = {};

const theme = extendTheme({
    config: config,
    colors: colors,
    styles: styles
});

export default theme;
