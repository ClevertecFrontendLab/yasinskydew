import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BreadcrumbItem {
    label: string;
    path: string;
}

export interface BreadcrumbState {
    items: BreadcrumbItem[];
}

const initialState: BreadcrumbState = {
    items: [{ label: 'Главная', path: '/' }],
};

export const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState,
    reducers: {
        setBreadcrumbs: (state, action: PayloadAction<BreadcrumbItem[]>) => {
            state.items = action.payload;
        },
        addBreadcrumb: (state, action: PayloadAction<BreadcrumbItem>) => {
            state.items.push(action.payload);
        },
        removeLastBreadcrumb: (state) => {
            state.items.pop();
        },
        resetBreadcrumbs: (state) => {
            state.items = initialState.items;
        },
    },
});

export const { setBreadcrumbs, addBreadcrumb, removeLastBreadcrumb, resetBreadcrumbs } =
    breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
