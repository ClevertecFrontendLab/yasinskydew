import { Button, ButtonGroup, useBreakpointValue } from '@chakra-ui/react';

import BsBookmarkHeart from '../../assets/BookMark/BsBookmarkHeart.svg';
import { CustomIcon } from '../Layout/CustomIcon';

export const RecipeControl = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    return (
        <ButtonGroup display='flex' gap={2} width='100%' justifyContent='flex-end'>
            <Button
                className='recipe-markdown-button'
                variant='outline'
                size='sm'
                fontSize='14px'
                leftIcon={<CustomIcon src={BsBookmarkHeart} alt='bookmark' />}
                iconSpacing={isMobile ? '0px' : '16px'}
            >
                {!isMobile && 'Сохранить'}
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
        </ButtonGroup>
    );
};
