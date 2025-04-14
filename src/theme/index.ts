import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px', // Mobile devices (default)
    sm: '360px', // Small devices (phones)
    md: '768px', // Tablets
    lg: '1024px', // Laptops
    xl: '1440px', // Desktops
    '2xl': '1920px', // Large desktops
};

const colors = {
    lime: {
        50: '#ffffd3',
        100: '#eaffc7',
        200: '#d7ff94',
        300: '#c4ff61',
        400: '#b1ff2e',
        600: '#2db100',
    },
};

const components = {};

const styles = {
    global: {
        body: {
            bg: 'gray.50',
            color: 'gray.800',
        },
    },
};

const theme = extendTheme({
    breakpoints,
    colors,
    components,
    styles,
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});

export default theme;
