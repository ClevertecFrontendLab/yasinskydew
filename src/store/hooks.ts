import { useCallback } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

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

    const getMenuCategoryById = (id: string): MenuCategory | undefined =>
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

interface UseBreadcrumbsReturn {
    breadcrumbs: BreadcrumbItem[];
    addBreadcrumbItem: (item: BreadcrumbItem) => void;
    removeLastBreadcrumbItem: () => void;
    resetBreadcrumbItems: () => void;
    setBreadcrumbItems: (items: BreadcrumbItem[]) => void;
    navigateWithBreadcrumb: (path: string, label: string) => void;
    goBack: () => void;
    getCurrentBreadcrumb: () => BreadcrumbItem | undefined;
    isCurrentPage: (path: string) => boolean;
}

export const useBreadcrumbs = (): UseBreadcrumbsReturn => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const breadcrumbs = useAppSelector((state) => state.breadcrumb.items);

    const addBreadcrumbItem = useCallback(
        (item: BreadcrumbItem) => {
            dispatch(addBreadcrumb(item));
        },
        [dispatch],
    );

    const removeLastBreadcrumbItem = useCallback(() => {
        dispatch(removeLastBreadcrumb());
    }, [dispatch]);

    const resetBreadcrumbItems = useCallback(() => {
        dispatch(resetBreadcrumbs());
    }, [dispatch]);

    const setBreadcrumbItems = useCallback(
        (items: BreadcrumbItem[]) => {
            dispatch(setBreadcrumbs(items));
        },
        [dispatch],
    );

    const navigateWithBreadcrumb = useCallback(
        (path: string, label: string) => {
            navigate(path);
            addBreadcrumbItem({ path, label });
        },
        [navigate, addBreadcrumbItem],
    );

    const goBack = useCallback(() => {
        if (breadcrumbs.length > 1) {
            const previousPath = breadcrumbs[breadcrumbs.length - 2].path;
            removeLastBreadcrumbItem();
            navigate(previousPath);
        }
    }, [breadcrumbs, navigate, removeLastBreadcrumbItem]);

    const getCurrentBreadcrumb = useCallback(
        () => breadcrumbs[breadcrumbs.length - 1],
        [breadcrumbs],
    );

    const isCurrentPage = useCallback(
        (path: string) => location.pathname === path,
        [location.pathname],
    );

    return {
        breadcrumbs,
        addBreadcrumbItem,
        removeLastBreadcrumbItem,
        resetBreadcrumbItems,
        setBreadcrumbItems,
        navigateWithBreadcrumb,
        goBack,
        getCurrentBreadcrumb,
        isCurrentPage,
    };
};

interface UseRecipesReturn {
    recipes: Recipe[];
    addRecipeItem: (recipe: Recipe) => void;
    getNewRecipes: () => Recipe[];
    getRecipesByCategory: (id: string) => Recipe[];
    getRecipesBySubCategory: (categoryId: string, subCategoryId: string) => Recipe[];
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

    return {
        recipes,
        addRecipeItem,
        getNewRecipes,
        getRecipesByCategory,
        getRecipesBySubCategory,
    };
};
