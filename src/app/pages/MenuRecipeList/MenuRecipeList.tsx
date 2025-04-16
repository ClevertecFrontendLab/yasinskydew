import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { FilterContainer } from '~/components/Filter/FilterContainer';
import { SubMenuList } from '~/components/MenuList/SubMenuList';
import { RecipeList } from '~/components/Recipes/RecipeList';
import { RelevantKichen } from '~/components/RelevantKichen/RelevantKichen';
import { useBreadcrumbs, useMainMenu, useRecipes } from '~/store/hooks';
import { MenuCategory } from '~/store/menu-slice';

export default function MenuRecipeList() {
    const { selectedCategory } = useMainMenu();
    const { getRecipesByCategory } = useRecipes();
    const { getMenuCategoryById } = useMainMenu();
    const menuCategoryId = 'vegan';
    const menuCategory = getMenuCategoryById(menuCategoryId) as MenuCategory;
    const relevantRecipes = getRecipesByCategory(menuCategoryId);
    const { categoryId, subCategoryId } = useParams();
    const { setBreadcrumbItems } = useBreadcrumbs();

    const recipes = getRecipesByCategory(selectedCategory?.id || 'vegan');

    useEffect(() => {
        const breadcrumbItems = [{ label: 'Главная', path: '/' }];
        let category = null;
        if (categoryId) {
            category = getMenuCategoryById(categoryId) as MenuCategory;
            breadcrumbItems.push({ label: category.name, path: `/${categoryId}` });
        }
        if (subCategoryId) {
            const subCategory = category?.subCategories.find(
                (subCategory) => subCategory.id === subCategoryId,
            );
            breadcrumbItems.push({
                label: subCategory?.name || '',
                path: `/${categoryId}/${subCategoryId}`,
            });
        }
        setBreadcrumbItems(breadcrumbItems);
    }, [categoryId, subCategoryId]);

    return (
        <VStack spacing={6} maxW='1360px'>
            <FilterContainer
                title={selectedCategory?.name || ''}
                description={selectedCategory?.description || ''}
            />
            <SubMenuList />
            <RecipeList>{recipes}</RecipeList>
            <RelevantKichen menuCategory={menuCategory} recipes={relevantRecipes} />
        </VStack>
    );
}
