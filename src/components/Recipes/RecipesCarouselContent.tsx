import { Box, Heading } from '@chakra-ui/react';

import { useRecipes } from '~/store/hooks';

import { CustomCarousel } from '../Carousel/Carousel';
import { RecipeCarouselItem } from './RecipeCarouselItem';

export const RecipesCarouselContent = () => {
    const { recipes } = useRecipes();
    return (
        <Box maxW='100%'>
            <Heading mb={6} textAlign='start'>
                Новые рецепты
            </Heading>
            <CustomCarousel slidesToShow={4} gap={24}>
                {recipes.slice(0, 8).map((recipe) => (
                    <RecipeCarouselItem key={recipe.id} recipe={recipe} />
                ))}
            </CustomCarousel>
        </Box>
    );
};
