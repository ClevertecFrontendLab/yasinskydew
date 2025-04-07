import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, useBreakpointValue } from '@chakra-ui/react';

import { RecipeItem } from './RecipeItem';
import { recipes } from './RecipesData';
import { MenuModeEnum, RecipeDisplayModeEnum } from './RecipeTypes';

export const RecipeList = () => {
    const displayMode = useBreakpointValue<RecipeDisplayModeEnum>({
        base: RecipeDisplayModeEnum.COMPACT,
        sm: RecipeDisplayModeEnum.NORMAL,
        lg: RecipeDisplayModeEnum.DETAILED,
    });

    return (
        <Box width='100%'>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
                mb={6}
            >
                <Heading textAlign='start' paddingLeft='10px'>
                    Самое сочное
                </Heading>
                <Button
                    bgColor='var(--lime400-color)'
                    color='var(--text-color-secondary)'
                    _hover={{ bgColor: 'var(--lime600-color)', color: 'var(--lime400-color)' }}
                    alignSelf='flex-end'
                    rightIcon={<ArrowForwardIcon />}
                >
                    Вся подборка
                </Button>
            </Box>
            <Box
                display='grid'
                gridTemplateColumns={{
                    base: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                }}
                gap={6}
                px={2}
            >
                {recipes.slice(0, 8).map((recipe) => (
                    <RecipeItem
                        key={recipe.id}
                        {...recipe}
                        menuMode={MenuModeEnum.SECONDARY}
                        displayMode={displayMode || RecipeDisplayModeEnum.NORMAL}
                    />
                ))}
            </Box>
        </Box>
    );
};
