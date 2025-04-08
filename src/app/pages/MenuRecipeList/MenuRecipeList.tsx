import { VStack } from '@chakra-ui/react';

import { FilterContainer } from '~/components/Filter/FilterContainer';
import { PageLayout } from '~/components/Layout/PageLayout';
import { SubMenuList } from '~/components/MenuList/SubMenuList';
import { RecipeList } from '~/components/Recipes/RecipeList';
import { RecipeListMode } from '~/components/Recipes/RecipeTypes';
import { RelevantKichen } from '~/components/RelevantKichen/RelevantKichen';
import { useMainMenu, useRecipes } from '~/store/hooks';
import { MenuCategory } from '~/store/menu-slice';

export default function MenuRecipeList() {
    const { selectedCategory } = useMainMenu();
    const { getRecipesByCategory } = useRecipes();
    const { getMenuCategoryById } = useMainMenu();
    const menuCategoryId = 5;
    const menuCategory = getMenuCategoryById(menuCategoryId) as MenuCategory;
    const relevantRecipes = getRecipesByCategory(menuCategoryId);

    const recipes = getRecipesByCategory(selectedCategory?.id || 1);

    return (
        <PageLayout>
            <VStack spacing={6} maxW='1360px'>
                <FilterContainer
                    title={selectedCategory?.name || ''}
                    description={selectedCategory?.description || ''}
                />
                <SubMenuList />
                <RecipeList recipes={recipes} mode={RecipeListMode.JUICIEST} />
                <RelevantKichen menuCategory={menuCategory} recipes={relevantRecipes} />
            </VStack>
        </PageLayout>
    );
}
