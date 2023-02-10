export interface IBookItem {
  id: number;
  title: string;
  count: number;
  href: string;
}

export const getMock = (): IBookItem[] => [
  {
    id: 1,
    title: 'Бизнес-книги',
    count: 14,
    href: '#',
  },
  {
    id: 2,
    title: 'Детективы',
    count: 8,
    href: '#',
  },
  {
    id: 3,
    title: 'Детские книги',
    count: 14,
    href: '#',
  },
  {
    id: 4,
    title: 'Зарубежная литература',
    count: 2,
    href: '#',
  },
  {
    id: 5,
    title: 'История',
    count: 5,
    href: '#',
  },
  {
    id: 6,
    title: 'Классическая литература',
    count: 12,
    href: '#',
  },
  {
    id: 7,
    title: 'Книги по психологии',
    count: 11,
    href: '#',
  },
  {
    id: 8,
    title: 'Компьютерная литература',
    count: 54,
    href: '#',
  },
  {
    id: 9,
    title: 'Культура и искусство',
    count: 5,
    href: '#',
  },
  {
    id: 10,
    title: 'Публицистическая литература',
    count: 0,
    href: '#',
  },
  {
    id: 11,
    title: 'Справочники',
    count: 10,
    href: '#',
  },
  {
    id: 12,
    title: 'Фантастика',
    count: 12,
    href: '#',
  },
  {
    id: 13,
    title: 'Юмористическая литература',
    count: 8,
    href: '#',
  },
];

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
