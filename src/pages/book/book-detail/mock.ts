import {IBookCardDetail} from '../../../types/types';
import {IBookDetail} from "../../../models/IBookDetail";


export const getDetailColumns = (book: IBookDetail) => {

    const left = [
        {
            name: 'Издательство',
            value: book.publish,
        },
        {
            name: 'Год издания',
            value: book.issueYear,
        },
        {
            name: 'Страниц',
            value: book.pages,
        },
        {
            name: 'Переплёт',
            value: book.cover,
        },
        {
            name: 'Формат',
            value: book.format,
        },
    ];
     const right = [
        {
            name: 'Жанр',
            value: book.categories,
        },

        {
            name: 'Вес',
            value: book.weight,
        },

        {
            name: 'ISBN',
            value: book.ISBN,
        },

        {
            name: 'Изготовитель',
            value: book.producer,
        },

    ];

     return [left, right];
}
