import { Button, ButtonGroup, useBreakpointValue } from '@chakra-ui/react';
import { BsBookmarkHeart } from 'react-icons/bs';

export const RecipeControl = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    return (
        <ButtonGroup display='flex' gap={2} width='100%' justifyContent='flex-end'>
            <Button
                className='recipe-markdown-button'
                variant='outline'
                size={{ base: 'sm', md: 'md' }}
                fontSize='14px'
                leftIcon={<BsBookmarkHeart />}
                iconSpacing={isMobile ? '0px' : '16px'}
            >
                {!isMobile && 'Сохранить'}
            </Button>
            <Button
                className='recipe-cook-button'
                colorScheme='var(--text-color)'
                fontSize='14px'
                bgColor='var(--bg-color)'
                size={{ base: 'sm', md: 'md' }}
                _hover={{ bgColor: 'gray.500' }}
            >
                Готовить
            </Button>
        </ButtonGroup>
    );
};
