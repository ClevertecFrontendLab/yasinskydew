import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';

import { JusiestLoadMoBtn } from './JusiestLoadMoBtn';

export const JuciestHeader = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Box display='flex' justifyContent='space-between' alignItems='flex-end' width='100%'>
            <Heading
                fontSize={{ base: '24px', md: '48px' }}
                fontWeight='700'
                textAlign='center'
                color='var(--text-color-secondary)'
                lineHeight='100%'
                fontFamily='var(--font-family)'
            >
                Самое сочное
            </Heading>
            {!isMobile && <JusiestLoadMoBtn />}
        </Box>
    );
};
