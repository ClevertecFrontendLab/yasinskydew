import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import IoFilterSharp from '../../assets/Filter/search-btn.svg';
import { CustomIcon } from '../Layout/CustomIcon';

export const SearchBar = () => (
    <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        gap={2}
        width={{ base: '100%', md: '458px' }}
    >
        <Button
            variant='outline'
            colorScheme='gray'
            borderRadius='md'
            p={3}
            size={{ base: 'md', md: 'lg' }}
        >
            <CustomIcon src={IoFilterSharp} alt='filter' />
        </Button>
        <InputGroup>
            <Input
                placeholder='Название или ингредиент...'
                size={{ base: 'md', md: 'lg' }}
                borderRadius='md'
            />
            <InputRightElement
                pointerEvents='none'
                height='100%'
                children={<SearchIcon color='gray.400' />}
            />
        </InputGroup>
    </Box>
);
