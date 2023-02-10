export const bookSelectMock = () => ({
        options: [
            { value: 'order', text: 'По рейтингу' },
            { value: 'title', text: 'По названию' },
            { value: 'author', text: 'По автору' },
        ],
        defaultValue: {
            text: 'По рейтингу',
            value: 'order',
        }
    })
