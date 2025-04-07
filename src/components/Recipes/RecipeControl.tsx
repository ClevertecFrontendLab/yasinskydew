import { Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { BsBookmarkHeart } from 'react-icons/bs';

export const RecipeControl = () => (
    <Box display='flex' gap={2} width='100%' justifyContent='flex-end'>
        <Button
            className='recipe-markdown-button'
            variant='outline'
            size='sm'
            fontSize='14px'
            leftIcon={<BsBookmarkHeart />}
        >
            Сохранить
        </Button>
        <Button
            className='recipe-cook-button'
            colorScheme='var(--text-color)'
            fontSize='14px'
            bgColor='var(--bg-color)'
            size='sm'
            _hover={{ bgColor: 'gray.500' }}
        >
            Готовить
        </Button>
    </Box>
);
