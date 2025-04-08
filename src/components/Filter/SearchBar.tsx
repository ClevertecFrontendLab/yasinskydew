import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { IoFilterSharp } from 'react-icons/io5';

export const SearchBar = () => (
    <Box display='flex' alignItems='center' justifyContent='space-between' gap={2} width='458px'>
        <Button variant='outline' colorScheme='gray' borderRadius='md' p={3} size='lg'>
            <IoFilterSharp />
        </Button>
        <InputGroup>
            <Input placeholder='Название или ингредиент...' size='lg' borderRadius='md' />
            <InputRightElement
                pointerEvents='none'
                height='100%'
                children={<SearchIcon color='gray.400' />}
            />
        </InputGroup>
    </Box>
);
