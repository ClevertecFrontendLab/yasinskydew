import { Box, Heading } from '@chakra-ui/react';

import { RecipeCarousel } from './RecipeCarousel';
import { recipes } from './RecipesData';

export const Recipes = () => (
    <Box>
        <Heading mb={6} textAlign='start' paddingLeft='10px'>
            Новые рецепты
        </Heading>
        <RecipeCarousel recipes={recipes} />
    </Box>
);
