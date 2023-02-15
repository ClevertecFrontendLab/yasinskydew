import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICategory } from '../models/ICategory';

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
    }),
});
