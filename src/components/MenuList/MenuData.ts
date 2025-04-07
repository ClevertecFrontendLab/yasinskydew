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
}

const menuCategories: MenuCategory[] = [
    { id: 1, name: 'Салаты', icon: saladIcon },
    { id: 2, name: 'Закуски', icon: snackIcon },
    { id: 3, name: 'Первые блюда', icon: firstDishIcon },
    { id: 4, name: 'Вторые блюда', icon: secondDishIcon },
    { id: 5, name: 'Десерты, выпечка', icon: dessertIcon },
    { id: 6, name: 'Блюда на гриле', icon: grillIcon },
    { id: 7, name: 'Веганская кухня', icon: veganIcon },
    { id: 8, name: 'Детские блюда', icon: childrenIcon },
    { id: 9, name: 'Лечебное питание', icon: healthIcon },
    { id: 10, name: 'Национальные', icon: nationalIcon },
    { id: 11, name: 'Соусы', icon: sauceIcon },
    { id: 12, name: 'Напитки', icon: drinkIcon },
    { id: 13, name: 'Заготовки', icon: preparationIcon },
];

export { menuCategories };
