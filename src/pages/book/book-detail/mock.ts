import {IBookCardDetail} from '../../../types/types';


export const getDetailColumns = (details: IBookCardDetail) => {

    const left = [
        {
            name: 'Издательство',
            value: details.publishingHouse,
        },
        {
            name: 'Год издания',
            value: details.publishingYear,
        },
        {
            name: 'Страниц',
            value: details.letterCount,
        },
        {
            name: 'Переплёт',
            value: details.binding,
        },
        {
            name: 'Формат',
            value: details.format,
        },
    ];
     const right = [
        {
            name: 'Жанр',
            value: details.genre,
        },

        {
            name: 'Вес',
            value: details.weight,
        },

        {
            name: 'ISBN',
            value: details.ISBN,
        },

        {
            name: 'Изготовитель',
            value: details.producer,
        },

    ];

     return [left, right];
}
