import { Box, Heading } from '@chakra-ui/react';

import { FilterControls } from './FilterControls';
import { SearchBar } from './SearchBar';

export const FilterContainer = () => (
    <Box className='filter-box' maxWidth='520px' width='100%'>
        <Heading
            fontSize='48px'
            fontWeight='700'
            textAlign='center'
            color='var(--text-color-secondary)'
            m={6}
        >
            Приятного аппетита!
        </Heading>
        <SearchBar />
        <FilterControls />
    </Box>
);
