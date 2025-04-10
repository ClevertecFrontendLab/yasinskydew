import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px',
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1440px',
    '2xl': '1536px',
};

const colors = {
    brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
    },
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
    },
};

const components = {
    // Container: {
    //     baseStyle: {
    //         maxW: '100%',
    //         px: { base: '16px', tablet: '24px', desktop: '32px' },
    //     },
    // },
    // Button: {
    //     baseStyle: {
    //         fontWeight: 'semibold',
    //         borderRadius: 'md',
    //     },
    //     variants: {
    //         solid: {
    //             bg: 'brand.500',
    //             color: 'white',
    //             _hover: {
    //                 bg: 'brand.600',
    //             },
    //         },
    //         outline: {
    //             borderColor: 'brand.500',
    //             color: 'brand.500',
    //             _hover: {
    //                 bg: 'brand.50',
    //             },
    //         },
    //     },
    // },
    // Heading: {
    //     baseStyle: {
    //         fontWeight: 'bold',
    //     },
    //     sizes: {
    //         h1: {
    //             fontSize: { base: '2xl', tablet: '3xl', desktop: '4xl' },
    //         },
    //         h2: {
    //             fontSize: { base: 'xl', tablet: '2xl', desktop: '3xl' },
    //         },
    //         h3: {
    //             fontSize: { base: 'lg', tablet: 'xl', desktop: '2xl' },
    //         },
    //     },
    // },
};

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
