import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import IoFilterSharp from '../../assets/Filter/filter-btn.svg';
import { CustomButton } from '../Button/CustomButton';
import { CustomIcon } from '../Layout/CustomIcon';

export const SearchBar = () => (
    <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        gap={2}
        maxW={{ md: '520px' }}
        width='100%'
        mt='16px'
    >
        <CustomButton>
            <CustomIcon src={IoFilterSharp} alt='filter' />
        </CustomButton>
        <InputGroup>
            <Input
                placeholder='Название или ингредиент...'
                size={{ base: 'md', md: 'lg' }}
                color='blackAlpha'
                borderRadius='md'
                border='1px solid black'
                _hover={{
                    border: '1px solid black',
                }}
            />
            <InputRightElement
                onClick={() => {
                    console.log('click');
                }}
                cursor='pointer'
                height='100%'
                children={<SearchIcon color='black' height='18px' width='18px' />}
            />
        </InputGroup>
    </Box>
);
