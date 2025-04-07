import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MenuCategory } from './menu-slice';
import { recipes } from './MockData/RecipesData';

export interface Recipe {
    id: number;
    name: string;
    description: string;
    image: string;
    menuItem: MenuCategory;
    likes: number;
    favorites: number;
    createdAt: Date;
}

export interface RecipeState {
    recipes: Recipe[];
}

const initialState: RecipeState = {
    recipes: recipes,
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipes.push(action.payload);
        },
    },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
