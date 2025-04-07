import childrenIcon from '../../assets/MenuIcons/children.png';
import dessertIcon from '../../assets/MenuIcons/desserts.png';
import drinkIcon from '../../assets/MenuIcons/drinks.png';
import firstDishIcon from '../../assets/MenuIcons/first-dish.png';
import grillIcon from '../../assets/MenuIcons/grill.png';
import healthIcon from '../../assets/MenuIcons/health.png';
import nationalIcon from '../../assets/MenuIcons/national.png';
import preparationIcon from '../../assets/MenuIcons/preparation.png';
import saladIcon from '../../assets/MenuIcons/salads.png';
import sauceIcon from '../../assets/MenuIcons/sauces.png';
import secondDishIcon from '../../assets/MenuIcons/second-dish.png';
import snackIcon from '../../assets/MenuIcons/snacks.png';
import veganIcon from '../../assets/MenuIcons/vegan.png';

export interface MenuCategory {
    id: number;
    name: string;
    icon: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    id: number;
    name: string;
}

const menuCategories: MenuCategory[] = [
    {
        id: 1,
        name: 'Салаты',
        icon: saladIcon,
        subCategories: [
            { id: 1, name: 'Мясные салаты' },
            { id: 2, name: 'Рыбные салаты' },
            { id: 3, name: 'Овощные салаты' },
            { id: 4, name: 'Теплые салаты' },
        ],
    },
    {
        id: 2,
        name: 'Закуски',
        icon: snackIcon,
        subCategories: [
            { id: 1, name: 'Мясные закуски' },
            { id: 2, name: 'Рыбные закуски' },
            { id: 3, name: 'Овощные закуски' },
            { id: 4, name: 'Теплые закуски' },
            { id: 5, name: 'Бутерброды' },
            { id: 6, name: 'Фастфуд' },
        ],
    },
    {
        id: 3,
        name: 'Первые блюда',
        icon: firstDishIcon,
        subCategories: [
            { id: 1, name: 'Мясные cупы' },
            { id: 2, name: 'Овощные супы' },
            { id: 3, name: 'Бульоны' },
            { id: 4, name: 'Холодные супы' },
            { id: 5, name: 'Диетические супы' },
        ],
    },
    {
        id: 4,
        name: 'Вторые блюда',
        icon: secondDishIcon,
        subCategories: [
            { id: 1, name: 'Мясные' },
            { id: 2, name: 'Рыбные' },
            { id: 3, name: 'Овощные' },
            { id: 4, name: 'Из птицы' },
            { id: 5, name: 'Из грибов' },
            { id: 6, name: 'Из субпродуктов' },
            { id: 7, name: 'На пару' },
            { id: 8, name: 'Пельмени, вареники' },
            { id: 9, name: 'Мучные гарниры' },
            { id: 10, name: 'Овощные гарниры' },
            { id: 11, name: 'Пицца' },
            { id: 12, name: 'Суши' },
        ],
    },
    {
        id: 5,
        name: 'Десерты, выпечка',
        icon: dessertIcon,
        subCategories: [
            { id: 1, name: 'Блины и оладьи' },
            { id: 2, name: 'Пироги и пончики' },
            { id: 3, name: 'Торты' },
            { id: 4, name: 'Рулеты' },
            { id: 5, name: 'Кексы и маффины' },
            { id: 6, name: 'Сырники и ватрушки' },
            { id: 7, name: 'Из слоеного теста' },
            { id: 8, name: 'Из заварного теста' },
            { id: 9, name: 'Из дрожжевого теста' },
            { id: 10, name: 'Булочки и сдоба' },
            { id: 11, name: 'Хлеб' },
            { id: 12, name: 'Тесто на пиццу' },
            { id: 13, name: 'Кремы' },
        ],
    },
    {
        id: 6,
        name: 'Блюда на гриле',
        icon: grillIcon,
        subCategories: [
            { id: 1, name: 'Говядина' },
            { id: 2, name: 'Свинина' },
            { id: 3, name: 'Птица' },
            { id: 4, name: 'Рыба' },
            { id: 5, name: 'Грибы' },
            { id: 6, name: 'Овощи' },
        ],
    },
    {
        id: 7,
        name: 'Веганская кухня',
        icon: veganIcon,
        subCategories: [
            { id: 1, name: 'Закуски' },
            { id: 2, name: 'Первые блюда' },
            { id: 3, name: 'Вторые блюда' },
            { id: 4, name: 'Гарниры' },
            { id: 5, name: 'Десерты' },
            { id: 6, name: 'Выпечка' },
            { id: 7, name: 'Сыроедческие блюда' },
            { id: 8, name: 'Напитки' },
        ],
    },
    {
        id: 8,
        name: 'Детские блюда',
        icon: childrenIcon,
        subCategories: [
            { id: 1, name: 'Первые блюда' },
            { id: 2, name: 'Вторые блюда' },
            { id: 3, name: 'Гарниры' },
            { id: 4, name: 'Выпечка' },
            { id: 5, name: 'Без глютена' },
            { id: 6, name: 'Без сахара' },
            { id: 7, name: 'Без аллергенов' },
            { id: 8, name: 'Блюда для прикорма' },
        ],
    },
    {
        id: 9,
        name: 'Лечебное питание',
        icon: healthIcon,
        subCategories: [
            { id: 1, name: 'Детская диета' },
            { id: 2, name: 'Диета №1' },
            { id: 3, name: 'Диета №2' },
            { id: 4, name: 'Диета №3' },
            { id: 5, name: 'Диета №5' },
            { id: 6, name: 'Диета №6' },
            { id: 7, name: 'Диета №7' },
            { id: 8, name: 'Диета №8' },
            { id: 9, name: 'Диета №9' },
            { id: 10, name: 'Диета №10' },
            { id: 11, name: 'Диета №11' },
            { id: 12, name: 'Диета №12' },
            { id: 13, name: 'Диета №13' },
            { id: 14, name: 'Диета №14' },
            { id: 15, name: 'Без глютена' },
            { id: 16, name: 'Без аллергенов' },
        ],
    },
    {
        id: 10,
        name: 'Национальные',
        icon: nationalIcon,
        subCategories: [
            { id: 1, name: 'Американская кухня' },
            { id: 2, name: 'Армянская кухня' },
            { id: 3, name: 'Греческая кухня' },
            { id: 4, name: 'Грузинская кухня' },
            { id: 5, name: 'Итальянская кухня' },
            { id: 6, name: 'Испанская кухня' },
            { id: 7, name: 'Китайская кухня' },
            { id: 8, name: 'Мексиканская кухня' },
            { id: 9, name: 'Паназиатская кухня' },
            { id: 10, name: 'Русская кухня' },
            { id: 11, name: 'Турецкая кухня' },
            { id: 12, name: 'Шведская кухня' },
            { id: 13, name: 'Японская кухня' },
            { id: 14, name: 'Другая кухня' },
        ],
    },
    {
        id: 11,
        name: 'Соусы',
        icon: sauceIcon,
        subCategories: [
            { id: 1, name: 'Соусы мясные' },
            { id: 2, name: 'Соусы сырные' },
            { id: 3, name: 'Маринады' },
        ],
    },
    {
        id: 12,
        name: 'Напитки',
        icon: drinkIcon,
        subCategories: [
            { id: 1, name: 'Соки и фреши' },
            { id: 2, name: 'Смузи' },
            { id: 3, name: 'Компоты' },
            { id: 4, name: 'Кисели' },
            { id: 5, name: 'Кофе' },
            { id: 6, name: 'Лечебный чай' },
            { id: 7, name: 'Квас' },
            { id: 8, name: 'Коктейли' },
            { id: 9, name: 'Алкогольные' },
        ],
    },
    {
        id: 13,
        name: 'Заготовки',
        icon: preparationIcon,
        subCategories: [
            { id: 1, name: 'Мясные заготовки' },
            { id: 2, name: 'Рыбные заготовки' },
            { id: 3, name: 'Из огурцов' },
            { id: 4, name: 'Из томатов' },
            { id: 5, name: 'Из грибов' },
            { id: 6, name: 'Овощные заготовки' },
            { id: 7, name: 'Салаты, икра' },
            { id: 8, name: 'Из фруктов и ягод' },
        ],
    },
];

export { menuCategories };
