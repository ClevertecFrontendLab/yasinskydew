import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import {
    addBreadcrumb,
    removeLastBreadcrumb,
    resetBreadcrumbs,
    setBreadcrumbs,
} from './breadcrumb-slice';
import { BreadcrumbItem } from './breadcrumb-slice';
import type { ApplicationState } from './configure-store';
import { setCategories, setSelectedCategory, setSelectedSubCategory } from './menu-slice';
import { MenuCategory, SubCategory } from './menu-slice';
import { addRecipe, Recipe } from './recipe-slice';

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export const useMainMenu = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.menu.categories);
    const selectedCategory = useAppSelector((state) => state.menu.selectedCategory);
    const selectedSubCategory = useAppSelector((state) => state.menu.selectedSubCategory);

    const setMenuCategories = (categories: MenuCategory[]) => {
        dispatch(setCategories(categories));
    };

    const selectCategory = (category: MenuCategory | null) => {
        dispatch(setSelectedCategory(category));
    };

    const selectSubCategory = (subCategory: SubCategory | null) => {
        dispatch(setSelectedSubCategory(subCategory));
    };

    const getMenuCategoryById = (id: number): MenuCategory | undefined =>
        categories.find((category) => category.id === id);

    return {
        categories,
        selectedCategory,
        selectedSubCategory,
        setMenuCategories,
        selectCategory,
        selectSubCategory,
        getMenuCategoryById,
    };
};

export const useBreadcrumbs = () => {
    const dispatch = useAppDispatch();
    const breadcrumbs = useAppSelector((state) => state.breadcrumb.items);

    const addBreadcrumbItem = (item: BreadcrumbItem) => {
        dispatch(addBreadcrumb(item));
    };

    const removeLastBreadcrumbItem = () => {
        dispatch(removeLastBreadcrumb());
    };

    const resetBreadcrumbItems = () => {
        dispatch(resetBreadcrumbs());
    };

    const setBreadcrumbItems = (items: BreadcrumbItem[]) => {
        dispatch(setBreadcrumbs(items));
    };

    return {
        breadcrumbs,
        addBreadcrumbItem,
        removeLastBreadcrumbItem,
        resetBreadcrumbItems,
        setBreadcrumbItems,
    };
};

export const useRecipes = () => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipe.recipes);

    const addRecipeItem = (recipe: Recipe) => {
        dispatch(addRecipe(recipe));
    };

    const getHomeRecipes = () => recipes.slice(0, 4);

    const getRecipesByCategory = (id: number): Recipe[] =>
        recipes.filter((recipe) => recipe.menuCategory.id === id);

    return {
        recipes,
        addRecipeItem,
        getRecipesByCategory,
        getHomeRecipes,
    };
};
