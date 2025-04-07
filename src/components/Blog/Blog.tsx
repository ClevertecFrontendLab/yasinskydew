import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, Link } from '@chakra-ui/react';

import { BlogList } from './BlogList';

export const Blog = () => (
    <Box
        bgColor='var(--lime300-color)'
        color='var(--text-color-secondary)'
        p='24px'
        borderRadius='lg'
        width='100%'
    >
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            fontFamily='var(--font-family)'
        >
            <Heading>Кулинарные блоги</Heading>
            <Link href='/blog' fontSize='14px' fontWeight='bold'>
                Все авторы <ArrowForwardIcon />
            </Link>
        </Box>
        <BlogList />
    </Box>
);
