import { Button, VStack } from '@chakra-ui/react';

import { FilterContainer } from '~/components/Filter/FilterContainer';
import { RecipeList } from '~/components/Recipes/RecipeList';
import { RelevantKichen } from '~/components/RelevantKichen/RelevantKichen';
import { useMainMenu } from '~/store/hooks';
import { useRecipes } from '~/store/hooks';
import { MenuCategory } from '~/store/menu-slice';

export default function Juiciest() {
    const { recipes } = useRecipes();
    const { getRecipesByCategory } = useRecipes();
    const { getMenuCategoryById } = useMainMenu();
    const menuCategoryId = 'vegan';
    const menuCategory = getMenuCategoryById(menuCategoryId) as MenuCategory;
    const relevantRecipes = getRecipesByCategory(menuCategoryId);

    return (
        <VStack spacing={6} maxW='1360px'>
            <FilterContainer title='Самое сочное' />
            <RecipeList>{recipes}</RecipeList>
            <Button
                bgColor='var(--lime400-color)'
                color='var(--text-color-secondary)'
                alignSelf='center'
                onClick={() => {
                    console.log('click');
                }}
            >
                Загрузить ещё
            </Button>
            <RelevantKichen menuCategory={menuCategory} recipes={relevantRecipes} />
        </VStack>
    );
}
