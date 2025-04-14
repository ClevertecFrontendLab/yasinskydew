import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';

import { BlogAuthorLink } from './BlogAuthorLink';
import { BlogList } from './BlogList';

export const Blog = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box
            bgColor='var(--lime300-color)'
            color='var(--text-color-secondary)'
            m='15px 0'
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
                mb={{ base: '8px', md: '12px', lg: '16px', '2xl': '30px' }}
            >
                <Heading
                    fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                    fontWeight={{ base: '500', lg: '400' }}
                    lineHeight='111%'
                    fontFamily='var(--font-family)'
                >
                    Кулинарные блоги
                </Heading>
                <BlogAuthorLink isMobile={!!isMobile} />
            </Box>
            <BlogList />
            <BlogAuthorLink isMobile={!isMobile} />
        </Box>
    );
};
