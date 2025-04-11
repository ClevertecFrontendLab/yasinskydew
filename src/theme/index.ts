import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px', // Mobile devices (default)
    sm: '360px', // Small devices (phones)
    md: '768px', // Tablets
    lg: '1024px', // Laptops
    xl: '1440px', // Desktops
    '2xl': '1920px', // Large desktops
};

const colors = {};

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
