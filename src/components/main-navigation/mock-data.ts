export const getPagesMock = () => [
    {
        path: '/terms',
        title: 'Правила пользования',
        hide: false,
        dataTestId: 'navigation-terms',
        dataTestBurgerId: 'burger-terms',
    },
    {
        path: '/offer',
        title: 'Договор оферты',
        hide: false,
        dataTestId: 'navigation-contract',
        dataTestBurgerId: 'burger-contract',
    },
    {
        divider: true,
        hide: true,
    },
    {
        path: '/account',
        title: 'Профиль',
        hide: true,
    },
    {
        title: 'Выход',
        hide: true,
    },
];
