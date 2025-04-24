import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import AuthorAvatar from '~/assets/mock-avatar.jpg';
import { AuthorCard } from '~/components/Profile/AuthorCard';
import { IngridientTable } from '~/components/RecipeCard/Ingridients/IngridientTable';
import { NutritionalInfo } from '~/components/RecipeCard/Nutritional/NutritionalInfo';
import RecipeHeader from '~/components/RecipeCard/RecipeHeader/RecipeHeader';
import { RecipeSteps } from '~/components/RecipeCard/RecipeSteps/RecipeSteps';
import { useBreadcrumbs, useMainMenu, useRecipes } from '~/store/hooks';
import { MenuCategory } from '~/store/menu-slice';
import { Recipe } from '~/store/recipe-slice';

export default function RecipeCard() {
    const { categoryId, subCategoryId, id } = useParams();
    const { setBreadcrumbItems } = useBreadcrumbs();
    const { getMenuCategoryById } = useMainMenu();
    const { getRecipeById } = useRecipes();
    const recipe = getRecipeById(id as string) as Recipe;

    useEffect(() => {
        const breadcrumbItems = [{ label: 'Главная', path: '/' }];
        const category = getMenuCategoryById(categoryId as string) as MenuCategory;
        const subCategory = category?.subCategories.find(
            (subCategory) => subCategory.id === subCategoryId,
        );
        breadcrumbItems.push({ label: category.name, path: `/${categoryId}` });
        breadcrumbItems.push({
            label: subCategory?.name || '',
            path: `/${categoryId}/${subCategoryId}`,
        });
        breadcrumbItems.push({
            label: recipe.title,
            path: `/${categoryId}/${subCategoryId}/${id}`,
        });
        setBreadcrumbItems(breadcrumbItems);
    }, []);

    const mockAuthor = {
        id: 1,
        firstName: 'Сергей',
        lastName: 'Разумов',
        avatar: AuthorAvatar,
        link: '@serge25',
    };

    return (
        <VStack mt={{ base: 0, md: '47px' }} alignItems='center' gap='40px' maxW='1360px' w='100%'>
            <RecipeHeader recipe={recipe} />
            <NutritionalInfo {...recipe.nutritionValue} />
            <VStack width={{ base: '100%', md: '90%', xl: '668px' }} gap='40px'>
                <IngridientTable recipeIngridients={recipe.ingredients} />
                <RecipeSteps recipeSteps={recipe.steps} />
                <AuthorCard author={mockAuthor} followers={125} />
            </VStack>
        </VStack>
    );
}
