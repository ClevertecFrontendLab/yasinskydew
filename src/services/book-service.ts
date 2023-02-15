import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IBook } from '../models/IBook';
import { IBookDetail } from '../models/IBookDetail';

export const bookAPI = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.cleverland.by/api' }),
    tagTypes: ['Book'],
    endpoints: (build) => ({
        fetchAllBooks: build.query<IBook[], void>({
            query: () => ({
                url: `/books`,
            }),
            providesTags: (result) => ['Book'],
        }),
        fetchBookById: build.query<IBookDetail, number>({
            query: (id: number) => ({
                url: `/books/${id}`,
            }),
            providesTags: (result) => ['Book'],
        }),
    }),
});
