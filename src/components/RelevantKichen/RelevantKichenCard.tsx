import { Box, Button, Text } from '@chakra-ui/react';

import { Recipe } from '../../store/recipe-slice';
import { CustomIcon } from '../Layout/CustomIcon';

export const RelevantKichenCard = (recipe: Recipe) => {
    const { name } = recipe;

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderRadius='lg'
            border='1px solid #E0E0E0'
            p='14px 24px'
        >
            <Box display='flex' alignItems='center' gap={2}>
                <CustomIcon src={recipe.menuCategory.icon} alt={recipe.menuCategory.name} />
                <Text fontSize='20px' fontWeight='500' fontFamily='var(--font-family)'>
                    {name}
                </Text>
            </Box>
            <Button
                variant='outline'
                borderColor='var(--lime600-color)'
                color='var(--lime600-color)'
            >
                Готовить
            </Button>
        </Box>
    );
};
