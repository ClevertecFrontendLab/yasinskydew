import { setCategories, setSelectedCategory, setSelectedSubCategory } from '../menu-slice';
import { MenuCategory, SubCategory } from '../menu-slice';
import { useAppDispatch, useAppSelector } from './useApp';

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
