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
import { MenuCategory } from '../menu-slice';

const menuCategories: MenuCategory[] = [
    {
        id: 'salads',
        name: 'Салаты',
        icon: saladIcon,
        subCategories: [
            { id: 'meat-salads', name: 'Мясные салаты' },
            { id: 'fish-salads', name: 'Рыбные салаты' },
            { id: 'vegetable-salads', name: 'Овощные салаты' },
            { id: 'warm-salads', name: 'Теплые салаты' },
        ],
    },
    {
        id: 'snacks',
        name: 'Закуски',
        icon: snackIcon,
        subCategories: [
            { id: 'meat-snacks', name: 'Мясные закуски' },
            { id: 'fish-snacks', name: 'Рыбные закуски' },
            { id: 'vegetable-snacks', name: 'Овощные закуски' },
            { id: 'warm-snacks', name: 'Теплые закуски' },
            { id: 'toast', name: 'Бутерброды' },
            { id: 'fast-food', name: 'Фастфуд' },
        ],
    },
    {
        id: 'first-dish',
        name: 'Первые блюда',
        icon: firstDishIcon,
        subCategories: [
            { id: 'meat-soup', name: 'Мясные cупы' },
            { id: 'vegetable-soup', name: 'Овощные супы' },
            { id: 'broth', name: 'Бульоны' },
            { id: 'cold-soup', name: 'Холодные супы' },
            { id: 'dietary-soup', name: 'Диетические супы' },
        ],
    },
    {
        id: 'second-dish',
        name: 'Вторые блюда',
        icon: secondDishIcon,
        subCategories: [
            { id: 'meat-dish', name: 'Мясные' },
            { id: 'fish-dish', name: 'Рыбные' },
            { id: 'vegetable-dish', name: 'Овощные' },
            { id: 'poultry-dish', name: 'Из птицы' },
            { id: 'mushroom-dish', name: 'Из грибов' },
            { id: 'subproduct-dish', name: 'Из субпродуктов' },
            { id: 'par-dish', name: 'На пару' },
            { id: 'pelmeni-vareniki-dish', name: 'Пельмени, вареники' },
            { id: 'much-dish', name: 'Мучные гарниры' },
            { id: 'vegetable-snacks', name: 'Овощные гарниры' },
            { id: 'pizza-dish', name: 'Пицца' },
            { id: 'sushi-dish', name: 'Суши' },
        ],
    },
    {
        id: 'dessert-dish',
        name: 'Десерты, выпечка',
        description:
            'Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.',
        icon: dessertIcon,
        subCategories: [
            { id: 'bliny-oladi-dish', name: 'Блины и оладьи' },
            { id: 'pirogi-ponchiki-dish', name: 'Пироги и пончики' },
            { id: 'torty-dish', name: 'Торты' },
            { id: 'ruleti-dish', name: 'Рулеты' },
            { id: 'keksi-maffini-dish', name: 'Кексы и маффины' },
            { id: 'syrniki-vatrushki-dish', name: 'Сырники и ватрушки' },
            { id: 'sloeno-teplo-dish', name: 'Из слоеного теста' },
            { id: 'zavarno-teplo-dish', name: 'Из заварного теста' },
            { id: 'drozhevo-teplo-dish', name: 'Из дрожжевого теста' },
            { id: 'bulochi-sdocha-dish', name: 'Булочки и сдоба' },
            { id: 'hleb-dish', name: 'Хлеб' },
            { id: 'teplo-pizza-dish', name: 'Тесто на пиццу' },
            { id: 'kremi-dish', name: 'Кремы' },
        ],
    },
    {
        id: 'grill-dish',
        name: 'Блюда на гриле',
        icon: grillIcon,
        subCategories: [
            { id: 'meat-grill-dish', name: 'Говядина' },
            { id: 'pork-grill-dish', name: 'Свинина' },
            { id: 'chicken-grill-dish', name: 'Птица' },
            { id: 'fish-grill-dish', name: 'Рыба' },
            { id: 'vegetables-grill-dish', name: 'Овощи' },
        ],
    },
    {
        id: 'vegan',
        name: 'Веганская кухня',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        icon: veganIcon,
        subCategories: [
            { id: 'snacks', name: 'Закуски' },
            { id: 'first-dish', name: 'Первые блюда' },
            { id: 'second-dish', name: 'Вторые блюда' },
            { id: 'side-dishes', name: 'Гарниры' },
            { id: 'dessert-dish', name: 'Десерты' },
            { id: 'bakery-dish', name: 'Выпечка' },
            { id: 'raw-food-dish', name: 'Сыроедческие блюда' },
            { id: 'drink-dish', name: 'Напитки' },
        ],
    },
    {
        id: 'children-dish',
        name: 'Детские блюда',
        icon: childrenIcon,
        subCategories: [
            { id: 'first-dish', name: 'Первые блюда' },
            { id: 'second-dish', name: 'Вторые блюда' },
            { id: 'side-dishes', name: 'Гарниры' },
            { id: 'bakery-dish', name: 'Выпечка' },
            { id: 'gluten-free-dish', name: 'Без глютена' },
            { id: 'sugar-free-dish', name: 'Без сахара' },
            { id: 'allergen-free-dish', name: 'Без аллергенов' },
            { id: 'baby-food-dish', name: 'Блюда для прикорма' },
        ],
    },
    {
        id: 'health-dish',
        name: 'Лечебное питание',
        icon: healthIcon,
        subCategories: [
            { id: 'child-diet', name: 'Детская диета' },
            { id: 'diet-1', name: 'Диета №1' },
            { id: 'diet-2', name: 'Диета №2' },
            { id: 'diet-3', name: 'Диета №3' },
            { id: 'diet-5', name: 'Диета №5' },
            { id: 'diet-6', name: 'Диета №6' },
            { id: 'diet-7', name: 'Диета №7' },
            { id: 'diet-8', name: 'Диета №8' },
            { id: 'diet-9', name: 'Диета №9' },
            { id: 'diet-10', name: 'Диета №10' },
            { id: 'diet-11', name: 'Диета №11' },
            { id: 'diet-12', name: 'Диета №12' },
            { id: 'diet-13', name: 'Диета №13' },
            { id: 'diet-14', name: 'Диета №14' },
            { id: 'gluten-free-dish', name: 'Без глютена' },
            { id: 'allergen-free-dish', name: 'Без аллергенов' },
        ],
    },
    {
        id: 'national-dish',
        name: 'Национальные',
        icon: nationalIcon,
        subCategories: [
            { id: 'american-dish', name: 'Американская кухня' },
            { id: 'armenian-dish', name: 'Армянская кухня' },
            { id: 'greek-dish', name: 'Греческая кухня' },
            { id: 'georgian-dish', name: 'Грузинская кухня' },
            { id: 'italian-dish', name: 'Итальянская кухня' },
            { id: 'spanish-dish', name: 'Испанская кухня' },
            { id: 'chinese-dish', name: 'Китайская кухня' },
            { id: 'mexican-dish', name: 'Мексиканская кухня' },
            { id: 'panasian-dish', name: 'Паназиатская кухня' },
            { id: 'russian-dish', name: 'Русская кухня' },
            { id: 'turkish-dish', name: 'Турецкая кухня' },
            { id: 'swedish-dish', name: 'Шведская кухня' },
            { id: 'japanese-dish', name: 'Японская кухня' },
            { id: 'other-dish', name: 'Другая кухня' },
        ],
    },
    {
        id: 'sauces',
        name: 'Соусы',
        icon: sauceIcon,
        subCategories: [
            { id: 'meat-sauce', name: 'Соусы мясные' },
            { id: 'cheese-sauce', name: 'Соусы сырные' },
            { id: 'marinade', name: 'Маринады' },
        ],
    },
    {
        id: 'drinks',
        name: 'Напитки',
        icon: drinkIcon,
        subCategories: [
            { id: 'juice', name: 'Соки и фреши' },
            { id: 'smoothie', name: 'Смузи' },
            { id: 'compote', name: 'Компоты' },
            { id: 'kefir', name: 'Кисели' },
            { id: 'coffee', name: 'Кофе' },
            { id: 'tea', name: 'Лечебный чай' },
            { id: 'kvas', name: 'Квас' },
            { id: 'cocktail', name: 'Коктейли' },
            { id: 'alcoholic-drink', name: 'Алкогольные' },
        ],
    },
    {
        id: 'preparation',
        name: 'Заготовки',
        icon: preparationIcon,
        subCategories: [
            { id: 'meat-preparation', name: 'Мясные заготовки' },
            { id: 'fish-preparation', name: 'Рыбные заготовки' },
            { id: 'cucumber-preparation', name: 'Из огурцов' },
            { id: 'tomato-preparation', name: 'Из томатов' },
            { id: 'mushroom-preparation', name: 'Из грибов' },
            { id: 'vegetable-preparation', name: 'Овощные заготовки' },
            { id: 'salad-preparation', name: 'Салаты, икра' },
            { id: 'fruit-preparation', name: 'Из фруктов и ягод' },
        ],
    },
];

export { menuCategories };
