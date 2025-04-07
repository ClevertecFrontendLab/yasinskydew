import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { menuCategories } from './MockData/MenuData';

export interface MenuCategory {
    id: number;
    name: string;
    icon: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    id: number;
    name: string;
}

export interface MenuState {
    categories: MenuCategory[];
    selectedCategory: MenuCategory | null;
    selectedSubCategory: SubCategory | null;
}

const initialState: MenuState = {
    categories: menuCategories,
    selectedCategory: null,
    selectedSubCategory: null,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<MenuCategory[]>) => {
            state.categories = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<MenuCategory | null>) => {
            state.selectedCategory = action.payload;
            state.selectedSubCategory = null;
        },
        setSelectedSubCategory: (state, action: PayloadAction<SubCategory | null>) => {
            state.selectedSubCategory = action.payload;
        },
    },
});

export const { setCategories, setSelectedCategory, setSelectedSubCategory } = menuSlice.actions;
export default menuSlice.reducer;
