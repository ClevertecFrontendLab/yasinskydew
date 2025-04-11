import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';

import { BlogAuthorLink } from './BlogAuthorLink';
import { BlogList } from './BlogList';

export const Blog = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box
            bgColor='var(--lime300-color)'
            color='var(--text-color-secondary)'
            p='24px'
            borderRadius='lg'
            width='100%'
            display='flex'
            alignItems={isMobile ? 'center' : 'flex-start'}
            flexDirection='column'
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                fontFamily='var(--font-family)'
                width='100%'
            >
                <Heading fontSize={{ base: '24px', md: '36px' }} fontWeight='500'>
                    Кулинарные блоги
                </Heading>
                <BlogAuthorLink isMobile={!!isMobile} />
            </Box>
            <BlogList />
            <BlogAuthorLink isMobile={!isMobile} />
        </Box>
    );
};
