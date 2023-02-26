import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICategory } from '../models/ICategory';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IBook } from '../models/IBook';

export interface IBooksAndCategories {
    categories: ICategory[];
    books: IBook[];
}
export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.cleverland.by/api' }),
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fetchAllCategories: build.query<ICategory[], void>({
            query: () => ({
                url: `/categories`,
            }),
            providesTags: (result) => ['Category'],
        }),
        fetchAllCategoriesWithCount: build.query<IBooksAndCategories, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const booksQuery = await fetchWithBQ('/books');
                if (booksQuery.error) {
                    return { error: booksQuery.error as FetchBaseQueryError };
                }
                const books = booksQuery.data as IBook[];
                const categoriesQuery = await fetchWithBQ('/categories');
                if (categoriesQuery.error) {
                    return { error: categoriesQuery.error as FetchBaseQueryError };
                }
                const categories = categoriesQuery.data as ICategory[];
                const categoryWithCount = categories.map((i) => {
                    i.count = 0;
                    return i;
                });
                books.forEach((i) => {
                    const { categories } = i;
                    categoryWithCount.forEach((category) => {
                        if (categories.includes(category.name)) {
                            category.count += 1;
                        }
                    });
                });
                return {
                    data: {
                        categories: categoryWithCount,
                        books: books,
                    },
                    error: categoriesQuery.error,
                };
            },
        }),
    }),
});
