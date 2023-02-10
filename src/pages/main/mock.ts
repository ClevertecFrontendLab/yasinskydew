import {IBookCard} from '../../types/types';

export const mockBooks = (id?: number): IBookCard[] => {
    const cards = [
        {
            id: 1,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 0,
            hasGrade: false,
            imageUrls: [],
        },
        {
            id: 2,
            title: 'Грокаем алгоритмы. Иллюстрированное',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: ['erferfre'],
        },
        {
            id: 3,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: [
                'erferfre',
                'erferfre',
                'erferfre',
            ],
            ordered: 'занята до 03.05'
        },
        {
            id: 4,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: ['erferfre'],
        },
        {
            id: 5,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: ['erferfre'],
            ordered: 'Забронирована',
        },
        {
            id: 6,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: [],
        },
        {
            id: 7,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: ['erferfre'],
        },
        {
            id: 8,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: ['erferfre'],
        },
        {
            id: 9,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: ['erferfre'],
        },
        {
            id: 10,
            title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
            author: 'Адитья Бхаргава',
            year: 2019,
            grade: 4,
            hasGrade: true,
            imageUrls: [],
        },
    ];

    if (id) return cards.filter(item => item.id === id);

    return cards;
}
