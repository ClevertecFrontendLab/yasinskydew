import { Box, Heading } from '@chakra-ui/react';

import { useRecipes } from '~/store/hooks';

import { RecipeCarousel } from './RecipeCarousel';

export const Recipes = () => {
    const { recipes } = useRecipes();
    return (
        <Box>
            <Heading mb={6} textAlign='start' paddingLeft='10px'>
                Новые рецепты
            </Heading>
            <RecipeCarousel recipes={recipes} />
        </Box>
    );
};
