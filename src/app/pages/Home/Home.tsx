import { useBreakpointValue, VStack } from '@chakra-ui/react';

import { Blog } from '~/components/Blog/Blog';
import { FilterContainer } from '~/components/Filter/FilterContainer';
import { RecipeList } from '~/components/Recipes/RecipeList';
import { RecipesCarouselContent } from '~/components/Recipes/RecipesCarouselContent';
import { RelevantKichen } from '~/components/RelevantKichen/RelevantKichen';
import { useMainMenu, useRecipes } from '~/store/hooks';
import { MenuCategory } from '~/store/menu-slice';

import { JuciestHeader } from '../../../components/Juciest/JuciestHeader';
import { JusiestLoadMoBtn } from '../../../components/Juciest/JusiestLoadMoBtn';

export default function Home() {
    const { getNewRecipes, getRecipesByCategory } = useRecipes();
    const { getMenuCategoryById } = useMainMenu();
    const isMobile = useBreakpointValue({ base: true, lg: false });

    const menuCategoryId = 'vegan';
    const menuCategory = getMenuCategoryById(menuCategoryId) as MenuCategory;
    const relevantRecipes = getRecipesByCategory(menuCategoryId);

    return (
        <VStack spacing={6} maxW='1360px' position='relative' justifyContent='flex-start'>
            <FilterContainer title='Приятного аппетита!' />
            <RecipesCarouselContent />
            <JuciestHeader />
            <RecipeList currentCategory='' currentSubCategory=''>
                {getNewRecipes().slice(0, 4)}
            </RecipeList>
            {isMobile && <JusiestLoadMoBtn />}
            <Blog />
            <RelevantKichen menuCategory={menuCategory} recipes={relevantRecipes} />
        </VStack>
    );
}
