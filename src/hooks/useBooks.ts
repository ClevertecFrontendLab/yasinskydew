import { useMemo } from 'react';
import { IBook } from '../models/IBook';

export const enum SortEnum {
    rating = 'rating',
    title = 'title',
}

function compareFunc(direction: boolean, sort: SortEnum) {
    return (a: IBook, b: IBook) => {
        if (a[sort] === b[sort]) {
            return 0;
        }
        if (a[sort] === null) {
            return direction ? -1 : 1;
        }
        if (b[sort] === null) {
            return direction ? 1 : -1;
        }
        if (typeof a[sort] === 'string' && typeof b[sort] === 'string') {
            if (direction) {
                return String(b[sort]).localeCompare(String(a[sort]));
            }
            return String(a[sort]).localeCompare(String(b[sort]));
        }
        if (direction) {
            return Number(a[sort]) < Number(b[sort]) ? -1 : 1;
        }
        return Number(a[sort]) < Number(b[sort]) ? 1 : -1;
    };
}

export const useSortedBooks = (books: IBook[], sort: SortEnum, sortDirection: boolean) => {
    return useMemo(() => {
        if (sort) {
            return [...books].sort(compareFunc(sortDirection, sort));
        }
        return books;
    }, [sort, sortDirection, books]);
};

export const useCategoryFilterBooks = (books: IBook[], category: string) => {
    return useMemo(() => {
        if (category) {
            return [...books].filter((book) => book.categories.includes(category));
        }
        return books;
    }, [category, books]);
};

export const useBooks = (books: IBook[], sort: SortEnum, query: string, sortDirection: boolean, category: string) => {
    const sortedBooks = useSortedBooks(books, sort, sortDirection);
    const filteredByCategoryBooks = useCategoryFilterBooks(sortedBooks, category);
    return useMemo(() => {
        return filteredByCategoryBooks.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, filteredByCategoryBooks]);
};
