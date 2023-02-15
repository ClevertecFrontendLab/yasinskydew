import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoryAPI } from '../services/category-service';
import { bookAPI } from '../services/book-service';

const rootReducer = combineReducers({
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [bookAPI.reducerPath]: bookAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryAPI.middleware, bookAPI.middleware),
    });
};
