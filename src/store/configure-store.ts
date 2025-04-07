import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import appReducer, { appSlice } from './app-slice';
import breadcrumbReducer, { breadcrumbSlice } from './breadcrumb-slice';
import menuReducer, { menuSlice } from './menu-slice';
import recipeReducer, { recipeSlice } from './recipe-slice';
const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [menuSlice.name]: menuReducer,
    [breadcrumbSlice.name]: breadcrumbReducer,
    [recipeSlice.name]: recipeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
