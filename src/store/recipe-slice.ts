import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { recipes } from './MockData/RecipesData';

interface RecipeIngridient {
    title: string;
    count: string;
    measureUnit: string;
}

interface RecipeStep {
    stepNumber: number;
    description: string;
    image: string | null;
}

interface NutritionValue {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string | undefined;
    likes: number;
    bookmarks: number;
    date: string;
    time: string;
    ingredients: RecipeIngridient[];
    steps: RecipeStep[];
    meat?: string | undefined;
    side?: string | undefined;
    portions?: number | undefined;
    nutritionValue: NutritionValue;
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
