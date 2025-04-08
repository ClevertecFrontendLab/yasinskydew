import lasagnaIcon from '../../assets/Recipes/lasagna.jpg';
import meatballsIcon from '../../assets/Recipes/meatballs.jpg';
import noodlesIcon from '../../assets/Recipes/noodles.jpg';
import potatoesIcon from '../../assets/Recipes/potato.jpg';
import rollsIcon from '../../assets/Recipes/potato-rolls.jpg';
import spaghettiIcon from '../../assets/Recipes/spaghetti.jpg';
import tomYamIcon from '../../assets/Recipes/tom-yum.jpg';
import { MenuCategory } from '../menu-slice';
import { Recipe } from '../recipe-slice';
import { menuCategories } from './MenuData';

const recipes: Recipe[] = [
    {
        id: 1,
        name: 'Лапша с курицей и шафраном',
        image: noodlesIcon,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        menuCategory: menuCategories.find((item) => item.id === 4) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 10) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 4) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 4) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 4) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 8) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 6) as MenuCategory,
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
        menuCategory: menuCategories.find((item) => item.id === 4) as MenuCategory,
        favorites: 85,
        likes: 150,
        createdAt: new Date('2021-01-01'),
    },
    {
        id: 9,
        name: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 152,
        favorites: 85,
        image: potatoesIcon,
        createdAt: new Date(),
    },
    {
        id: 10,
        name: 'Капустные котлеты',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 2,
        image: lasagnaIcon,
        createdAt: new Date(),
    },
    {
        name: 'Стейк для вегетарианцев',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 11,
    },
    {
        name: 'Котлеты из гречки и фасоли',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 12,
    },
    {
        name: 'Сырный суп с лапшой и брокколи',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 13,
    },
    {
        name: 'Сырный суп с лапшой и брокколи',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 14,
    },
    {
        name: 'Сырный суп с лапшой и брокколи',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 15,
    },
    {
        name: 'Сырный суп с лапшой и брокколи',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 7) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 16,
    },
    {
        name: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 5) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 17,
    },
    {
        name: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 5) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 18,
    },
    {
        name: 'Домашние сырные палочки',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 5) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 19,
    },
    {
        name: 'Панкейки',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 5) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 20,
    },
    {
        name: 'Воздушное банановое печенье на сковороде',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        image: lasagnaIcon,
        menuCategory: menuCategories.find((item) => item.id === 5) as MenuCategory,
        likes: 1,
        favorites: 1,
        createdAt: new Date(),
        id: 21,
    },
];
export { recipes };
