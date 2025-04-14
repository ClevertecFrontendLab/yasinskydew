import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';

import { useRecipes } from '~/store/hooks';

import { CustomCarousel } from '../Carousel/Carousel';
import { RecipeCarouselItem } from './RecipeCarouselItem';

export const RecipesCarouselContent = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const { recipes } = useRecipes();
    return (
        <Box maxW='100%'>
            <Heading
                fontSize={{ base: '24px', md: '36px', lg: '48px' }}
                fontWeight='500'
                lineHeight='100%'
                mb={6}
                textAlign='start'
            >
                Новые рецепты
            </Heading>
            <CustomCarousel gap={isMobile ? 8 : 24} mt={isMobile ? 0 : 7}>
                {recipes.slice(0, 8).map((recipe) => (
                    <RecipeCarouselItem key={recipe.id} recipe={recipe} />
                ))}
            </CustomCarousel>
        </Box>
    );
};
