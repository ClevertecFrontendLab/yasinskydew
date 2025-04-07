import lasagnaIcon from '../../assets/Recipes/lasagna.jpg';
import meatballsIcon from '../../assets/Recipes/meatballs.jpg';
import noodlesIcon from '../../assets/Recipes/noodles.jpg';
import potatoesIcon from '../../assets/Recipes/potato.jpg';
import rollsIcon from '../../assets/Recipes/potato-rolls.jpg';
import spaghettiIcon from '../../assets/Recipes/spaghetti.jpg';
import tomYamIcon from '../../assets/Recipes/tom-yum.jpg';
import { menuCategories, MenuCategory } from '../MenuList/MenuData';

export interface Recipe {
    id: number;
    name: string;
    description: string;
    image: string;
    menuItem: MenuCategory;
    likes: number;
    favorites: number;
    createdAt: Date;
}

const recipes: Recipe[] = [
    {
        id: 1,
        name: 'Лапша с курицей и шафраном',
        image: noodlesIcon,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        menuItem: menuCategories.find((item) => item.id === 4) as MenuCategory,
        favorites: 258,
        likes: 342,
        createdAt: new Date('2025-01-01'),
    },
    {
        id: 2,
        name: 'Том-ям с капустой кимчи',
        image: tomYamIcon,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        menuItem: menuCategories.find((item) => item.id === 10) as MenuCategory,
        favorites: 124,
        likes: 324,
        createdAt: new Date('2025-01-01'),
    },
    {
        id: 3,
        name: 'Пряная ветчина по итальянски',
        image: noodlesIcon,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        menuItem: menuCategories.find((item) => item.id === 4) as MenuCategory,
        favorites: 159,
        likes: 257,
        createdAt: new Date('2025-01-01'),
    },
    {
        id: 4,
        name: 'Кнели со спагетти',
        image: spaghettiIcon,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        menuItem: menuCategories.find((item) => item.id === 4) as MenuCategory,
        favorites: 124,
        likes: 231,
        createdAt: new Date('2025-01-01'),
    },
    {
        id: 5,
        name: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        image: potatoesIcon,
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        menuItem: menuCategories.find((item) => item.id === 4) as MenuCategory,
        favorites: 120,
        likes: 180,
        createdAt: new Date('2021-01-01'),
    },
    {
        id: 6,
        name: 'Картофельные рулетики с грибами',
        image: rollsIcon,
        description:
            'ЛРекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        menuItem: menuCategories.find((item) => item.id === 8) as MenuCategory,
        favorites: 85,
        likes: 180,
        createdAt: new Date('2021-01-01'),
    },
    {
        id: 7,
        name: 'Овощная лазанья из лаваша',
        image: lasagnaIcon,
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        menuItem: menuCategories.find((item) => item.id === 6) as MenuCategory,
        favorites: 85,
        likes: 152,
        createdAt: new Date('2021-01-01'),
    },
    {
        id: 8,
        name: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        image: meatballsIcon,
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        menuItem: menuCategories.find((item) => item.id === 4) as MenuCategory,
        favorites: 85,
        likes: 150,
        createdAt: new Date('2021-01-01'),
    },
];

const getNewRecipes = () => recipes.filter((recipe) => recipe.createdAt > new Date('2024-01-01'));

export { getNewRecipes, recipes };
