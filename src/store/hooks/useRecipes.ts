import { addRecipe } from '../recipe-slice';
import { Recipe } from '../recipe-slice';
import { useAppDispatch, useAppSelector } from './useApp';

interface UseRecipesReturn {
    recipes: Recipe[];
    addRecipeItem: (recipe: Recipe) => void;
    getNewRecipes: () => Recipe[];
    getRecipesByCategory: (id: string) => Recipe[];
    getRecipesBySubCategory: (categoryId: string, subCategoryId: string) => Recipe[];
    getRecipeById: (id: string) => Recipe | undefined;
}

export const useRecipes = (): UseRecipesReturn => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipe.recipes);

    const addRecipeItem = (recipe: Recipe) => dispatch(addRecipe(recipe));

    const getNewRecipes = () => recipes;

    const getRecipesByCategory = (id: string): Recipe[] =>
        recipes.filter((recipe) => recipe.category.includes(id));

    const getRecipesBySubCategory = (categoryId: string, subCategoryId: string): Recipe[] =>
        recipes.filter(
            (recipe) =>
                recipe.subcategory.includes(subCategoryId) && recipe.category.includes(categoryId),
        );

    const getRecipeById = (id: string): Recipe | undefined =>
        recipes.find((recipe) => recipe.id === id);

    return {
        recipes,
        addRecipeItem,
        getNewRecipes,
        getRecipesByCategory,
        getRecipesBySubCategory,
        getRecipeById,
    };
};
